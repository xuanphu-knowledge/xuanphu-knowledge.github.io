-- =========================================================
-- CÀI ĐẶT CƠ SỞ DỮ LIỆU cho website cộng đồng
-- Cách dùng: Supabase → SQL Editor → New query → dán toàn bộ file này → Run
-- Chạy lại nhiều lần cũng không sao.
-- =========================================================

-- 1) Tiến độ học: mỗi học viên, mỗi khóa một dòng
create table if not exists public.progress (
  user_id    uuid not null references auth.users(id) on delete cascade,
  course     text not null,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, course)
);
alter table public.progress enable row level security;

drop policy if exists "progress: tự xem" on public.progress;
drop policy if exists "progress: tự ghi" on public.progress;
drop policy if exists "progress: tự sửa" on public.progress;
create policy "progress: tự xem" on public.progress for select using (auth.uid() = user_id);
create policy "progress: tự ghi" on public.progress for insert with check (auth.uid() = user_id);
create policy "progress: tự sửa" on public.progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 2) Quản trị viên (được xóa bình luận)
create table if not exists public.admins (
  email text primary key
);
alter table public.admins enable row level security;
-- Không ai đọc/ghi bảng này từ website; chỉ bạn thêm trong SQL Editor.

-- 3) Hỏi đáp / thảo luận theo bài học
create table if not exists public.comments (
  id          bigint generated always as identity primary key,
  course      text not null,
  lesson      text not null,
  parent_id   bigint references public.comments(id) on delete cascade,
  user_id     uuid not null references auth.users(id) on delete cascade,
  author_name text not null check (char_length(author_name) between 1 and 60),
  body        text not null check (char_length(body) between 1 and 2000),
  created_at  timestamptz not null default now()
);
create index if not exists comments_lesson_idx on public.comments (course, lesson, created_at);
alter table public.comments enable row level security;

drop policy if exists "comments: ai cũng xem" on public.comments;
drop policy if exists "comments: thành viên viết" on public.comments;
drop policy if exists "comments: tự xóa hoặc admin xóa" on public.comments;
create policy "comments: ai cũng xem" on public.comments for select using (true);
create policy "comments: thành viên viết" on public.comments for insert
  with check (auth.uid() = user_id);
create policy "comments: tự xóa hoặc admin xóa" on public.comments for delete
  using (
    auth.uid() = user_id
    or exists (select 1 from public.admins a where a.email = (auth.jwt() ->> 'email'))
  );

-- 4) THÊM EMAIL QUẢN TRỊ VIÊN: sửa email bên dưới thành email của bạn rồi chạy
insert into public.admins (email) values ('email-cua-ban@gmail.com')
on conflict (email) do nothing;
