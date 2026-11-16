window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {
25: {
  goals: ["Biết AI tạo sinh làm tốt và làm dở việc gì trong công việc PM hằng ngày.", "Viết prompt có cấu trúc để AI soạn báo cáo, biên bản, user story, danh sách rủi ro.", "Áp dụng quy trình “người duyệt cuối”: kiểm tra mọi thứ AI viết trước khi gửi đi."],
  agenda: [["0–10","Khảo sát nhanh: tuần qua bạn đã dùng AI cho việc gì?"],["10–45","Phần 1: AI làm được gì cho PM"],["45–80","Phần 2: Prompt cho PM"],["80–90","Nghỉ"],["90–110","Phần 3: Người duyệt cuối và công cụ"],["110–145","Thực hành: báo cáo tuần + biên bản họp FreshGo bằng AI"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. AI làm được gì cho PM", html:`
      <p>AI tạo sinh (Claude, ChatGPT, Gemini, Copilot…) là <b>trợ lý soạn thảo và phân tích</b> rất nhanh. Nó không phải người quản lý dự án: nó không chịu trách nhiệm, không biết chuyện nội bộ, và có thể <b>bịa</b> (gọi là <i>hallucination</i>, ảo giác) với giọng rất tự tin.</p>
      <div class="tablewrap"><table><thead><tr><th>Việc của PM</th><th>AI giúp tốt</th><th>PM vẫn phải làm</th></tr></thead><tbody>
        <tr><td>Khởi tạo</td><td>Bản nháp Charter, danh sách bên liên quan có thể bị sót, câu hỏi phỏng vấn khách</td><td>Chốt mục tiêu với nhà tài trợ; ai ký</td></tr>
        <tr><td>Lập kế hoạch</td><td>Gợi ý WBS, liệt kê việc hay quên (migration, đào tạo, store review), soạn user story và tiêu chí Given/When/Then</td><td>Ước lượng cùng team; AI không biết năng lực team bạn</td></tr>
        <tr><td>Rủi ro</td><td>Pre-mortem: “liệt kê 20 lý do dự án này có thể thất bại”</td><td>Chấm điểm, chọn ứng phó, giao người phụ trách</td></tr>
        <tr><td>Giao tiếp</td><td>Biên bản từ ghi chú thô hoặc bản ghi cuộc họp; báo cáo tuần; email khó; dịch sang tiếng Anh/Nhật</td><td>Kiểm tra số liệu, cam kết, giọng điệu</td></tr>
        <tr><td>Giám sát</td><td>Tính EVM, đọc file Jira xuất ra, tìm story bị kẹt lâu, tóm tắt xu hướng</td><td>Hiểu nguyên nhân và ra quyết định</td></tr>
        <tr><td>Kết thúc</td><td>Gom Lessons Learned, soạn biên bản nghiệm thu từ mẫu</td><td>Thống nhất với khách và team</td></tr>
      </tbody></table></div>
      <p><b>Quy tắc vàng:</b> AI giúp bạn đi từ “trang trắng” đến “bản nháp 70%” trong vài phút. 30% còn lại (đúng số liệu, đúng người, đúng chính trị nội bộ) là việc của bạn, và đó chính là phần nhà tuyển dụng trả lương.</p>`},
    {h:"2. Prompt cho PM: công thức 5 phần", html:`
      <p>Prompt tệ: “Viết báo cáo tuần cho dự án.” Kết quả sẽ chung chung. Prompt tốt có 5 phần:</p>
      <div class="tablewrap"><table><thead><tr><th>Phần</th><th>Ví dụ FreshGo</th></tr></thead><tbody>
        <tr><td><b>Vai trò</b></td><td>“Bạn là PM có kinh nghiệm dự án app bán lẻ ở Việt Nam.”</td></tr>
        <tr><td><b>Bối cảnh</b></td><td>“Dự án FreshGo, go-live 1/7, Fixed Price 2,4 tỷ. Tuần này: API POS trễ 5 ngày, Sprint 4 đạt 22/25 điểm.”</td></tr>
        <tr><td><b>Nhiệm vụ</b></td><td>“Viết báo cáo tuần gửi CEO, trạng thái Vàng.”</td></tr>
        <tr><td><b>Định dạng</b></td><td>“Tối đa 1 trang: kết luận 1 câu, 3 điểm chính, rủi ro, việc cần CEO quyết.”</td></tr>
        <tr><td><b>Ràng buộc</b></td><td>“Không bịa số liệu; chỗ nào thiếu thông tin thì ghi [CẦN BỔ SUNG]. Hỏi tôi tối đa 3 câu nếu chưa đủ dữ liệu.”</td></tr>
      </tbody></table></div>
      <p><b>4 mẹo dùng hằng ngày:</b></p>
      <ol>
        <li><b>Đưa mẫu:</b> dán một báo cáo cũ bạn thấy tốt và yêu cầu “viết theo đúng cấu trúc này”.</li>
        <li><b>Bắt AI hỏi lại:</b> thêm câu “hỏi tôi trước khi viết”, chất lượng tăng rõ rệt.</li>
        <li><b>Chia bước:</b> trước hết liệt kê rủi ro, sau đó chấm điểm, rồi mới soạn kế hoạch ứng phó. Đừng gộp tất cả trong một lệnh.</li>
        <li><b>Bắt nêu giả định:</b> “ghi rõ các giả định bạn đã dùng”. Giả định sai thì bạn thấy ngay.</li>
      </ol>
      <p>Hãy lưu những prompt dùng tốt thành <b>thư viện prompt cá nhân</b>: báo cáo tuần, biên bản họp, user story, pre-mortem, email từ chối phạm vi, retro. Đây là một mục rất đáng đưa vào portfolio.</p>`},
    {h:"3. Người duyệt cuối và công cụ", html:`
      <p><b>Human-in-the-loop</b> (con người duyệt cuối): mọi thứ AI soạn chỉ là bản nháp cho tới khi bạn kiểm 4 điểm:</p>
      <ol>
        <li><b>Số liệu:</b> ngày, tiền, man-day, chỉ số EVM có khớp nguồn gốc không? Tự bấm máy tính lại các phép tính.</li>
        <li><b>Tên và vai trò:</b> AI hay gán nhầm người, nhầm bộ phận.</li>
        <li><b>Cam kết:</b> có câu nào hứa thay bạn (“sẽ xong trước 15/5”) mà team chưa đồng ý không?</li>
        <li><b>Dữ liệu nhạy cảm:</b> có lộ thông tin khách, giá hợp đồng, dữ liệu cá nhân không?</li>
      </ol>
      <div class="tablewrap"><table><thead><tr><th>Nhóm công cụ</th><th>Ví dụ</th><th>Dùng cho</th></tr></thead><tbody>
        <tr><td>Trợ lý AI đa năng</td><td>Claude, ChatGPT, Gemini</td><td>Soạn, phân tích, tính toán, đọc file</td></tr>
        <tr><td>AI trong bộ văn phòng</td><td>Microsoft 365 Copilot, Gemini trong Google Workspace</td><td>Tóm tắt email, họp Teams/Meet, soạn slide</td></tr>
        <tr><td>AI trong công cụ dự án</td><td>Atlassian Rovo (Jira, Confluence), Notion AI, ClickUp AI…</td><td>Tạo issue từ ghi chú, tóm tắt trang, tìm việc bị kẹt</td></tr>
        <tr><td>Ghi chép cuộc họp</td><td>Tính năng ghi chú tự động của Teams, Meet, Zoom</td><td>Bản ghi và tóm tắt cuộc họp</td></tr>
      </tbody></table></div>
      <p>Công cụ thay đổi rất nhanh, nên đừng học thuộc tên. Hãy học <b>cách làm việc</b>: prompt rõ, kiểm tra lại, bảo vệ dữ liệu. Và luôn hỏi công ty: công cụ nào được phép dùng với dữ liệu dự án?</p>`}
  ],
  activity: {t:"Báo cáo tuần + biên bản bằng AI (35 phút)", html:`<p>Dùng ghi chú thô dưới đây. Viết prompt 5 phần để AI soạn (1) biên bản họp có bảng việc cần làm, (2) báo cáo tuần gửi anh Minh. Sau đó soát theo 4 điểm ở Phần 3 và ghi lại <b>mọi lỗi bạn đã sửa</b>.</p><p class="mono">Họp thứ Hai 9h. Lan, Hùng (BE), Mai (QA), Tuấn (IT FreshMart). POS gửi API muộn, Tuấn hứa thứ 5. Lan muốn thêm voucher sinh nhật. Mai: 12 bug, 2 critical ở thanh toán. Sprint 4: 22/25 điểm. Hùng nghỉ phép 3 ngày tuần sau.</p><p>Gợi ý: AI dễ tự viết “đã đồng ý thêm voucher”, trong khi đó chỉ là yêu cầu và phải đi qua Change Request.</p>`},
  check: [["Hallucination là gì? Nó nguy hiểm nhất ở loại tài liệu nào của PM?","AI tạo ra thông tin sai nhưng nghe rất thuyết phục. Nguy hiểm nhất ở báo cáo có số liệu, biên bản có cam kết và tài liệu gửi khách."],["Prompt 5 phần gồm những gì?","Vai trò, Bối cảnh, Nhiệm vụ, Định dạng, Ràng buộc."],["AI soạn biên bản ghi “khách đã đồng ý lùi go-live 1 tuần”, nhưng bạn không nhớ có chuyện đó. Làm gì?","Không gửi. Kiểm tra lại bản ghi hoặc hỏi người dự họp. Cam kết chỉ ghi khi đã xác nhận."]],
  home: "Bài 7.1: nộp prompt, bản AI soạn và bản bạn đã sửa (đánh dấu chỗ sửa)."
},
26: {
  goals: ["Nhận diện rủi ro khi team dùng AI: dữ liệu, ảo giác, bản quyền, bảo mật, phụ thuộc.", "Viết chính sách dùng AI 1 trang cho team và đưa vào Definition of Done.", "Quản lý một dự án có tính năng AI: chạy PoC, tiêu chí nghiệm thu, giám sát sau go-live."],
  agenda: [["0–10","Tình huống mở: dev dán cả file dữ liệu khách hàng vào chatbot miễn phí để “nhờ debug”"],["10–45","Phần 1: Rủi ro và pháp lý"],["45–75","Phần 2: Chính sách dùng AI của team"],["75–85","Nghỉ"],["85–115","Phần 3: Dự án có tính năng AI"],["115–145","Thực hành: đánh giá CR “gợi ý sản phẩm bằng AI”"],["145–150","Tổng kết và phỏng vấn thử về AI"]],
  parts: [
    {h:"1. Rủi ro khi dùng AI và khung pháp lý Việt Nam", html:`
      <div class="tablewrap"><table><thead><tr><th>Rủi ro</th><th>Ví dụ</th><th>Ứng phó</th></tr></thead><tbody>
        <tr><td>Lộ dữ liệu</td><td>Dán danh sách khách hàng, giá hợp đồng, source code của khách vào công cụ không được duyệt</td><td>Chỉ dùng công cụ công ty cho phép (gói doanh nghiệp, không dùng dữ liệu để huấn luyện); che dữ liệu trước khi dán</td></tr>
        <tr><td>Ảo giác</td><td>Báo cáo sai số liệu, code gọi hàm không tồn tại</td><td>Người duyệt cuối; code AI phải qua review và test như code người viết</td></tr>
        <tr><td>Bản quyền, sở hữu trí tuệ</td><td>Hợp đồng outsource quy định khách sở hữu code; khách cấm dùng AI</td><td>Đọc hợp đồng, hỏi khách bằng văn bản trước khi dùng AI trên code của họ</td></tr>
        <tr><td>Bảo mật</td><td>Thư viện AI gợi ý có lỗ hổng; lộ API key trong prompt</td><td>Quét bảo mật trong CI; không dán secret</td></tr>
        <tr><td>Phụ thuộc, mất kỹ năng</td><td>Junior không hiểu code mình nộp</td><td>Yêu cầu giải thích khi review; pair programming</td></tr>
      </tbody></table></div>
      <p><b>Pháp lý cần biết (2026):</b></p>
      <ul>
        <li><b>Luật Bảo vệ dữ liệu cá nhân 2025</b> và <b>Nghị định 356/2025</b> có hiệu lực từ 1/1/2026, thay Nghị định 13/2023. Đưa dữ liệu cá nhân của khách vào công cụ AI bên ngoài cũng là một hoạt động xử lý dữ liệu, nên cần có căn cứ hợp pháp và biện pháp bảo vệ.</li>
        <li><b>Luật Trí tuệ nhân tạo</b> (số 134/2025/QH15) có hiệu lực từ 1/3/2026: phân loại hệ thống AI theo mức rủi ro, yêu cầu minh bạch nội dung do AI tạo ra và con người phải giám sát được hệ thống AI. Nếu dự án của bạn <i>xây</i> tính năng AI, hãy mời pháp chế xác định mức rủi ro ngay từ đầu.</li>
      </ul>
      <p>PM không cần làm luật sư, nhưng phải đưa các mục này vào <b>Risk Register</b> và mời pháp chế vào danh sách bên liên quan.</p>`},
    {h:"2. Chính sách dùng AI của team (1 trang)", html:`
      <p>Nhiều công ty chưa có quy định, nên team tự đặt. Một chính sách tốt chỉ cần 1 trang:</p>
      <ol>
        <li><b>Công cụ được phép:</b> ví dụ trợ lý AI gói doanh nghiệp do công ty cấp; Copilot trong IDE. Cấm dùng tài khoản cá nhân miễn phí cho dữ liệu dự án.</li>
        <li><b>Dữ liệu:</b> Xanh (tài liệu công khai, code nội bộ đã được phép) · Vàng (tài liệu dự án, phải che tên khách) · Đỏ (dữ liệu cá nhân, mật khẩu, khóa API, giá hợp đồng: cấm nhập).</li>
        <li><b>Trách nhiệm:</b> người dùng AI chịu trách nhiệm như khi tự làm. “AI viết” không phải lý do.</li>
        <li><b>Minh bạch:</b> ghi chú trong pull request khi phần lớn code do AI sinh; báo khách nếu hợp đồng yêu cầu.</li>
        <li><b>Chất lượng:</b> bổ sung vào <b>Definition of Done</b>: “code do AI hỗ trợ đã được review, có unit test, đã quét bảo mật”.</li>
        <li><b>Đo lường:</b> theo dõi tác động thật (cycle time, tỷ lệ bug, thời gian review) thay vì cảm giác “nhanh hơn”.</li>
      </ol>
      <p><b>Trong Scrum:</b> đưa chuyện dùng AI vào Retrospective (“AI giúp hay gây phiền ở đâu Sprint này?”). Đừng tăng velocity kỳ vọng chỉ vì team bắt đầu dùng AI; hãy đo vài Sprint rồi mới điều chỉnh dự báo.</p>`},
    {h:"3. Quản lý dự án có tính năng AI", html:`
      <p>Dự án AI khác dự án phần mềm thường ở 3 điểm: <b>phụ thuộc dữ liệu</b>, <b>kết quả mang tính xác suất</b> (đúng 85% chứ không phải đúng/sai), và <b>khó ước lượng</b> trước khi thử. PMI dùng phương pháp <b>CPMAI</b> với 6 giai đoạn lặp lại:</p>
      <ol>
        <li>Hiểu bài toán kinh doanh: AI có thật sự cần không, hay một quy tắc đơn giản là đủ?</li>
        <li>Hiểu dữ liệu: có dữ liệu không, đủ không, có được phép dùng không?</li>
        <li>Chuẩn bị dữ liệu: làm sạch, gán nhãn. Thường tốn nhiều công sức nhất.</li>
        <li>Xây mô hình hoặc chọn mô hình có sẵn, gọi qua API.</li>
        <li>Đánh giá mô hình theo ngưỡng đã thống nhất trước.</li>
        <li>Đưa vào vận hành và giám sát: chất lượng giảm dần khi dữ liệu thay đổi (gọi là <i>drift</i>), chi phí API tính theo lượt gọi.</li>
      </ol>
      <div class="tablewrap"><table><thead><tr><th>Điểm cần chú ý</th><th>Cách làm của PM</th></tr></thead><tbody>
        <tr><td>Ước lượng</td><td>Chạy <b>PoC có giới hạn thời gian</b> (ví dụ 2 tuần, như một spike lớn) trước khi cam kết phạm vi</td></tr>
        <tr><td>Tiêu chí nghiệm thu</td><td>Dạng ngưỡng: “≥ 70% gợi ý được đánh giá liên quan trên bộ 200 khách thử”; không dùng “AI phải đúng”</td></tr>
        <tr><td>Hợp đồng Fixed Price</td><td>Tách PoC thành giai đoạn riêng (T&amp;M); chỉ Fixed Price sau khi PoC đạt</td></tr>
        <tr><td>Chi phí vận hành</td><td>Ước tính chi phí API mỗi tháng theo số người dùng; đưa vào Business Case</td></tr>
        <tr><td>Con người giám sát</td><td>Có nút báo sai, cơ chế tắt tính năng, người chịu trách nhiệm xem xét</td></tr>
      </tbody></table></div>`}
  ],
  activity: {t:"Đánh giá CR “gợi ý sản phẩm bằng AI” (30 phút)", html:`<p>Tháng 4, chị Lan đề nghị thêm “gợi ý sản phẩm bằng AI trên trang chủ app” mà không đổi ngày go-live. Nhóm 2–3 người: (1) liệt kê 5 câu hỏi cần hỏi trước khi ước lượng (dữ liệu nào, bao nhiêu lịch sử mua, được phép dùng không…); (2) đề xuất PoC 2 tuần với tiêu chí đạt; (3) viết 3 phương án cho anh Minh: đưa vào giai đoạn 2, gợi ý theo quy tắc đơn giản (“mua kèm nhiều nhất”) ngay bây giờ, hoặc đổi phạm vi. Sau đó nhờ Claude đóng vai anh Minh để phản biện.</p>`},
  check: [["Dev muốn dán log có số điện thoại khách vào chatbot miễn phí để debug. PM làm gì?","Dừng lại. Che dữ liệu cá nhân hoặc dùng công cụ được duyệt. Đây là xử lý dữ liệu cá nhân theo Luật Bảo vệ dữ liệu cá nhân 2025."],["Vì sao không nên ký Fixed Price ngay cho tính năng AI chưa thử?","Chất lượng mô hình phụ thuộc dữ liệu và chỉ biết sau khi thử. Nên làm PoC có timebox trước, rồi mới cam kết."],["Thêm gì vào Definition of Done khi team dùng AI viết code?","Code do AI hỗ trợ được review, có test, đã quét bảo mật; người nộp hiểu và giải thích được code."]],
  home: "Bài 7.2 và 7.3: chính sách AI 1 trang cho team FreshGo; đánh giá CR gợi ý sản phẩm bằng AI."
}
});
