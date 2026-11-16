window.ANSWERS = window.ANSWERS || {};
Object.assign(window.ANSWERS, {
"5.1": {
  how: ["Bảng: ai · nhận gì · tần suất · kênh · người gửi. Thêm ma trận escalation và quy tắc phản hồi."],
  html: `
  <div class="tablewrap"><table><thead><tr><th>Ai</th><th>Nhận gì</th><th>Tần suất</th><th>Kênh</th><th>Người gửi</th></tr></thead><tbody>
  <tr><td>Anh Minh</td><td>Báo cáo RAG 1 trang; EVM</td><td>Thứ Sáu hằng tuần; EVM hằng tháng</td><td>Email</td><td>PM</td></tr>
  <tr><td>Anh Minh + chị Lan</td><td>Họp điều hành 30 phút</td><td>2 tuần/lần, sau Review</td><td>Trực tiếp hoặc Meet</td><td>PM</td></tr>
  <tr><td>Chị Lan</td><td>Sprint Review; Refinement</td><td>2 tuần; thứ Tư 14h</td><td>Meet + Jira</td><td>Scrum Master / BA</td></tr>
  <tr><td>IT FreshMart, nhà cung cấp POS</td><td>Họp kỹ thuật tích hợp</td><td>Thứ Hai hằng tuần</td><td>Meet + nhóm chat</td><td>Backend lead</td></tr>
  <tr><td>Quản lý cửa hàng</td><td>Bản tin, lịch đào tạo và UAT</td><td>Hằng tháng; hằng tuần khi gần go-live</td><td>Nhóm Zalo</td><td>BA</td></tr>
  <tr><td>Team</td><td>Daily, board, quyết định</td><td>Hằng ngày</td><td>Họp 9h15, Slack</td><td>Scrum Master</td></tr>
  <tr><td>Delivery Manager</td><td>RAG, lợi nhuận, rủi ro Đỏ</td><td>1–1 hằng tuần</td><td>Trực tiếp</td><td>PM</td></tr>
  </tbody></table></div>
  <p><b>Quy tắc phản hồi:</b> câu hỏi nghiệp vụ trả lời trong 1 ngày làm việc; sự cố production mức Critical phản hồi trong 30 phút. <b>Escalation:</b> mức 1 PM và Tech Lead (2 ngày) → mức 2 Delivery Manager và chị Lan (ảnh hưởng Sprint) → mức 3 anh Minh và giám đốc công ty (ảnh hưởng mốc hoặc ngân sách).</p>`,
  pitfalls: ["Đưa mọi thứ vào nhóm Zalo chung, nên quyết định bị trôi mất."]
},
"5.2": {
  how: ["BLUF: trạng thái và điều cần anh Minh làm nằm ở 2 câu đầu. Tối đa 250 chữ."],
  html: `<pre class="mono" style="background:var(--paper);padding:12px;border-radius:10px;font-size:.85rem;white-space:pre-wrap">Tiêu đề: [FreshGo] Tuần 11 – VÀNG – cần anh hỗ trợ với nhà cung cấp POS trước 22/3

Anh Minh,
Tổng: VÀNG. Tích hợp POS đang trễ 1 tuần do nhà cung cấp chưa gửi API tồn kho.
Mốc beta 15/4 vẫn giữ được nếu có API trước 25/3.
Cần anh: gọi giám đốc bên POS để chốt ngày giao API trước 22/3.

Tiến độ: Vàng (SPI 0,94) · Chi phí: Xanh (CPI 1,03) · Phạm vi: Xanh

Đã xong tuần này:
- Khách đặt hàng COD end-to-end trên staging (Android)
- Web quản trị nhận đơn real-time, có chuông báo
Tuần tới:
- Thanh toán ví điện tử (sandbox), chọn cửa hàng theo vị trí

Rủi ro chính:
1. API POS (Đỏ) – đang dùng mock; nếu sau 25/3 vẫn chưa có:
   beta dùng tồn kho nhập tay, đồng bộ POS làm ở Sprint 7.
2. Dữ liệu sản phẩm (Vàng) – mới có 12/30 cửa hàng; nhờ chị Lan đôn đốc.

Trân trọng,
[PM]</pre>`,
  pitfalls: ["Liệt kê 20 task đã làm.", "Ghi trạng thái Vàng nhưng không nói cần lãnh đạo làm gì."]
},
"5.3": {
  how: ["Chuẩn bị: lợi ích thật, BATNA hai bên, 3 phương án. Trong lúc đàm phán: hỏi trước, thấu hiểu, rồi đưa phương án có số."],
  html: `
  <p><b>Chuẩn bị:</b> lợi ích thật của chị Lan là giữ chân khách cũ khi đối thủ tặng điểm. BATNA của bạn: giữ đúng hợp đồng, đưa tích điểm vào bản 1.1 bằng Change Request. BATNA của chị Lan: thuê bên khác làm tính năng tích điểm, nhưng tốn kém và rủi ro tích hợp.</p>
  <p><b>Đoạn hội thoại mẫu:</b></p>
  <div class="callout section">
  <p><b>Chị Lan:</b> Tích điểm phải có ngày 1/7. Không lùi ngày, không thêm tiền.</p>
  <p><b>PM:</b> Em hiểu chị lo đối thủ đang tặng điểm. Chị cho em hỏi: mục tiêu chính là giữ khách quay lại mua lần hai, đúng không ạ?</p>
  <p><b>Chị Lan:</b> Đúng. Khách cũ đang bỏ sang bên kia.</p>
  <p><b>PM:</b> Hệ thống tích điểm đầy đủ khoảng 45 man-day, bằng hơn 2 Sprint. Nếu chen vào thì phải bỏ thanh toán ví hoặc lùi go-live. Em có 3 hướng: (1) ngày 1/7 tặng mã giảm 15% cho đơn thứ hai, chỉ khoảng 5 man-day, nằm trong phần dự phòng; (2) tích điểm đầy đủ ở bản 1.1 vào giữa tháng 8; (3) làm ngay nhưng bỏ ví điện tử khỏi bản 1.0. Em đề xuất kết hợp (1) và (2): khách cũ có lý do quay lại ngay từ ngày đầu, và tháng 8 có tích điểm thật.</p>
  <p><b>Chị Lan:</b> Mã giảm thì bên chị chạy được. Nhưng tháng 8 phải chắc chắn.</p>
  <p><b>PM:</b> Em gửi chị Change Request cho bản 1.1 kèm lịch và báo giá trước thứ Sáu để chị và anh Minh ký ạ.</p></div>
  <p><b>Rút kinh nghiệm:</b> (1) hỏi lợi ích trước khi đưa phương án; (2) dùng con số man-day thay vì “khó lắm chị”; (3) chốt bằng một việc cụ thể có hạn.</p>`,
  pitfalls: ["Nhượng bộ ngay để giữ quan hệ, rồi team phải tăng ca.", "Từ chối dựa vào hợp đồng mà không đưa giải pháp."]
},
"N5": {
  how: ["Đủ 5 phần: nhận và xin lỗi, chuyện gì xảy ra, nguyên nhân gốc, đã làm và sẽ làm gì, bước tiếp theo có thời gian. Tối đa 200 chữ."],
  html: `
  <pre class="mono" style="background:var(--paper);padding:12px;border-radius:10px;font-size:.85rem;white-space:pre-wrap">Tiêu đề: [FreshGo] Lỗi thanh toán tại demo Sprint 4 – nguyên nhân và lịch demo lại

Anh Minh,
Em xin lỗi anh về lỗi thanh toán trong buổi demo sáng nay.

Chuyện gì đã xảy ra: bước thanh toán ví bị lỗi “giao dịch thất bại”.
Phần đặt hàng COD và các tính năng khác không bị ảnh hưởng.

Nguyên nhân: token của môi trường thử nghiệm cổng thanh toán hết hạn
lúc 8h sáng; team không kiểm tra lại trước giờ demo.

Đã làm: cấp lại token, thanh toán chạy bình thường từ 11h,
đã test lại 20 giao dịch.
Để không lặp lại: (1) thêm bước "kiểm tra môi trường 1 giờ trước demo"
vào Definition of Done; (2) cài cảnh báo trước 7 ngày khi token sắp hết hạn.

Bước tiếp theo: em xin demo lại 15 phút vào 10h thứ Năm (ngày …),
hoặc giờ khác anh tiện.

Trân trọng,
[PM]</pre>
  <p><b>Bản tiếng Anh (khách nước ngoài):</b></p>
  <pre class="mono" style="background:var(--paper);padding:12px;border-radius:10px;font-size:.85rem;white-space:pre-wrap">Subject: [FreshGo] Payment error during Sprint 4 demo – root cause and re-demo

Hi Minh,
I apologise for the payment error in this morning's demo.

What happened: e-wallet payment failed; COD ordering was not affected.
Root cause: the payment sandbox token expired at 8:00 and we did not
re-check the environment before the demo.
Fixed: token renewed, 20 test transactions passed since 11:00.
Prevention: (1) "environment check 1h before demo" added to our
Definition of Done; (2) alert 7 days before token expiry.
Next step: could we do a 15-minute re-demo on Thursday at 10:00?

Best regards,
[PM]</pre>`,
  pitfalls: ["Mở đầu bằng biện minh (“do bên cổng thanh toán”).", "Không có hành động phòng ngừa và lịch demo lại."]
},
"6.1": {
  how: ["Đủ 7 chỉ số, có công thức, làm tròn 2 chữ số; 3 câu nhận định gồm tình trạng, nguyên nhân và đề xuất."],
  html: `
  <div class="tablewrap"><table><thead><tr><th>Chỉ số</th><th>Tính</th><th>Kết quả</th></tr></thead><tbody>
  <tr><td>SV</td><td>1,5 − 1,6</td><td class="num">−0,10 tỷ</td></tr><tr><td>CV</td><td>1,5 − 1,45</td><td class="num">+0,05 tỷ</td></tr>
  <tr><td>SPI</td><td>1,5 / 1,6</td><td class="num">0,94</td></tr><tr><td>CPI</td><td>1,5 / 1,45</td><td class="num">1,03</td></tr>
  <tr><td>EAC</td><td>2,4 / 1,034</td><td class="num">≈ 2,32 tỷ</td></tr><tr><td>ETC</td><td>2,32 − 1,45</td><td class="num">≈ 0,87 tỷ</td></tr><tr><td>VAC</td><td>2,4 − 2,32</td><td class="num">≈ +0,08 tỷ</td></tr>
  </tbody></table></div>
  <div class="callout"><p><b>Nhận định cho anh Minh:</b> (1) Dự án đang chậm khoảng 6% so với kế hoạch (Vàng), chủ yếu do tích hợp POS trễ 1 tuần. (2) Chi phí đang tốt hơn kế hoạch khoảng 3% (Xanh); nếu giữ đà này, dự án dự kiến tiết kiệm khoảng 80 triệu. (3) Em đề xuất dùng khoảng 40 triệu trong phần tiết kiệm để thuê thêm 1 tester trong 6 tuần, giúp giữ mốc UAT 10/6.</p></div>`,
  pitfalls: ["Đảo ngược công thức (PV/EV).", "Chỉ đưa số, không có nhận định và đề xuất."]
},
"6.2": {
  how: ["Theo Mẫu 10: kết quả UAT, danh sách tồn đọng có hạn, bàn giao, bảo hành, chữ ký."],
  html: `
  <div class="tablewrap"><table><tbody>
  <tr><td><b>Hạng mục</b></td><td>Giai đoạn 1 FreshGo theo hợp đồng số … và Scope Statement v1.2: app khách hàng, web quản trị, giao diện shipper, tích hợp POS và cổng thanh toán</td></tr>
  <tr><td><b>Kết quả UAT</b></td><td>38/40 kịch bản đạt (28/28 Must đạt). 0 bug Critical hoặc High. 2 bug Medium.</td></tr>
  <tr><td><b>Danh sách tồn đọng</b></td><td>(1) Bộ lọc sai khi chọn nhiều cửa hàng – sửa trước 20/6. (2) Ảnh sản phẩm tải chậm trên 3G – tối ưu ảnh trước 25/6. Cả hai không chặn go-live.</td></tr>
  <tr><td><b>Bàn giao</b></td><td>Repo mã nguồn (chuyển quyền admin cho IT FreshMart); tài liệu kiến trúc, API, vận hành, hướng dẫn sử dụng 3 vai trò; tài khoản cloud, App Store, Google Play, cổng thanh toán, tên miền đứng tên FreshMart; 3 buổi chuyển giao kiến thức có video.</td></tr>
  <tr><td><b>Bảo hành</b></td><td>3 tháng từ 30/6. Sửa lỗi so với đặc tả. Critical: phản hồi 30 phút, khắc phục trong 4 giờ. High: 1 ngày. Medium/Low: theo đợt cập nhật 2 tuần. Kênh: email support và hotline trực.</td></tr>
  <tr><td><b>Kết luận</b></td><td>Đồng ý nghiệm thu giai đoạn 1, kèm danh sách tồn đọng ở trên.</td></tr>
  <tr><td><b>Chữ ký</b></td><td>Đại diện FreshMart: Chị Lan · Đại diện công ty phần mềm: … · Ngày …</td></tr>
  </tbody></table></div>`,
  pitfalls: ["Không ghi rõ tài khoản đứng tên ai. Đây là tranh chấp rất hay gặp sau dự án."]
},
"N6": {
  how: ["Xem lời giải mẫu Capstone ở trang riêng “Đáp án Capstone”."],
  html: `<p>Lời giải chi tiết ở trang <a href="#dap-an-capstone">Đáp án Capstone</a>. Hồ sơ dự án hoàn chỉnh = toàn bộ sản phẩm ★ từ M1 đến M6, gộp vào một thư mục có mục lục. Xem hướng dẫn đóng gói ở trang <a href="#ho-so">CV & Portfolio</a>.</p>`,
  pitfalls: []
}
});

window.CAPSTONE_ANSWER = `
<section class="section"><h2>1. Chẩn đoán</h2>
<div class="tablewrap"><table><thead><tr><th>Chỉ số</th><th>Tính</th><th>Kết quả</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>SPI</td><td>1,3 / 1,7</td><td class="num">0,76</td><td>Chạy bằng 76% tốc độ kế hoạch</td></tr>
<tr><td>CPI</td><td>1,3 / 1,6</td><td class="num">0,81</td><td>1 đồng chi ra chỉ tạo 0,81 đồng giá trị</td></tr>
<tr><td>EAC</td><td>2,4 / 0,8125</td><td class="num">≈ 2,95 tỷ</td><td>Vượt ngân sách khoảng 0,55 tỷ nếu giữ đà này</td></tr>
<tr><td>Dự báo theo velocity</td><td>210 / 20</td><td class="num">≈ 10,5 Sprint</td><td>Chỉ còn 5 Sprint: <b>thiếu hơn một nửa thời gian</b></td></tr>
</tbody></table></div>
<p><b>Velocity sau khi bỏ tăng ca</b> dự kiến khoảng 18 điểm/Sprint, nên 5 Sprint làm được khoảng 90 điểm.</p>
<p><b>5 nguyên nhân gốc:</b></p><ol><li>Phạm vi phình mà không kiểm soát: 3 Change Request đã làm nhưng chưa ký (vừa mất tiền vừa mất thời gian).</li><li>Rủi ro POS không được quản lý: không có Risk Register, không spike sớm.</li><li>Ước lượng ban đầu thiếu các việc ngoài code và không có dự phòng.</li><li>PO ít thời gian nên story chưa rõ, team phải làm lại.</li><li>Tăng ca kéo dài làm giảm chất lượng và velocity (velocity đi từ 22 xuống 18).</li></ol></section>
<section class="section"><h2>2. Phương án</h2>
<div class="tablewrap"><table><thead><tr><th></th><th>A. Cắt phạm vi, giữ 30/6 (đề xuất)</th><th>B. Giữ phạm vi, lùi ngày</th><th>C. Thêm 2 dev</th></tr></thead><tbody>
<tr><td>Phạm vi 1.0</td><td>Khoảng 90 điểm Must: đặt hàng, COD, 1 ví, theo dõi đơn, xử lý đơn tại cửa hàng</td><td>Đủ 210 điểm</td><td>Khoảng 130 điểm</td></tr>
<tr><td>Ngày go-live</td><td>30/6, bản 1.1 vào giữa tháng 8 (khoảng 120 điểm còn lại)</td><td>Khoảng đầu tháng 9</td><td>30/6, nhưng rủi ro cao</td></tr>
<tr><td>Chi phí thêm</td><td>Bản 1.1 tính bằng CR có báo giá; ký bù 3 CR cũ (khoảng 0,15 tỷ) để bù một phần lỗ</td><td>Khoảng +0,55 tỷ, công ty chịu theo Fixed Price</td><td>Khoảng +0,3 tỷ nhân sự</td></tr>
<tr><td>Rủi ro</td><td>Chị Lan không hài lòng vì thiếu tích điểm → bù bằng mã giảm đơn thứ hai (5 điểm)</td><td>Mất mùa khuyến mãi 1/7, mục tiêu kinh doanh bị ảnh hưởng</td><td>Người mới cần 2–3 Sprint để làm quen; có thể chậm hơn</td></tr>
</tbody></table></div></section>
<section class="section"><h2>3. Kế hoạch 30 ngày</h2>
<ul><li><b>Tuần 1:</b> đóng băng phạm vi; dừng tăng ca; họp riêng với từng thành viên; workshop MoSCoW với chị Lan (2 giờ); lập Risk Register mới (POS, store review, Luật Bảo vệ dữ liệu cá nhân, nhân sự).</li><li><b>Tuần 1–2:</b> trình phương án A cho anh Minh; ký bù 3 CR (hoặc trừ vào phần đã cắt); họp cấp giám đốc với nhà cung cấp POS để chốt ngày giao API.</li><li><b>Tuần 2–4:</b> Sprint mới với Sprint Goal hướng vào go-live; burnup cập nhật hằng tuần cho khách; Refinement cố định thứ Tư; báo cáo RAG thứ Sáu.</li></ul></section>
<section class="section"><h2>4. Memo trình anh Minh (bản rút gọn)</h2>
<pre class="mono" style="background:var(--paper);padding:12px;border-radius:10px;font-size:.85rem;white-space:pre-wrap">KẾT LUẬN: Với tốc độ hiện tại, FreshGo cần thêm khoảng 10 Sprint (đến khoảng tháng 9)
để làm đủ phạm vi. Em đề xuất go-live bản lõi đúng 30/6 và bản 1.1 vào giữa tháng 8.

CẦN ANH QUYẾT ĐỊNH TRƯỚC 22/4:
1. Duyệt phạm vi bản lõi (danh sách Must đính kèm, đã thống nhất với chị Lan).
2. Ký 3 Change Request đã làm (tổng khoảng 150 triệu) hoặc đồng ý trừ vào phần đã cắt.

TÌNH TRẠNG: SPI 0,76 · CPI 0,81 · còn 210 điểm / velocity khoảng 20.
NGUYÊN NHÂN CHÍNH: phạm vi tăng không qua quy trình; tích hợp POS trễ; team kiệt sức.
BÙ CHO KHÁCH CŨ NGÀY 1/7: mã giảm 15% cho đơn thứ hai (thay tích điểm, có ở bản 1.1).
RỦI RO CÒN LẠI: POS (đang họp cấp giám đốc), store review (nộp trước 1/6).</pre></section>
<section class="section"><h2>Tự chấm theo rubric</h2><ul><li><b>Chẩn đoán (25):</b> đủ SPI, CPI, EAC, dự báo velocity, 5 nguyên nhân gốc (không chỉ triệu chứng).</li><li><b>Phương án (25):</b> ít nhất 2 phương án có đánh đổi; không chọn “tăng ca”.</li><li><b>Số liệu (20):</b> mỗi phương án có ngày, tiền, điểm story.</li><li><b>Con người (15):</b> dừng tăng ca, xử lý yêu cầu tích điểm theo lợi ích thật.</li><li><b>Trình bày (15):</b> câu đầu là kết luận; quyết định cần có hạn.</li></ul></section>`;
