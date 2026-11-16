window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {
9: {
  goals: ["Giải thích 4 giá trị Agile và tư duy thực nghiệm phía sau Scrum.", "Nắm chắc 3 trách nhiệm, 5 sự kiện và 3 tạo tác của Scrum theo Scrum Guide 2020.", "Nhận ra 5 hiểu lầm phổ biến về Scrum ở các công ty Việt Nam."],
  agenda: [["0–10","Khởi động: công ty bạn “làm Scrum” như thế nào?"],["10–40","Phần 1: Tuyên ngôn Agile và tư duy thực nghiệm"],["40–80","Phần 2: Khung Scrum"],["80–90","Nghỉ"],["90–115","Phần 3: Những hiểu lầm về Scrum"],["115–145","Thực hành: vẽ sơ đồ Scrum từ trí nhớ"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Tuyên ngôn Agile và tư duy thực nghiệm", html:`
      <p>Tuyên ngôn Agile (2001) coi trọng:</p>
      <ul><li><b>Con người và tương tác</b> hơn quy trình và công cụ</li><li><b>Phần mềm chạy được</b> hơn tài liệu đầy đủ</li><li><b>Cộng tác với khách hàng</b> hơn đàm phán hợp đồng</li><li><b>Phản hồi với thay đổi</b> hơn bám sát kế hoạch</li></ul>
      <p>Vế sau vẫn có giá trị, chỉ là vế trước được coi trọng hơn. Agile không có nghĩa là “không tài liệu, không kế hoạch”.</p>
      <p><b>Tư duy thực nghiệm:</b> trong môi trường phức tạp, không thể biết hết từ đầu. Hãy làm một phần nhỏ, nhìn kết quả thật, rồi điều chỉnh. Scrum dựa trên 3 trụ cột: <b>Minh bạch</b> (mọi người thấy cùng một sự thật), <b>Thanh tra</b> (thường xuyên kiểm tra tiến độ và sản phẩm), <b>Thích ứng</b> (điều chỉnh ngay khi lệch).</p>
      <p><b>5 giá trị Scrum:</b> Cam kết, Tập trung, Cởi mở, Tôn trọng, Can đảm.</p>`},
    {h:"2. Khung Scrum", html:`
      <div class="tablewrap"><table><thead><tr><th>Thành phần</th><th>Nội dung chính</th></tr></thead><tbody>
        <tr><td><b>Product Owner</b></td><td>Một người, không phải ủy ban. Chịu trách nhiệm tối đa giá trị sản phẩm; quản lý và sắp xếp Product Backlog.</td></tr>
        <tr><td><b>Scrum Master</b></td><td>Giúp team và tổ chức hiểu và áp dụng Scrum; gỡ vướng mắc; điều phối sự kiện khi cần. Là người lãnh đạo bằng cách phục vụ.</td></tr>
        <tr><td><b>Developers</b></td><td>Mọi người tạo ra Increment: dev, tester, designer, BA… Tự quản lý cách làm.</td></tr>
        <tr><td><b>Sprint</b></td><td>Tối đa 1 tháng, độ dài cố định. Sprint mới bắt đầu ngay khi Sprint cũ kết thúc.</td></tr>
        <tr><td><b>Sprint Planning</b></td><td>Tối đa 8 giờ (Sprint 1 tháng). Trả lời: Vì sao Sprint này có giá trị? Làm gì? Làm như thế nào?</td></tr>
        <tr><td><b>Daily Scrum</b></td><td>15 phút, cho Developers, để xem tiến độ tới Sprint Goal và điều chỉnh kế hoạch trong ngày.</td></tr>
        <tr><td><b>Sprint Review</b></td><td>Tối đa 4 giờ. Trình bày kết quả với các bên liên quan, cùng điều chỉnh Product Backlog. Không phải buổi “nghiệm thu”.</td></tr>
        <tr><td><b>Sprint Retrospective</b></td><td>Tối đa 3 giờ. Cải tiến cách làm việc: con người, quy trình, công cụ, Definition of Done.</td></tr>
        <tr><td><b>Product Backlog → Product Goal</b></td><td>Danh sách những gì có thể làm cho sản phẩm, hướng tới một mục tiêu dài hạn.</td></tr>
        <tr><td><b>Sprint Backlog → Sprint Goal</b></td><td>Sprint Goal, các mục đã chọn và kế hoạch thực hiện.</td></tr>
        <tr><td><b>Increment → Definition of Done</b></td><td>Phần sản phẩm đạt DoD, dùng được. Có thể có nhiều Increment trong một Sprint.</td></tr>
      </tbody></table></div>
      <p>Lưu ý: Scrum Guide 2020 không còn dùng cụm “Development Team”, cũng không bắt buộc 3 câu hỏi trong Daily hay dùng story point.</p>
      <p><b>Cập nhật 2025–2026:</b> Scrum Guide 2020 vẫn là phiên bản chính thức. Tháng 6/2025 Jeff Sutherland cùng hai đồng tác giả phát hành <i>Scrum Guide Expansion Pack</i>: tài liệu bổ sung, không bắt buộc, bàn thêm về Scrum trong môi trường phức tạp và Scrum với AI. Thi PSM I vẫn theo bản 2020.</p>`},
    {h:"3. Những hiểu lầm về Scrum", html:`
      <ol>
        <li><b>“Scrum Master là PM đổi tên.”</b> Sai: SM không giao việc và không chịu trách nhiệm tiến độ thay team.</li>
        <li><b>“Daily là để báo cáo sếp.”</b> Sai: Daily là của Developers, để tự điều chỉnh kế hoạch.</li>
        <li><b>“Agile thì không cần kế hoạch.”</b> Sai: Scrum lập kế hoạch ở mỗi Sprint, chỉ là kế hoạch ngắn hạn và thay đổi được.</li>
        <li><b>“Sprint Review là buổi khách nghiệm thu.”</b> Sai: đây là buổi lấy phản hồi để điều chỉnh Backlog.</li>
        <li><b>“Cứ có Jira và Sprint là Agile.”</b> Sai: không có PO thật và không có Retro thì chỉ là Waterfall chia nhỏ.</li>
      </ol>`}
  ],
  activity: {t:"Vẽ sơ đồ Scrum từ trí nhớ (30 phút)", html:`<p>Đóng tài liệu lại. Vẽ trên giấy toàn bộ khung Scrum: 3 trách nhiệm, 5 sự kiện kèm giới hạn thời gian, 3 tạo tác kèm cam kết. Sau đó mở lại bảng ở Phần 2 để tự chấm. Thiếu hoặc sai mục nào thì đọc lại đoạn tương ứng trong Scrum Guide bản tiếng Việt.</p>`},
  check: [["Daily Scrum dành cho ai?","Cho Developers. Scrum Master chỉ đảm bảo nó diễn ra; PO có thể dự nếu cũng tham gia làm việc trong Sprint Backlog."],["Cam kết đi kèm Increment là gì?","Definition of Done."],["Sprint Review có phải buổi nghiệm thu không?","Không. Đây là buổi cùng các bên liên quan xem kết quả và điều chỉnh Product Backlog."]],
  home: "Đọc trọn Scrum Guide 2020 bản tiếng Việt (khoảng 14 trang), ghi lại 3 điểm khác với cách công ty bạn đang làm."
},
10: {
  goals: ["Chia nhỏ từ Product Goal → Epic → User Story.", "Viết user story đạt INVEST với tiêu chí chấp nhận Given/When/Then.", "Dùng 5 cách tách story lớn và tổ chức buổi Refinement."],
  agenda: [["0–10","Ôn bài: 3 điểm khác biệt bạn tìm thấy"],["10–40","Phần 1: Cấu trúc Product Backlog"],["40–80","Phần 2: User Story và tiêu chí chấp nhận"],["80–90","Nghỉ"],["90–115","Phần 3: Tách story và Refinement"],["115–145","Thực hành: Story map FreshGo"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Cấu trúc Product Backlog", html:`
      <ul>
        <li><b>Product Goal:</b> “FreshGo trở thành kênh đặt hàng chính, chiếm 40% đơn của FreshMart trong 12 tháng.”</li>
        <li><b>Epic:</b> nhóm tính năng lớn, ví dụ “Đặt hàng”, “Thanh toán”, “Giao hàng”.</li>
        <li><b>User Story:</b> mô tả giá trị cho một người dùng, làm xong trong 1 Sprint.</li>
        <li><b>Task:</b> việc kỹ thuật để làm xong story. Developers tự chia task trong Sprint Planning.</li>
      </ul>
      <p>Backlog là <b>sống</b>: các mục ở trên cùng thì rõ và nhỏ; các mục bên dưới có thể còn sơ sài. Đây gọi là backlog “hình tảng băng”.</p>
      <p><b>Story Map:</b> trục ngang là hành trình người dùng (Tìm hàng → Chọn → Giỏ hàng → Thanh toán → Nhận hàng); trục dọc là các story từ cốt lõi đến nâng cao. Kẻ một đường ngang qua bản đồ, phần phía trên đường đó là <b>bản phát hành đầu tiên (MVP)</b>.</p>`},
    {h:"2. User Story và tiêu chí chấp nhận", html:`
      <p>Mẫu: <b>Là [vai trò], tôi muốn [hành động] để [lợi ích]</b>. Phần “để…” bắt buộc phải có, vì nó cho team biết giá trị và giúp PO xếp ưu tiên.</p>
      <p><b>INVEST:</b> Độc lập · Thương lượng được · Có giá trị · Ước lượng được · Nhỏ (xong trong 1 Sprint) · Kiểm thử được.</p>
      <p><b>Tiêu chí chấp nhận dạng Given/When/Then:</b></p>
      <pre class="mono" style="background:var(--paper);padding:12px;border-radius:10px;overflow-x:auto;font-size:.85rem;white-space:pre-wrap">Story: Là khách hàng, tôi muốn áp mã giảm giá khi thanh toán
để mua được giá tốt hơn.

AC1: Given giỏ hàng 300.000đ và mã GIAM50 (giảm 50.000đ, đơn tối thiểu 200.000đ)
     When tôi nhập GIAM50 và bấm Áp dụng
     Then tổng tiền còn 250.000đ và hiện dòng "Đã giảm 50.000đ"
AC2: Given giỏ hàng 150.000đ
     When tôi nhập GIAM50
     Then hiện lỗi "Đơn tối thiểu 200.000đ" và tổng tiền không đổi
AC3: Given mã đã hết hạn
     When tôi nhập mã
     Then hiện lỗi "Mã đã hết hạn"</pre>
      <p>Tiêu chí chấp nhận là riêng cho từng story. <b>Definition of Done</b> thì chung cho mọi story. Một story chỉ xong khi đạt cả hai.</p>`},
    {h:"3. Tách story và Refinement", html:`
      <p><b>5 cách tách story quá lớn:</b></p>
      <ol>
        <li><b>Theo bước quy trình:</b> “Thanh toán” → chọn phương thức / nhập thông tin / xác nhận.</li>
        <li><b>Theo quy tắc nghiệp vụ:</b> mã giảm theo số tiền / theo phần trăm / miễn phí ship.</li>
        <li><b>Đường suôn sẻ trước, trường hợp lỗi sau:</b> thanh toán thành công trước; hết tiền hay mất mạng làm ở story sau.</li>
        <li><b>Theo biến thể dữ liệu:</b> COD trước, ví điện tử sau, thẻ ngân hàng sau nữa.</li>
        <li><b>Theo nền tảng:</b> Android trước, iOS sau (nếu thị trường cho phép).</li>
      </ol>
      <p><b>Refinement</b> là hoạt động liên tục: làm rõ, tách, ước lượng các mục sắp tới. Nên dành khoảng 10% thời gian của team, ví dụ 1 buổi 60 phút mỗi tuần, có PO, BA và đại diện Developers. Mục tiêu: luôn có sẵn khoảng 1,5–2 Sprint story đã rõ ở đầu backlog.</p>`}
  ],
  activity: {t:"Story map FreshGo (30 phút)", html:`<p>Vẽ hành trình 5 bước của khách hàng. Dưới mỗi bước, viết 3–5 story từ cốt lõi đến nâng cao. Kẻ đường MVP. Chọn 1 story lớn nhất, tách nó theo 2 cách khác nhau trong số 5 cách ở trên.</p>`},
  check: [["Tiêu chí chấp nhận và DoD khác nhau thế nào?","Tiêu chí chấp nhận là riêng cho từng story (chức năng đúng chưa). DoD là chung cho mọi story (chất lượng đủ chưa)."],["“Xây dựng database” có phải user story tốt không?","Không. Đó là task kỹ thuật, không nói lên giá trị cho người dùng nào."],["Refinement nên chiếm khoảng bao nhiêu thời gian của team?","Khoảng 10%."]],
  home: "Bài 3.1: viết 10 user story cho app khách hàng FreshGo, mỗi story có 2–3 tiêu chí chấp nhận và đạt INVEST."
},
11: {
  goals: ["Điều phối Sprint Planning theo 3 câu hỏi: vì sao, làm gì, làm thế nào.", "Tính công suất team và dùng Planning Poker với story point.", "Tổ chức Daily, Review và Retro đúng mục đích, với ít nhất 2 kiểu Retro."],
  agenda: [["0–10","Ôn bài: đọc 2 story hay nhất của bạn"],["10–50","Phần 1: Sprint Planning và công suất"],["50–80","Phần 2: Story Point và Planning Poker"],["80–90","Nghỉ"],["90–115","Phần 3: Daily, Review, Retro"],["115–145","Thực hành: mô phỏng Sprint Planning"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Sprint Planning và công suất", html:`
      <p>Ba chủ đề của Sprint Planning:</p>
      <ol><li><b>Vì sao Sprint này có giá trị?</b> PO đề xuất, cả team chốt <b>Sprint Goal</b>. Ví dụ: “Khách đặt và thanh toán COD được một đơn hoàn chỉnh trên Android.”</li><li><b>Làm được gì?</b> Developers chọn story từ đầu backlog cho vừa công suất.</li><li><b>Làm thế nào?</b> Developers chia story thành task, thường mỗi task 1 ngày trở xuống.</li></ol>
      <p><b>Tính công suất cho Sprint 2 tuần (10 ngày làm việc):</b></p>
      <div class="tablewrap"><table><thead><tr><th>Thành viên</th><th>Ngày có mặt</th><th>Giờ hiệu quả/ngày</th><th>Giờ</th></tr></thead><tbody>
        <tr><td>2 mobile dev</td><td class="num">10 + 8 (nghỉ phép 2)</td><td class="num">6</td><td class="num">108</td></tr>
        <tr><td>2 backend dev</td><td class="num">10 + 10</td><td class="num">6</td><td class="num">120</td></tr>
        <tr><td>1 frontend, 1 tester</td><td class="num">10 + 10</td><td class="num">6</td><td class="num">120</td></tr>
        <tr><td colspan="3"><b>Tổng</b> (trừ khoảng 10% cho các sự kiện Scrum: còn khoảng 313 giờ)</td><td class="num"><b>348</b></td></tr>
      </tbody></table></div>
      <p>Khi đã có lịch sử, dùng <b>velocity</b> trung bình 3 Sprint gần nhất, rồi điều chỉnh theo tỷ lệ ngày nghỉ của Sprint này.</p>`},
    {h:"2. Story Point và Planning Poker", html:`
      <p><b>Story Point</b> đo độ lớn <i>tương đối</i>: gồm khối lượng, độ phức tạp và độ bất định. Dùng dãy gần Fibonacci: 1, 2, 3, 5, 8, 13, 20. Khoảng cách giữa các số tăng dần, vì việc càng lớn thì ước lượng càng kém chính xác.</p>
      <p><b>Planning Poker:</b></p>
      <ol><li>PO đọc story, team hỏi cho rõ.</li><li>Mỗi người chọn thẻ bí mật, rồi cùng lật.</li><li>Người chọn cao nhất và thấp nhất giải thích lý do. Đây là lúc lộ ra những rủi ro mà người khác không thấy.</li><li>Chọn lại cho đến khi đồng thuận.</li></ol>
      <p>Mẹo: chọn một story “chuẩn” làm mốc, ví dụ “Đăng nhập bằng số điện thoại + OTP = 3 điểm”, rồi so các story khác với nó. Story nào lớn hơn 13 điểm thì nên tách nhỏ.</p>`},
    {h:"3. Daily, Review, Retro", html:`
      <p><b>Daily (15 phút):</b> mục tiêu duy nhất là kiểm tra tiến độ tới Sprint Goal. Cách hiệu quả là “đi theo bảng” từ phải sang trái: việc nào sắp xong, việc nào đang kẹt. Thảo luận kỹ thuật thì để sau Daily, chỉ những người liên quan ở lại.</p>
      <p><b>Review:</b> demo phần mềm thật trên môi trường staging, không demo bằng slide. Sau demo, cùng các bên liên quan trả lời: “Với những gì vừa thấy, điều gì nên làm tiếp theo?” rồi cập nhật Backlog.</p>
      <p><b>Retro:</b> tạo không khí an toàn để nói thật. Một số kiểu:</p>
      <ul><li><b>Bắt đầu / Dừng / Tiếp tục:</b> đơn giản, hợp với team mới.</li><li><b>4L:</b> Thích, Học được, Thiếu, Mong muốn.</li><li><b>Thuyền buồm:</b> gió đẩy (điều giúp ta), mỏ neo (điều kéo lại), đá ngầm (rủi ro phía trước), hòn đảo (mục tiêu).</li></ul>
      <p>Kết thúc Retro với <b>tối đa 2 hành động cải tiến</b>, mỗi hành động có người phụ trách. Lần Retro sau mở đầu bằng việc kiểm tra 2 hành động đó.</p>`}
  ],
  activity: {t:"Mô phỏng Sprint Planning (30 phút)", html:`<p>Dùng 10 story bạn đã viết. Giả định velocity là 25 điểm. (1) Viết Sprint Goal. (2) Tự chơi Planning Poker: ước lượng từng story so với story mốc “Đăng nhập OTP = 3”. (3) Chọn các story vừa 25 điểm và phục vụ Sprint Goal. (4) Chia 1 story thành task. Nếu muốn, nhờ Claude đóng vai một dev phản biện ước lượng của bạn.</p>`},
  check: [["Sprint Goal có tác dụng gì khi giữa Sprint phát sinh việc mới?","Làm thước đo: việc mới nào không phục vụ Sprint Goal thì đưa về Product Backlog, không chen vào Sprint."],["Vì sao dùng dãy Fibonacci cho story point?","Vì việc càng lớn thì càng bất định; khoảng cách tăng dần phản ánh điều đó và tránh tranh cãi kiểu “8 hay 9”."],["Daily bị kéo dài thành 45 phút thảo luận kỹ thuật. Scrum Master nên làm gì?","Giữ đúng 15 phút, ghi lại chủ đề kỹ thuật, rồi mời những người liên quan ở lại họp riêng sau Daily."]],
  home: "Bài 3.2: viết kịch bản Sprint Planning 2 giờ cho Sprint 1 của FreshGo."
},
12: {
  goals: ["Áp dụng Kanban: trực quan hóa, giới hạn WIP, đo lead time và cycle time.", "Đọc được burndown, burnup và velocity để dự báo.", "Thiết kế mô hình Hybrid cho dự án Fixed Price.", "Dựng một dự án Scrum trên Jira."],
  agenda: [["0–10","Ôn bài: Sprint Goal của bạn"],["10–40","Phần 1: Kanban"],["40–65","Phần 2: Các chỉ số Agile"],["65–75","Nghỉ"],["75–100","Phần 3: Mô hình Hybrid"],["100–145","Thực hành: dựng FreshGo trên Jira"],["145–150","Tổng kết Module 3"]],
  parts: [
    {h:"1. Kanban", html:`
      <p>Kanban không có Sprint hay vai trò cố định. Nó dựa trên các thực hành: <b>trực quan hóa luồng việc</b>, <b>giới hạn WIP</b>, <b>quản lý dòng chảy</b>, và quy tắc rõ ràng (ví dụ: “điều kiện để chuyển sang cột Test”).</p>
      <p><b>Giới hạn WIP</b>: ví dụ cột “Đang làm” tối đa 4 thẻ. Khi đầy, ai rảnh phải giúp đẩy việc đang dở sang cột sau, không được kéo việc mới vào. Nguyên tắc là <i>“Ngừng bắt đầu, hãy hoàn thành.”</i></p>
      <p><b>Lead time</b> tính từ lúc khách yêu cầu đến khi giao. <b>Cycle time</b> tính từ lúc bắt đầu làm đến khi xong. Định luật Little: <i>thời gian trung bình = số việc đang dở ÷ tốc độ hoàn thành</i>. Muốn giao nhanh hơn, cách rẻ nhất là bớt việc đang dở.</p>
      <p>Kanban hợp với team bảo trì và vận hành, hoặc team hỗ trợ sau go-live của FreshGo.</p>`},
    {h:"2. Các chỉ số Agile", html:`
      <ul>
        <li><b>Velocity:</b> điểm làm xong mỗi Sprint. Dùng trung bình 3 Sprint và một khoảng (thấp nhất–cao nhất) để dự báo. Không dùng để so sánh hay đánh giá các team.</li>
        <li><b>Sprint burndown:</b> công việc còn lại theo ngày. Đường đi ngang nhiều ngày là dấu hiệu có việc bị kẹt.</li>
        <li><b>Release burnup:</b> hai đường: tổng phạm vi và phần đã xong. Nếu đường phạm vi cứ đi lên, dự án đang bị phình phạm vi, và biểu đồ này cho khách thấy điều đó rất rõ.</li>
        <li><b>Lỗi lọt ra production:</b> số bug khách phát hiện sau khi phát hành. Đây là thước đo chất lượng thật.</li>
      </ul>
      <p><b>Dự báo bằng khoảng:</b> velocity 3 Sprint là 24, 30, 27; backlog còn 135 điểm. Nhanh nhất 135 ÷ 30 = 4,5 Sprint; chậm nhất 135 ÷ 24 = 5,6 Sprint. Hãy báo khách “từ 5 đến 6 Sprint” thay vì một con số duy nhất.</p>`},
    {h:"3. Mô hình Hybrid", html:`
      <p>Cách ghép Sprint vào hợp đồng Fixed Price của FreshGo:</p>
      <div class="tablewrap"><table><thead><tr><th>Lớp ngoài (hợp đồng)</th><th>Lớp trong (team)</th></tr></thead><tbody>
        <tr><td>4 mốc thanh toán có tiêu chí nghiệm thu</td><td>Mỗi mốc gồm khoảng 2–4 Sprint</td></tr>
        <tr><td>Scope Statement và danh sách Must</td><td>Product Backlog, PO xếp lại trong phạm vi đã ký</td></tr>
        <tr><td>Change Request cho phạm vi mới</td><td>Đổi chứ không thêm: thêm story mới thì bỏ ra story cùng độ lớn, hoặc lập CR</td></tr>
        <tr><td>Báo cáo tháng (RAG, EVM)</td><td>Burnup, velocity</td></tr>
        <tr><td>UAT cuối mỗi mốc</td><td>Sprint Review mỗi 2 tuần (khách thấy sớm, UAT ít bất ngờ)</td></tr>
      </tbody></table></div>`},
    {h:"4. Dựng dự án trên Jira", html:`
      <ol><li>Tạo tài khoản Jira Software Free (tối đa 10 người dùng), chọn mẫu <b>Scrum</b>.</li><li>Tạo các Epic: Đăng nhập, Danh mục, Giỏ hàng, Thanh toán, Theo dõi đơn.</li><li>Nhập story, gắn vào Epic, điền tiêu chí chấp nhận vào phần Mô tả và điền Story Point.</li><li>Kéo các story vào Sprint 1, ghi Sprint Goal, bấm <b>Start sprint</b>.</li><li>Tùy chỉnh board: thêm cột “Code review” và “Testing”, đặt giới hạn WIP cho từng cột.</li><li>Mở mục Reports để xem Burndown và Velocity.</li></ol>`}
  ],
  activity: {t:"Dựng FreshGo trên Jira (45 phút)", html:`<p>Làm theo 6 bước ở Phần 4 với 10 story của bạn. Chụp màn hình Backlog và board Sprint 1. Thêm một story “phát sinh” vào giữa Sprint, rồi thực hành áp dụng nguyên tắc “đổi chứ không thêm”.</p>`},
  check: [["Cột “Đang làm” đã đầy theo giới hạn WIP, một dev vừa rảnh. Dev đó nên làm gì?","Giúp đẩy việc đang dở (review, test) chứ không kéo việc mới vào."],["Release burnup có đường phạm vi tăng liên tục. Điều đó nói lên gì?","Dự án đang bị phình phạm vi; ngày xong sẽ lùi nếu không kiểm soát."],["“Đổi chứ không thêm” nghĩa là gì?","Muốn thêm story mới vào phạm vi đã chốt thì phải bỏ ra một story có độ lớn tương đương, hoặc lập Change Request."]],
  home: "★ Nộp sản phẩm Module 3: ảnh chụp Product Backlog và Sprint 1 trên Jira, kèm đoạn mô tả mô hình Hybrid (Bài 3.3)."
}
});
