window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {
5: {
  goals: ["Phân loại được các nhóm yêu cầu, gồm cả yêu cầu phi chức năng.", "Chọn được kỹ thuật thu thập yêu cầu phù hợp với từng nhóm người.", "Viết Scope Statement có phần “ngoài phạm vi”, và dùng MoSCoW để xếp ưu tiên."],
  agenda: [["0–10","Khởi động: kể một lần bạn làm đúng yêu cầu nhưng khách vẫn nói “không phải cái tôi cần”"],["10–45","Phần 1: Các nhóm yêu cầu"],["45–80","Phần 2: Thu thập yêu cầu"],["80–90","Nghỉ"],["90–120","Phần 3: Scope Statement và MoSCoW"],["120–145","Thực hành: đóng vai workshop yêu cầu"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Các nhóm yêu cầu", html:`
      <div class="tablewrap"><table><thead><tr><th>Nhóm</th><th>Trả lời câu hỏi</th><th>Ví dụ FreshGo</th></tr></thead><tbody>
        <tr><td><b>Nghiệp vụ</b></td><td>Tổ chức muốn đạt điều gì?</td><td>Giảm tỷ lệ sót đơn xuống dưới 1%</td></tr>
        <tr><td><b>Người dùng</b></td><td>Từng nhóm người dùng cần làm được gì?</td><td>Shipper xem được đường đi tới khách</td></tr>
        <tr><td><b>Chức năng</b></td><td>Hệ thống phải làm gì?</td><td>Gửi thông báo khi trạng thái đơn đổi</td></tr>
        <tr><td><b>Phi chức năng</b></td><td>Hệ thống phải tốt đến mức nào?</td><td>Chịu được 500 đơn đồng thời; tải trang dưới 2 giây; mã hóa dữ liệu cá nhân</td></tr>
        <tr><td><b>Chuyển đổi</b></td><td>Cần gì để chuyển từ cũ sang mới?</td><td>Nhập 3.000 khách hàng cũ từ Excel; đào tạo 30 cửa hàng</td></tr>
      </tbody></table></div>
      <p><b>Yêu cầu phi chức năng hay bị quên nhất</b>, và cũng là nguyên nhân gây sự cố lớn nhất khi go-live: hiệu năng, bảo mật, khả năng mở rộng, sao lưu.</p>`},
    {h:"2. Thu thập yêu cầu", html:`
      <ul>
        <li><b>Phỏng vấn:</b> 1–1, sâu. Hợp với lãnh đạo hoặc chuyên gia nghiệp vụ.</li>
        <li><b>Workshop:</b> nhiều bên ngồi cùng nhau, chốt nhanh, giải quyết mâu thuẫn ngay tại chỗ. Cần người điều phối giỏi.</li>
        <li><b>Quan sát:</b> ra tận cửa hàng xem nhân viên nhận đơn Zalo. Thường phát hiện những bước mà người dùng không nghĩ ra để kể.</li>
        <li><b>Prototype / wireframe:</b> cho khách “thấy” sớm, giải quyết đúng vấn đề sản phẩm vô hình.</li>
        <li><b>Phân tích tài liệu:</b> quy trình hiện có, báo cáo, hệ thống cũ.</li>
      </ul>
      <p><b>Kỹ thuật hỏi “5 lần tại sao”:</b> khách nói “cần nút xuất Excel”. Hỏi lại vì sao? “Để gửi báo cáo cho sếp.” Vì sao? “Sếp cần xem doanh thu theo cửa hàng mỗi sáng.” Vậy giải pháp có thể là một dashboard hoặc email tự động, không nhất thiết là nút Excel.</p>
      <p><b>SRS (Software Requirements Specification)</b> là tài liệu đặc tả yêu cầu, gồm: phạm vi, các nhóm người dùng, yêu cầu chức năng theo module, yêu cầu phi chức năng, giao diện tích hợp và giả định. Trong Agile, SRS thường được thay bằng Product Backlog cùng các tài liệu ngắn kèm theo.</p>`},
    {h:"3. Scope Statement và MoSCoW", html:`
      <p>Scope Statement gồm: mô tả sản phẩm, các sản phẩm bàn giao, <b>tiêu chí nghiệm thu</b>, <b>ngoài phạm vi</b>, giả định và ràng buộc.</p>
      <p><b>Ví dụ phần ngoài phạm vi của FreshGo:</b> tích điểm thành viên; chat với cửa hàng; gợi ý sản phẩm bằng AI; bản web cho khách hàng; tích hợp với hệ thống kế toán; vận hành máy chủ sau thời gian bảo hành.</p>
      <p><b>MoSCoW</b> dùng để xếp ưu tiên:</p>
      <ul><li><b>Must:</b> thiếu thì không ra mắt được (đặt hàng, thanh toán).</li><li><b>Should:</b> quan trọng nhưng có thể lùi lại (lịch sử đơn).</li><li><b>Could:</b> có thì tốt (đổi giao diện tối).</li><li><b>Won’t (lần này):</b> chắc chắn chưa làm (tích điểm).</li></ul>
      <p>Quy tắc kinh nghiệm: phần Must không nên vượt khoảng 60% công sức. Phần còn lại là “vùng đệm” để cắt khi bị trễ mà không hỏng mục tiêu.</p>
      <p><b>Ma trận truy vết yêu cầu (RTM):</b> bảng nối từng yêu cầu với user story, test case và trạng thái. Nhờ đó không yêu cầu nào bị “rơi” giữa đường.</p>`}
  ],
  activity: {t:"Đóng vai workshop yêu cầu (25 phút)", html:`<p>Nếu học một mình, hãy nhờ Claude đóng vai chị Lan. Bạn có 20 phút hỏi để làm rõ quy trình “cửa hàng nhận và xử lý đơn”. Kết quả cần có: 5 yêu cầu chức năng, 3 yêu cầu phi chức năng, 3 mục ngoài phạm vi. Ghi lại câu hỏi nào của bạn đã mở ra được thông tin mới.</p>`},
  check: [["“App phải chịu được 500 đơn cùng lúc” thuộc nhóm yêu cầu nào?","Phi chức năng (hiệu năng)."],["Vì sao phải viết phần “ngoài phạm vi”?","Để chặn tranh cãi về sau. Khi khách đòi thêm, PM chỉ vào văn bản đã ký thay vì tranh luận bằng trí nhớ."],["Must nên chiếm bao nhiêu công sức, và vì sao?","Khoảng 60%, để còn vùng đệm (Should/Could) mà cắt khi bị trễ."]],
  home: "Bài 2.1: Scope Statement của FreshGo, có ít nhất 5 mục ngoài phạm vi và tiêu chí nghiệm thu cho từng sản phẩm bàn giao."
},
6: {
  goals: ["Lập WBS theo sản phẩm bàn giao, đúng quy tắc 100% và 8/80.", "Viết từ điển WBS cho các gói việc quan trọng.", "Nhận ra và tránh 5 lỗi WBS hay gặp."],
  agenda: [["0–10","Ôn bài: đọc phần “ngoài phạm vi” của bạn"],["10–50","Phần 1: WBS là gì, các nguyên tắc"],["50–80","Phần 2: Cách phân rã và ví dụ FreshGo"],["80–90","Nghỉ"],["90–110","Phần 3: Từ điển WBS và lỗi thường gặp"],["110–145","Thực hành: dựng WBS FreshGo"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. WBS là gì, các nguyên tắc", html:`
      <p><b>WBS (Work Breakdown Structure)</b> là cây phân rã <i>toàn bộ</i> phạm vi dự án thành các phần nhỏ, quản lý được. Cấp thấp nhất gọi là <b>gói công việc (work package)</b>: đơn vị để ước lượng, giao việc và theo dõi.</p>
      <ul>
        <li><b>Quy tắc 100%:</b> các con cộng lại đúng bằng cha, không thừa không thiếu. Việc nào không có trong WBS thì nằm ngoài phạm vi.</li>
        <li><b>Theo sản phẩm, không theo hành động:</b> cấp 2 nên là danh từ (“Module thanh toán”), không phải động từ (“Code”).</li>
        <li><b>Quy tắc 8/80:</b> một gói việc từ 8 đến 80 giờ. Nhỏ hơn thì quản lý quá vụn; lớn hơn thì khó ước lượng và theo dõi.</li>
        <li><b>Không chồng lấn:</b> mỗi việc chỉ nằm ở một chỗ.</li>
        <li>Có nhánh <b>Quản lý dự án</b>: họp, báo cáo, quản lý rủi ro cũng tốn công.</li>
      </ul>`},
    {h:"2. Cách phân rã và ví dụ FreshGo", html:`
      <p>Có ba cách chọn cấp 2: theo <b>giai đoạn</b> (Phân tích, Thiết kế, Phát triển…), theo <b>sản phẩm hoặc thành phần</b> (App khách, Web quản trị, App shipper…), hoặc kết hợp. Với dự án phần mềm nhiều thành phần, cách chia theo sản phẩm thường dễ giao việc và theo dõi hơn.</p>
      <pre class="mono" style="background:var(--paper);padding:12px;border-radius:10px;overflow-x:auto;font-size:.85rem">FreshGo
├─ 1. Quản lý dự án (kế hoạch, báo cáo, họp, rủi ro)
├─ 2. Yêu cầu & thiết kế
│   ├─ 2.1 Khảo sát nghiệp vụ cửa hàng
│   ├─ 2.2 Đặc tả & user story
│   └─ 2.3 Thiết kế UI/UX (Figma)
├─ 3. App khách hàng
│   ├─ 3.1 Đăng ký / đăng nhập
│   ├─ 3.2 Danh mục & tìm kiếm
│   ├─ 3.3 Giỏ hàng & đặt hàng
│   ├─ 3.4 Thanh toán (COD, ví điện tử)
│   └─ 3.5 Theo dõi đơn & thông báo
├─ 4. Web quản trị cửa hàng
├─ 5. App shipper
├─ 6. Backend & tích hợp (API, POS, cổng thanh toán)
├─ 7. Kiểm thử (kế hoạch test, test hệ thống, hiệu năng, bảo mật)
└─ 8. Triển khai (hạ tầng, store, đào tạo, UAT, go-live)</pre>
      <p>Mẹo: viết các gói việc lên giấy note, cùng team xếp lên tường hoặc bảng trắng. Dev sẽ chỉ ra ngay những việc PM quên, như cấu hình CI/CD, tài khoản store hay chứng chỉ SSL.</p>`},
    {h:"3. Từ điển WBS và lỗi thường gặp", html:`
      <p><b>Từ điển WBS</b> mô tả chi tiết từng gói việc: mã, mô tả, sản phẩm đầu ra, tiêu chí hoàn thành, người phụ trách, ước lượng, phụ thuộc. Không cần viết cho tất cả; hãy ưu tiên những gói rủi ro hoặc dễ hiểu sai.</p>
      <p><b>5 lỗi hay gặp:</b></p>
      <ol><li>WBS là danh sách việc theo người (“việc của Nam”), không theo sản phẩm.</li><li>Quên các việc không phải code: test, deploy, tài liệu, đào tạo, UAT.</li><li>Phân rã quá sâu, ra hàng trăm việc 1–2 giờ, rồi không ai cập nhật nổi.</li><li>Không có nhánh Quản lý dự án.</li><li>PM tự làm một mình, không có team cùng làm.</li></ol>`}
  ],
  activity: {t:"Dựng WBS FreshGo (35 phút)", html:`<p>Mở rộng cây ở trên cho các nhánh 4 đến 8 xuống cấp 3. Mục tiêu tổng cộng 30–40 gói việc. Kiểm tra lại bằng 3 câu hỏi: có việc nào không có ở đây mà vẫn phải làm không? Có gói nào lớn hơn 80 giờ không? Mỗi gói có một sản phẩm đầu ra nhìn thấy được không?</p>`},
  check: [["Quy tắc 100% giúp gì cho việc quản lý phạm vi?","Mọi việc trong phạm vi đều có trong WBS, và việc nào không có trong WBS thì là ngoài phạm vi. Đây là cơ sở để từ chối hoặc tính phí thay đổi."],["Một gói việc 200 giờ thì cần làm gì?","Tách nhỏ tiếp, vì nó vượt quy tắc 8/80 và rất khó ước lượng chính xác."],["Vì sao nên cùng team làm WBS?","Người làm biết những việc PM không thấy, và họ cam kết tốt hơn với kế hoạch họ đã cùng tạo ra."]],
  home: "Bài 2.2 (phần 1): hoàn thiện WBS 3 cấp và từ điển WBS cho 5 gói việc rủi ro nhất."
},
7: {
  goals: ["Giải thích vì sao ước lượng sớm luôn sai lệch nhiều (nón bất định).", "Dùng thành thạo 4 kỹ thuật: chuyên gia, tương tự, tham số, ba điểm (PERT).", "Phân biệt ước lượng với cam kết, và biết cách đưa dự phòng vào."],
  agenda: [["0–10","Câu hỏi mở: dự án gần nhất của bạn trễ bao nhiêu % so với ước lượng ban đầu?"],["10–40","Phần 1: Vì sao ước lượng khó"],["40–80","Phần 2: Các kỹ thuật ước lượng"],["80–90","Nghỉ"],["90–115","Phần 3: Dự phòng, phạm vi giá trị và cam kết"],["115–145","Thực hành: ước lượng 10 gói việc"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Vì sao ước lượng khó", html:`
      <p><b>Nón bất định (cone of uncertainty):</b> lúc mới có ý tưởng, ước lượng có thể sai từ một phần tư đến gấp bốn lần thực tế. Khi yêu cầu đã chốt, sai số thu hẹp còn khoảng ±50%. Khi thiết kế xong thì còn khoảng ±25%. Chỉ khi làm xong mới biết chính xác.</p>
      <p>Hệ quả: <b>đừng đưa một con số duy nhất ở giai đoạn đầu</b>. Hãy đưa một khoảng (“5 đến 8 tháng”) và cam kết sẽ thu hẹp khoảng đó sau từng mốc.</p>
      <p>Các bẫy tâm lý hay gặp: lạc quan (chỉ nghĩ đến trường hợp suôn sẻ), neo số (sếp nói “chắc 3 tháng nhỉ” trước khi team ước lượng), và áp lực (muốn làm vừa lòng khách).</p>`},
    {h:"2. Các kỹ thuật ước lượng", html:`
      <div class="tablewrap"><table><thead><tr><th>Kỹ thuật</th><th>Cách làm</th><th>Dùng khi</th></tr></thead><tbody>
        <tr><td><b>Chuyên gia</b></td><td>Hỏi người đã làm việc tương tự; tốt hơn nữa là hỏi 3 người rồi so sánh (Wideband Delphi)</td><td>Mọi lúc, đặc biệt việc mới</td></tr>
        <tr><td><b>Tương tự</b></td><td>“Dự án app bán hàng trước mất 900 man-day, dự án này lớn hơn khoảng 20%”</td><td>Giai đoạn đầu, ít thông tin</td></tr>
        <tr><td><b>Tham số</b></td><td>Số lượng × định mức. Ví dụ 45 màn hình × 4 man-day = 180 man-day</td><td>Có dữ liệu lịch sử đáng tin</td></tr>
        <tr><td><b>Ba điểm (PERT)</b></td><td>E = (O + 4M + P) / 6</td><td>Gói việc có nhiều bất định</td></tr>
        <tr><td><b>Từ dưới lên</b></td><td>Ước lượng từng gói việc trong WBS rồi cộng lên</td><td>Khi đã có WBS: chính xác nhất nhưng tốn công</td></tr>
        <tr><td><b>Story Point</b></td><td>So độ lớn tương đối giữa các story, dùng Planning Poker</td><td>Agile (học kỹ ở Buổi 11)</td></tr>
      </tbody></table></div>
      <p><b>Ví dụ PERT:</b> tích hợp API POS: lạc quan 8, khả năng cao nhất 15, bi quan 40 man-day. E = (8 + 60 + 40) / 6 = <b>18 man-day</b>. Độ lệch chuẩn σ = (P − O) / 6 ≈ 5,3. Muốn chắc chắn khoảng 95% thì lấy E + 2σ ≈ <b>28,7 man-day</b>. Bạn có thể dùng máy tính PERT ở trang Module 2 để thử.</p>
      <p><b>Function Point</b> đếm chức năng theo 5 loại: đầu vào, đầu ra, truy vấn, file nội bộ, giao diện ngoài, rồi quy đổi ra công sức. Phương pháp này hay dùng trong hồ sơ dự án nhà nước và với khách Nhật.</p>`},
    {h:"3. Dự phòng, phạm vi giá trị và cam kết", html:`
      <ul>
        <li><b>Ước lượng</b> là dự đoán có xác suất. <b>Cam kết</b> là lời hứa. Đừng biến ước lượng của dev thành cam kết khi họ chưa đồng ý.</li>
        <li><b>Dự phòng rủi ro (contingency):</b> thường 10–20%, dành cho các rủi ro đã biết, do PM quản lý.</li>
        <li><b>Dự phòng quản lý (management reserve):</b> dành cho những điều chưa lường trước, do nhà tài trợ giữ và quyết định.</li>
        <li><b>Công suất thực:</b> 8 giờ làm việc thường chỉ có khoảng 6 giờ hiệu quả, chưa kể nghỉ phép, ngày lễ và Tết. Quý I ở Việt Nam thường mất khoảng 1–2 tuần cho Tết.</li>
      </ul>
      <p>Khi bị ép số, đừng tự hạ ước lượng. Hãy đưa ra các phương án đánh đổi (học kỹ ở Buổi 19).</p>`}
  ],
  activity: {t:"Ước lượng 10 gói việc (30 phút)", html:`<p>Chọn 10 gói việc trong WBS của bạn. Với mỗi gói, ghi O, M, P và tính E cùng σ. Gói nào có (P − O) lớn nhất? Đó là các gói rủi ro nhất; hãy đưa chúng vào Risk Register ở Buổi 14. Cuối cùng, cộng tổng E và so với công suất của 8 người × 6 tháng.</p>`},
  check: [["O = 5, M = 10, P = 21. Tính E.","(5 + 40 + 21) / 6 = 11 man-day."],["Dự phòng rủi ro và dự phòng quản lý khác nhau thế nào?","Dự phòng rủi ro cho rủi ro đã biết, PM quản lý. Dự phòng quản lý cho điều chưa lường trước, nhà tài trợ giữ và quyết định."],["Vì sao không nên đưa một con số duy nhất khi mới bắt đầu dự án?","Vì sai số lúc đó rất lớn (nón bất định). Đưa một khoảng và thu hẹp dần mới trung thực."]],
  home: "Bài 2.2 (phần 2) và 2.3: ước lượng toàn bộ WBS, dùng ba điểm cho 5 gói rủi ro nhất, rồi kiểm tra với công suất thực."
},
8: {
  goals: ["Xác định quan hệ phụ thuộc và tính đường găng cho một mạng công việc nhỏ.", "Dựng Gantt và chọn cách nén tiến độ đúng chỗ.", "Lập ngân sách có dự phòng.", "So sánh các loại hợp đồng phần mềm và hiểu tác động của chúng đến cách quản lý."],
  agenda: [["0–10","Ôn bài: tổng ước lượng của bạn có vừa với công suất không?"],["10–50","Phần 1: Phụ thuộc, đường găng, Gantt"],["50–75","Phần 2: Ngân sách"],["75–85","Nghỉ"],["85–110","Phần 3: Các loại hợp đồng; Phần 4: Presales và báo giá"],["110–145","Thực hành: tính đường găng và hoàn thiện kế hoạch"],["145–150","Tổng kết Module 2"]],
  parts: [
    {h:"1. Phụ thuộc, đường găng, Gantt", html:`
      <p><b>4 kiểu phụ thuộc:</b> Xong–Bắt đầu (FS, phổ biến nhất: thiết kế xong mới code), Bắt đầu–Bắt đầu (SS), Xong–Xong (FF), Bắt đầu–Xong (SF, hiếm). <b>Lag</b> là thời gian chờ thêm (ví dụ chờ Apple duyệt 3 ngày); <b>lead</b> là bắt đầu sớm chồng lên việc trước.</p>
      <p><b>Ví dụ tính đường găng:</b></p>
      <div class="tablewrap"><table><thead><tr><th>Việc</th><th>Thời gian (tuần)</th><th>Phụ thuộc</th></tr></thead><tbody>
        <tr><td>A. Thiết kế API</td><td class="num">3</td><td>–</td></tr>
        <tr><td>B. Backend</td><td class="num">4</td><td>A</td></tr>
        <tr><td>C. UI app</td><td class="num">2</td><td>A</td></tr>
        <tr><td>D. Tích hợp và test</td><td class="num">3</td><td>B, C</td></tr>
      </tbody></table></div>
      <p>Có hai đường: A–B–D = 3 + 4 + 3 = <b>10 tuần</b>, và A–C–D = 3 + 2 + 3 = 8 tuần. <b>Đường găng là A–B–D</b> (dài nhất). Việc C có <b>float</b> (thời gian dự trữ) 2 tuần: trễ đến 2 tuần cũng không làm trễ dự án.</p>
      <p><b>Nén tiến độ</b> chỉ có tác dụng khi nén trên đường găng: <b>crashing</b> (thêm người, tốn tiền) hoặc <b>fast-tracking</b> (làm song song, tăng rủi ro phải làm lại). Thêm người vào việc đã trễ thường làm nó trễ hơn nữa, vì người mới cần thời gian làm quen và tốn thêm công phối hợp.</p>
      <p><b>Gantt</b> hiển thị việc theo thời gian. Nên đánh dấu đường găng và các mốc (milestone, hình thoi). Công cụ dùng được: Excel/Google Sheets, MS Project, ProjectLibre (miễn phí), hoặc chế độ Timeline của Jira.</p>`},
    {h:"2. Ngân sách", html:`
      <ul>
        <li><b>Nhân sự:</b> man-month × đơn giá theo cấp bậc. Đây là phần lớn nhất, thường 70–85%.</li>
        <li><b>Hạ tầng:</b> cloud, môi trường test, tài khoản Apple Developer và Google Play.</li>
        <li><b>License và dịch vụ:</b> Jira, Figma, phí cổng thanh toán, SMS OTP.</li>
        <li><b>Dự phòng rủi ro</b> 10–20%, tính theo Risk Register.</li>
      </ul>
      <p><b>Đường chi phí cơ sở (cost baseline)</b> là ngân sách phân bổ theo thời gian. Đây chính là PV dùng trong EVM ở Module 6. Vì vậy hãy lập nó theo tháng ngay từ bây giờ.</p>`},
    {h:"3. Các loại hợp đồng", html:`
      <div class="tablewrap"><table><thead><tr><th>Loại</th><th>Ai chịu rủi ro chi phí</th><th>PM cần chú ý</th></tr></thead><tbody>
        <tr><td><b>Fixed Price</b> (trọn gói)</td><td>Bên làm</td><td>Chốt phạm vi rất chặt; mọi thay đổi phải có Change Request và báo giá</td></tr>
        <tr><td><b>Time & Material</b> (theo công)</td><td>Khách hàng</td><td>Báo cáo công sức minh bạch; chứng minh giá trị mỗi Sprint</td></tr>
        <tr><td><b>ODC</b> (thuê team)</td><td>Khách hàng</td><td>Giữ ổn định nhân sự, năng suất và văn hóa team</td></tr>
        <tr><td><b>Trả theo mốc</b></td><td>Chia sẻ</td><td>Định nghĩa tiêu chí nghiệm thu từng mốc thật rõ</td></tr>
      </tbody></table></div>
      <p>FreshGo là Fixed Price, nên chính kế hoạch và Scope Statement của bạn là thứ bảo vệ lợi nhuận của công ty.</p>`},
    {h:"4. Presales: từ RFP đến báo giá", html:`
      <p>Ở công ty outsource Việt Nam, PM (hoặc PM tương lai) thường tham gia <b>presales</b>: đọc yêu cầu của khách (RFP, Request for Proposal), ước lượng, tính giá và viết đề xuất. Báo giá sai là dự án lỗ từ trước khi bắt đầu.</p>
      <ol>
        <li><b>Đọc RFP và lập danh sách câu hỏi</b> (Q&amp;A): mọi điểm mơ hồ là một giả định phải ghi ra.</li>
        <li><b>Ước lượng</b> bằng WBS và PERT như Buổi 6–7, kèm phần việc hay bị quên: quản lý dự án (10–15%), QA, triển khai, bảo hành.</li>
        <li><b>Cộng dự phòng rủi ro</b> theo mức mơ hồ của yêu cầu: 10–25% cho Fixed Price.</li>
        <li><b>Tính giá theo biên lợi nhuận mục tiêu</b>, không phải theo “cộng thêm %”.</li>
        <li><b>Viết đề xuất:</b> phạm vi trong và ngoài, giả định, mốc, đơn giá cho thay đổi, điều khoản bảo hành và thanh toán.</li>
      </ol>
      <div class="tablewrap"><table><thead><tr><th>Bước</th><th>Ví dụ: app 500 man-day</th></tr></thead><tbody>
        <tr><td>Ước lượng + 15% dự phòng</td><td class="num">575 man-day</td></tr>
        <tr><td>Chi phí nội bộ (lương + chi phí chung ≈ 1,4 triệu/man-day)</td><td class="num">≈ 805 triệu</td></tr>
        <tr><td>Giá để đạt biên lợi nhuận gộp 30%: chi phí ÷ (1 − 30%)</td><td class="num">1,15 tỷ</td></tr>
      </tbody></table></div>
      <p><b>Bẫy hay gặp:</b> lấy chi phí × 1,3 = 1,05 tỷ và nghĩ là lãi 30%. Thực ra biên lợi nhuận chỉ (1,05 − 0,805) ÷ 1,05 ≈ 23%. Ngoài ra, đừng hạ giá bằng cách cắt dự phòng: hãy cắt phạm vi hoặc chuyển phần mơ hồ sang T&amp;M.</p>
      <p><b>Kiểm tra lợi nhuận khi đang chạy:</b> hằng tháng so sánh chi phí thực (man-day đã dùng × đơn giá nội bộ) với kế hoạch. Đây là chỉ số Delivery Manager quan tâm nhất ở PM.</p>`}
  ],
  activity: {t:"Tính đường găng và hoàn thiện kế hoạch (35 phút)", html:`<p>Bài nhỏ: thêm việc E (Store review, 1 tuần, phụ thuộc D) và F (Đào tạo cửa hàng, 2 tuần, phụ thuộc C). Đường găng mới là gì? Dự án dài bao lâu?</p><details><summary style="cursor:pointer;color:var(--accent);font-weight:600">Đáp án</summary><p>A–B–D–E = 3 + 4 + 3 + 1 = 11 tuần (đường găng). A–C–F = 3 + 2 + 2 = 7 tuần, có float 4 tuần.</p></details><p>Sau đó, ghép WBS và ước lượng của bạn thành Gantt có đường găng, ngân sách theo tháng và RACI.</p>`},
  check: [["Chi phí nội bộ 805 triệu, muốn biên lợi nhuận gộp 30% thì báo giá bao nhiêu?","805 ÷ (1 − 0,3) = 1,15 tỷ. Lấy 805 × 1,3 chỉ cho biên lợi nhuận khoảng 23%."],["Muốn rút ngắn dự án, có nên tăng tốc việc có float lớn không?","Không. Rút ngắn việc có float không làm dự án xong sớm hơn. Chỉ nén việc trên đường găng."],["Thêm 2 dev vào việc đang trễ có giúp xong nhanh hơn không?","Thường là không, ít nhất trong ngắn hạn: người mới cần làm quen và tốn thêm công phối hợp."],["Vì sao Fixed Price đòi phạm vi chặt hơn T&M?","Vì bên làm chịu rủi ro chi phí: mỗi yêu cầu thêm không có quy trình là tiền mất."]],
  home: "★ Nộp sản phẩm Module 2: Kế hoạch dự án gồm WBS, Gantt có đường găng, ngân sách theo tháng có dự phòng, và RACI. Sau đó làm Test 1."
}
});
