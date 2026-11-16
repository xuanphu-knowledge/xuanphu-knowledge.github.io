window.INTERVIEW = [
 {g:"Giới thiệu & động lực", items:[
  ["Hãy giới thiệu về bản thân.","Dùng công thức <b>Hiện tại → Quá khứ → Tương lai</b> trong khoảng 90 giây. Ví dụ: “Em đang là backend developer 3 năm ở công ty X, làm dự án outsource cho khách Nhật. Hai năm gần đây em kiêm điều phối team 4 người: chia việc, ước lượng, báo cáo tiến độ với BrSE. Em đã tự học bài bản quản lý dự án và Scrum, làm một bộ hồ sơ dự án mô phỏng đầy đủ từ Charter đến nghiệm thu. Em muốn chuyển hẳn sang vai trò PM để chịu trách nhiệm kết quả của cả dự án.” Không kể lại toàn bộ CV."],
  ["Vì sao bạn muốn chuyển từ Dev/Tester sang PM?","Nói về <b>điều bạn thích</b>, không phải điều bạn chán. Ví dụ: “Em nhận ra mình thấy có ý nghĩa nhất khi gỡ được vướng mắc cho cả team, chứ không chỉ khi xong ticket của mình. Ở dự án Y, em chủ động lập danh sách rủi ro cho phần tích hợp, giúp team tránh trễ 2 tuần.” Có ví dụ thật thì rất thuyết phục."],
  ["Điểm yếu của bạn là gì?","Chọn điểm yếu thật, liên quan đến vai trò, và đang được khắc phục. Ví dụ: “Trước đây em hay tự làm thay khi thấy team chậm. Em đang tập giao việc theo mức độ năng lực của từng người, và dùng họp 1–1 để kèm cặp thay vì làm hộ.”"],
  ["Bạn biết gì về công ty chúng tôi?","Chuẩn bị trước: khách hàng chính (Nhật, Mỹ hay trong nước), mô hình (outsource, ODC hay product), quy mô, sản phẩm. Nối với kinh nghiệm của bạn: “Công ty làm nhiều dự án ODC cho khách Nhật; em đã quen hō-ren-sō và làm việc với BrSE.”"]
 ]},
 {g:"Kiến thức quản lý dự án", items:[
  ["Project Charter gồm những gì và ai ký?","Mục đích, mục tiêu SMART, phạm vi trong và ngoài, mốc chính, ngân sách, rủi ro cấp cao, giả định và ràng buộc, các bên liên quan, quyền hạn PM, tiêu chí thành công. <b>Nhà tài trợ ký</b>, vì Charter trao quyền cho PM."],
  ["Bạn ước lượng dự án như thế nào?","“Em lập WBS cùng team, ước lượng từ dưới lên; với gói việc nhiều bất định thì dùng ba điểm PERT. Em kiểm tra lại bằng so sánh với dự án tương tự, tính công suất thực khoảng 6 giờ/ngày, trừ ngày lễ, cộng 10–20% dự phòng theo Risk Register. Ở giai đoạn đầu em đưa ra một khoảng chứ không đưa một con số.”"],
  ["Đường găng là gì? Muốn rút ngắn dự án thì làm gì?","Chuỗi việc dài nhất, không có float. Chỉ nén việc trên đường găng: crashing (thêm nguồn lực) hoặc fast-tracking (làm song song). Cần lưu ý rủi ro: người mới cần làm quen; làm song song dễ phải làm lại."],
  ["Giải thích SPI và CPI. CPI = 0,8 thì sao?","SPI = EV/PV, CPI = EV/AC. CPI 0,8 nghĩa là mỗi đồng chi ra chỉ tạo 0,8 đồng giá trị; nếu giữ đà này thì EAC = BAC/0,8, vượt 25% ngân sách. Em sẽ tìm nguyên nhân (ước lượng thiếu, làm lại nhiều, phạm vi phình) rồi đưa phương án cho nhà tài trợ."],
  ["Bạn quản lý rủi ro như thế nào?","Nhận diện từ đầu (brainstorm, pre-mortem, rà giả định), chấm Khả năng × Ảnh hưởng, chọn chiến lược, có người phụ trách và dấu hiệu cảnh báo, rà 15 phút mỗi tuần. Kèm một ví dụ: “Rủi ro API bên thứ ba, em cho spike ở Sprint 0 và dùng mock để team không bị chặn.”"],
  ["Khác nhau giữa rủi ro và issue?","Rủi ro có thể xảy ra (quản lý bằng phòng ngừa); issue đã xảy ra (xử lý ngay, theo dõi trong issue log). Rủi ro không được quản lý sẽ trở thành issue."]
 ]},
 {g:"Agile & Scrum", items:[
  ["Scrum Master khác PM thế nào?","Scrum Master chịu trách nhiệm về hiệu quả của Scrum team: huấn luyện, gỡ vướng, điều phối sự kiện, không giao việc. PM chịu trách nhiệm về kết quả dự án (phạm vi, tiến độ, chi phí, các bên liên quan). Ở nhiều công ty Việt Nam, một người kiêm cả hai; khi đó em tách rõ: trong Sprint thì phục vụ team, với khách và hợp đồng thì quản lý dự án."],
  ["Giữa Sprint, khách đòi thêm tính năng gấp. Bạn làm gì?","Ghi nhận và đưa vào Product Backlog. PO đánh giá với Sprint Goal: nếu không gấp thì xếp vào Sprint sau. Nếu thật sự gấp, PO có thể đổi lấy một story cùng độ lớn chưa bắt đầu, với điều kiện Developers đồng ý và Sprint Goal không bị phá. Với hợp đồng Fixed Price, việc thay đổi tổng phạm vi đi qua Change Request."],
  ["Velocity giảm 3 Sprint liền. Bạn làm gì?","Không đổ lỗi, hãy tìm dữ liệu: ngày nghỉ, story không rõ phải làm lại, nợ kỹ thuật, nhiều bug, bị gián đoạn bởi việc ngoài Sprint. Đem dữ liệu ra Retro để team tự tìm nguyên nhân và chọn 1–2 hành động. Không ép tăng điểm, vì team sẽ ước lượng phồng lên."],
  ["Daily Scrum của team kéo dài 40 phút. Bạn sửa thế nào?","Nhắc mục tiêu: kiểm tra tiến độ tới Sprint Goal trong 15 phút. Đi theo board, chỉ nói vướng mắc; chủ đề kỹ thuật ghi lại để họp riêng sau. Đứng họp, bấm giờ. Đưa vấn đề ra Retro để team tự đặt quy tắc."],
  ["Definition of Done và Acceptance Criteria khác nhau thế nào?","DoD là tiêu chuẩn chất lượng chung cho mọi story. Acceptance Criteria là điều kiện chức năng riêng của từng story. Story xong khi đạt cả hai."],
  ["Làm sao áp dụng Agile cho dự án Fixed Price?","Mô hình Hybrid: chốt danh sách Must và các mốc nghiệm thu; bên trong chạy Sprint, demo sớm; thay đổi “đổi chứ không thêm”, tăng tổng phạm vi thì lập Change Request; báo cáo bằng burnup và EVM theo điểm."]
 ]},
 {g:"Tình huống hành vi (trả lời theo STAR)", items:[
  ["Kể về một lần dự án bị trễ và bạn đã xử lý.","<b>STAR:</b> Situation (bối cảnh, 1–2 câu) → Task (trách nhiệm của bạn) → Action (bạn đã làm gì, dùng “em”, không dùng “chúng em”) → Result (kết quả có con số, và bài học). Ví dụ: “Dự án tích hợp ví, trễ 2 tuần vì API đối tác (S). Em được giao điều phối phần tích hợp (T). Em đề xuất dùng mock để team mobile làm song song, đặt lịch họp kỹ thuật 2 lần/tuần với đối tác, và báo khách sớm với 2 phương án (A). Kết quả: go-live trễ 4 ngày thay vì 2 tuần; khách chọn bỏ một tính năng phụ sang bản sau. Bài học: spike tích hợp ngay từ tuần đầu (R).”"],
  ["Kể về một xung đột trong team.","Chọn xung đột về công việc, kết thúc tốt đẹp. Cho thấy bạn: tách vấn đề khỏi con người, lắng nghe hai bên, dùng tiêu chí khách quan (Acceptance Criteria, dữ liệu), và có thay đổi quy trình sau đó để tránh lặp lại."],
  ["Khách hàng rất khó tính, bạn xử lý thế nào?","Tìm lợi ích thật đằng sau yêu cầu; đưa lựa chọn có số liệu thay vì nói “không”; ghi biên bản mọi thỏa thuận; báo tin xấu sớm. Kèm một ví dụ cụ thể với kết quả."],
  ["Bạn đã bao giờ phải báo tin xấu cho cấp trên chưa?","Cho thấy bạn báo sớm, có số liệu, có phương án. Ví dụ dùng cấu trúc email escalation: vấn đề → tác động → đã làm gì → phương án → cần quyết định gì, trước khi nào."],
  ["Kể về một lần bạn mắc lỗi.","Nhận lỗi rõ ràng, nói hành động khắc phục và thay đổi để không lặp lại. Nhà tuyển dụng tìm người có trách nhiệm, không tìm người chưa từng sai."]
 ]},
 {g:"Cho PM dự án CNTT", items:[
  ["Bạn có cần biết code để làm PM không?","Không cần code hằng ngày, nhưng hiểu kỹ thuật giúp ước lượng sát hơn, nhận ra rủi ro sớm, và được team tin tưởng. Với nền tảng dev, em dùng điều đó để đặt câu hỏi đúng chứ không quyết định thay Tech Lead."],
  ["Làm sao bạn đảm bảo chất lượng mà vẫn đúng hạn?","Không cắt test; thay vào đó cắt phạm vi theo MoSCoW. Đưa chất lượng vào DoD từ đầu, có CI và code review, demo sớm để khách phát hiện sai lệch sớm, có ngân sách thời gian cho regression."],
  ["Bạn dùng công cụ gì?","Jira (Scrum board, backlog, báo cáo velocity và burndown), Confluence hoặc Google Docs cho tài liệu, Excel hoặc Sheets cho WBS, ngân sách, EVM, Risk Register, MS Project hoặc ProjectLibre cho Gantt. Nói thêm cách bạn cấu hình (WIP, workflow) để cho thấy bạn dùng thật."],
  ["Làm việc với khách Nhật cần chú ý gì?","Hō-ren-sō (báo cáo sớm, thường xuyên), tài liệu chi tiết, danh sách Q&A, không để khách bất ngờ, phối hợp với BrSE, chất lượng và đúng hạn được đặt rất cao."]
 ]},
 {g:"Kinh doanh, quản trị và kỹ thuật cho PM", items:[
  ["Làm sao bạn chứng minh dự án mang lại giá trị cho khách?","Nói về <b>lợi ích kinh doanh</b>, không chỉ đúng hạn đúng tiền: “Em đưa 3–4 KPI vào Business Case, có mức nền và mục tiêu, ví dụ số đơn online/tháng, tỷ lệ khách quay lại. Em tính thời gian hoàn vốn và ghi rõ giả định để nhà tài trợ phản biện. Sau go-live, em bàn giao kế hoạch đo lợi ích cho PO.”"],
  ["Bạn từng tham gia báo giá hoặc presales chưa? Bạn tính giá thế nào?","Ước lượng từ WBS, cộng phần quản lý, QA, triển khai, bảo hành; cộng dự phòng 10–25% theo mức mơ hồ; tính giá = chi phí ÷ (1 − biên lợi nhuận mục tiêu). Ghi rõ giả định và phần ngoài phạm vi. Nếu khách ép giá thì cắt phạm vi hoặc chuyển phần mơ hồ sang T&amp;M, không cắt dự phòng."],
  ["Bạn chuẩn bị gì cho buổi họp ban chỉ đạo (steering committee)?","3–5 slide gửi trước 2 ngày: RAG và xu hướng, EVM hoặc burnup, top 3 rủi ro, và <b>các quyết định cần ban chỉ đạo đưa ra</b> kèm phương án và khuyến nghị. Sau họp gửi biên bản ghi quyết định."],
  ["Bạn đang quản lý 2 dự án và cả hai cùng cần một senior dev tuần tới. Bạn làm gì?","Kiểm tra bảng phân bổ nguồn lực; tính tác động lên từng dự án; tìm phương án (lùi việc không nằm trên đường găng, mượn người khác, chia theo ngày); đưa Delivery Manager quyết theo ưu tiên kinh doanh. Không giải quyết bằng cách bắt người đó làm thêm giờ kéo dài."],
  ["Trước go-live, bạn kiểm tra gì về mặt kỹ thuật?","Đã test trên staging với dữ liệu gần giống thật; có release plan, code freeze và checklist; <b>phương án rollback đã thử</b>; người trực sau phát hành; với app di động thì đã qua store review. Câu hỏi then chốt: lỗi nghiêm trọng lúc 22h thì mất bao lâu để quay lại bản cũ?"],
  ["Nhà cung cấp bên thứ ba liên tục trễ. Bạn xử lý thế nào?","Xem lại hợp đồng và SLA; họp với đầu mối của họ để tìm nguyên nhân; đưa mốc của họ vào kế hoạch tổng và theo dõi như rủi ro Đỏ; giảm phụ thuộc (mock API, làm song song); escalate theo hợp đồng nếu vẫn trễ, và báo sớm cho nhà tài trợ về tác động."]
 ]},
 {g:"AI trong quản lý dự án", items:[
  ["Bạn dùng AI trong công việc PM như thế nào?","Nêu <b>việc cụ thể và kết quả</b>, không nói chung chung. Ví dụ: “Em dùng AI soạn bản nháp biên bản họp và báo cáo tuần, mỗi tuần tiết kiệm khoảng 3 giờ. Em có thư viện 10 prompt cho báo cáo, pre-mortem, user story. Mọi bản AI soạn em đều soát số liệu, tên người và cam kết trước khi gửi.” Có thể mở portfolio cho xem."],
  ["Làm sao đảm bảo AI không làm lộ dữ liệu khách hàng?","Chỉ dùng công cụ công ty cho phép; phân loại dữ liệu Xanh/Vàng/Đỏ, nhóm Đỏ (dữ liệu cá nhân, mật khẩu, giá hợp đồng) không được nhập; che tên khách. Nêu được <b>Luật Bảo vệ dữ liệu cá nhân 2025</b> và kiểm tra điều khoản hợp đồng về dùng AI. Nói thêm: em sẽ đưa nội dung này vào chính sách AI của team và Risk Register."],
  ["Team bắt đầu dùng AI viết code. Bạn có tăng velocity kỳ vọng không?","Chưa. Đo vài Sprint (cycle time, lỗi lọt sang UAT, thời gian review) rồi mới điều chỉnh dự báo. Code AI dễ tăng thời gian review và lỗi ẩn. Bổ sung DoD: code do AI hỗ trợ được review, có test, đã quét bảo mật."],
  ["Khách muốn thêm tính năng AI vào hợp đồng Fixed Price. Bạn xử lý thế nào?","Hỏi về dữ liệu và mục tiêu trước; đề xuất <b>PoC có timebox</b> (thường theo T&amp;M) với tiêu chí đạt dạng ngưỡng; chỉ cam kết Fixed Price sau khi PoC đạt. Tính cả chi phí vận hành API và giám sát chất lượng sau go-live (drift)."],
  ["AI có thay thế PM không?","Trả lời bình tĩnh, có lập luận: AI tự động hóa phần soạn thảo, tổng hợp, theo dõi. Phần của PM là phán đoán, gắn kết bên liên quan, đàm phán, chịu trách nhiệm và đạo đức. “PM biết dùng AI sẽ thay PM không biết dùng AI.” Kể một ví dụ AI sai và bạn đã phát hiện nhờ kiểm tra."]
 ]},
 {g:"Câu hỏi bạn nên hỏi lại nhà tuyển dụng", items:[
  ["Gợi ý 5 câu hỏi","(1) Dự án đầu tiên em sẽ phụ trách có quy mô và mô hình hợp đồng thế nào? (2) PM ở đây được quyết định đến đâu về phạm vi và nhân sự? (3) Công ty đánh giá PM dựa trên những chỉ số nào? (4) Quy trình hiện tại là Scrum, Waterfall hay Hybrid, và đang gặp khó khăn gì? (5) Công ty hỗ trợ gì cho PM mới (kèm cặp, chứng chỉ PSM hoặc PMP)?"]
 ]}
];

window.CAREER_HTML = `
<section class="section"><h2>1. Vị trí nên nhắm tới</h2>
<div class="tablewrap"><table><thead><tr><th>Vị trí</th><th>Phù hợp khi</th><th>Từ khóa tìm việc</th></tr></thead><tbody>
<tr><td><b>Scrum Master</b></td><td>Bạn mạnh về con người, quy trình, đã quen Agile</td><td>Scrum Master, Agile Coach (junior)</td></tr>
<tr><td><b>Junior / Associate PM</b></td><td>Bạn muốn quản lý toàn diện, có nền kỹ thuật</td><td>Junior Project Manager, Associate PM, Project Coordinator</td></tr>
<tr><td><b>Project Coordinator / PMO</b></td><td>Lối vào an toàn: hỗ trợ PM, làm báo cáo, quản lý tài liệu</td><td>Project Coordinator, PMO Executive</td></tr>
<tr><td><b>Technical PM / Team Lead</b></td><td>Bạn là dev giàu kinh nghiệm, muốn giữ chất kỹ thuật</td><td>Technical Project Manager, Delivery Lead</td></tr>
<tr><td><b>BrSE</b></td><td>Bạn biết tiếng Nhật (thường từ N2 trở lên)</td><td>BrSE, Bridge System Engineer</td></tr>
</tbody></table></div>
<p><b>Lối đi nội bộ thường dễ nhất:</b> xin làm Scrum Master hoặc điều phối cho team hiện tại, hoặc nhận một dự án nội bộ nhỏ. Sau 6–12 tháng, bạn có kinh nghiệm thật để ghi vào CV.</p>
<p><b>Kênh tìm việc:</b> ITviec, TopDev, LinkedIn, VietnamWorks; nhóm cộng đồng Agile/Scrum Việt Nam; giới thiệu từ người quen trong ngành.</p></section>

<section class="section"><h2>2. CV chuyển ngành sang PM</h2>
<p><b>Cấu trúc 1–2 trang:</b> Tóm tắt (3 dòng) → Kỹ năng (nhóm theo PM, Agile, Công cụ, Kỹ thuật) → Kinh nghiệm (viết lại theo góc nhìn quản lý) → Dự án case study (FreshGo) → Chứng chỉ, học vấn.</p>
<p><b>Tóm tắt mẫu:</b> “Backend developer 3 năm chuyển sang quản lý dự án. Đã điều phối team 4 người trong dự án outsource cho khách Nhật: ước lượng, theo dõi tiến độ, quản lý rủi ro tích hợp. Thành thạo Scrum, Jira, EVM; dùng AI tạo sinh có kiểm soát trong báo cáo và lập kế hoạch; có hồ sơ dự án mô phỏng đầy đủ từ Charter đến nghiệm thu.”</p>
<p><b>Viết lại kinh nghiệm theo góc nhìn quản lý (động từ + việc + con số):</b></p>
<div class="tablewrap"><table><thead><tr><th>Viết kiểu dev</th><th>Viết kiểu PM</th></tr></thead><tbody>
<tr><td>Code API thanh toán bằng Node.js</td><td>Điều phối tích hợp cổng thanh toán với đối tác, đưa vào dùng mock API giúp team mobile làm song song, rút ngắn mốc khoảng 2 tuần</td></tr>
<tr><td>Fix bug, tham gia họp Daily</td><td>Chủ trì Daily và Retro thay Scrum Master trong 3 tháng; đề xuất thêm bước review tiêu chí chấp nhận, giảm bug bị mở lại khoảng 30%</td></tr>
<tr><td>Hỗ trợ khách hàng</td><td>Đầu mối kỹ thuật với khách Nhật; duy trì danh sách Q&amp;A hơn 120 mục, báo cáo tuần qua BrSE</td></tr>
</tbody></table></div>
<p><b>Trung thực là bắt buộc:</b> con số phải là thật hoặc ước tính bạn giải thích được. Dự án FreshGo phải ghi rõ là <i>case study tự thực hiện trong quá trình học</i>, không ghi như kinh nghiệm làm việc thật. Nhà tuyển dụng đánh giá cao sự chủ động học; họ sẽ loại ngay nếu phát hiện bạn nói quá.</p></section>

<section class="section"><h2>3. Portfolio: biến bài tập thành lợi thế</h2>
<ol><li>Tạo một thư mục Google Drive hoặc Notion tên “Portfolio Quản lý dự án – [Tên bạn]”.</li><li>Trang đầu: giới thiệu case study FreshGo trong 5 dòng, kèm mục lục.</li><li>Đưa vào 8 tài liệu tốt nhất: Charter, WBS + ước lượng, kế hoạch và ngân sách, Product Backlog (ảnh Jira), Risk Register, Change Request, báo cáo tuần, lời giải Capstone. Thêm 2 tài liệu Module 7: thư viện prompt PM và chính sách dùng AI của team. Nhà tuyển dụng năm 2026 rất hay hỏi phần này.</li><li>Mỗi tài liệu có 2 dòng: “Tình huống đặt ra là gì” và “Quyết định của tôi và vì sao”.</li><li>Gắn link vào CV và LinkedIn. Trong phỏng vấn, chủ động mở 1–2 tài liệu để kể chuyện.</li></ol>
<p><b>Lưu ý:</b> tài liệu của dự án thật ở công ty thường là bí mật. Đừng đưa vào portfolio; chỉ dùng case study tự làm.</p></section>

<section class="section"><h2>4. LinkedIn</h2>
<ul><li><b>Headline:</b> “Backend Developer → Project Manager | Scrum · Jira · Risk Management · AI-assisted PM | Outsource Japan”.</li><li><b>About:</b> dùng lại tóm tắt CV, thêm link portfolio.</li><li>Mỗi tuần đăng 1 bài ngắn chia sẻ điều học được (ví dụ: “3 lỗi WBS tôi từng mắc”). Nhà tuyển dụng thường xem hoạt động của ứng viên.</li></ul></section>

<section class="section"><h2>5. Kế hoạch 30-60-90 ngày khi nhận việc PM</h2>
<div class="tablewrap"><table><thead><tr><th>Giai đoạn</th><th>Mục tiêu</th><th>Việc cụ thể</th></tr></thead><tbody>
<tr><td><b>30 ngày: Học</b></td><td>Hiểu dự án, con người, quy trình</td><td>Họp 1–1 với từng thành viên và các bên liên quan chính; đọc hợp đồng, Charter, backlog; dựng lại Risk Register và RAID; chưa thay đổi quy trình lớn</td></tr>
<tr><td><b>60 ngày: Ổn định</b></td><td>Có nhịp quản lý đều</td><td>Báo cáo tuần chuẩn; lịch Refinement, Review, Retro cố định; quy trình Change Request; 2 cải tiến nhỏ đầu tiên rút từ Retro</td></tr>
<tr><td><b>90 ngày: Tạo dấu ấn</b></td><td>Có kết quả đo được</td><td>Đạt một mốc đúng hạn; một chỉ số cải thiện (velocity ổn định, bug lọt production giảm); tự nhìn lại với sếp, đặt mục tiêu 6 tháng</td></tr>
</tbody></table></div></section>

<section class="section"><h2>6. Tự đánh giá mức sẵn sàng đi ứng tuyển</h2>
<ul>
<li>Tự giải thích được Scrum trong 3 phút mà không nhìn tài liệu.</li>
<li>Tính được SPI, CPI, EAC và giải thích ý nghĩa.</li>
<li>Có ít nhất 3 câu chuyện STAR từ công việc thật.</li>
<li>Portfolio có ít nhất 6 tài liệu.</li>
<li>Đạt cả 4 bài test (từ 7/10) và bài thi cuối khóa (từ 28/40).</li>
<li>Đã luyện phỏng vấn thử với Claude ít nhất 2 lần.</li>
<li>Có hoặc đang ôn PSM I (khuyến nghị).</li>
<li>Có thư viện prompt PM và chính sách dùng AI trong portfolio (Module 7).</li>
</ul>
<p>Đạt từ 7/8 mục là bạn đã sẵn sàng nộp hồ sơ. Gõ vào chat: “Phỏng vấn thử tôi cho vị trí Junior PM, hỏi từng câu một và chấm điểm” để luyện.</p></section>`;

window.CHEAT_HTML = `
<section class="grid2">
<div class="card"><h3>Công thức EVM</h3><div class="tablewrap" style="border:0"><table><tbody>
<tr><td class="num">SV = EV − PV</td><td>&lt; 0: chậm</td></tr><tr><td class="num">CV = EV − AC</td><td>&lt; 0: vượt chi</td></tr>
<tr><td class="num">SPI = EV / PV</td><td>&lt; 1: chậm</td></tr><tr><td class="num">CPI = EV / AC</td><td>&lt; 1: vượt chi</td></tr>
<tr><td class="num">EAC = BAC / CPI</td><td>Tổng chi dự kiến</td></tr><tr><td class="num">ETC = EAC − AC</td><td>Còn phải chi</td></tr>
<tr><td class="num">VAC = BAC − EAC</td><td>&lt; 0: sẽ vượt</td></tr><tr><td class="num">TCPI = (BAC − EV)/(BAC − AC)</td><td>Hiệu suất cần để đúng ngân sách</td></tr>
</tbody></table></div></div>
<div class="card"><h3>Ước lượng & lịch</h3><div class="tablewrap" style="border:0"><table><tbody>
<tr><td class="num">E = (O + 4M + P) / 6</td><td>PERT</td></tr><tr><td class="num">σ = (P − O) / 6</td><td>Độ lệch chuẩn</td></tr>
<tr><td class="num">E ± 2σ</td><td>Khoảng tin cậy ~95%</td></tr><tr><td class="num">Float = LS − ES</td><td>= 0: trên đường găng</td></tr>
<tr><td class="num">Kênh = n(n − 1) / 2</td><td>Kênh giao tiếp</td></tr><tr><td class="num">Sprint còn = điểm ÷ velocity</td><td>Dùng velocity thấp và cao để ra khoảng</td></tr>
</tbody></table></div></div>
<div class="card"><h3>Scrum: giới hạn thời gian (Sprint 1 tháng)</h3><div class="tablewrap" style="border:0"><table><tbody>
<tr><td>Sprint</td><td class="num">≤ 1 tháng</td></tr><tr><td>Sprint Planning</td><td class="num">≤ 8 giờ</td></tr><tr><td>Daily Scrum</td><td class="num">15 phút</td></tr><tr><td>Sprint Review</td><td class="num">≤ 4 giờ</td></tr><tr><td>Retrospective</td><td class="num">≤ 3 giờ</td></tr>
</tbody></table></div><p style="font-size:.9rem">3 trách nhiệm: PO · SM · Developers. 3 tạo tác ↔ cam kết: Product Backlog ↔ Product Goal · Sprint Backlog ↔ Sprint Goal · Increment ↔ DoD.</p></div>
<div class="card"><h3>Chiến lược rủi ro</h3><p><b>Đe dọa:</b> Tránh · Giảm · Chuyển giao · Chấp nhận<br><b>Cơ hội:</b> Khai thác · Tăng cường · Chia sẻ · Chấp nhận</p><p><b>Điểm</b> = KN × AH: ≥ 15 Đỏ · 8–14 Vàng · &lt; 8 Xanh</p><h3>Xung đột</h3><p>Hợp tác (bền vững nhất) · Thỏa hiệp · Nhường · Né tránh · Áp đặt (khẩn cấp)</p></div>
<div class="card"><h3>Ưu tiên & chất lượng</h3><p><b>MoSCoW:</b> Must · Should · Could · Won’t (lần này). Must ≤ khoảng 60% công sức.</p><p><b>INVEST:</b> Độc lập · Thương lượng được · Có giá trị · Ước lượng được · Nhỏ · Kiểm thử được.</p><p><b>QA</b> = phòng lỗi bằng quy trình · <b>QC</b> = tìm lỗi trên sản phẩm.</p></div>
<div class="card"><h3>Mẫu câu “vàng”</h3><ul><li>“Làm được ạ. Em gửi anh/chị 3 phương án về thời gian và chi phí trước [ngày].”</li><li>“Với velocity hiện tại, ngày đó đạt được nếu mình bỏ X. Anh/chị muốn giữ phần nào?”</li><li>“Em xin lỗi. Nguyên nhân là… Bên em đã… và từ nay sẽ…”</li><li>“Em cần anh quyết định A hoặc B trước thứ Ba, để kịp Sprint Planning.”</li></ul></div>
</section>`;
