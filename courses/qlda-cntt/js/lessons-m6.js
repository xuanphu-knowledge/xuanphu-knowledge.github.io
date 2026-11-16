window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {
21: {
  goals: ["Tính và giải thích PV, EV, AC, SV, CV, SPI, CPI, EAC, ETC, VAC.", "Đo EV bằng các quy tắc khách quan (0/100, 50/50).", "Dự báo ngày xong trong Agile bằng một khoảng velocity."],
  agenda: [["0–10","Câu hỏi mở: sếp bạn hỏi “dự án ổn không?”, bạn trả lời dựa vào đâu?"],["10–50","Phần 1: EVM từng bước"],["50–80","Phần 2: Đo EV và dự báo"],["80–90","Nghỉ"],["90–115","Phần 3: Theo dõi trong Agile"],["115–145","Thực hành: tính EVM tháng 4 cho FreshGo"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. EVM từng bước", html:`
      <p>Ví dụ dễ nhớ: dự án sơn 10 phòng trong 10 ngày, ngân sách 10 triệu (1 triệu/phòng). Hết ngày 5, sơn xong 4 phòng, đã chi 5 triệu.</p>
      <div class="tablewrap"><table><thead><tr><th>Chỉ số</th><th>Công thức</th><th>Ví dụ</th><th>Ý nghĩa</th></tr></thead><tbody>
        <tr><td><b>BAC</b></td><td>Tổng ngân sách</td><td class="num">10</td><td></td></tr>
        <tr><td><b>PV</b></td><td>Giá trị kế hoạch đến hôm nay</td><td class="num">5</td><td>Lẽ ra xong 5 phòng</td></tr>
        <tr><td><b>EV</b></td><td>% hoàn thành thực × BAC</td><td class="num">4</td><td>Thực tế xong 4 phòng</td></tr>
        <tr><td><b>AC</b></td><td>Chi phí thực tế</td><td class="num">5</td><td>Đã chi 5 triệu</td></tr>
        <tr><td><b>SV</b></td><td>EV − PV</td><td class="num">−1</td><td>Chậm 1 triệu giá trị công việc</td></tr>
        <tr><td><b>CV</b></td><td>EV − AC</td><td class="num">−1</td><td>Vượt chi 1 triệu</td></tr>
        <tr><td><b>SPI</b></td><td>EV / PV</td><td class="num">0,80</td><td>Chạy bằng 80% tốc độ kế hoạch</td></tr>
        <tr><td><b>CPI</b></td><td>EV / AC</td><td class="num">0,80</td><td>1 đồng chi ra chỉ được 0,8 đồng việc</td></tr>
        <tr><td><b>EAC</b></td><td>BAC / CPI</td><td class="num">12,5</td><td>Nếu giữ đà này, tổng chi sẽ là 12,5</td></tr>
        <tr><td><b>ETC</b></td><td>EAC − AC</td><td class="num">7,5</td><td>Cần chi thêm 7,5 nữa</td></tr>
        <tr><td><b>VAC</b></td><td>BAC − EAC</td><td class="num">−2,5</td><td>Sẽ vượt ngân sách 2,5</td></tr>
      </tbody></table></div>
      <p>Mẹo nhớ: <b>EV luôn đứng đầu</b> trong mọi công thức sai lệch và chỉ số. Âm hoặc nhỏ hơn 1 là xấu.</p>`},
    {h:"2. Đo EV và dự báo", html:`
      <p>Cách đo EV sai phổ biến nhất là hỏi dev “xong bao nhiêu %?” và ghi “80%”. Dùng các quy tắc khách quan thay vào:</p>
      <ul><li><b>0/100:</b> chỉ tính khi xong hẳn, đạt DoD. Hợp với gói việc ngắn, và cũng là cách Scrum tính velocity.</li><li><b>50/50:</b> bắt đầu thì tính 50%, xong thì tính nốt 50%. Hợp với gói việc dài 2–4 tuần.</li><li><b>Theo mốc nhỏ có trọng số:</b> thiết kế xong 20%, code xong 60%, test xong 100%.</li></ul>
      <p><b>EAC có nhiều công thức:</b> BAC / CPI (giả định hiệu suất chi phí giữ nguyên); AC + (BAC − EV) (giả định phần còn lại sẽ đúng kế hoạch, thường quá lạc quan). Khi báo cáo, nên nói rõ mình dùng giả định nào.</p>
      <p><b>Ví dụ FreshGo cuối tháng 3:</b> BAC 2,4; PV 1,2; EV 1,0; AC 1,1 → SPI 0,83, CPI 0,91, EAC ≈ 2,64 tỷ, VAC ≈ −0,24 tỷ. Dùng máy tính EVM ở trang Module 6 để thử các kịch bản.</p>`},
    {h:"3. Theo dõi trong Agile", html:`
      <ul>
        <li><b>Burnup theo bản phát hành:</b> nhìn được cả tiến độ lẫn phạm vi phình ra.</li>
        <li><b>Dự báo theo khoảng velocity:</b> phần còn lại ÷ velocity cao nhất ra ngày sớm nhất; ÷ velocity thấp nhất ra ngày muộn nhất.</li>
        <li><b>EVM theo story point (AgileEVM):</b> PV = % điểm lẽ ra xong × BAC; EV = % điểm đã xong × BAC. Cách này cho phép báo cáo cùng ngôn ngữ với hợp đồng Fixed Price.</li>
      </ul>
      <p><b>Ví dụ:</b> FreshGo có 300 điểm, đã xong 120 điểm (40%), kế hoạch lẽ ra đã xong 50%. Với BAC 2,4 tỷ thì EV = 0,96 tỷ, PV = 1,2 tỷ, SPI = 0,80.</p>`}
  ],
  activity: {t:"Tính EVM tháng 4 cho FreshGo (30 phút)", html:`<p>Cuối tháng 4: PV = 1,6 tỷ; EV = 1,5 tỷ; AC = 1,45 tỷ; BAC = 2,4 tỷ. Tính SV, CV, SPI, CPI, EAC, ETC, VAC rồi viết 3 câu nhận định cho anh Minh.</p><details><summary style="cursor:pointer;color:var(--accent);font-weight:600">Đáp án</summary><p>SV = −0,1 · CV = +0,05 · SPI ≈ 0,94 · CPI ≈ 1,03 · EAC ≈ 2,32 tỷ · ETC ≈ 0,87 tỷ · VAC ≈ +0,08 tỷ. Nhận định: hơi chậm tiến độ (Vàng) nhưng đang tiết kiệm chi phí (Xanh). Có thể dùng một phần tiền tiết kiệm để tăng tốc trên đường găng.</p></details>`},
  check: [["SPI = 1,1 và CPI = 0,9 nghĩa là gì?","Nhanh hơn kế hoạch nhưng đang vượt chi phí. Có thể team đang tăng ca hoặc thêm người."],["Vì sao không nên đo EV bằng cách hỏi “xong bao nhiêu %”?","Vì cảm tính và thường lạc quan (hội chứng “xong 90%” kéo dài mãi). Nên dùng 0/100, 50/50 hoặc mốc có trọng số."],["Velocity 18–24, còn 120 điểm. Dự báo bao nhiêu Sprint?","120 / 24 = 5 Sprint (sớm nhất) đến 120 / 18 ≈ 6,7, tức 7 Sprint (muộn nhất)."]],
  home: "Bài 6.1: tính EVM tháng 4 và viết 3 câu nhận định gửi CEO."
},
22: {
  goals: ["Thực hiện đầy đủ các bước đóng dự án: nghiệm thu, bàn giao, bảo hành, đóng hợp đồng.", "Viết biên bản nghiệm thu có danh sách tồn đọng.", "Tổ chức buổi Lessons Learned không đổ lỗi."],
  agenda: [["0–10","Khởi động: dự án nào của bạn “không bao giờ kết thúc”?"],["10–45","Phần 1: Nghiệm thu và bàn giao"],["45–75","Phần 2: Bảo hành, đóng hành chính và đóng hợp đồng"],["75–85","Nghỉ"],["85–115","Phần 3: Lessons Learned"],["115–145","Thực hành: biên bản nghiệm thu FreshGo"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Nghiệm thu và bàn giao", html:`
      <p><b>Nghiệm thu</b> dựa trên <b>tiêu chí đã thống nhất từ trước</b>: Scope Statement, tiêu chí UAT, hợp đồng. Không dựa trên cảm giác “đã ưng chưa”.</p>
      <p><b>Biên bản nghiệm thu</b> gồm: các hạng mục nghiệm thu; kết quả UAT; <b>danh sách tồn đọng</b> (các lỗi nhỏ được chấp nhận, kèm hạn sửa); kết luận; chữ ký hai bên. Danh sách tồn đọng giúp khách yên tâm ký mà không cần chờ mọi thứ hoàn hảo.</p>
      <p><b>Bàn giao</b> gồm: mã nguồn (repo, quyền truy cập), tài liệu (kiến trúc, API, vận hành, hướng dẫn sử dụng), tài khoản (cloud, store, cổng thanh toán, tên miền) chuyển sang tên khách, và <b>chuyển giao kiến thức</b> (2–3 buổi cho IT của khách, có quay video).</p>`},
    {h:"2. Bảo hành, đóng hành chính và đóng hợp đồng", html:`
      <ul>
        <li><b>Bảo hành:</b> thời hạn (ví dụ 3–6 tháng), phạm vi (chỉ sửa lỗi so với đặc tả, không làm tính năng mới), thời gian phản hồi theo mức độ lỗi, kênh hỗ trợ. Tính năng mới sau go-live là hợp đồng bảo trì hoặc phát triển tiếp.</li>
        <li><b>Đóng hành chính:</b> lưu trữ hồ sơ dự án, cập nhật dữ liệu ước lượng thực tế vào kho dữ liệu công ty (để lần sau ước lượng tốt hơn), đóng các task Jira.</li>
        <li><b>Giải phóng nhân sự:</b> báo trước cho bộ phận quản lý nguồn lực, viết nhận xét đánh giá cho từng thành viên.</li>
        <li><b>Đóng hợp đồng:</b> xuất hóa đơn đợt cuối, thanh lý hợp đồng, đóng các hợp đồng với nhà cung cấp phụ.</li>
        <li><b>Ăn mừng:</b> ghi nhận công sức của team. Nhiều PM bỏ quên việc này, nhưng nó ảnh hưởng đến dự án tiếp theo.</li>
      </ul>`},
    {h:"3. Lessons Learned", html:`
      <p><b>Nguyên tắc chính:</b> “Chúng ta tin rằng mọi người đã làm tốt nhất có thể với thông tin, kỹ năng và nguồn lực họ có lúc đó.” Mục tiêu là cải tiến hệ thống, không tìm người có lỗi.</p>
      <p><b>Cách tổ chức (90 phút):</b></p>
      <ol><li>Vẽ dòng thời gian dự án, mọi người dán sự kiện chính lên đó (20 phút).</li><li>Đánh dấu điểm cao và điểm thấp (15 phút).</li><li>Thảo luận: điều gì nên tiếp tục, điều gì nên thay đổi, và vì sao (30 phút).</li><li>Rút ra 5–7 khuyến nghị cụ thể cho dự án sau (15 phút).</li><li>Lưu vào kho chung của công ty, gắn theo loại dự án (10 phút).</li></ol>
      <p><b>Ví dụ khuyến nghị tốt:</b> “Với mọi dự án có tích hợp hệ thống bên thứ ba, làm spike tích hợp trong 2 tuần đầu và ghi điều khoản SLA phản hồi vào hợp đồng.” Ví dụ khuyến nghị kém: “Cần giao tiếp tốt hơn.”</p>`}
  ],
  activity: {t:"Biên bản nghiệm thu FreshGo (30 phút)", html:`<p>Dùng Mẫu 10. Giả định: UAT đạt 38/40 kịch bản; 2 kịch bản lỗi mức Medium (bộ lọc sai khi chọn nhiều cửa hàng; ảnh sản phẩm tải chậm trên mạng 3G). Viết biên bản nghiệm thu gồm danh sách tồn đọng có hạn sửa, danh sách bàn giao và điều kiện bảo hành 3 tháng.</p>`},
  check: [["Khách đòi thêm tính năng mới trong thời gian bảo hành. PM xử lý thế nào?","Giải thích bảo hành chỉ gồm sửa lỗi so với đặc tả. Tính năng mới thì ghi nhận và báo giá như Change Request hoặc hợp đồng phát triển tiếp."],["Vì sao cần danh sách tồn đọng trong biên bản nghiệm thu?","Để khách có thể ký khi còn lỗi nhỏ, vẫn được đảm bảo lỗi sẽ được sửa, và dự án không bị treo vô thời hạn."],["Khuyến nghị “cần giao tiếp tốt hơn” có ổn không?","Không. Quá chung chung. Khuyến nghị phải cụ thể, làm được và kiểm tra được."]],
  home: "Bài 6.2: biên bản nghiệm thu giai đoạn 1 và danh sách bàn giao."
},
23: {
  goals: ["Áp dụng quy trình 4 bước để cứu một dự án đang “cháy”.", "Dùng MoSCoW và dữ liệu thật để cắt phạm vi.", "Cấu trúc một bản đề xuất mà CEO quyết được trong 3 phút."],
  agenda: [["0–10","Đọc lại đề Capstone"],["10–40","Phần 1: Quy trình cứu dự án"],["40–70","Phần 2: Cắt phạm vi và lập lại kế hoạch"],["70–80","Nghỉ"],["80–100","Phần 3: Cấu trúc bản đề xuất"],["100–145","Làm bài Capstone"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Quy trình cứu dự án", html:`
      <ol>
        <li><b>Cầm máu (tuần 1):</b> dừng nhận yêu cầu mới, đóng băng phạm vi tạm thời, đảm bảo team không kiệt sức (dừng tăng ca kéo dài).</li>
        <li><b>Chẩn đoán:</b> số liệu thật (EVM, velocity, backlog còn lại, số bug); nói chuyện riêng với từng thành viên, với PO, với nhà tài trợ. Tìm 3–5 nguyên nhân gốc, không chỉ triệu chứng.</li>
        <li><b>Lập lại kế hoạch:</b> các phương án có số liệu, ưu tiên theo giá trị, bộ mốc mới có thể đạt được.</li>
        <li><b>Giao tiếp:</b> trình nhà tài trợ, chốt phương án, rồi thông báo cho mọi bên kèm lý do rõ ràng.</li>
      </ol>
      <p><b>Trong Capstone:</b> 210 điểm ÷ velocity khoảng 20 = 10,5 Sprint, trong khi chỉ còn 5 Sprint. Không cách tăng tốc nào gấp đôi được năng suất, nên <b>bắt buộc phải cắt phạm vi</b>, lùi ngày, hoặc kết hợp cả hai.</p>`},
    {h:"2. Cắt phạm vi và lập lại kế hoạch", html:`
      <ul>
        <li>Gắn lại nhãn MoSCoW cho toàn bộ 210 điểm cùng chị Lan, dựa trên Business Case: tính năng nào trực tiếp làm giảm sót đơn và đem lại doanh thu?</li>
        <li>Mục tiêu: phần Must còn khoảng 90–100 điểm (vừa 5 Sprint với velocity 20). Phần còn lại vào bản 1.1.</li>
        <li>Đề xuất thay thế cho tích điểm (lợi ích thật là giữ chân khách): mã giảm giá cho đơn thứ hai, làm được trong khoảng 5 điểm.</li>
        <li>Xử lý 3 Change Request chưa ký: hoặc ký bù kèm báo giá, hoặc trừ vào phần phạm vi đã cắt. Không để tình trạng “làm rồi mới tính”.</li>
        <li>Team: bỏ tăng ca, tính lại velocity thực (có thể còn 18), thêm 1 người chỉ khi người đó đã quen dự án.</li>
      </ul>`},
    {h:"3. Cấu trúc bản đề xuất", html:`
      <ol>
        <li><b>Kết luận và đề xuất</b> (1 slide): “Không thể go-live đầy đủ ngày 1/7. Đề xuất go-live bản lõi đúng 1/7 và bản 1.1 vào 15/8.”</li>
        <li><b>Tình trạng bằng số</b> (1 slide): EVM, velocity, backlog, biểu đồ burnup.</li>
        <li><b>Nguyên nhân gốc</b> (1 slide).</li>
        <li><b>Các phương án</b> (2 slide): bảng so sánh phạm vi, ngày, chi phí, rủi ro.</li>
        <li><b>Kế hoạch 30 ngày</b> (2 slide): Risk Register, các mốc, việc với team.</li>
        <li><b>Quyết định cần từ anh Minh</b> (1 slide): cụ thể, có hạn.</li>
      </ol>
      <p>Thử thách 3 phút: đưa cho một người không biết dự án đọc slide 1 và slide cuối. Họ có hiểu cần quyết định gì không?</p>`}
  ],
  activity: {t:"Làm bài Capstone (45 phút)", html:`<p>Mở trang Capstone và bắt đầu bằng phần Chẩn đoán: tính SPI, CPI, EAC (dùng máy tính EVM), dự báo theo velocity, liệt kê 5 nguyên nhân gốc. Sau đó phác thảo 2 phương án theo bảng so sánh. Hoàn thiện bản đề xuất ở nhà.</p>`},
  check: [["Bước đầu tiên khi nhận một dự án đang “cháy” là gì?","Cầm máu: dừng nhận yêu cầu mới, đóng băng phạm vi tạm thời, bảo vệ team khỏi kiệt sức. Sau đó mới chẩn đoán."],["Vì sao không thể giải quyết Capstone chỉ bằng tăng ca?","Vì cần gấp đôi năng suất trong khi team đã mệt. Tăng ca kéo dài làm giảm chất lượng và tăng nguy cơ người nghỉ việc."],["Slide đầu tiên của bản đề xuất nên chứa gì?","Kết luận và đề xuất. Người đọc phải biết ngay cần quyết định gì."]],
  home: "★ Hoàn thiện Capstone (memo 2 trang hoặc 10 slide). Gửi Claude chấm theo rubric."
},
24: {
  goals: ["Làm bài thi tình huống theo đúng tư duy PMI và Scrum.", "Trình bày bảo vệ Capstone trong 10 phút.", "Lập kế hoạch nghề nghiệp 6–12 tháng tiếp theo."],
  agenda: [["0–15","Ôn chiến thuật làm bài thi tình huống"],["15–75","Thi cuối khóa: 40 câu, 60 phút"],["75–85","Nghỉ"],["85–125","Bảo vệ Capstone: 10 phút trình bày + 5 phút hỏi đáp"],["125–145","Kế hoạch nghề nghiệp"],["145–150","Bế giảng"]],
  parts: [
    {h:"1. Chiến thuật làm bài thi tình huống", html:`
      <p>Đề PMP, PSM và các bài thi tình huống thường có 2 đáp án “nghe có vẻ đúng”. Cách loại trừ:</p>
      <ul>
        <li><b>Tìm hiểu trước, hành động sau:</b> đáp án “phân tích, nói chuyện với người liên quan” thường đúng hơn “làm ngay” hoặc “escalate ngay”.</li>
        <li><b>Tự giải quyết ở cấp thấp nhất có thể</b> trước khi báo lên cấp trên.</li>
        <li><b>Servant leadership:</b> chọn đáp án trao quyền và hỗ trợ team, không phải ra lệnh.</li>
        <li><b>Theo quy trình:</b> thay đổi đi qua Change Request; rủi ro vào Register; giữ Sprint Goal.</li>
        <li><b>Không bao giờ chọn:</b> che giấu thông tin, đổ lỗi, bỏ qua kiểm thử, hay vi phạm đạo đức nghề nghiệp.</li>
        <li>Chú ý các từ khóa trong câu hỏi: “ĐẦU TIÊN”, “TỐT NHẤT”, “KHÔNG NÊN”.</li>
      </ul>`},
    {h:"2. Bảo vệ Capstone", html:`
      <p><b>10 phút trình bày:</b> 1 phút kết luận, 2 phút chẩn đoán, 3 phút phương án, 2 phút kế hoạch 30 ngày, 2 phút quyết định cần có. <b>5 phút hỏi đáp:</b> chuẩn bị trước cho 5 câu khó, ví dụ: “Sao không thêm 3 dev?”, “Tôi không chấp nhận cắt tính năng nào cả”, “Ai chịu trách nhiệm cho tình trạng này?”.</p>
      <p>Nếu học một mình: quay video tự trình bày, rồi nhờ Claude đóng vai anh Minh để luyện phần hỏi đáp.</p>`},
    {h:"3. Kế hoạch nghề nghiệp", html:`
      <div class="tablewrap"><table><thead><tr><th>Mục tiêu</th><th>Bước tiếp theo</th><th>Thời gian</th></tr></thead><tbody>
        <tr><td>Scrum Master</td><td>Thi <b>PSM I</b> (Scrum.org, tiếng Anh, không bắt buộc học khóa). Xin làm SM cho team hiện tại hoặc một team nội bộ.</td><td>1–3 tháng</td></tr>
        <tr><td>PM mới vào nghề</td><td>Nhận làm PM cho dự án nhỏ hoặc nội bộ; giữ hồ sơ dự án làm portfolio. Có thể cân nhắc CAPM.</td><td>3–6 tháng</td></tr>
        <tr><td>PM chuyên nghiệp</td><td>Tích lũy kinh nghiệm quản lý dự án (khoảng 3 năm nếu có bằng đại học), học đủ 35 giờ, thi <b>PMP</b>. Từ 9/7/2026 PMP thi theo đề cương mới, bám PMBOK 8: miền Business Environment tăng lên 26%, có thêm nội dung AI, bền vững và giá trị kinh doanh. Chỉ ôn bằng tài liệu ghi rõ “ECO 2026”.</td><td>Sau 2–3 năm</td></tr>
        <tr><td>PM dự án AI / dùng AI</td><td>Học Module 7 của khóa này; có thể thi <b>PMI-CPMAI</b> (chứng chỉ quản lý dự án AI của PMI, ra mắt 9/2025, không yêu cầu kinh nghiệm).</td><td>Tùy chọn, 1–3 tháng</td></tr>
      </tbody></table></div>
      <p><b>Câu hỏi phỏng vấn PM thường gặp:</b> kể về một dự án bị trễ và bạn đã làm gì; bạn xử lý khách đòi thêm phạm vi thế nào; bạn đo tiến độ bằng gì; kể về một xung đột trong team. Hồ sơ FreshGo của bạn chính là nguồn câu chuyện cho các câu hỏi này.</p>`}
  ],
  activity: {t:"Thi cuối khóa và bảo vệ", html:`<p>Nhắn Claude: “Soạn cho tôi bài thi cuối khóa 40 câu tình huống, Quản lý dự án CNTT, theo chương trình FreshGo.” Làm trong 60 phút không mở tài liệu; đạt từ 28/40. Sau đó trình bày Capstone và nhờ Claude đóng vai anh Minh hỏi vặn.</p>`},
  check: [["Câu hỏi có chữ “ĐẦU TIÊN”, một đáp án là “escalate lên nhà tài trợ”, một đáp án là “tìm hiểu nguyên nhân với team”. Chọn đáp án nào?","Thường là tìm hiểu nguyên nhân với team trước. Chỉ escalate khi vượt thẩm quyền và đã có phương án."],["Slide đầu tiên khi bảo vệ Capstone nên là gì?","Kết luận và đề xuất."],["Muốn thành Scrum Master trong 3 tháng, bước cụ thể là gì?","Thi PSM I và xin làm Scrum Master cho một team thật, kể cả team nhỏ hoặc nội bộ."]],
  home: "★ Nộp hồ sơ dự án hoàn chỉnh: Charter, kế hoạch, backlog, Risk Register, báo cáo, biên bản, Capstone. Chúc mừng bạn hoàn thành khóa học!"
}
});
