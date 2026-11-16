window.ANSWERS = window.ANSWERS || {};
Object.assign(window.ANSWERS, {
"3.1": {
  how: ["Mỗi story: vai trò thật (khách, nhân viên cửa hàng, shipper), có vế “để…”, 2–3 tiêu chí Given/When/Then có số liệu cụ thể, kèm điểm ước lượng.", "Kiểm tra INVEST: story nào trên 8 điểm thì tách."],
  html: `
  <div class="tablewrap"><table><thead><tr><th>#</th><th>User Story</th><th>Tiêu chí chấp nhận</th><th>Điểm</th></tr></thead><tbody>
  <tr><td>1</td><td>Là khách mới, tôi muốn đăng ký bằng số điện thoại và OTP để không phải nhớ mật khẩu.</td><td>G: số chưa đăng ký · W: nhập số, bấm Gửi · T: nhận OTP 6 số trong 30 giây, hết hạn sau 5 phút.<br>G: nhập sai OTP 5 lần · T: khóa 15 phút, hiện thông báo.</td><td class="num">3</td></tr>
  <tr><td>2</td><td>Là khách, tôi muốn chọn cửa hàng gần nhất để thấy đúng hàng còn tồn.</td><td>G: đã cho phép định vị · T: gợi ý 3 cửa hàng gần nhất, kèm khoảng cách.<br>G: không cho định vị · T: chọn quận/huyện bằng tay.</td><td class="num">5</td></tr>
  <tr><td>3</td><td>Là khách, tôi muốn tìm sản phẩm theo tên để mua nhanh.</td><td>G: gõ “rau” · T: kết quả trong 1 giây, chỉ hiện hàng còn tồn ở cửa hàng đã chọn.<br>G: không có kết quả · T: gợi ý danh mục liên quan.</td><td class="num">3</td></tr>
  <tr><td>4</td><td>Là khách, tôi muốn thêm sản phẩm vào giỏ và đổi số lượng để chuẩn bị đặt hàng.</td><td>G: tồn kho 5 · W: chọn số lượng 6 · T: báo “Chỉ còn 5”, giữ ở 5.<br>T: tổng tiền cập nhật ngay khi đổi số lượng.</td><td class="num">3</td></tr>
  <tr><td>5</td><td>Là khách, tôi muốn đặt hàng thanh toán COD để trả tiền khi nhận hàng.</td><td>G: giỏ hợp lệ, có địa chỉ · W: Đặt hàng · T: tạo mã đơn, hiện màn hình xác nhận, cửa hàng nhận thông báo trong 5 giây.</td><td class="num">5</td></tr>
  <tr><td>6</td><td>Là khách, tôi muốn thanh toán bằng ví điện tử để không cần tiền mặt.</td><td>G: thanh toán thành công · T: đơn chuyển “Đã thanh toán”.<br>G: hủy ở ví · T: đơn vẫn ở giỏ, cho chọn lại phương thức.<br>G: hết thời gian 10 phút · T: hủy giao dịch, không trừ tiền.</td><td class="num">8</td></tr>
  <tr><td>7</td><td>Là khách, tôi muốn xem trạng thái đơn để biết khi nào nhận hàng.</td><td>T: hiện 5 trạng thái (Đã đặt → Cửa hàng xác nhận → Đang chuẩn bị → Đang giao → Hoàn thành), có thời gian.<br>T: nhận push khi trạng thái đổi.</td><td class="num">5</td></tr>
  <tr><td>8</td><td>Là nhân viên cửa hàng, tôi muốn thấy đơn mới ngay khi có để không sót đơn.</td><td>G: có đơn mới · T: hiện trên web quản trị trong 5 giây, có chuông báo.<br>T: đơn chưa xác nhận sau 5 phút thì chuyển màu đỏ.</td><td class="num">5</td></tr>
  <tr><td>9</td><td>Là nhân viên cửa hàng, tôi muốn báo hết hàng cho một món trong đơn để khách chọn thay thế.</td><td>W: đánh dấu hết · T: khách nhận thông báo, chọn bỏ món hoặc hủy đơn; tổng tiền tính lại.</td><td class="num">5</td></tr>
  <tr><td>10</td><td>Là shipper, tôi muốn xác nhận đã giao và đã thu COD để cửa hàng đối soát tiền.</td><td>W: bấm “Đã giao” · T: bắt buộc nhập số tiền thu khi đơn COD; nếu lệch thì cảnh báo.<br>T: đơn chuyển “Hoàn thành”, ghi giờ giao.</td><td class="num">3</td></tr>
  </tbody></table></div>
  <p><b>Tổng 45 điểm.</b> Story 6 đã 8 điểm và có thể tách tiếp: (6a) thanh toán thành công, (6b) hủy hoặc hết thời gian.</p>`,
  pitfalls: ["Viết story kỹ thuật kiểu “Là dev, tôi muốn tạo API…”.", "Tiêu chí chấp nhận thiếu trường hợp lỗi (hết hàng, sai OTP, hủy thanh toán)."]
},
"3.2": {
  how: ["Sprint Goal một câu, có giá trị cho người dùng. Story được chọn phục vụ goal và vừa công suất. Agenda chia theo 3 chủ đề."],
  html: `
  <p><b>Sprint Goal (Sprint 1):</b> “Khách mới đăng ký được, chọn cửa hàng và tìm được sản phẩm còn tồn trên Android.”</p>
  <p><b>Story chọn (velocity giả định 25):</b> #1 Đăng ký OTP (3) · #2 Chọn cửa hàng (5) · #3 Tìm sản phẩm (3) · #4 Giỏ hàng (3) · Spike API POS đọc tồn kho (5) · Thiết lập CI/CD và môi trường staging (5) = <b>24 điểm</b>, chừa 1 điểm cho việc phát sinh.</p>
  <div class="tablewrap"><table><thead><tr><th>Thời gian</th><th>Nội dung</th><th>Người dẫn</th></tr></thead><tbody>
  <tr><td>0–10′</td><td>Nhắc Product Goal; công suất Sprint (ai nghỉ phép)</td><td>Scrum Master</td></tr>
  <tr><td>10–30′</td><td><b>Vì sao:</b> PO trình bày đề xuất Sprint Goal; team hỏi và chốt</td><td>PO</td></tr>
  <tr><td>30–75′</td><td><b>Làm gì:</b> đi lần lượt từng story ở đầu backlog, làm rõ tiêu chí, ước lượng lại nếu cần, chọn cho vừa 25 điểm</td><td>Developers</td></tr>
  <tr><td>75–110′</td><td><b>Làm thế nào:</b> chia task, tìm phụ thuộc (POS, thiết kế UI), ai bắt đầu việc gì</td><td>Developers</td></tr>
  <tr><td>110–120′</td><td>Đọc lại Sprint Goal; mỗi người xác nhận tự tin (1–5 ngón tay)</td><td>Scrum Master</td></tr>
  </tbody></table></div>
  <p><b>Chia task cho story #2 (Chọn cửa hàng):</b> API danh sách cửa hàng và tính khoảng cách (BE, 1 ngày) · màn hình xin quyền vị trí (Mobile, 0,5 ngày) · danh sách 3 cửa hàng gần nhất (Mobile, 1 ngày) · chọn quận bằng tay (Mobile, 0,5 ngày) · test case và test (QA, 1 ngày).</p>`,
  pitfalls: ["Sprint Goal kiểu “Làm xong 6 story”: không nói lên giá trị gì.", "PM tự chia task và giao cho từng người: sai vai trò trong Scrum."]
},
"3.3": {
  how: ["Bảng ánh xạ lớp hợp đồng ↔ lớp team, quy tắc xử lý thay đổi, và cách báo cáo."],
  html: `<p>Bốn mốc hợp đồng (M1–M4) là các “cổng”: mỗi cổng gồm nhiều Sprint, và có tiêu chí nghiệm thu lấy từ danh sách Must của mốc đó. Product Backlog được chia ra 4 nhóm theo mốc. PO được đổi thứ tự trong nhóm thoải mái, nhưng muốn chuyển story giữa các mốc thì phải PM đồng ý.</p>
  <ul><li><b>Thay đổi:</b> đổi story cùng điểm thì ghi Change Log, không cần ký. Tăng tổng điểm quá 5% của mốc thì lập Change Request kèm báo giá.</li><li><b>Báo cáo:</b> team dùng burnup và velocity; nhà tài trợ nhận RAG hằng tuần và EVM hằng tháng, trong đó EV = % điểm Must đã xong × giá trị mốc.</li><li><b>Nghiệm thu:</b> Sprint Review là “UAT nhỏ”. UAT chính thức chỉ làm ở M3, nên ít bất ngờ.</li></ul>`,
  pitfalls: ["Để PO tùy ý kéo story từ mốc sau lên mà không tính tác động tới mốc thanh toán."]
},
"N3": {
  how: ["Ảnh chụp cần thấy được: Epic, story có điểm, Sprint đang chạy có Sprint Goal, board có cột Code review và Testing, giới hạn WIP."],
  html: `<p><b>Checklist tự chấm ảnh chụp Jira:</b></p><ul><li>5 Epic có màu riêng; mọi story gắn vào Epic.</li><li>Story có tiêu chí chấp nhận trong phần mô tả và có Story Point.</li><li>Sprint 1 có tên, ngày bắt đầu và kết thúc, Sprint Goal hiển thị ở đầu board.</li><li>Board có các cột: To Do → In Progress (WIP 4) → Code Review (WIP 3) → Testing → Done.</li><li>Ít nhất 1 story đã chia sub-task.</li><li>Backlog phía dưới đã xếp theo thứ tự ưu tiên, các mục trên cùng đã rõ.</li></ul><p><b>Mẹo khi phỏng vấn:</b> mở Jira và tự trình bày 2 phút về board này. Nhà tuyển dụng đánh giá cao ứng viên đã thực sự cấu hình Jira.</p>`,
  pitfalls: ["Board mặc định 3 cột, không có WIP.", "Không có Sprint Goal."]
},
"4.1": {
  how: ["DoD 6–8 dòng, đo được. Kế hoạch UAT trả lời đủ 6 câu hỏi. Kịch bản UAT viết theo ngôn ngữ người dùng, end-to-end."],
  html: `
  <p><b>Definition of Done – FreshGo:</b></p><ol><li>Code đã được ít nhất 1 người review, merge vào nhánh chính, CI xanh.</li><li>Unit test phần mới ≥ 70%; API có test tích hợp.</li><li>Đạt 100% tiêu chí chấp nhận; tester đã xác nhận trên staging.</li><li>Không còn bug Critical hoặc High gắn với story.</li><li>Chạy được trên Android 9+ và iOS 15+ (3 thiết bị mẫu).</li><li>Dữ liệu cá nhân mới đều được mã hóa và có ghi nhận đồng ý (Luật Bảo vệ dữ liệu cá nhân).</li><li>PO đã xem trên staging.</li><li>Tài liệu API (Swagger) đã cập nhật.</li></ol>
  <p><b>Kế hoạch UAT:</b> người test là chị Lan, quản lý 3 cửa hàng thí điểm (Q1, Q7, Cầu Giấy) và 2 shipper · 40 kịch bản (28 Must, 12 Should) · môi trường staging với dữ liệu thật của 3 cửa hàng, thông tin cá nhân đã ẩn · thời gian 24/5–10/6 (vòng 1 từ 24/5–31/5; sửa lỗi; vòng 2 từ 3/6–7/6) · tiêu chí đạt: 100% kịch bản Must đạt, 0 bug Critical hoặc High, tối đa 5 bug Medium có lịch sửa · chị Lan ký biên bản.</p>
  <p><b>5 kịch bản mẫu:</b></p><ol><li>Khách mới đăng ký, chọn cửa hàng Q7, đặt 3 món, chọn COD → cửa hàng xác nhận trong 5 phút → shipper giao → khách nhận thông báo “Hoàn thành”.</li><li>Khách thanh toán bằng ví điện tử, hủy giữa chừng, rồi thanh toán lại thành công.</li><li>Cửa hàng báo hết 1 món → khách chọn bỏ món → tổng tiền giảm đúng.</li><li>Giá thay đổi trên POS lúc 10:00 → app hiển thị giá mới trước 10:15.</li><li>Shipper nhập số tiền COD lệch 10.000đ → hệ thống cảnh báo, cửa hàng thấy chênh lệch trên báo cáo cuối ngày.</li></ol>`,
  pitfalls: ["DoD có dòng không đo được (“code sạch”).", "Kịch bản UAT viết như test case kỹ thuật, người dùng không hiểu."]
},
"4.2": {
  how: ["10 rủi ro viết theo dạng Vì…có thể…dẫn đến…, chấm theo thang chung, có chiến lược, người phụ trách và dấu hiệu cảnh báo. Có ít nhất 1 cơ hội."],
  html: `
  <div class="tablewrap"><table><thead><tr><th>ID</th><th>Rủi ro</th><th>KN</th><th>AH</th><th>Điểm</th><th>Chiến lược · Hành động</th><th>Phụ trách</th><th>Cảnh báo</th></tr></thead><tbody>
  <tr><td>R01</td><td>Vì API POS thiếu tài liệu, có thể tích hợp mất gấp đôi, dẫn đến trễ beta 2–3 tuần</td><td class="num">4</td><td class="num">4</td><td class="num">16</td><td>Giảm · spike ở Sprint 0, mock API, họp kỹ thuật hằng tuần, SLA phản hồi 2 ngày</td><td>Backend lead</td><td>Quá 2 ngày không trả lời</td></tr>
  <tr><td>R02</td><td>Vì chị Lan chỉ có 4 giờ/tuần, có thể story chậm được làm rõ, dẫn đến team làm sai hoặc phải chờ</td><td class="num">4</td><td class="num">3</td><td class="num">12</td><td>Giảm · lịch Refinement cố định; người ủy quyền thay chị Lan</td><td>PM</td><td>Dưới 1,5 Sprint story đã rõ</td></tr>
  <tr><td>R03</td><td>Vì app chưa từng nộp store, có thể bị từ chối, dẫn đến trễ go-live</td><td class="num">3</td><td class="num">5</td><td class="num">15</td><td>Giảm · nộp bản thử sớm (TestFlight), đọc guideline, nộp chính thức trước 1/6</td><td>Mobile lead</td><td>Bị từ chối bản thử</td></tr>
  <tr><td>R04</td><td>Vì xử lý dữ liệu cá nhân, có thể chưa tuân thủ Luật Bảo vệ dữ liệu cá nhân, dẫn đến pháp chế chặn go-live</td><td class="num">3</td><td class="num">5</td><td class="num">15</td><td>Tránh/Giảm · danh mục dữ liệu, luồng xin đồng ý, pháp chế review trước Sprint 3</td><td>BA</td><td>Pháp chế chưa phản hồi trước 15/3</td></tr>
  <tr><td>R05</td><td>Vì chỉ có 2 mobile dev (1 fresher), có thể một người nghỉ, dẫn đến velocity giảm mạnh</td><td class="num">2</td><td class="num">5</td><td class="num">10</td><td>Giảm · pair programming, tài liệu kiến trúc, có người dự phòng ở công ty</td><td>PM</td><td>Dấu hiệu chán việc trong 1–1</td></tr>
  <tr><td>R06</td><td>Vì cổng thanh toán duyệt hồ sơ chậm, có thể không có tài khoản thật kịp UAT</td><td class="num">3</td><td class="num">4</td><td class="num">12</td><td>Giảm · nộp hồ sơ tuần 1, COD làm phương án dự phòng cho go-live</td><td>PM</td><td>Chưa có sandbox trước 15/2</td></tr>
  <tr><td>R07</td><td>Vì dữ liệu sản phẩm do FreshMart nhập, có thể trễ hoặc sai, dẫn đến UAT trên dữ liệu ảo</td><td class="num">4</td><td class="num">3</td><td class="num">12</td><td>Giảm · mẫu Excel chuẩn, nhập 3 cửa hàng thí điểm trước</td><td>BA</td><td>Chưa có dữ liệu 1/3</td></tr>
  <tr><td>R08</td><td>Vì khuyến mãi 1/7 có thể gây tải đột biến, hệ thống có thể chậm hoặc sập</td><td class="num">3</td><td class="num">4</td><td class="num">12</td><td>Giảm · test 500 đơn đồng thời, tự động mở rộng máy chủ, trực ngày 1/7</td><td>Backend lead</td><td>Test hiệu năng trượt</td></tr>
  <tr><td>R09</td><td>Vì yêu cầu phát sinh nhiều, có thể phình phạm vi, dẫn đến lỗ dự án Fixed Price</td><td class="num">4</td><td class="num">4</td><td class="num">16</td><td>Giảm · quy trình CR từ kickoff; “đổi chứ không thêm”; burnup cho khách xem</td><td>PM</td><td>Tổng điểm tăng trên 5%</td></tr>
  <tr><td>R10 ✦</td><td><b>Cơ hội:</b> vì cổng thanh toán có SDK mẫu cho app di động, có thể rút ngắn tích hợp 5–7 man-day</td><td class="num">3</td><td class="num">2</td><td class="num">6</td><td>Khai thác · cho dev thử SDK ở Sprint 2</td><td>Mobile lead</td><td>—</td></tr>
  </tbody></table></div>`,
  pitfalls: ["Viết rủi ro mà thực chất là issue (“API đang trễ”).", "Mọi rủi ro đều cùng người phụ trách là PM."]
},
"4.3": {
  how: ["Đủ các mục của Mẫu 5, có số cho tiến độ và chi phí, có 3 phương án, có đề xuất."],
  html: `
  <div class="tablewrap"><table><tbody>
  <tr><td><b>Mã / Ngày / Người yêu cầu</b></td><td>CR-03 · 12/3 · Chị Lan</td></tr>
  <tr><td><b>Mô tả</b></td><td>Khách đặt một giỏ hàng lặp lại hằng tuần (ngày và giờ cố định), có thể tạm dừng hoặc hủy.</td></tr>
  <tr><td><b>Lý do</b></td><td>Khoảng 20% khách quen mua rau định kỳ; giữ chân khách so với đối thủ.</td></tr>
  <tr><td><b>Tác động phạm vi</b></td><td>Thêm 4 story (tạo lịch, nhắc trước 1 ngày, tự tạo đơn, quản lý lịch) cùng tác vụ tạo đơn tự động ở backend.</td></tr>
  <tr><td><b>Tác động tiến độ</b></td><td>30 man-day ≈ 1,5 Sprint với 2 dev; nằm trên đường găng nếu làm trước go-live → lùi 2–3 tuần.</td></tr>
  <tr><td><b>Tác động chi phí</b></td><td>≈ 60 triệu (30 man-day × 42 triệu ÷ 22 ngày công/tháng).</td></tr>
  <tr><td><b>Chất lượng / rủi ro</b></td><td>Thêm logic chạy nền và thanh toán lặp lại → cần thêm test; tăng rủi ro R08 (tải hệ thống).</td></tr>
  <tr><td><b>Phương án</b></td><td>A: làm trong bản 1.0, lùi go-live đến khoảng 15/7, +60 triệu. B: đổi lấy “lọc sản phẩm nâng cao” (cùng độ lớn), giữ ngày và giá. C: làm ở bản 1.1, khoảng 15/8, báo giá riêng.</td></tr>
  <tr><td><b>Đề xuất PM</b></td><td>C. Ngày 1/7 là mốc cứng; tính năng định kỳ chỉ phát huy khi đã có tập khách quen sau 1–2 tháng dùng app.</td></tr>
  <tr><td><b>Quyết định</b></td><td>…… · Anh Minh ký · ngày ……</td></tr>
  </tbody></table></div>`,
  pitfalls: ["Chỉ có một phương án (“làm thêm 2 tuần”).", "Không nêu tác động lên rủi ro và kiểm thử."]
},
"N4": {
  how: ["Gộp 4.1, 4.2, 4.3 thành một tài liệu có mục lục; thêm 1 đoạn tóm tắt 5 dòng cho nhà tài trợ ở đầu."],
  html: `<p><b>Đoạn tóm tắt mẫu đặt ở đầu tài liệu:</b> “Kế hoạch này gồm DoD 8 tiêu chí áp dụng từ Sprint 1, UAT 40 kịch bản từ 24/5–10/6 với 3 cửa hàng thí điểm, và Risk Register 10 mục, trong đó 4 rủi ro mức Đỏ (POS, store review, Luật Bảo vệ dữ liệu cá nhân, phình phạm vi) đã có phương án và người phụ trách. Quy trình thay đổi áp dụng từ 15/3; CR-03 (đặt hàng định kỳ) đề xuất đưa sang bản 1.1. Cần anh Minh: (1) chỉ định người thay chị Lan khi vắng; (2) ký CR-03 trước 20/3.”</p>`,
  pitfalls: ["Gửi 3 file rời rạc, không có tóm tắt cho nhà tài trợ."]
}
});
