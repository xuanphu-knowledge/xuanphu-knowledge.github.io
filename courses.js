/* =========================================================
   DANH SÁCH KHÓA HỌC trên trang chủ
   Thêm khóa mới: chép 1 khối { ... } bên dưới, sửa thông tin,
   và đặt thư mục khóa học vào courses/<slug>/
   ========================================================= */
window.COURSES = [
  {
    slug: "qlda-cntt",                       // tên thư mục trong courses/
    title: "Quản lý dự án CNTT thực chiến",
    summary: "Từ Dev, Tester, BA lên PM / Scrum Master: Charter, WBS, ước lượng, Scrum, rủi ro, EVM, đàm phán, AI trong quản lý dự án, phỏng vấn xin việc.",
    level: "Cơ bản → Trung cấp",
    duration: "13 tuần · 26 buổi",
    tags: ["Quản lý dự án", "Agile/Scrum", "AI", "Đi làm"],
    code: "PM",                              // chữ hiển thị trên ảnh bìa thẻ khóa học
    lessons: 26,                             // số buổi học
    totalItems: 53,                          // số mục theo dõi tiến độ (26 buổi + 27 bài tập)
    status: "open"                           // "open" = đang mở · "soon" = sắp ra mắt
  }
  // , { slug: "khoa-tiep-theo", title: "...", summary: "...", level: "...", duration: "...", tags: [], totalItems: 0, status: "soon" }
];
