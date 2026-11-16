/* =========================================================
   CẤU HÌNH WEBSITE – bạn chỉ cần sửa file này
   (mở bằng Notepad / TextEdit, sửa phần trong dấu ngoặc kép)
   ========================================================= */
window.SITE_CONFIG = {
  // Tên và khẩu hiệu hiển thị ở trang chủ
  siteName: "Cộng đồng Học Quản lý dự án",
  tagline: "Các khóa học miễn phí, thực chiến, bằng tiếng Việt cho người làm CNTT.",
  about: "Đây là dự án cộng đồng phi lợi nhuận. Nội dung được biên soạn để tự học và áp dụng ngay vào công việc. Bạn có câu hỏi? Hãy để lại ở phần Hỏi đáp cuối mỗi bài học.",

  // Kết nối Supabase (đăng nhập, lưu tiến độ, hỏi đáp)
  // Để trống "" thì web vẫn chạy, chỉ tắt đăng nhập và hỏi đáp.
  // Lấy 2 giá trị này ở Supabase: Project Settings → API
  supabaseUrl: "",       // ví dụ: "https://abcdxyz.supabase.co"
  supabaseAnonKey: "",   // chuỗi dài bắt đầu bằng "eyJ..." (anon public key)

  // Email của quản trị viên (được xóa bình luận không phù hợp)
  adminEmails: ["email-cua-ban@gmail.com"]
};
