/* =========================================================
   NỀN TẢNG CHUNG: đăng nhập, lưu tiến độ, hỏi đáp
   Không cần sửa file này. Cấu hình ở platform/config.js
   ========================================================= */
(function () {
  const CFG = window.SITE_CONFIG || {};
  const enabled = !!(CFG.supabaseUrl && CFG.supabaseAnonKey && window.supabase && window.supabase.createClient);
  const sb = enabled ? window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey) : null;
  const admins = (CFG.adminEmails || []).map(e => String(e).toLowerCase());
  const listeners = [];
  let user = null;

  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));

  /* ---------- CSS dùng chung ---------- */
  const css = `
  .pf-account{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
  .pf-chip{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line,#d9e0e3);border-radius:99px;padding:5px 6px 5px 12px;font-size:.85rem;background:var(--surface,#fff);color:var(--ink,#17232f)}
  .pf-avatar{width:24px;height:24px;border-radius:50%;display:inline-grid;place-items:center;background:var(--accent,#0e6e6a);color:var(--surface,#fff);font-weight:700;font-size:.75rem}
  .pf-btn{font:inherit;border:1px solid var(--accent,#0e6e6a);background:var(--accent,#0e6e6a);color:var(--surface,#fff);padding:7px 14px;border-radius:9px;cursor:pointer;font-weight:600;font-size:.88rem}
  .pf-btn.ghost{background:transparent;color:var(--accent,#0e6e6a)}
  .pf-btn.small{padding:4px 10px;font-size:.8rem}
  .pf-btn:disabled{opacity:.55;cursor:not-allowed}
  .pf-link{background:none;border:0;color:var(--accent,#0e6e6a);cursor:pointer;font:inherit;font-size:.82rem;padding:0;font-weight:600}
  .pf-link.danger{color:var(--bad,#b3261e)}
  .pf-modal{position:fixed;inset:0;background:rgba(10,20,25,.45);display:grid;place-items:center;z-index:50;padding:16px}
  .pf-dialog{background:var(--surface,#fff);color:var(--ink,#17232f);border-radius:14px;max-width:420px;width:100%;padding:22px;display:grid;gap:12px;box-shadow:0 20px 60px rgba(0,0,0,.25)}
  .pf-dialog h3{margin:0;font-size:1.15rem}
  .pf-input,.pf-textarea{font:inherit;width:100%;padding:10px 12px;border:1px solid var(--line,#d9e0e3);border-radius:9px;background:var(--paper,#f4f6f5);color:var(--ink,#17232f)}
  .pf-textarea{min-height:90px;resize:vertical}
  .pf-note{font-size:.85rem;color:var(--muted,#5b6874)}
  .pf-ok{background:var(--good-soft,#e3f3e7);color:var(--good,#1f7a3d);padding:10px 12px;border-radius:9px;font-size:.9rem}
  .pf-err{background:var(--bad-soft,#fbe7e5);color:var(--bad,#b3261e);padding:10px 12px;border-radius:9px;font-size:.9rem}
  .pf-comments{display:grid;gap:12px}
  .pf-c{border:1px solid var(--line,#d9e0e3);border-radius:12px;padding:12px 14px;background:var(--surface,#fff);display:grid;gap:6px}
  .pf-c .pf-head{display:flex;gap:8px;align-items:center;flex-wrap:wrap;font-size:.85rem;color:var(--muted,#5b6874)}
  .pf-c .pf-head b{color:var(--ink,#17232f)}
  .pf-c .pf-body{white-space:pre-wrap;word-break:break-word}
  .pf-c .pf-actions{display:flex;gap:14px}
  .pf-replies{display:grid;gap:8px;margin-left:22px;border-left:2px solid var(--line,#d9e0e3);padding-left:12px}
  .pf-form{display:grid;gap:8px}
  .pf-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;justify-content:space-between}
  .pf-off{border:1px dashed var(--line,#d9e0e3);border-radius:12px;padding:14px;color:var(--muted,#5b6874);font-size:.92rem}
  `;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* ---------- Tài khoản ---------- */
  const nameOf = u => (u && (u.user_metadata && u.user_metadata.display_name)) || (u && u.email ? u.email.split("@")[0] : "Học viên");
  const isAdmin = () => !!(user && user.email && admins.includes(user.email.toLowerCase()));

  function emit() { listeners.forEach(fn => { try { fn(user); } catch (e) { console.error(e); } }); }

  const ready = (async () => {
    if (!sb) return;
    try { const { data } = await sb.auth.getSession(); user = data.session ? data.session.user : null; } catch (e) { console.error(e); }
    sb.auth.onAuthStateChange((_ev, session) => {
      const nu = session ? session.user : null;
      const changed = (nu && nu.id) !== (user && user.id);
      user = nu;
      if (changed) emit();
    });
  })();

  function openLogin() {
    if (!sb) return;
    const m = document.createElement("div");
    m.className = "pf-modal";
    m.innerHTML = `<div class="pf-dialog" role="dialog" aria-modal="true" aria-labelledby="pf-lt">
      <h3 id="pf-lt">Đăng nhập / Đăng ký</h3>
      <p class="pf-note">Nhập email, chúng tôi gửi một đường link đăng nhập. Không cần mật khẩu. Lần đầu đăng nhập là tự tạo tài khoản.</p>
      <form id="pf-lf" class="pf-form"><label for="pf-email" class="pf-note">Email</label>
        <input id="pf-email" class="pf-input" type="email" required placeholder="ban@example.com" autocomplete="email">
        <div id="pf-lmsg"></div>
        <div class="pf-row"><button type="button" class="pf-btn ghost" id="pf-lc">Đóng</button><button type="submit" class="pf-btn" id="pf-ls">Gửi link đăng nhập</button></div>
      </form></div>`;
    document.body.appendChild(m);
    const close = () => m.remove();
    m.addEventListener("click", e => { if (e.target === m) close(); });
    m.querySelector("#pf-lc").onclick = close;
    m.querySelector("#pf-email").focus();
    m.querySelector("#pf-lf").onsubmit = async e => {
      e.preventDefault();
      const email = m.querySelector("#pf-email").value.trim();
      const btn = m.querySelector("#pf-ls"), msg = m.querySelector("#pf-lmsg");
      btn.disabled = true; btn.textContent = "Đang gửi…"; msg.innerHTML = "";
      const { error } = await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: location.href } });
      btn.disabled = false; btn.textContent = "Gửi lại link";
      msg.innerHTML = error
        ? `<div class="pf-err">Chưa gửi được: ${esc(error.message)}. Kiểm tra email và thử lại sau ít phút.</div>`
        : `<div class="pf-ok">Đã gửi! Mở hộp thư <b>${esc(email)}</b> (kể cả mục Spam/Quảng cáo) và bấm vào link để đăng nhập.</div>`;
    };
  }

  async function signOut() { if (sb) await sb.auth.signOut(); user = null; emit(); }

  function renderAccount(el) {
    if (!el) return;
    if (!sb) { el.innerHTML = ""; return; }
    if (!user) {
      el.innerHTML = `<div class="pf-account"><button class="pf-btn small" data-pf="login">Đăng nhập</button></div>`;
    } else {
      const n = nameOf(user);
      el.innerHTML = `<div class="pf-account"><span class="pf-chip"><span>${esc(n)}</span><span class="pf-avatar" aria-hidden="true">${esc(n.slice(0,1).toUpperCase())}</span></span><button class="pf-link" data-pf="logout">Đăng xuất</button></div>`;
    }
    const li = el.querySelector('[data-pf="login"]'); if (li) li.onclick = openLogin;
    const lo = el.querySelector('[data-pf="logout"]'); if (lo) lo.onclick = signOut;
  }
  function mountAccount(el) { renderAccount(el); ready.then(() => renderAccount(el)); listeners.push(() => renderAccount(el)); }

  /* ---------- Tiến độ ---------- */
  async function loadProgress(course) {
    await ready; if (!sb || !user) return null;
    const { data, error } = await sb.from("progress").select("data").eq("user_id", user.id).eq("course", course).maybeSingle();
    if (error) { console.error(error); return null; }
    return data ? data.data : null;
  }
  async function listProgress() {
    await ready; if (!sb || !user) return [];
    const { data, error } = await sb.from("progress").select("course,data").eq("user_id", user.id);
    if (error) { console.error(error); return []; }
    return data || [];
  }
  const timers = {};
  function saveProgress(course, obj) {
    if (!sb || !user) return;
    clearTimeout(timers[course]);
    const payload = JSON.parse(JSON.stringify(obj));
    timers[course] = setTimeout(async () => {
      const { error } = await sb.from("progress").upsert({ user_id: user.id, course, data: payload, updated_at: new Date().toISOString() });
      if (error) console.error(error);
    }, 800);
  }

  /* ---------- Hỏi đáp ---------- */
  function timeAgo(iso) {
    const s = Math.max(1, Math.round((Date.now() - new Date(iso).getTime()) / 1000));
    if (s < 60) return "vừa xong"; const m = Math.round(s / 60); if (m < 60) return m + " phút trước";
    const h = Math.round(m / 60); if (h < 24) return h + " giờ trước"; const d = Math.round(h / 24); if (d < 30) return d + " ngày trước";
    return new Date(iso).toLocaleDateString("vi-VN");
  }

  function mountComments(el, course, lesson) {
    if (!el) return;
    if (!sb) {
      el.innerHTML = `<div class="pf-off">Phần hỏi đáp sẽ hoạt động khi website được kết nối Supabase (xem file hướng dẫn cài đặt).</div>`;
      return;
    }
    let items = [], replyTo = null, alive = true;

    async function load() {
      const { data, error } = await sb.from("comments").select("id,parent_id,user_id,author_name,body,created_at").eq("course", course).eq("lesson", lesson).order("created_at", { ascending: true }).limit(500);
      if (!alive) return;
      if (error) { el.innerHTML = `<div class="pf-err">Không tải được hỏi đáp: ${esc(error.message)}</div>`; return; }
      items = data || []; render();
    }

    function one(c) {
      const mine = user && c.user_id === user.id;
      return `<div class="pf-c" id="pf-c-${c.id}"><div class="pf-head"><b>${esc(c.author_name)}</b><span>· ${timeAgo(c.created_at)}</span></div>
        <div class="pf-body">${esc(c.body)}</div>
        <div class="pf-actions">${!c.parent_id ? `<button class="pf-link" data-reply="${c.id}">Trả lời</button>` : ""}${(mine || isAdmin()) ? `<button class="pf-link danger" data-del="${c.id}">Xóa</button>` : ""}</div></div>`;
    }

    function render() {
      if (!alive) return;
      const roots = items.filter(c => !c.parent_id);
      const kids = id => items.filter(c => c.parent_id === id);
      const list = roots.length
        ? roots.map(r => one(r) + (kids(r.id).length ? `<div class="pf-replies">${kids(r.id).map(one).join("")}</div>` : "")).join("")
        : `<p class="pf-note">Chưa có câu hỏi nào. Hãy là người đầu tiên!</p>`;
      const target = replyTo ? items.find(c => c.id === replyTo) : null;
      const form = user
        ? `<form class="pf-form" id="pf-cf-${lesson}">
            ${target ? `<div class="pf-row"><span class="pf-note">Đang trả lời <b>${esc(target.author_name)}</b></span><button type="button" class="pf-link" data-cancel>Hủy trả lời</button></div>` : ""}
            <label class="pf-note" for="pf-name-${lesson}">Tên hiển thị</label>
            <input class="pf-input" id="pf-name-${lesson}" maxlength="60" required value="${esc(nameOf(user))}">
            <label class="pf-note" for="pf-body-${lesson}">${target ? "Câu trả lời" : "Câu hỏi hoặc chia sẻ của bạn"}</label>
            <textarea class="pf-textarea" id="pf-body-${lesson}" maxlength="2000" required placeholder="Viết rõ bối cảnh để mọi người dễ trả lời…"></textarea>
            <div class="pf-row"><span class="pf-note">Tôn trọng, đúng chủ đề, không quảng cáo.</span><button class="pf-btn" type="submit">Gửi</button></div>
            <div data-msg></div></form>`
        : `<div class="pf-off">Đăng nhập để đặt câu hỏi hoặc trả lời. <button class="pf-btn small" data-login>Đăng nhập</button></div>`;
      el.innerHTML = `<div class="pf-comments">${list}</div><div style="margin-top:14px">${form}</div>`;

      el.querySelectorAll("[data-reply]").forEach(b => b.onclick = () => { replyTo = +b.dataset.reply; render(); const t = el.querySelector("textarea"); if (t) t.focus(); });
      el.querySelectorAll("[data-del]").forEach(b => b.onclick = async () => {
        if (b.dataset.confirm !== "1") { b.dataset.confirm = "1"; b.textContent = "Bấm lần nữa để xóa"; return; }
        const { error } = await sb.from("comments").delete().eq("id", +b.dataset.del);
        if (error) { b.textContent = "Không xóa được"; return; }
        load();
      });
      const c = el.querySelector("[data-cancel]"); if (c) c.onclick = () => { replyTo = null; render(); };
      const l = el.querySelector("[data-login]"); if (l) l.onclick = openLogin;
      const f = el.querySelector("form");
      if (f) f.onsubmit = async e => {
        e.preventDefault();
        const name = f.querySelector(".pf-input").value.trim().slice(0, 60);
        const body = f.querySelector("textarea").value.trim().slice(0, 2000);
        const msg = f.querySelector("[data-msg]"); const btn = f.querySelector("button[type=submit]");
        if (!name || !body) return;
        btn.disabled = true; btn.textContent = "Đang gửi…";
        if (name !== nameOf(user)) { try { const r = await sb.auth.updateUser({ data: { display_name: name } }); if (r.data && r.data.user) user = r.data.user; } catch (e2) {} }
        const { error } = await sb.from("comments").insert({ course, lesson, parent_id: replyTo, user_id: user.id, author_name: name, body });
        btn.disabled = false; btn.textContent = "Gửi";
        if (error) { msg.innerHTML = `<div class="pf-err">Chưa gửi được: ${esc(error.message)}</div>`; return; }
        replyTo = null; load();
      };
    }

    el.innerHTML = `<p class="pf-note">Đang tải hỏi đáp…</p>`;
    ready.then(load);
    listeners.push(() => { if (document.body.contains(el)) render(); else alive = false; });
  }

  window.Platform = {
    enabled, ready,
    get user() { return user; },
    isAdmin, openLogin, signOut, mountAccount,
    loadProgress, listProgress, saveProgress,
    mountComments,
    onAuthChange(fn) { listeners.push(fn); }
  };
})();
