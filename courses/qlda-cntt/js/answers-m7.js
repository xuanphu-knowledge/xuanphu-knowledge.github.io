window.ANSWERS = window.ANSWERS || {};
Object.assign(window.ANSWERS, {
"7.1": {
  how: ["Viết prompt đủ 5 phần, yêu cầu AI đánh dấu [CẦN BỔ SUNG] khi thiếu thông tin.", "Soát bản AI theo 4 điểm: số liệu, tên, cam kết, dữ liệu nhạy cảm.", "Nộp cả 3 thứ: prompt, bản AI, bản đã sửa có đánh dấu."],
  html: `
  <p><b>Prompt mẫu:</b></p>
  <p class="mono">Bạn là PM dự án app bán lẻ ở Việt Nam. Bối cảnh: dự án FreshGo cho chuỗi FreshMart, go-live 1/7, Fixed Price 2,4 tỷ. Dưới đây là ghi chú thô cuộc họp thứ Hai. Nhiệm vụ: (1) viết biên bản gồm người dự, nội dung, quyết định, bảng việc cần làm (việc · ai · hạn); (2) viết báo cáo tuần tối đa 1 trang gửi anh Minh (CEO), trạng thái Vàng. Ràng buộc: không bịa số liệu, không ghi là đã quyết định nếu ghi chú không nói vậy; chỗ thiếu thì ghi [CẦN BỔ SUNG]. Hỏi tôi tối đa 3 câu trước khi viết. [dán ghi chú]</p>
  <p><b>Bảng việc đúng sau khi soát:</b></p>
  <div class="tablewrap"><table><thead><tr><th>Việc</th><th>Ai</th><th>Hạn</th></tr></thead><tbody>
  <tr><td>Gửi tài liệu và môi trường API POS</td><td>Tuấn (IT FreshMart)</td><td>Thứ Năm tuần này</td></tr>
  <tr><td>Lập Change Request “voucher sinh nhật”, đánh giá tác động</td><td>PM + BA</td><td>Thứ Tư</td></tr>
  <tr><td>Sửa 2 lỗi critical ở thanh toán, Mai test lại</td><td>Hùng, Mai</td><td>Trước khi Hùng nghỉ phép</td></tr>
  <tr><td>Điều chỉnh kế hoạch Sprint 5 do Hùng nghỉ 3 ngày</td><td>Scrum Master</td><td>Sprint Planning</td></tr>
  </tbody></table></div>
  <p><b>Lỗi AI hay mắc và bạn phải sửa:</b> ghi “chị Lan đã chốt thêm voucher” (thực tế mới là yêu cầu); tự thêm hạn “go-live vẫn đúng 1/7” như một cam kết; tính sai velocity thành 88% hay 100%; bỏ sót việc Hùng nghỉ phép; dùng giọng quá trấn an trong báo cáo trạng thái Vàng.</p>
  <p><b>Báo cáo tuần (khung):</b> Kết luận: <i>Vàng – go-live 1/7 vẫn khả thi nếu nhận được API POS trước thứ Năm.</i> Điểm chính: Sprint 4 đạt 22/25 điểm; 12 lỗi, 2 lỗi critical ở thanh toán đang sửa; có yêu cầu mới về voucher sinh nhật đang được đánh giá qua CR. Cần anh hỗ trợ: nhắc IT FreshMart giữ hạn thứ Năm.</p>`,
  pitfalls: ["Gửi thẳng bản AI mà không soát.", "Dán cả hợp đồng hoặc dữ liệu khách vào công cụ chưa được duyệt.", "Chỉ nộp bản cuối, không ghi lại lỗi đã sửa. Phần “đã sửa gì” mới cho thấy năng lực của bạn."]
},
"7.2": {
  how: ["Tối đa 1 trang, 6 mục: công cụ, phân loại dữ liệu, trách nhiệm, minh bạch, chất lượng (DoD), đo lường.", "Viết sao cho dev đọc 2 phút là biết được làm gì và không được làm gì."],
  html: `
  <p><b>Chính sách dùng AI – Team FreshGo (bản 1.0)</b></p>
  <ol>
  <li><b>Công cụ được phép:</b> trợ lý AI gói doanh nghiệp do công ty cấp; Copilot trong IDE. Không dùng tài khoản cá nhân miễn phí cho bất kỳ dữ liệu dự án nào.</li>
  <li><b>Dữ liệu:</b> <b>Xanh</b> – tài liệu công khai, code thư viện chung: dùng thoải mái. <b>Vàng</b> – user story, tài liệu thiết kế, code FreshGo: chỉ dùng trong công cụ được phép, thay tên FreshMart bằng “Khách A”. <b>Đỏ</b> – dữ liệu khách hàng thật, số điện thoại, đơn hàng, mật khẩu, API key, giá hợp đồng: cấm nhập.</li>
  <li><b>Trách nhiệm:</b> ai nộp thì người đó chịu trách nhiệm, dù AI viết. Phải giải thích được code và tài liệu mình nộp.</li>
  <li><b>Minh bạch:</b> pull request có nhãn <span class="mono">ai-assisted</span> khi phần lớn code do AI sinh. Tài liệu gửi FreshMart do PM duyệt.</li>
  <li><b>DoD bổ sung:</b> code do AI hỗ trợ đã qua review của 1 người, có unit test, đã quét bảo mật trong CI.</li>
  <li><b>Đo lường và cải tiến:</b> theo dõi cycle time, số lỗi lọt sang UAT, thời gian review; bàn ở Retro mỗi Sprint. Rà soát chính sách mỗi quý.</li>
  </ol>
  <p><b>Xin xác nhận:</b> hỏi Delivery Manager và FreshMart xem hợp đồng có điều khoản cấm hoặc giới hạn dùng AI không. Ghi kết quả vào Risk Register.</p>`,
  pitfalls: ["Cấm hoàn toàn: team vẫn lén dùng tài khoản cá nhân, rủi ro còn cao hơn.", "Viết 5 trang lý thuyết, không ai đọc.", "Quên hỏi khách về điều khoản hợp đồng."]
},
"7.3": {
  how: ["Không trả lời “có” hay “không” ngay. Hỏi về dữ liệu trước, đề xuất PoC, rồi đưa phương án cho nhà tài trợ quyết.", "Tính tác động lên mốc 1/7 và ngân sách."],
  html: `
  <p><b>5 câu hỏi trước khi ước lượng:</b> (1) Mục tiêu kinh doanh là gì: tăng giá trị đơn, tăng tần suất mua? Đo bằng chỉ số nào? (2) Có bao nhiêu tháng lịch sử mua hàng, ở định dạng nào, nằm ở hệ thống POS hay chưa có? (3) Khách đã đồng ý cho dùng dữ liệu mua hàng để cá nhân hóa chưa (Luật Bảo vệ dữ liệu cá nhân 2025)? (4) Tự xây mô hình hay dùng dịch vụ có sẵn; ngân sách vận hành mỗi tháng là bao nhiêu? (5) Nếu gợi ý sai hoặc không phù hợp thì xử lý thế nào?</p>
  <p><b>Đề xuất PoC 2 tuần (T&amp;M, 2 người: 1 BE + 1 data):</b> dùng 6 tháng dữ liệu POS đã ẩn danh của 3 cửa hàng. Tiêu chí đạt: ≥ 70% gợi ý được 10 nhân viên cửa hàng đánh giá “liên quan”; thời gian phản hồi dưới 300 ms; chi phí ước tính dưới 5 triệu/tháng cho 30 cửa hàng.</p>
  <div class="tablewrap"><table><thead><tr><th>Phương án</th><th>Tác động</th><th>Khuyến nghị</th></tr></thead><tbody>
  <tr><td>A. Đưa “gợi ý AI” vào giai đoạn 2 (sau go-live), chạy PoC trong tháng 7</td><td>Không ảnh hưởng 1/7; ngân sách riêng</td><td><b>Đề xuất</b></td></tr>
  <tr><td>B. Ngay bây giờ làm gợi ý theo quy tắc (“thường mua kèm”, “mua lại”), khoảng 8 man-day</td><td>Đổi lấy 1 story Could-have</td><td>Có thể kết hợp với A</td></tr>
  <tr><td>C. Làm AI đầy đủ trước 1/7</td><td>Rủi ro cao: dữ liệu và pháp lý chưa rõ, không có thời gian PoC</td><td>Không khuyến nghị</td></tr>
  </tbody></table></div>
  <p><b>Email ngắn gửi anh Minh:</b> “Ý tưởng gợi ý sản phẩm có giá trị. Để không ảnh hưởng mốc 1/7, em đề xuất làm gợi ý theo quy tắc trong giai đoạn 1 và chạy PoC AI 2 tuần ngay sau go-live, có tiêu chí đạt rõ ràng. Anh vui lòng chọn phương án trước thứ Sáu.”</p>`,
  pitfalls: ["Hứa “AI làm được hết” khi chưa xem dữ liệu.", "Bỏ qua vấn đề đồng ý của khách hàng về dữ liệu.", "Không tính chi phí API hằng tháng vào Business Case."]
},
"N7": {
  how: ["Nộp 2 tài liệu: thư viện 10 prompt đã thử thật và chính sách AI ở bài 7.2.", "Mỗi prompt có: mục đích, prompt, lưu ý khi kiểm tra kết quả."],
  html: `
  <p><b>10 prompt nên có trong thư viện của PM:</b></p>
  <ol>
  <li>Biên bản họp từ ghi chú thô hoặc bản ghi cuộc họp, kèm bảng việc · ai · hạn.</li>
  <li>Báo cáo tuần RAG 1 trang theo mẫu của bạn.</li>
  <li>Pre-mortem: “Giả sử 6 tháng nữa dự án thất bại, liệt kê 20 lý do, nhóm theo chủ đề”.</li>
  <li>Viết user story và tiêu chí Given/When/Then từ mô tả nghiệp vụ; tự kiểm INVEST.</li>
  <li>Gợi ý WBS cấp 3 và liệt kê việc hay bị quên.</li>
  <li>Phân tích file Jira xuất ra: story kẹt quá 5 ngày, xu hướng velocity.</li>
  <li>Email từ chối hoặc đàm phán phạm vi, giọng lịch sự nhưng rõ ràng.</li>
  <li>Dịch và điều chỉnh văn phong email cho khách Nhật hoặc Mỹ.</li>
  <li>Gợi ý câu hỏi và hoạt động cho Retrospective.</li>
  <li>Đóng vai bên liên quan khó (nhà tài trợ, khách hàng) để luyện trước buổi họp.</li>
  </ol>
  <p><b>Tự chấm:</b> đạt khi mỗi prompt đã dùng ít nhất 1 lần trên dữ liệu FreshGo, có ghi lưu ý kiểm tra, và không chứa dữ liệu thuộc nhóm Đỏ.</p>`,
  pitfalls: ["Chép prompt mẫu trên mạng mà chưa thử.", "Thư viện không ghi chỗ AI hay sai."]
}
});
