window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {
17: {
  goals: ["Lập kế hoạch giao tiếp cho từng nhóm bên liên quan.", "Tổ chức cuộc họp hiệu quả: có agenda, biên bản và việc cần làm.", "Viết báo cáo trạng thái RAG mà lãnh đạo đọc trong 2 phút."],
  agenda: [["0–10","Khởi động: cuộc họp vô ích nhất tuần này của bạn"],["10–40","Phần 1: Kế hoạch giao tiếp"],["40–70","Phần 2: Họp hiệu quả"],["70–80","Nghỉ"],["80–115","Phần 3: Báo cáo trạng thái; Phần 4: Ban chỉ đạo, PMO, nhiều dự án"],["115–145","Thực hành: báo cáo tuần gửi anh Minh"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Kế hoạch giao tiếp", html:`
      <p>Số kênh giao tiếp trong một nhóm n người là <b>n(n − 1) / 2</b>. Team FreshGo 8 người có 28 kênh; thêm anh Minh và chị Lan thành 10 người thì có 45 kênh. Đó là lý do giao tiếp phải được <i>thiết kế</i>, không thể để tự nhiên.</p>
      <div class="tablewrap"><table><thead><tr><th>Ai</th><th>Nhận gì</th><th>Tần suất</th><th>Kênh</th><th>Người gửi</th></tr></thead><tbody>
        <tr><td>Anh Minh (nhà tài trợ)</td><td>Báo cáo RAG 1 trang</td><td>Thứ Sáu hằng tuần</td><td>Email</td><td>PM</td></tr>
        <tr><td>Chị Lan (PO)</td><td>Sprint Review, Refinement</td><td>2 tuần / hằng tuần</td><td>Google Meet + Jira</td><td>PM / BA</td></tr>
        <tr><td>Team</td><td>Daily, board Jira</td><td>Hằng ngày</td><td>Họp + Slack</td><td>Scrum Master</td></tr>
        <tr><td>Quản lý cửa hàng</td><td>Bản tin tiến độ, lịch đào tạo</td><td>Hằng tháng</td><td>Nhóm Zalo</td><td>BA</td></tr>
        <tr><td>Sếp của PM</td><td>RAG, rủi ro Đỏ</td><td>Hằng tuần</td><td>1–1</td><td>PM</td></tr>
      </tbody></table></div>
      <p><b>Giao tiếp đẩy</b> (email, báo cáo) chỉ đảm bảo đã gửi, không đảm bảo đã hiểu. Những quyết định quan trọng nên trao đổi trực tiếp, rồi xác nhận lại bằng văn bản.</p>`},
    {h:"2. Họp hiệu quả", html:`
      <ul>
        <li><b>Trước họp:</b> nêu mục tiêu bằng một câu (“Chốt phương án thanh toán ví điện tử”), gửi agenda và tài liệu trước 24 giờ, chỉ mời người cần thiết.</li>
        <li><b>Trong họp:</b> đúng giờ; có người ghi biên bản; khi bàn lạc đề thì ghi vào “bãi đỗ” để xử lý sau; chốt lại các quyết định trước khi kết thúc.</li>
        <li><b>Sau họp:</b> gửi biên bản trong 24 giờ, gồm <b>Quyết định</b> và <b>Việc cần làm</b> (ai, việc gì, hạn).</li>
      </ul>
      <p>Họp mà không có quyết định hoặc việc cần làm nào thì lẽ ra chỉ cần một email.</p>`},
    {h:"3. Báo cáo trạng thái", html:`
      <p>Viết theo nguyên tắc <b>BLUF (kết luận trước)</b>: câu đầu tiên là trạng thái và điều lãnh đạo cần làm.</p>
      <pre class="mono" style="background:var(--paper);padding:12px;border-radius:10px;overflow-x:auto;font-size:.85rem;white-space:pre-wrap">Tiêu đề: [FreshGo] Báo cáo tuần 14 – VÀNG – cần anh quyết định trước 20/4

Tổng: VÀNG. Mốc beta 15/4 có nguy cơ trễ 1 tuần do API POS.
Cần anh: chọn phương án A hoặc B bên dưới trước thứ Ba 20/4.

Tiến độ: Vàng (SPI 0,92) · Chi phí: Xanh (CPI 1,02) · Phạm vi: Xanh

Đã xong: đặt hàng và thanh toán COD chạy end-to-end trên staging;
         web quản trị nhận đơn real-time.
Tuần tới: thanh toán ví điện tử; bắt đầu app shipper.

Rủi ro chính:
1. API POS chậm (Đỏ, 16 điểm) – đang dùng mock, họp nhà cung cấp thứ Hai.
   A: chờ thêm 1 tuần, giữ phạm vi. B: beta không đồng bộ tồn kho, làm ở Sprint sau.
   PM đề xuất: B.</pre>
      <p>Quy tắc RAG: Vàng nghĩa là có rủi ro nhưng đã có phương án; Đỏ nghĩa là cần cấp trên quyết định. <b>Không để “bất ngờ chuyển Đỏ”</b>: một mục Vàng hai tuần liền mà chưa cải thiện thì phải nói rõ.</p>`},
    {h:"4. Quản trị dự án: ban chỉ đạo, PMO, nhiều dự án", html:`
      <p><b>Ban chỉ đạo (Steering Committee):</b> nhóm lãnh đạo hai bên (ví dụ anh Minh, chị Lan, Giám đốc khối của công ty bạn) họp mỗi tháng hoặc tại mỗi cổng duyệt để quyết những việc vượt quyền PM: đổi mốc, đổi ngân sách, dừng dự án. PM chuẩn bị tài liệu, <b>không</b> dùng buổi này để kể chi tiết.</p>
      <ul>
        <li><b>Tài liệu 3–5 slide:</b> trạng thái RAG và xu hướng; EVM hoặc burnup; top 3 rủi ro; <b>các quyết định cần ban chỉ đạo đưa ra</b>, mỗi quyết định có phương án và khuyến nghị.</li>
        <li><b>Gửi trước 2 ngày</b>, sau họp gửi biên bản ghi rõ quyết định.</li>
      </ul>
      <p><b>PMO</b> (Project Management Office) đặt quy trình, mẫu tài liệu, tổng hợp báo cáo mọi dự án và kiểm tra tuân thủ. Với PM, PMO là nơi lấy mẫu chuẩn và cũng là nơi “chấm điểm” dự án. Hãy hỏi PMO ngay tuần đầu: cần nộp gì, khi nào, theo mẫu nào.</p>
      <p><b>Quản lý nhiều dự án cùng lúc</b> (rất phổ biến với PM ở Việt Nam):</p>
      <ul>
        <li>Một bảng tổng hợp nguồn lực: ai, % thời gian cho dự án nào, từ ngày nào đến ngày nào. Không để một người bị xếp quá 100%.</li>
        <li>Dùng chung một khung báo cáo cho mọi dự án; dành khung giờ cố định cho từng dự án trong tuần.</li>
        <li>Khi hai dự án tranh nhau một người, đưa lên Delivery Manager quyết theo ưu tiên kinh doanh, kèm tác động của từng phương án. Đừng tự “xoay” bằng cách bắt người đó làm thêm giờ.</li>
      </ul>`}
  ],
  activity: {t:"Báo cáo tuần gửi anh Minh (30 phút)", html:`<p>Viết báo cáo tuần theo Mẫu 6 cho tình huống: API POS trễ 1 tuần, team đã làm xong 80% phần đặt hàng, một dev nghỉ ốm 3 ngày. Giới hạn 250 chữ. Sau đó tự kiểm tra: đọc riêng câu đầu tiên, anh Minh đã biết cần làm gì chưa?</p>`},
  check: [["Slide quan trọng nhất trong tài liệu họp ban chỉ đạo là gì?","Các quyết định cần ban chỉ đạo đưa ra, mỗi quyết định có phương án và khuyến nghị."],["Một team 6 người có bao nhiêu kênh giao tiếp?","6 × 5 / 2 = 15 kênh."],["BLUF là gì?","Viết kết luận trước: trạng thái và điều người đọc cần làm nằm ngay ở câu đầu."],["Sau họp cần gửi gì, trong bao lâu?","Biên bản trong vòng 24 giờ, gồm các quyết định và việc cần làm (ai, việc gì, hạn)."]],
  home: "Bài 5.1 và 5.2: kế hoạch giao tiếp và báo cáo tuần trạng thái Vàng."
},
18: {
  goals: ["Nhận ra 5 giai đoạn phát triển của team và cách PM hỗ trợ ở từng giai đoạn.", "Áp dụng servant leadership và các mức giao việc.", "Tổ chức họp 1–1 và lập kế hoạch onboarding cho người mới."],
  agenda: [["0–10","Khởi động: team tốt nhất bạn từng ở có gì đặc biệt?"],["10–40","Phần 1: Giai đoạn phát triển team"],["40–75","Phần 2: Động lực, servant leadership, giao việc"],["75–85","Nghỉ"],["85–115","Phần 3: Họp 1–1, onboarding, an toàn tâm lý"],["115–145","Thực hành: kế hoạch onboarding"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Giai đoạn phát triển team (Tuckman)", html:`
      <div class="tablewrap"><table><thead><tr><th>Giai đoạn</th><th>Dấu hiệu</th><th>PM nên làm</th></tr></thead><tbody>
        <tr><td><b>Hình thành</b></td><td>Lịch sự, dè dặt, chờ chỉ dẫn</td><td>Nói rõ mục tiêu, vai trò, quy tắc làm việc</td></tr>
        <tr><td><b>Sóng gió</b></td><td>Tranh cãi về cách làm, ganh đua, phàn nàn</td><td>Đưa xung đột ra công khai, cùng team đặt quy tắc, kèm cặp nhiều hơn</td></tr>
        <tr><td><b>Ổn định</b></td><td>Có thói quen chung, tin tưởng hơn</td><td>Trao quyền dần, khuyến khích team tự quyết</td></tr>
        <tr><td><b>Hiệu quả cao</b></td><td>Tự quản, chủ động, giúp nhau</td><td>Bảo vệ team khỏi bị gián đoạn, gỡ vướng, ít can thiệp</td></tr>
        <tr><td><b>Giải tán</b></td><td>Dự án kết thúc</td><td>Ghi nhận đóng góp, Lessons Learned, bàn giao người</td></tr>
      </tbody></table></div>
      <p>Mỗi khi có người mới vào hoặc có người nghỉ, team có thể quay lại giai đoạn trước. Đây là điều bình thường.</p>`},
    {h:"2. Động lực, servant leadership, giao việc", html:`
      <p><b>Động lực:</b> lương và thưởng chỉ ngăn bất mãn. Điều thật sự tạo động lực với dân CNTT thường là <b>tự chủ</b> (được quyết cách làm), <b>tiến bộ</b> (học thêm kỹ năng) và <b>ý nghĩa</b> (thấy sản phẩm mình làm có người dùng).</p>
      <p><b>Servant leadership:</b> câu hỏi mỗi sáng của PM không phải “hôm nay giao việc gì?” mà là “hôm nay team đang bị cái gì cản trở?”.</p>
      <p><b>5 mức giao việc</b>, chọn theo năng lực người nhận:</p>
      <ol><li>Làm theo hướng dẫn chi tiết của tôi.</li><li>Tìm hiểu và đề xuất, tôi quyết.</li><li>Đề xuất phương án, tôi duyệt rồi bạn làm.</li><li>Tự quyết và làm, báo lại cho tôi.</li><li>Toàn quyền, không cần báo.</li></ol>
      <p>Với dev fresher của FreshGo: bắt đầu ở mức 1–2. Với backend lead: mức 4.</p>`},
    {h:"3. Họp 1–1, onboarding, an toàn tâm lý", html:`
      <p><b>Họp 1–1</b> 30 phút mỗi 2 tuần. Đây là buổi của người được gặp, không phải buổi PM báo cáo. Ba câu hỏi gợi ý: “Gần đây việc gì làm em mệt nhất?”, “Anh/chị có thể làm gì để giúp em?”, “Em muốn học thêm gì trong 3 tháng tới?”.</p>
      <p><b>Onboarding người mới (tuần đầu):</b></p>
      <ul><li>Ngày 1: máy tính và tài khoản sẵn sàng, gặp team, đọc tài liệu tổng quan, có “buddy” kèm cặp.</li><li>Ngày 2–3: dựng được môi trường, chạy app ở máy mình, sửa một bug nhỏ.</li><li>Cuối tuần 1: làm xong một story nhỏ, có review.</li><li>Cuối tuần 2: họp 1–1 nhìn lại.</li></ul>
      <p><b>An toàn tâm lý:</b> mọi người dám nói “em không biết”, “em làm sai rồi”, hay “em nghĩ kế hoạch này không khả thi” mà không bị trách phạt. Đây là yếu tố được nghiên cứu ghi nhận là quan trọng hàng đầu với hiệu quả của team. PM tạo ra nó bằng cách tự nhận lỗi trước, và cảm ơn người báo tin xấu.</p>`}
  ],
  activity: {t:"Kế hoạch onboarding (30 phút)", html:`<p>FreshGo tuyển một mobile dev thay cho bạn fresher nghỉ việc, vào làm từ tháng thứ 4. Lập kế hoạch onboarding 2 tuần theo từng ngày, có mục tiêu đo được. Chọn buddy và giải thích vì sao. Cuối cùng, ước tính velocity của team giảm bao nhiêu trong 2 Sprint đầu có người mới.</p>`},
  check: [["Team bắt đầu cãi nhau về coding convention. Họ đang ở giai đoạn nào, PM nên làm gì?","Sóng gió. Đưa tranh luận ra công khai và cùng team chốt quy tắc chung, ví dụ ghi vào DoD."],["Giao cho fresher việc ở mức “toàn quyền, không cần báo” có ổn không?","Không. Fresher nên ở mức 1–2 và được nâng dần."],["Họp 1–1 là của ai?","Của người được gặp. Họ dẫn dắt nội dung, PM chủ yếu lắng nghe và hỗ trợ."]],
  home: "Hoàn thiện kế hoạch onboarding. Nếu đang có team, hãy thử một buổi 1–1 với một đồng nghiệp trong tuần này."
},
19: {
  goals: ["Nhận diện 7 nguồn xung đột hay gặp trong dự án.", "Chọn được cách xử lý xung đột phù hợp tình huống.", "Đàm phán dựa trên lợi ích thật và phương án dự phòng tốt nhất (BATNA)."],
  agenda: [["0–10","Khởi động: xung đột gần nhất bạn chứng kiến"],["10–40","Phần 1: Nguồn gốc và cách xử lý xung đột"],["40–75","Phần 2: Đàm phán"],["75–85","Nghỉ"],["85–110","Phần 3: Mẫu câu với khách hàng khó"],["110–145","Thực hành: đóng vai đàm phán với chị Lan"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Nguồn gốc và cách xử lý xung đột", html:`
      <p><b>7 nguồn xung đột hay gặp:</b> tiến độ, ưu tiên, nguồn lực, ý kiến kỹ thuật, quy trình, chi phí, và tính cách. Phần lớn xung đột ban đầu là về việc; chỉ trở thành xung đột cá nhân khi bị để lâu.</p>
      <div class="tablewrap"><table><thead><tr><th>Cách</th><th>Khi nào dùng</th><th>Ví dụ</th></tr></thead><tbody>
        <tr><td><b>Hợp tác</b></td><td>Việc quan trọng, có thời gian, cần giữ quan hệ</td><td>Dev và tester cùng viết lại tiêu chí chấp nhận</td></tr>
        <tr><td><b>Thỏa hiệp</b></td><td>Hai bên ngang nhau, cần giải pháp tạm thời</td><td>Mỗi bên nhường một ít về phạm vi Sprint</td></tr>
        <tr><td><b>Nhường</b></td><td>Việc nhỏ với mình nhưng lớn với họ; giữ quan hệ</td><td>Đồng ý đổi giờ Daily cho khách</td></tr>
        <tr><td><b>Né tránh</b></td><td>Cần thời gian để mọi người bình tĩnh, hoặc vấn đề tự hết</td><td>Hoãn tranh luận đang nóng sang ngày mai</td></tr>
        <tr><td><b>Áp đặt</b></td><td>Khẩn cấp, an toàn, bảo mật</td><td>“Dừng deploy ngay, có lỗ hổng bảo mật”</td></tr>
      </tbody></table></div>`},
    {h:"2. Đàm phán", html:`
      <ul>
        <li><b>Tách lập trường khỏi lợi ích.</b> Lập trường của chị Lan: “Phải có tích điểm trước 1/7.” Lợi ích thật đằng sau: “Giữ chân khách cũ khi đối thủ đang tặng điểm.” Có thể có cách khác đáp ứng lợi ích đó, như mã giảm giá cho khách quay lại, với chi phí bằng một phần năm.</li>
        <li><b>BATNA:</b> phương án tốt nhất của bạn nếu đàm phán thất bại. BATNA càng mạnh, bạn càng tự tin. Trước mỗi cuộc đàm phán, hãy viết ra BATNA của mình và đoán BATNA của bên kia.</li>
        <li><b>Mở rộng lựa chọn</b> trước khi chọn: đưa ra 3 phương án thay vì tranh cãi có hay không.</li>
        <li><b>Dùng tiêu chí khách quan:</b> velocity thực tế, ước lượng có cơ sở, điều khoản hợp đồng.</li>
      </ul>`},
    {h:"3. Mẫu câu với khách hàng khó", html:`
      <div class="tablewrap"><table><thead><tr><th>Tình huống</th><th>Thay vì</th><th>Hãy nói</th></tr></thead><tbody>
        <tr><td>Đòi thêm việc</td><td>“Không được, ngoài hợp đồng.”</td><td>“Làm được ạ. Em gửi chị 3 phương án về thời gian và chi phí trước thứ Năm.”</td></tr>
        <tr><td>Ép ngày</td><td>“Dạ team sẽ cố.”</td><td>“Với velocity hiện tại, ngày đó chỉ đạt được nếu mình bỏ X và Y. Chị muốn giữ phần nào?”</td></tr>
        <tr><td>Chê chất lượng</td><td>“Bên em test kỹ rồi mà.”</td><td>“Em xin lỗi về lỗi này. Nguyên nhân là… Bên em đã… và từ nay sẽ…”</td></tr>
        <tr><td>Giận dữ</td><td>Cãi lại ngay</td><td>“Em hiểu anh đang rất lo về ngày ra mắt. Cho em 1 giờ để kiểm tra và gọi lại anh với phương án cụ thể.”</td></tr>
      </tbody></table></div>`}
  ],
  activity: {t:"Đóng vai đàm phán với chị Lan (35 phút)", html:`<p>Gõ vào chat với Claude: “Đóng vai chị Lan, GĐ vận hành FreshMart. Chị muốn có tính năng tích điểm trước 1/7, không lùi ngày, không tăng tiền. Hãy cứng rắn.” Trước khi bắt đầu, viết ra: lợi ích thật của chị Lan là gì, BATNA của bạn là gì, và 3 phương án bạn sẽ đưa ra. Sau buổi đóng vai, nhờ Claude chấm cách bạn đàm phán.</p>`},
  check: [["Lập trường và lợi ích khác nhau thế nào?","Lập trường là điều người ta đòi; lợi ích là lý do thật đằng sau. Đàm phán theo lợi ích mở ra nhiều giải pháp hơn."],["Khi nào nên dùng cách áp đặt?","Khi khẩn cấp hoặc liên quan đến an toàn, bảo mật, pháp lý."],["BATNA là gì?","Phương án tốt nhất bạn có nếu đàm phán không đạt được thỏa thuận."]],
  home: "Bài 5.3: đóng vai đàm phán với Claude và viết lại 3 bài học rút ra."
},
20: {
  goals: ["Hiểu các mô hình outsource phổ biến ở Việt Nam: dự án trọn gói, ODC, staff augmentation.", "Làm việc hiệu quả với khách Nhật và khách Âu Mỹ.", "Viết email xử lý tình huống khó rõ ràng và chuyên nghiệp."],
  agenda: [["0–10","Khởi động: khác biệt văn hóa nào làm bạn bất ngờ khi làm với khách nước ngoài?"],["10–35","Phần 1: Các mô hình outsource"],["35–75","Phần 2: Khách Nhật và khách Âu Mỹ"],["75–85","Nghỉ"],["85–115","Phần 3: Viết email chuyên nghiệp; Phần 4: Quản lý nhà cung cấp, SLA"],["115–145","Thực hành: email Tình huống 4"],["145–150","Tổng kết Module 5"]],
  parts: [
    {h:"1. Các mô hình outsource", html:`
      <div class="tablewrap"><table><thead><tr><th>Mô hình</th><th>Ai quản lý team</th><th>Vai trò PM phía Việt Nam</th></tr></thead><tbody>
        <tr><td><b>Dự án trọn gói</b></td><td>Công ty Việt Nam</td><td>Chịu trách nhiệm toàn bộ: phạm vi, tiến độ, chất lượng</td></tr>
        <tr><td><b>ODC</b> (team riêng dài hạn)</td><td>Chia sẻ: khách lo sản phẩm, VN lo con người và quy trình</td><td>Giữ năng suất, giữ người, minh bạch công sức, xây quan hệ lâu dài</td></tr>
        <tr><td><b>Staff augmentation</b> (cho thuê người)</td><td>Khách hàng</td><td>Chủ yếu lo nhân sự và hành chính</td></tr>
      </tbody></table></div>
      <p>Một cách tạo niềm tin hiệu quả với khách ở xa là: lịch làm việc đều đặn, demo đúng hạn, báo tin xấu sớm, và có một đầu mối duy nhất.</p>`},
    {h:"2. Khách Nhật và khách Âu Mỹ", html:`
      <p><b>Khách Nhật:</b></p>
      <ul>
        <li><b>報連相 (hō-ren-sō):</b> Báo cáo, Liên lạc, Bàn bạc. Báo sớm và thường xuyên, kể cả khi chưa có vấn đề.</li>
        <li>Tài liệu chi tiết: đặc tả, test case, báo cáo chất lượng. Coi trọng quy trình và con số.</li>
        <li><b>Danh sách Q&amp;A:</b> mọi câu hỏi về yêu cầu được ghi vào một file, có trạng thái và người trả lời.</li>
        <li>Không thích bất ngờ: trễ 1 ngày mà báo trước còn tốt hơn kịp hạn nhưng im lặng đến phút chót.</li>
        <li>Vai trò <b>BrSE</b> làm cầu nối ngôn ngữ và văn hóa.</li>
      </ul>
      <p><b>Khách Âu Mỹ:</b></p>
      <ul>
        <li>Trực tiếp, thích người chủ động đề xuất (“I’d suggest…”), không thích kiểu “yes” cho tất cả.</li>
        <li>Lệch múi giờ: làm việc bất đồng bộ qua Slack, Loom, tài liệu viết. Tận dụng 1–2 giờ trùng nhau cho các quyết định.</li>
        <li>Coi trọng giá trị kinh doanh hơn quy trình.</li>
      </ul>
      <p><b>Điểm chung:</b> ghi biên bản mọi cuộc họp và xác nhận lại bằng email. Khi nói “Yes”, nói rõ là “đã hiểu” hay “đồng ý”.</p>`},
    {h:"3. Viết email chuyên nghiệp", html:`
      <p><b>Cấu trúc 5 phần cho email xử lý sự cố:</b></p>
      <ol><li><b>Nhận và xin lỗi</b> (1 câu, không biện minh).</li><li><b>Chuyện gì đã xảy ra</b> và tác động.</li><li><b>Nguyên nhân gốc</b>.</li><li><b>Đã làm gì</b> và <b>sẽ làm gì để không lặp lại</b>.</li><li><b>Bước tiếp theo</b> kèm thời gian cụ thể.</li></ol>
      <p><b>Lưu ý:</b> tiêu đề có tên dự án và hành động cần làm; mỗi đoạn 2–3 câu; dùng gạch đầu dòng; nếu cần ai làm gì thì nêu tên người đó. Đọc lại một lần dưới góc nhìn của người nhận đang bực.</p>`},
    {h:"4. Quản lý nhà cung cấp và đối tác", html:`
      <p>Dự án CNTT hiếm khi chỉ có team bạn: nhà cung cấp POS, cổng thanh toán, dịch vụ SMS, công ty thiết kế thuê ngoài, nhà thầu phụ. Họ trễ thì bạn trễ.</p>
      <div class="tablewrap"><table><thead><tr><th>Giai đoạn</th><th>PM làm gì</th></tr></thead><tbody>
        <tr><td>Chọn</td><td>So sánh 2–3 bên theo tiêu chí có trọng số: năng lực, giá, thời gian, hỗ trợ, bảo mật. Ghi lại lý do chọn.</td></tr>
        <tr><td>Ký</td><td>Phạm vi, mốc bàn giao, tiêu chí nghiệm thu, <b>SLA</b> (cam kết mức dịch vụ: thời gian phản hồi, thời gian khắc phục, độ sẵn sàng 99,5%…), điều khoản phạt và chấm dứt.</td></tr>
        <tr><td>Theo dõi</td><td>Đưa mốc của nhà cung cấp vào kế hoạch tổng; họp định kỳ; có người đầu mối hai bên; theo dõi SLA hằng tháng.</td></tr>
        <tr><td>Nghiệm thu, đóng</td><td>Nghiệm thu từng phần trước khi thanh toán; thu lại tài liệu, tài khoản, mã nguồn nếu có.</td></tr>
      </tbody></table></div>
      <p><b>Ví dụ FreshGo:</b> API POS do nhà cung cấp của FreshMart làm, nhưng go-live của bạn phụ thuộc vào nó. Ghi rõ phụ thuộc này trong hợp đồng (“bên A cung cấp API trước 15/1; trễ thì mốc dự án lùi tương ứng”), làm mock API để team không phải chờ, và theo dõi như một rủi ro Đỏ.</p>`}
  ],
  activity: {t:"Email Tình huống 4 (30 phút)", html:`<p>Viết email gửi anh Minh sau buổi demo lỗi thanh toán (Tình huống 4 ở trang 6 tình huống), theo cấu trúc 5 phần, tối đa 200 chữ. Viết thêm một bản tiếng Anh nếu bạn đang làm với khách nước ngoài. Dán vào chat để Claude chấm.</p>`},
  check: [["SLA là gì và vì sao PM cần theo dõi nó?","Cam kết mức dịch vụ (thời gian phản hồi, khắc phục, độ sẵn sàng). Nhà cung cấp vi phạm SLA ảnh hưởng trực tiếp đến tiến độ và chất lượng dự án."],["Hō-ren-sō là gì?","Báo cáo, Liên lạc, Bàn bạc: thói quen báo sớm và thường xuyên, rất được coi trọng khi làm với khách Nhật."],["Vì sao nên có danh sách Q&A với khách?","Để mọi câu hỏi về yêu cầu có dấu vết, có người trả lời và trạng thái; tránh “em tưởng chị nói…”."],["Phần nào của email sự cố hay bị bỏ qua nhất?","Phần làm gì để không lặp lại và bước tiếp theo có thời gian cụ thể."]],
  home: "★ Nộp sản phẩm Module 5: email xử lý Tình huống 4. Sau đó làm Test 3 (phần M5)."
}
});
