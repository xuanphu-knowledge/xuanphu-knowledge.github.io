window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {
1: {
  goals: ["Phân biệt dự án với vận hành, và dự án với chương trình, danh mục.", "Nêu được 5 đặc thù khiến dự án CNTT khó hơn nhiều loại dự án khác.", "Phân biệt rõ trách nhiệm của PM, Product Owner, Scrum Master, BA và Tech Lead.", "Tự đánh giá mình còn thiếu gì để chuyển từ Dev, Tester hoặc BA sang PM."],
  agenda: [["0–15","Khởi động: kể lại một dự án bạn từng tham gia bị trễ hoặc vượt chi phí. Theo bạn, nguyên nhân gốc là gì?"],["15–50","Phần 1: Dự án là gì"],["50–80","Phần 2: Vì sao dự án CNTT hay thất bại"],["80–90","Nghỉ giải lao"],["90–120","Phần 3: Các vai trò trong dự án"],["120–145","Thực hành: Bản đồ vai trò ở dự án hiện tại của bạn"],["145–150","Tổng kết và giao bài về nhà"]],
  parts: [
    {h:"1. Dự án là gì", html:`
      <p>Theo PMI, dự án là <b>nỗ lực tạm thời nhằm tạo ra một sản phẩm, dịch vụ hoặc kết quả duy nhất</b>. Định nghĩa này có ba từ khóa cần nhớ:</p>
      <ul>
        <li><b>Tạm thời:</b> có ngày bắt đầu và ngày kết thúc. Kết thúc khi đạt mục tiêu, hoặc khi không còn lý do để tiếp tục.</li>
        <li><b>Duy nhất:</b> kết quả chưa từng có y hệt trước đó. Hai dự án làm app bán hàng cho hai khách khác nhau vẫn là hai dự án khác nhau.</li>
        <li><b>Chi tiết hóa dần:</b> lúc đầu chỉ biết mức tổng quát, càng đi càng rõ. Đây là lý do kế hoạch phải cập nhật liên tục.</li>
      </ul>
      <p><b>Vận hành</b> thì ngược lại: lặp đi lặp lại và kéo dài, để duy trì hoạt động.</p>
      <div class="tablewrap"><table><thead><tr><th>Dự án</th><th>Vận hành</th></tr></thead><tbody>
        <tr><td>Xây app FreshGo phiên bản 1.0</td><td>Trực hỗ trợ khách dùng app</td></tr>
        <tr><td>Chuyển hệ thống từ máy chủ riêng lên cloud</td><td>Sao lưu dữ liệu hằng đêm</td></tr>
        <tr><td>Tích hợp cổng thanh toán mới</td><td>Vá lỗi bảo mật định kỳ</td></tr>
      </tbody></table></div>
      <p><b>Chương trình (program)</b> là nhóm dự án liên quan, được quản lý chung để đạt lợi ích lớn hơn. Ví dụ: chương trình “Chuyển đổi số FreshMart” gồm app FreshGo, hệ thống kho và CRM. <b>Danh mục (portfolio)</b> là toàn bộ dự án và chương trình mà một tổ chức đang đầu tư.</p>`},
    {h:"2. Vì sao dự án CNTT hay thất bại", html:`
      <p>Nhiều năm liền, các khảo sát ngành đều cho cùng một kết luận: phần lớn dự án phần mềm bị trễ, vượt chi phí hoặc thiếu tính năng. Nguyên nhân hiếm khi nằm ở công nghệ. Lý do nằm ở 5 đặc thù sau:</p>
      <ol>
        <li><b>Sản phẩm vô hình.</b> Khách chỉ “thấy” được khi phần mềm chạy, nên họ thường đổi ý muộn.</li>
        <li><b>Yêu cầu thay đổi liên tục.</b> Thị trường, quy định và đối thủ đều thay đổi trong lúc bạn đang làm.</li>
        <li><b>Tích hợp phức tạp.</b> Hệ thống mới phải nói chuyện với hệ thống cũ (POS, ERP, ngân hàng) mà bạn không kiểm soát.</li>
        <li><b>Phụ thuộc vào con người.</b> Năng suất giữa các dev chênh nhau nhiều lần; một người nghỉ có thể làm dự án khựng lại.</li>
        <li><b>Công nghệ đổi nhanh.</b> Thư viện, nền tảng, chính sách của App Store hay Google Play đều có thể đổi giữa dự án.</li>
      </ol>
      <p>Từ đó sinh ra các nguyên nhân thất bại kinh điển: yêu cầu không rõ, người dùng không tham gia, ước lượng quá lạc quan, thiếu nhà tài trợ đủ quyền lực, phình phạm vi, và giao tiếp kém. Mỗi module sau của khóa học sẽ xử lý một nhóm nguyên nhân này.</p>`},
    {h:"3. Các vai trò trong dự án", html:`
      <div class="tablewrap"><table><thead><tr><th>Vai trò</th><th>Câu hỏi họ trả lời</th><th>Sản phẩm chính</th><th>Thước đo thành công</th></tr></thead><tbody>
        <tr><td><b>Project Manager</b></td><td>Có xong đúng phạm vi, đúng hạn, đúng ngân sách không?</td><td>Kế hoạch, báo cáo, Risk Register, biên bản</td><td>Mục tiêu dự án, sự hài lòng của các bên</td></tr>
        <tr><td><b>Product Owner</b></td><td>Làm gì trước để tạo ra giá trị lớn nhất?</td><td>Product Backlog, Product Goal</td><td>Giá trị sản phẩm, số người dùng, doanh thu</td></tr>
        <tr><td><b>Scrum Master</b></td><td>Team có đang làm việc hiệu quả và đúng Scrum không?</td><td>Sự kiện Scrum trơn tru, vướng mắc được gỡ</td><td>Team tự quản, cải tiến qua từng Sprint</td></tr>
        <tr><td><b>Business Analyst</b></td><td>Khách thật sự cần gì? Viết ra thế nào cho dev hiểu?</td><td>SRS, user story, quy trình nghiệp vụ</td><td>Ít hiểu lầm, ít phải làm lại</td></tr>
        <tr><td><b>Tech Lead</b></td><td>Làm thế nào cho đúng kỹ thuật và bền vững?</td><td>Kiến trúc, chuẩn code, review</td><td>Chất lượng kỹ thuật, nợ kỹ thuật thấp</td></tr>
      </tbody></table></div>
      <p><b>Thực tế ở Việt Nam:</b> công ty outsource thường có PM kiêm Scrum Master. Dự án làm cho khách Nhật có thêm <b>BrSE</b> (kỹ sư cầu nối) lo phần ngôn ngữ và tài liệu. Công ty product thì tách PO và PM rõ hơn.</p>
      <p><b>Dev chuyển sang PM cần đổi cách nghĩ:</b> từ “tôi làm xong việc của tôi” sang “cả team đạt mục tiêu”. Đánh giá bạn không còn dựa trên số dòng code, mà dựa trên kết quả dự án. Theo PMI, một PM cần ba nhóm năng lực: <b>cách làm việc</b> (Predictive, Agile, Hybrid), <b>kỹ năng mềm</b> (giao tiếp, lãnh đạo, đàm phán) và <b>hiểu biết kinh doanh</b> (vì sao dự án tồn tại, mang lại tiền như thế nào).</p>`}
  ],
  activity: {t:"Bản đồ vai trò ở dự án hiện tại (25 phút)", html:`<p>Kẻ bảng 3 cột: <b>Vai trò</b> · <b>Ai đang làm ở dự án của tôi</b> · <b>Việc nào đang không ai làm</b>. Điền đủ 5 vai trò ở trên. Sau đó khoanh tròn 2 việc “không ai làm” mà bạn có thể nhận ngay trong tuần tới (ví dụ: cập nhật danh sách rủi ro, viết biên bản họp với khách). Đây là cách nhanh nhất để bắt đầu làm PM ngay trong công việc hiện tại.</p>`},
  check: [["Bảo trì hệ thống POS hằng tháng là dự án hay vận hành?","Vận hành, vì lặp đi lặp lại và không có điểm kết thúc. Còn nâng cấp POS lên phiên bản mới thì là dự án."],["Nêu 3 trong 5 đặc thù của dự án CNTT.","Sản phẩm vô hình, yêu cầu thay đổi liên tục, tích hợp phức tạp, phụ thuộc con người, công nghệ đổi nhanh."],["Ai quyết định tính năng nào làm trước trong Scrum?","Product Owner. PM và Scrum Master có thể tư vấn, nhưng không quyết thay PO."],["“Chi tiết hóa dần” ảnh hưởng thế nào đến cách lập kế hoạch?","Kế hoạch không thể đúng ngay từ đầu. Nó phải được cập nhật khi biết thêm thông tin, nên PM lập kế hoạch theo từng lớp: tổng quát trước, chi tiết dần."]],
  home: "Viết nửa trang so sánh các vai trò PM, PO, Scrum Master và BA ở công ty bạn với bảng chuẩn ở trên. Chỗ nào khác? Chỗ khác đó gây ra vấn đề gì?"
},
2: {
  goals: ["Mô tả 5 nhóm quy trình quản lý dự án và cách chúng lặp lại trong từng giai đoạn.", "So sánh Waterfall, V-model, Iterative/Incremental, Agile và Hybrid.", "Chọn được cách tiếp cận phù hợp cho một dự án dựa trên các tiêu chí rõ ràng."],
  agenda: [["0–10","Ôn bài: 3 câu hỏi nhanh về Buổi 1"],["10–45","Phần 1: 5 nhóm quy trình và vòng đời dự án"],["45–80","Phần 2: Các mô hình phát triển phần mềm"],["80–90","Nghỉ"],["90–115","Phần 3: Chọn mô hình như thế nào"],["115–145","Thực hành: chọn mô hình cho 4 dự án"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. 5 nhóm quy trình và vòng đời dự án", html:`
      <p>Mọi dự án, dù lớn hay nhỏ, đều đi qua 5 nhóm việc quản lý:</p>
      <ol>
        <li><b>Khởi tạo:</b> xác định dự án, nhà tài trợ, mục tiêu; viết Charter.</li>
        <li><b>Lập kế hoạch:</b> phạm vi, tiến độ, chi phí, rủi ro, giao tiếp, chất lượng.</li>
        <li><b>Thực thi:</b> làm ra sản phẩm, điều phối team, làm việc với các bên liên quan.</li>
        <li><b>Giám sát và kiểm soát:</b> so sánh thực tế với kế hoạch, xử lý chênh lệch và thay đổi.</li>
        <li><b>Kết thúc:</b> nghiệm thu, bàn giao, rút kinh nghiệm.</li>
      </ol>
      <p><b>Điểm hay bị hiểu sai:</b> 5 nhóm này không phải 5 giai đoạn nối tiếp nhau. Giám sát diễn ra suốt dự án, và lập kế hoạch được làm lại mỗi khi có thông tin mới. Trong Agile, cả 5 nhóm thu nhỏ lại và lặp lại trong <i>mỗi Sprint</i>.</p>
      <p><b>Cập nhật chuẩn PMI:</b> <i>PMBOK Guide</i> bản 8 (phát hành 11/2025) đưa 5 nhóm quy trình này trở lại làm “xương sống”, sau khi bản 7 chỉ nói về nguyên tắc. Bản 8 gồm <b>6 nguyên tắc</b> và <b>7 lĩnh vực hiệu suất</b>: Quản trị (Governance), Phạm vi, Tiến độ, Tài chính, Bên liên quan, Nguồn lực, Rủi ro; đồng thời có hướng dẫn riêng về AI và bền vững. Bạn không cần thuộc lòng, nhưng khi phỏng vấn nên biết đây là bản hiện hành.</p>
      <p><b>Vòng đời dự án</b> là chuỗi các giai đoạn của dự án, ví dụ: Khảo sát → Thiết kế → Phát triển → Kiểm thử → Triển khai. Cuối mỗi giai đoạn thường có một <b>cổng duyệt (phase gate)</b> để nhà tài trợ quyết định đi tiếp, sửa lại hay dừng.</p>`},
    {h:"2. Các mô hình phát triển phần mềm", html:`
      <div class="tablewrap"><table><thead><tr><th>Mô hình</th><th>Cách chạy</th><th>Hợp khi</th><th>Rủi ro chính</th></tr></thead><tbody>
        <tr><td><b>Waterfall</b></td><td>Làm tuần tự từng giai đoạn, xong giai đoạn này mới sang giai đoạn sau</td><td>Yêu cầu rõ và ổn định; hợp đồng trọn gói; có quy định phải duyệt từng bước</td><td>Đến cuối dự án khách mới thấy sản phẩm, lúc đó sửa rất đắt</td></tr>
        <tr><td><b>V-model</b></td><td>Waterfall, nhưng mỗi bước thiết kế có một bước kiểm thử tương ứng</td><td>Hệ thống đòi chất lượng cao: ngân hàng, y tế</td><td>Cứng nhắc như Waterfall</td></tr>
        <tr><td><b>Iterative / Incremental</b></td><td>Làm nhiều vòng; mỗi vòng thêm một phần sản phẩm</td><td>Dự án lớn, có thể chia giai đoạn phát hành</td><td>Cần kiến trúc đủ tốt để mở rộng</td></tr>
        <tr><td><b>Agile (Scrum, Kanban)</b></td><td>Sprint ngắn 1–4 tuần, mỗi Sprint ra phần mềm chạy được, nhận phản hồi liên tục</td><td>Yêu cầu chưa rõ, cần ra thị trường nhanh, khách tham gia thường xuyên</td><td>Khó chốt ngân sách cố định; cần PO giỏi và có mặt</td></tr>
        <tr><td><b>Hybrid</b></td><td>Bên ngoài có mốc và cổng duyệt; bên trong chạy Sprint</td><td>Hợp đồng Fixed Price nhưng yêu cầu chưa chắc: phổ biến nhất ở Việt Nam</td><td>Dễ thành “Waterfall đội lốt Scrum” nếu làm không khéo</td></tr>
      </tbody></table></div>`},
    {h:"3. Chọn mô hình như thế nào", html:`
      <p>Trả lời 5 câu hỏi sau. Càng nhiều câu trả lời nghiêng về bên trái thì càng nên dùng Predictive; càng nhiều câu nghiêng về bên phải thì càng nên dùng Agile:</p>
      <ol>
        <li>Yêu cầu: <b>rõ, ít đổi</b> ↔ <b>mơ hồ, đổi nhiều</b>?</li>
        <li>Công nghệ: <b>quen thuộc</b> ↔ <b>mới với team</b>?</li>
        <li>Khách hàng: <b>chỉ duyệt ở các mốc</b> ↔ <b>tham gia hằng tuần</b>?</li>
        <li>Hợp đồng và quy định: <b>trọn gói, duyệt từng bước</b> ↔ <b>theo công, linh hoạt</b>?</li>
        <li>Giá trị: <b>chỉ có giá trị khi xong toàn bộ</b> ↔ <b>dùng được từng phần sớm</b>?</li>
      </ol>
      <p><b>Áp dụng cho FreshGo:</b> yêu cầu chưa chắc (nghiêng phải), công nghệ quen (nghiêng trái), chị Lan chỉ có 4 giờ/tuần (ở giữa), hợp đồng Fixed Price (nghiêng trái), có thể ra mắt từng phần (nghiêng phải). Kết luận: <b>Hybrid</b>. Chốt phạm vi tổng và 4 mốc thanh toán theo hợp đồng; bên trong chạy Sprint 2 tuần; mọi thay đổi đi qua Change Request.</p>
      <p>Dự án dùng vốn nhà nước thường phải theo trình tự phê duyệt từng bước, nên thường nghiêng về Predictive.</p>`}
  ],
  activity: {t:"Chọn mô hình cho 4 dự án (30 phút)", html:`<p>Với mỗi dự án, chọn mô hình và nêu 2 lý do: (a) thay lõi ngân hàng cho một ngân hàng thương mại; (b) MVP của một startup giao đồ ăn, có 3 tháng để gọi vốn; (c) website giới thiệu công ty 10 trang; (d) bảo trì và sửa lỗi cho hệ thống HR đang chạy.</p><details><summary style="cursor:pointer;color:var(--accent);font-weight:600">Gợi ý đáp án</summary><p>(a) Predictive hoặc V-model: quy định chặt, rủi ro cao. (b) Scrum: cần học nhanh từ thị trường. (c) Waterfall gọn: yêu cầu đơn giản, rõ ràng. (d) Kanban: việc đến liên tục, không cần Sprint.</p></details>`},
  check: [["Giám sát và kiểm soát xảy ra khi nào?","Suốt dự án, song song với thực thi, không phải chỉ ở cuối."],["Vì sao Hybrid phổ biến ở Việt Nam?","Vì hợp đồng outsource thường là Fixed Price (cần mốc và phạm vi), nhưng yêu cầu thì hiếm khi rõ 100% (cần Sprint để có phản hồi sớm)."],["Phase gate là gì?","Điểm duyệt cuối mỗi giai đoạn, nơi nhà tài trợ quyết định đi tiếp, sửa lại hay dừng dự án."]],
  home: "Bài 1.2: chọn cách tiếp cận cho FreshGo và viết lập luận 150 chữ, dùng 5 câu hỏi ở Phần 3."
},
3: {
  goals: ["Nhận diện đầy đủ các bên liên quan, kể cả những bên “ẩn”.", "Phân loại họ bằng lưới Quyền lực × Quan tâm và chọn chiến lược làm việc với từng nhóm.", "Đọc và viết được một Business Case đơn giản.", "Viết mục tiêu dự án theo chuẩn SMART."],
  agenda: [["0–10","Khởi động: ai từng “chặn” dự án của bạn vào phút chót?"],["10–50","Phần 1: Nhận diện và phân tích bên liên quan"],["50–80","Phần 2: Business Case"],["80–90","Nghỉ"],["90–115","Phần 3: Mục tiêu SMART; Phần 4: ROI và hoàn vốn"],["115–145","Thực hành: Stakeholder Register cho FreshGo"],["145–150","Tổng kết"]],
  parts: [
    {h:"1. Nhận diện và phân tích bên liên quan", html:`
      <p>Bên liên quan là bất kỳ ai <b>ảnh hưởng đến</b> hoặc <b>bị ảnh hưởng bởi</b> dự án. Nhóm hay bị quên nhất là những người không ngồi trong phòng họp. Dùng checklist này để rà:</p>
      <ul><li>Nhà tài trợ, người duyệt ngân sách</li><li>Người dùng cuối (khách mua hàng, nhân viên cửa hàng, shipper)</li><li>Bộ phận IT vận hành của khách</li><li>Bảo mật, pháp chế, kế toán</li><li>Nhà cung cấp bên thứ ba (POS, cổng thanh toán, App Store)</li><li>Team dự án và các trưởng bộ phận cho mượn người</li></ul>
      <p><b>Lưới Quyền lực × Quan tâm:</b></p>
      <div class="tablewrap"><table><thead><tr><th></th><th>Quan tâm thấp</th><th>Quan tâm cao</th></tr></thead><tbody>
        <tr><td><b>Quyền lực cao</b></td><td><b>Giữ hài lòng:</b> báo cáo ngắn, đúng lúc, không làm phiền (ví dụ: Giám đốc tài chính)</td><td><b>Quản lý chặt:</b> họp thường xuyên, mời tham gia quyết định (ví dụ: anh Minh, chị Lan)</td></tr>
        <tr><td><b>Quyền lực thấp</b></td><td><b>Theo dõi:</b> cập nhật khi cần</td><td><b>Thông báo đầy đủ:</b> bản tin, demo, mời góp ý (ví dụ: quản lý cửa hàng, shipper)</td></tr>
      </tbody></table></div>
      <p><b>Mức độ ủng hộ</b> của mỗi người: Không biết → Phản đối → Trung lập → Ủng hộ → Dẫn dắt. Với mỗi người, ghi mức hiện tại và mức bạn muốn họ đạt tới, rồi lên kế hoạch kéo họ đến đó.</p>`},
    {h:"2. Business Case", html:`
      <p>Business Case trả lời câu hỏi: <b>vì sao nên bỏ tiền cho dự án này?</b> Thường do phía khách hàng hoặc nhà tài trợ viết, nhưng PM phải đọc hiểu, vì mọi quyết định cắt hay giữ phạm vi về sau đều quay lại câu hỏi này.</p>
      <p>Cấu trúc gồm: vấn đề hoặc cơ hội → các phương án (luôn có phương án “không làm gì”) → chi phí và lợi ích của từng phương án → phương án đề xuất → rủi ro chính.</p>
      <p><b>Ví dụ FreshGo (số liệu giả định):</b> doanh thu online qua Zalo khoảng 1,5 tỷ/tháng và bị sót 8% đơn, tức mất khoảng 120 triệu/tháng. App dự kiến giảm tỷ lệ sót đơn xuống 1% và tăng doanh thu online thêm 30% nhờ kênh mới. Nếu lợi nhuận gộp tăng thêm khoảng 200 triệu/tháng, khoản đầu tư 2,4 tỷ sẽ <b>hoàn vốn sau khoảng 12 tháng</b>.</p>`},
    {h:"3. Mục tiêu SMART", html:`
      <p>Một mục tiêu SMART thì <b>C</b>ụ thể, <b>Đ</b>o được, <b>K</b>hả thi, <b>L</b>iên quan tới Business Case, và <b>C</b>ó hạn. Một số cách sửa mục tiêu kém:</p>
      <div class="tablewrap"><table><thead><tr><th>Mục tiêu kém</th><th>Viết lại theo SMART</th></tr></thead><tbody>
        <tr><td>App chạy nhanh</td><td>95% màn hình tải dưới 2 giây trên mạng 4G, đo tại thời điểm go-live</td></tr>
        <tr><td>Giảm sót đơn</td><td>Tỷ lệ sót đơn dưới 1% trong 3 tháng sau go-live, so với 8% hiện nay</td></tr>
        <tr><td>Khách thích app</td><td>Điểm đánh giá trên store từ 4,3 trở lên sau 1.000 lượt đánh giá đầu</td></tr>
      </tbody></table></div>
      <p>Mẹo: phân biệt <b>mục tiêu dự án</b> (ra mắt đúng hạn, đúng ngân sách) với <b>mục tiêu kinh doanh</b> (5.000 đơn/tháng). PM chịu trách nhiệm trực tiếp cho mục tiêu dự án; mục tiêu kinh doanh còn phụ thuộc marketing, vận hành và nhiều yếu tố khác.</p>`},
    {h:"4. Giá trị kinh doanh: ROI, hoàn vốn, đo lợi ích", html:`
      <p>Nhà tài trợ không mua “một cái app”, họ mua <b>kết quả kinh doanh</b>. PM giỏi nói được dự án đem lại bao nhiêu tiền và đo nó thế nào sau go-live. Đề PMP từ 7/2026 cũng tăng mạnh phần này (miền Business Environment chiếm 26%).</p>
      <div class="tablewrap"><table><thead><tr><th>Chỉ số</th><th>Công thức</th><th>Ví dụ FreshGo (giả định)</th></tr></thead><tbody>
        <tr><td><b>Lợi ích ròng/năm</b></td><td>Lợi nhuận tăng thêm − chi phí vận hành</td><td>Lợi nhuận tăng thêm 120 triệu/tháng ≈ 1,44 tỷ/năm; vận hành 0,3 tỷ/năm → <b>1,14 tỷ/năm</b></td></tr>
        <tr><td><b>Thời gian hoàn vốn</b></td><td>Vốn đầu tư ÷ lợi ích ròng/năm</td><td class="num">2,4 ÷ 1,14 ≈ 2,1 năm</td></tr>
        <tr><td><b>ROI 3 năm</b></td><td>(Tổng lợi ích − vốn đầu tư) ÷ vốn đầu tư</td><td class="num">(3,42 − 2,4) ÷ 2,4 ≈ 42%</td></tr>
      </tbody></table></div>
      <p>“Lợi nhuận tăng thêm 120 triệu/tháng” là giả định: 5.000 đơn × 300.000đ = 1,5 tỷ doanh thu; biên lợi nhuận gộp 20% = 300 triệu; chỉ khoảng 40% là khách <i>mới thật sự</i> (phần còn lại vốn đã mua tại cửa hàng) → 120 triệu. Hãy ghi rõ giả định để nhà tài trợ phản biện.</p>
      <p><b>Kế hoạch đo lợi ích</b> (benefits realization): chọn 3–4 KPI, có mức nền trước dự án, mục tiêu, người đo và thời điểm đo. Ví dụ: số đơn online/tháng, giá trị đơn trung bình, tỷ lệ khách quay lại sau 30 ngày, tỷ lệ lỗi thanh toán. Nhiều lợi ích chỉ thấy sau 3–6 tháng, nên việc đo thuộc về chủ sản phẩm (chị Lan), nhưng PM phải đưa nó vào Business Case và biên bản bàn giao.</p>
      <p><b>Thực hành nhanh:</b> nếu chỉ 25% đơn là khách mới thì thời gian hoàn vốn là bao lâu? (Đáp án: lợi nhuận thêm 75 triệu/tháng = 0,9 tỷ/năm; ròng 0,6 tỷ/năm; hoàn vốn 4 năm. Dự án vẫn đáng làm không là câu hỏi cho nhà tài trợ.)</p>`}
  ],
  activity: {t:"Stakeholder Register cho FreshGo (30 phút)", html:`<p>Lập bảng với các cột: Tên/vai trò · Quyền lực (Cao/Thấp) · Quan tâm (Cao/Thấp) · Mức ủng hộ hiện tại → mong muốn · Họ cần gì từ dự án · Chiến lược. Cần ít nhất 8 dòng, trong đó có ít nhất 2 bên “ẩn” như pháp chế, nhà cung cấp POS hoặc đội IT của FreshMart.</p>`},
  check: [["Thời gian hoàn vốn 2,1 năm và ROI 3 năm 42% của FreshGo dựa trên giả định nào dễ sai nhất?","Tỷ lệ đơn là khách mới thật sự (40%). Nếu chỉ 25% thì hoàn vốn mất khoảng 4 năm, nên phải ghi rõ giả định."],["Vì sao phải có phương án “không làm gì” trong Business Case?","Để làm mốc so sánh. Dự án chỉ đáng làm khi lợi ích tốt hơn rõ ràng so với việc giữ nguyên hiện trạng."],["Giám đốc tài chính nằm ở ô nào của lưới, và nên làm việc với họ thế nào?","Quyền lực cao, quan tâm thấp: giữ hài lòng bằng báo cáo ngắn về ngân sách, đúng lúc, không làm phiền."],["“Làm app tốt nhất thị trường” sai ở tiêu chí SMART nào?","Không cụ thể, không đo được và không có hạn."]],
  home: "Bài 1.1 và 1.3: hoàn thiện lưới bên liên quan và viết lại 3 mục tiêu dự án theo chuẩn SMART."
},
4: {
  goals: ["Viết được Project Charter đầy đủ, gọn trong 2 trang.", "Phân biệt giả định với ràng buộc.", "Tổ chức một buổi Kickoff 90 phút có kết quả rõ ràng."],
  agenda: [["0–10","Ôn bài: đọc 2 mục tiêu SMART của bạn"],["10–55","Phần 1: Project Charter, từng mục"],["55–80","Phần 2: Giả định, ràng buộc và tiêu chí thành công"],["80–90","Nghỉ"],["90–115","Phần 3: Buổi Kickoff"],["115–145","Thực hành: viết nháp Charter FreshGo"],["145–150","Tổng kết Module 1"]],
  parts: [
    {h:"1. Project Charter, từng mục", html:`
      <p>Charter là “giấy khai sinh” của dự án. Nó làm hai việc: <b>chính thức cho phép dự án bắt đầu</b>, và <b>trao quyền cho PM</b> sử dụng nguồn lực. Người ký là nhà tài trợ, không phải PM.</p>
      <ul>
        <li><b>Mục đích và bối cảnh:</b> 3–5 câu, dẫn từ Business Case.</li>
        <li><b>Mục tiêu SMART:</b> 2–4 mục tiêu.</li>
        <li><b>Phạm vi tổng quát:</b> trong phạm vi và <i>ngoài phạm vi</i>. Mục “ngoài phạm vi” quan trọng ngang mục “trong phạm vi”.</li>
        <li><b>Mốc chính:</b> khoảng 4–6 mốc, mỗi mốc có tiêu chí hoàn thành. Với FreshGo: Chốt yêu cầu (31/1), Bản beta nội bộ (15/4), UAT xong (10/6), Go-live (30/6).</li>
        <li><b>Ngân sách tổng</b> và nguồn tiền.</li>
        <li><b>Rủi ro cấp cao:</b> 3–5 rủi ro lớn nhất.</li>
        <li><b>Quyền hạn của PM:</b> được tự quyết đến đâu. Ví dụ: chi phát sinh dưới 20 triệu; điều chỉnh phân công trong team; mọi thay đổi ảnh hưởng mốc go-live phải trình nhà tài trợ.</li>
      </ul>`},
    {h:"2. Giả định, ràng buộc và tiêu chí thành công", html:`
      <p><b>Giả định</b> là điều ta coi là đúng để lập kế hoạch, nhưng chưa chắc chắn. Ví dụ: “Nhà cung cấp POS cung cấp tài liệu API trước 15/1.” Mỗi giả định là một rủi ro tiềm ẩn, nên phải ghi ra và kiểm tra lại định kỳ.</p>
      <p><b>Ràng buộc</b> là giới hạn bắt buộc phải tuân theo. Ví dụ: ngân sách 2,4 tỷ; go-live trước 1/7; tuân thủ Luật Bảo vệ dữ liệu cá nhân 2025 và Nghị định 356/2025 (cùng hiệu lực từ 1/1/2026, thay Luật Bảo vệ dữ liệu cá nhân 2025 và Nghị định 356/2025).</p>
      <p><b>Tiêu chí thành công</b> trả lời câu hỏi “khi nào nhà tài trợ nói dự án thành công?”. Hãy hỏi thẳng anh Minh ngay từ đầu, đừng tự đoán. Thường gồm: đúng hạn, trong ngân sách, đạt tiêu chí nghiệm thu, và một chỉ số kinh doanh sau go-live.</p>`},
    {h:"3. Buổi Kickoff", html:`
      <p>Thường có hai buổi: <b>kickoff nội bộ</b> (team công ty bạn) và <b>kickoff với khách hàng</b>. Agenda mẫu 90 phút cho kickoff với khách:</p>
      <ol>
        <li>Giới thiệu thành phần và vai trò (10 phút)</li>
        <li>Mục tiêu, phạm vi và ngoài phạm vi (15 phút)</li>
        <li>Lộ trình và các mốc (15 phút)</li>
        <li>Cách làm việc: Sprint, demo, kênh liên lạc, thời gian phản hồi (15 phút)</li>
        <li>Quy trình thay đổi yêu cầu và escalation (10 phút)</li>
        <li>Rủi ro ban đầu và việc khách cần chuẩn bị (15 phút)</li>
        <li>Hỏi đáp và chốt việc cần làm (10 phút)</li>
      </ol>
      <p><b>Sau kickoff, trong vòng 24 giờ:</b> gửi biên bản họp gồm các quyết định, việc cần làm (ai, việc gì, hạn) và tài liệu đính kèm. Đây là thói quen đầu tiên giúp khách tin bạn.</p>`}
  ],
  activity: {t:"Viết nháp Charter FreshGo (30 phút)", html:`<p>Dùng Mẫu 1 ở trang Biểu mẫu và điền nhanh mọi mục dựa trên hồ sơ FreshGo. Không cần hoàn hảo; mục tiêu là thấy mục nào bạn còn thiếu thông tin. Với mỗi chỗ thiếu, viết ra một câu hỏi sẽ hỏi anh Minh hoặc chị Lan ở buổi kickoff.</p>`},
  check: [["Ai ký Project Charter?","Nhà tài trợ. Chữ ký đó là thứ trao quyền cho PM."],["“Khách cung cấp dữ liệu sản phẩm trước 1/3” là giả định hay ràng buộc?","Giả định: ta dựa vào nó để lập kế hoạch nhưng chưa chắc. Cần ghi vào Risk Register và theo dõi."],["Việc gì phải làm trong vòng 24 giờ sau kickoff?","Gửi biên bản: các quyết định, việc cần làm (ai, việc gì, hạn) và tài liệu liên quan."]],
  home: "★ Nộp sản phẩm Module 1: Project Charter hoàn chỉnh và agenda kickoff 90 phút. Sau đó làm Test 1 (phần M1)."
}
});
