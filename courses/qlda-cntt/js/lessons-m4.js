window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {
13: {
  goals: ["Phân biệt chất lượng với hạng cấp, và QA với QC.", "Hiểu chi phí chất lượng và vì sao nên phòng lỗi từ sớm.", "Lập được Definition of Done và kế hoạch UAT.", "Phân biệt mức độ nghiêm trọng với mức ưu tiên của bug."],
  agenda: [["0–10","Khởi động: bug đắt nhất bạn từng gặp là gì?"],["10–40","Phần 1: Chất lượng, QA và QC"],["40–75","Phần 2: Kiểm thử và quản lý bug"],["75–85","Nghỉ"],["85–115","Phần 3: Definition of Done và UAT"],["115–145","Thực hành: DoD và kế hoạch UAT FreshGo"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Chất lượng, QA và QC", html:`
      <p><b>Chất lượng</b> là mức độ sản phẩm đáp ứng yêu cầu. <b>Hạng cấp (grade)</b> là mức độ nhiều tính năng hay cao cấp. Một app ít tính năng nhưng không lỗi là hạng cấp thấp, chất lượng cao, và hoàn toàn chấp nhận được. Còn chất lượng thấp thì không bao giờ chấp nhận được.</p>
      <p><b>QA (đảm bảo chất lượng)</b> là phòng lỗi bằng quy trình: coding standard, code review, CI chạy test tự động, checklist trước khi release. <b>QC (kiểm soát chất lượng)</b> là tìm lỗi trên sản phẩm: chạy test, đo hiệu năng.</p>
      <p><b>Chi phí chất lượng</b> gồm chi phí phòng ngừa (đào tạo, review), chi phí đánh giá (test), và chi phí thất bại. Chi phí thất bại chia làm hai: phát hiện nội bộ (sửa bug trước khi release) và phát hiện bên ngoài (khách gặp lỗi, mất uy tín, bồi thường). Một lỗi yêu cầu sửa ở giai đoạn thiết kế có thể rẻ hơn hàng chục lần so với sửa sau go-live.</p>`},
    {h:"2. Kiểm thử và quản lý bug", html:`
      <p><b>Kim tự tháp kiểm thử:</b> đáy rộng là nhiều unit test (nhanh, rẻ), giữa là integration/API test, đỉnh là ít UI test end-to-end (chậm, dễ vỡ). Làm ngược lại (toàn test tay trên giao diện) thì test chậm và tốn kém.</p>
      <p><b>Các loại test cần có trong kế hoạch FreshGo:</b> chức năng, hồi quy (regression), hiệu năng (500 đơn đồng thời), bảo mật (OWASP Mobile Top 10, mã hóa dữ liệu cá nhân), tương thích (các dòng Android phổ biến), khả dụng (cho nhân viên cửa hàng lớn tuổi).</p>
      <div class="tablewrap"><table><thead><tr><th>Mức nghiêm trọng (do tester đánh giá)</th><th>Ví dụ</th></tr></thead><tbody>
        <tr><td><b>Critical</b></td><td>Không thanh toán được; mất dữ liệu đơn</td></tr>
        <tr><td><b>High</b></td><td>Thông báo trạng thái đơn không gửi</td></tr>
        <tr><td><b>Medium</b></td><td>Bộ lọc sắp xếp sai thứ tự</td></tr>
        <tr><td><b>Low</b></td><td>Lệch lề 2px, sai chính tả</td></tr>
      </tbody></table></div>
      <p><b>Mức ưu tiên</b> thì do PO hoặc PM quyết, theo tác động kinh doanh. Một lỗi chính tả trên banner khuyến mãi ngày ra mắt có mức nghiêm trọng Low nhưng mức ưu tiên Cao.</p>
      <p>Các chỉ số nên theo dõi: số bug mở theo mức độ, số bug lọt ra production, tỷ lệ test case đạt.</p>`},
    {h:"3. Definition of Done và UAT", html:`
      <p><b>DoD</b> là tiêu chuẩn chất lượng chung của team, viết thành checklist và tăng dần theo thời gian (xem Mẫu 8). Story không đạt DoD thì không được demo và không tính velocity.</p>
      <p><b>Kế hoạch UAT</b> trả lời 6 câu hỏi:</p>
      <ol><li><b>Ai test?</b> Chị Lan cùng 3 quản lý cửa hàng và 2 shipper.</li><li><b>Test gì?</b> Khoảng 40 kịch bản nghiệp vụ, viết theo ngôn ngữ người dùng.</li><li><b>Ở đâu?</b> Môi trường staging có dữ liệu giống thật (đã ẩn thông tin cá nhân).</li><li><b>Bao lâu?</b> 2 tuần, có 1 vòng sửa lỗi.</li><li><b>Tiêu chí đạt?</b> 100% kịch bản Must đạt; không còn bug Critical hoặc High; bug Medium dưới 5 và có lịch sửa.</li><li><b>Ai ký?</b> Chị Lan ký biên bản UAT.</li></ol>
      <p>Mẹo: cho khách “UAT nhỏ” ở mỗi Sprint Review, để UAT cuối không có bất ngờ lớn.</p>`}
  ],
  activity: {t:"DoD và kế hoạch UAT FreshGo (30 phút)", html:`<p>Viết DoD gồm 6–8 dòng phù hợp với team FreshGo. Sau đó điền kế hoạch UAT theo 6 câu hỏi ở trên, kèm 5 kịch bản UAT mẫu, ví dụ: “Khách đặt 3 món, chọn COD, cửa hàng nhận đơn trong 5 phút, shipper giao, khách nhận thông báo hoàn thành.”</p>`},
  check: [["Code review là QA hay QC?","QA: phòng lỗi bằng quy trình."],["Lỗi chính tả trên banner ngày ra mắt có mức nghiêm trọng và ưu tiên thế nào?","Nghiêm trọng Low, nhưng ưu tiên Cao vì ảnh hưởng hình ảnh trong ngày quan trọng."],["Ai ký biên bản UAT?","Đại diện khách hàng có thẩm quyền nghiệp vụ, với FreshGo là chị Lan (PO phía khách)."]],
  home: "Bài 4.1: hoàn thiện DoD và kế hoạch UAT đầy đủ."
},
14: {
  goals: ["Nhận diện rủi ro bằng 4 kỹ thuật, trong đó có pre-mortem.", "Viết rủi ro theo dạng Nếu…thì… và chấm điểm Khả năng × Ảnh hưởng.", "Chọn chiến lược ứng phó cho cả mối đe dọa lẫn cơ hội.", "Duy trì Risk Register sống, không phải tài liệu viết một lần."],
  agenda: [["0–10","Khởi động: rủi ro nào bạn đã thấy trước nhưng không ai xử lý?"],["10–40","Phần 1: Nhận diện rủi ro"],["40–70","Phần 2: Đánh giá rủi ro"],["70–80","Nghỉ"],["80–110","Phần 3: Ứng phó và theo dõi"],["110–145","Thực hành: pre-mortem FreshGo"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Nhận diện rủi ro", html:`
      <p><b>Rủi ro</b> là sự kiện không chắc chắn, nếu xảy ra sẽ ảnh hưởng đến mục tiêu. Có <b>mối đe dọa</b> (tác động xấu) và <b>cơ hội</b> (tác động tốt).</p>
      <p><b>Viết rủi ro theo cấu trúc:</b> <i>Vì [nguyên nhân], có thể [sự kiện], dẫn đến [hậu quả]</i>. Ví dụ: “Vì tài liệu API POS thiếu, có thể việc tích hợp mất gấp đôi dự kiến, dẫn đến trễ mốc beta 2–3 tuần.”</p>
      <p><b>4 kỹ thuật nhận diện:</b></p>
      <ul><li><b>Brainstorm</b> với team, theo từng nhóm: kỹ thuật, con người, khách hàng, bên thứ ba, quy định.</li><li><b>Checklist</b> từ các dự án trước (Lessons Learned).</li><li><b>Rà giả định:</b> mỗi giả định trong Charter đều là một rủi ro tiềm ẩn.</li><li><b>Pre-mortem:</b> “Giả sử 6 tháng nữa FreshGo thất bại thảm hại. Hãy viết ra lý do.” Cách này giúp mọi người dám nói ra những lo ngại họ ngại nói trong không khí lạc quan.</li></ul>`},
    {h:"2. Đánh giá rủi ro", html:`
      <p>Chấm <b>Khả năng</b> (1–5) và <b>Ảnh hưởng</b> (1–5), rồi Điểm = KN × AH. Cần thống nhất trước thang chấm cho cả team, ví dụ:</p>
      <div class="tablewrap"><table><thead><tr><th>Điểm</th><th>Khả năng</th><th>Ảnh hưởng tiến độ</th><th>Ảnh hưởng chi phí</th></tr></thead><tbody>
        <tr><td class="num">1</td><td>&lt; 10%</td><td>&lt; 1 tuần</td><td>&lt; 20 triệu</td></tr>
        <tr><td class="num">3</td><td>30–50%</td><td>2–4 tuần</td><td>50–150 triệu</td></tr>
        <tr><td class="num">5</td><td>&gt; 70%</td><td>Trễ go-live</td><td>&gt; 300 triệu</td></tr>
      </tbody></table></div>
      <p>Điểm từ 15 trở lên là Đỏ: phải có phương án ngay và báo nhà tài trợ. Từ 8 đến 14 là Vàng: có phương án và theo dõi hằng tuần. Dưới 8 là Xanh: theo dõi định kỳ.</p>`},
    {h:"3. Ứng phó và theo dõi", html:`
      <div class="tablewrap"><table><thead><tr><th>Mối đe dọa</th><th>Cơ hội</th></tr></thead><tbody>
        <tr><td><b>Tránh:</b> đổi kế hoạch để loại bỏ rủi ro (không dùng thư viện chưa ổn định)</td><td><b>Khai thác:</b> làm cho chắc chắn xảy ra (giao người giỏi nhất cho việc quan trọng)</td></tr>
        <tr><td><b>Giảm:</b> hạ khả năng hoặc ảnh hưởng (dùng mock API, pair programming)</td><td><b>Tăng cường:</b> tăng khả năng xảy ra (dùng thư viện UI có sẵn để làm nhanh hơn)</td></tr>
        <tr><td><b>Chuyển giao:</b> sang bên thứ ba (điều khoản phạt trong hợp đồng, bảo hiểm)</td><td><b>Chia sẻ:</b> hợp tác với bên có năng lực</td></tr>
        <tr><td colspan="2"><b>Chấp nhận:</b> chủ động (để sẵn dự phòng) hoặc bị động (xảy ra thì tính)</td></tr>
      </tbody></table></div>
      <p>Mỗi rủi ro cần có <b>người phụ trách</b> và <b>dấu hiệu cảnh báo</b> (ví dụ: “nhà cung cấp không trả lời quá 3 ngày”). Rà soát Risk Register 15 phút mỗi tuần. Trong Scrum, rủi ro kỹ thuật thường được xử lý bằng một <b>spike</b>: story ngắn để thử nghiệm và học, đặt ở Sprint sớm.</p>`}
  ],
  activity: {t:"Pre-mortem FreshGo (35 phút)", html:`<p>Bấm giờ 10 phút, viết thật nhanh mọi lý do khiến “FreshGo thất bại”. Gom các lý do thành nhóm, rồi viết lại 10 rủi ro lớn nhất theo cấu trúc Vì…có thể…dẫn đến…. Chấm điểm theo thang ở Phần 2 và chọn chiến lược ứng phó. Bắt buộc có ít nhất 1 rủi ro về API POS, 1 về Luật Bảo vệ dữ liệu cá nhân và 1 cơ hội.</p>`},
  check: [["Pre-mortem khác brainstorm thông thường ở điểm nào?","Giả định dự án đã thất bại, nên mọi người dám nói ra những lo ngại họ ngại nói khi không khí đang lạc quan."],["Ký hợp đồng có điều khoản phạt nếu nhà cung cấp trễ là chiến lược gì?","Chuyển giao."],["Một rủi ro Vàng cần được theo dõi thế nào?","Có phương án ứng phó và người phụ trách, rà soát hằng tuần, có dấu hiệu cảnh báo rõ ràng."]],
  home: "Bài 4.2: Risk Register 10 rủi ro hoàn chỉnh theo Mẫu 4."
},
15: {
  goals: ["Phân biệt phình phạm vi với gold plating.", "Vận hành quy trình kiểm soát thay đổi 5 bước, gồm cả phân tích tác động.", "Trả lời yêu cầu thay đổi bằng các phương án, không bằng “có” hay “không”."],
  agenda: [["0–10","Khởi động: yêu cầu “nhỏ thôi mà” gần nhất bạn nhận được"],["10–40","Phần 1: Các nguồn gây thay đổi"],["40–75","Phần 2: Quy trình kiểm soát thay đổi"],["75–85","Nghỉ"],["85–115","Phần 3: Thay đổi trong Agile và Fixed Price"],["115–145","Thực hành: đóng vai xử lý Change Request"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Các nguồn gây thay đổi", html:`
      <p>Thay đổi là bình thường. Vấn đề chỉ là thay đổi <b>không được kiểm soát</b>.</p>
      <ul><li><b>Phình phạm vi (scope creep):</b> yêu cầu tăng dần mà không đánh giá tác động. Thường đến qua Zalo, qua cuộc gọi, hoặc câu “tiện thì làm luôn”.</li><li><b>Gold plating:</b> team tự thêm thứ khách không yêu cầu (“em làm thêm hiệu ứng cho đẹp”). Nghe có vẻ tốt, nhưng tốn công, tăng rủi ro và không được trả tiền.</li><li><b>Nguồn chính đáng:</b> quy định mới, đối thủ ra tính năng mới, phát hiện lỗi trong yêu cầu ban đầu.</li></ul>`},
    {h:"2. Quy trình kiểm soát thay đổi", html:`
      <ol>
        <li><b>Ghi nhận:</b> mọi yêu cầu đều vào Change Log, dù đến từ kênh nào. Trả lời khách: “Em ghi nhận rồi, 2 ngày nữa em gửi đánh giá tác động.”</li>
        <li><b>Phân tích tác động</b> lên phạm vi, tiến độ, chi phí, chất lượng và rủi ro. Cần hỏi team, không tự đoán.</li>
        <li><b>Đưa ra phương án:</b> thường 2–3 phương án, kèm đề xuất của PM.</li>
        <li><b>Quyết định:</b> người có thẩm quyền (nhà tài trợ hoặc Hội đồng thay đổi – CCB) duyệt, từ chối hoặc hoãn, bằng văn bản.</li>
        <li><b>Cập nhật:</b> kế hoạch, backlog, hợp đồng, rồi thông báo cho team và các bên liên quan.</li>
      </ol>
      <p><b>Ví dụ:</b> chị Lan muốn thêm “đặt hàng định kỳ hằng tuần”. Team ước lượng 30 man-day. Các phương án:</p>
      <ul><li>(A) Thêm vào bản 1.0: lùi go-live 2–3 tuần và tốn thêm khoảng 60 triệu (30 man-day × đơn giá 42 triệu/man-month, tính 22 ngày công/tháng).</li><li>(B) Đổi lấy “lọc sản phẩm nâng cao” (cùng độ lớn): giữ nguyên ngày và giá.</li><li>(C) Đưa vào bản 1.1, 6 tuần sau go-live.</li></ul>
      <p>PM đề xuất (C), vì mốc 1/7 là cứng và tính năng này chỉ có giá trị khi đã có tập khách quen.</p>`},
    {h:"3. Thay đổi trong Agile và Fixed Price", html:`
      <p>Trong Scrum thuần, thay đổi đơn giản là vào Product Backlog và PO sắp xếp. Với hợp đồng Fixed Price thì cần thêm một lớp:</p>
      <ul><li><b>Đổi chứ không thêm:</b> thay story có cùng độ lớn, không cần ký thêm hợp đồng (ghi lại trong Change Log).</li><li><b>Thay đổi làm tăng tổng phạm vi:</b> lập Change Request có báo giá và phụ lục hợp đồng.</li><li><b>Thỏa thuận trước</b> trong hợp đồng: một “ngân sách thay đổi”, ví dụ 5% giá trị hợp đồng, để xử lý nhanh các thay đổi nhỏ.</li></ul>
      <p><b>Câu nói nên dùng:</b> “Làm được ạ. Để em gửi chị các phương án về thời gian và chi phí trước thứ Năm để chị chọn.” Câu nên tránh: “Không được, ngoài hợp đồng” hay “Dạ để em bảo team làm luôn”.</p>`}
  ],
  activity: {t:"Đóng vai xử lý Change Request (30 phút)", html:`<p>Nhờ Claude đóng vai chị Lan đưa ra yêu cầu “đặt hàng định kỳ”. Bạn thực hành đủ 5 bước: ghi nhận ngay trong cuộc trò chuyện, hỏi để làm rõ, rồi điền Mẫu 5 với 3 phương án và đề xuất của bạn.</p>`},
  check: [["Dev tự thêm hiệu ứng chuyển trang mà không ai yêu cầu. Đây là gì?","Gold plating: tốn công, thêm rủi ro, không mang lại giá trị đã thỏa thuận."],["Ai quyết định duyệt Change Request ảnh hưởng ngày go-live?","Nhà tài trợ hoặc Hội đồng thay đổi theo quy định của dự án. Không phải PM tự quyết."],["Bước nào hay bị bỏ qua nhất trong quy trình thay đổi?","Phân tích tác động và cập nhật kế hoạch sau khi duyệt."]],
  home: "Bài 4.3: điền Change Request “đặt hàng định kỳ” với đánh giá tác động đầy đủ."
},
16: {
  goals: ["Quản lý issue và nhật ký RAID.", "Escalate đúng lúc, đúng người, kèm phương án.", "Lập kế hoạch phát hành với checklist go-live và phương án rollback."],
  agenda: [["0–10","Ôn bài: Change Request của bạn"],["10–40","Phần 1: Issue và nhật ký RAID"],["40–70","Phần 2: Escalation"],["70–80","Nghỉ"],["80–115","Phần 3: Phát hành và go-live; Phần 4: Môi trường, CI/CD, rollback"],["115–145","Thực hành: checklist go-live FreshGo"],["145–150","Tổng kết Module 4"]],
  parts: [
    {h:"1. Issue và nhật ký RAID", html:`
      <p><b>Issue</b> là vấn đề đã xảy ra và đang cản trở dự án. Mỗi issue cần: mô tả, tác động, người phụ trách, hạn xử lý, trạng thái.</p>
      <p><b>Nhật ký RAID</b> gom bốn thứ vào một chỗ:</p>
      <ul><li><b>R</b>isks: rủi ro.</li><li><b>A</b>ssumptions: giả định.</li><li><b>I</b>ssues: vấn đề đang xảy ra.</li><li><b>D</b>ependencies: phụ thuộc vào bên ngoài (API POS, tài khoản Apple Developer do khách đứng tên).</li></ul>
      <p>Nhiều PM chỉ cần một file RAID cùng Jira là đủ quản lý một dự án cỡ FreshGo.</p>`},
    {h:"2. Escalation", html:`
      <p>Escalate là báo lên cấp cao hơn khi vấn đề vượt quyền hạn của mình. Escalate không phải là mách lẻo hay đổ lỗi.</p>
      <div class="tablewrap"><table><thead><tr><th>Mức</th><th>Khi nào</th><th>Báo ai</th></tr></thead><tbody>
        <tr><td class="num">1</td><td>Vướng mắc trong team, xử lý được trong 1–2 ngày</td><td>PM / Tech Lead tự xử lý</td></tr>
        <tr><td class="num">2</td><td>Ảnh hưởng mốc Sprint, cần nguồn lực khác</td><td>Trưởng bộ phận (Delivery Manager)</td></tr>
        <tr><td class="num">3</td><td>Ảnh hưởng mốc hợp đồng hoặc ngân sách</td><td>Nhà tài trợ hai bên</td></tr>
      </tbody></table></div>
      <p><b>Cấu trúc một email escalate tốt:</b> vấn đề (1 câu) → tác động (con số) → đã làm gì → <b>phương án và đề xuất</b> → cần quyết định gì, trước khi nào. Thống nhất ma trận escalation này ngay từ buổi kickoff.</p>`},
    {h:"3. Phát hành và go-live", html:`
      <p><b>Các môi trường:</b> Dev → Test → Staging (giống production) → Production.</p>
      <p><b>Checklist go-live FreshGo (rút gọn):</b></p>
      <ul>
        <li>UAT đã ký; không còn bug Critical hoặc High.</li>
        <li>Test hiệu năng đạt 500 đơn đồng thời.</li>
        <li>App đã được Apple và Google duyệt (nộp trước ít nhất 2 tuần).</li>
        <li>Cổng thanh toán đã chuyển từ sandbox sang tài khoản thật và test giao dịch thật.</li>
        <li>Dữ liệu sản phẩm và giá của 30 cửa hàng đã nhập và kiểm tra.</li>
        <li>Nhân viên cửa hàng và shipper đã được đào tạo; có tài liệu hướng dẫn ngắn.</li>
        <li>Đã có kênh hỗ trợ và lịch trực.</li>
        <li><b>Phương án rollback:</b> nếu lỗi nghiêm trọng thì quay về nhận đơn qua Zalo. Ai quyết định, trong bao lâu.</li>
        <li>Giám sát hệ thống và cảnh báo lỗi đã bật.</li>
      </ul>
      <p><b>Hypercare:</b> 2–4 tuần sau go-live, team trực tăng cường và họp nhanh mỗi ngày để xử lý sự cố. Có thể dùng Kanban cho giai đoạn này.</p>`},
    {h:"4. Kỹ thuật tối thiểu cho PM: môi trường, CI/CD, release và rollback", html:`
      <p>PM không cần viết code, nhưng phải hiểu đủ để lập kế hoạch và hỏi đúng câu.</p>
      <div class="tablewrap"><table><thead><tr><th>Khái niệm</th><th>PM cần biết</th></tr></thead><tbody>
        <tr><td><b>Môi trường</b> dev → staging (UAT) → production</td><td>Khách chỉ test trên staging có dữ liệu giống thật. Việc dựng staging phải có trong kế hoạch từ Sprint 1.</td></tr>
        <tr><td><b>CI/CD</b></td><td>Mỗi lần merge code được build, test và triển khai tự động. Không có CI/CD thì mỗi lần phát hành tốn nhiều giờ và dễ lỗi.</td></tr>
        <tr><td><b>Release plan</b></td><td>Ngày, phiên bản, danh sách tính năng, người trực, thời điểm “đóng băng code” (code freeze), checklist trước khi phát hành.</td></tr>
        <tr><td><b>Rollback</b></td><td>Cách quay về bản cũ trong bao lâu nếu lỗi. Không có phương án rollback thì không go-live.</td></tr>
        <tr><td><b>Feature flag</b></td><td>Tắt/bật tính năng mà không phát hành lại; dùng để mở dần cho 3 cửa hàng thí điểm rồi mới đủ 30.</td></tr>
        <tr><td><b>Store review</b></td><td>App Store/Google Play duyệt 1–7 ngày; nộp sớm, không đặt go-live sát ngày nộp.</td></tr>
      </tbody></table></div>
      <p><b>Bảo mật và tuân thủ khách hay hỏi:</b> ISO/IEC 27001 (hệ thống quản lý an toàn thông tin của công ty), kiểm thử xâm nhập (pentest) trước go-live, NDA, phân quyền truy cập môi trường của khách. Khách lớn và khách nước ngoài thường yêu cầu bằng chứng; PM đưa các mục này vào kế hoạch và Risk Register.</p>
      <p><b>Câu hỏi PM nên hỏi tech lead trước go-live:</b> “Nếu lỗi nghiêm trọng lúc 22h, mất bao lâu để quay lại bản cũ, ai làm, dữ liệu có bị mất không?”</p>`}
  ],
  activity: {t:"Checklist go-live FreshGo (30 phút)", html:`<p>Mở rộng checklist ở trên thành 20 mục, chia theo nhóm: Kỹ thuật, Dữ liệu, Con người, Vận hành, Truyền thông. Mỗi mục có người phụ trách và hạn. Viết thêm kịch bản rollback 5 bước.</p>`},
  check: [["Điều kiện tối thiểu về kỹ thuật trước khi cho go-live là gì?","Đã test trên staging, có release plan và checklist, có phương án rollback đã thử, có người trực sau phát hành."],["Chữ D trong RAID là gì?","Dependencies: các phụ thuộc vào bên ngoài."],["Email escalate nên có phần nào mà người mới hay quên?","Phương án đề xuất, và quyết định cần cấp trên đưa ra trước khi nào."],["Hypercare là gì?","Giai đoạn 2–4 tuần sau go-live, team trực tăng cường để xử lý sự cố nhanh."]],
  home: "★ Nộp sản phẩm Module 4: Kế hoạch rủi ro & chất lượng (DoD, UAT, Risk Register, Change Request). Sau đó làm Test 2."
}
});
