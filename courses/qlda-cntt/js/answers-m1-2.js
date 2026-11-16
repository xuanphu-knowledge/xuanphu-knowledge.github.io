window.ANSWERS = window.ANSWERS || {};
Object.assign(window.ANSWERS, {
"1.1": {
  how: ["Liệt kê theo checklist 6 nhóm (nhà tài trợ, người dùng, IT khách, bảo mật/pháp chế, bên thứ ba, team) trước, rồi mới xếp vào lưới.", "Mỗi người cần có: mức ủng hộ hiện tại → mức mong muốn, và một hành động cụ thể."],
  html: `
  <div class="tablewrap"><table><thead><tr><th>Bên liên quan</th><th>Quyền lực</th><th>Quan tâm</th><th>Ô lưới</th><th>Ủng hộ: hiện tại → mong muốn</th><th>Họ cần gì</th><th>Chiến lược cụ thể</th></tr></thead><tbody>
  <tr><td>Anh Minh – CEO (nhà tài trợ)</td><td>Cao</td><td>Cao</td><td>Quản lý chặt</td><td>Ủng hộ → Dẫn dắt</td><td>Doanh thu online, đúng 1/7</td><td>Báo cáo RAG thứ Sáu; họp 30 phút mỗi 2 tuần; mời dự demo mốc</td></tr>
  <tr><td>Chị Lan – GĐ vận hành (PO)</td><td>Cao</td><td>Cao</td><td>Quản lý chặt</td><td>Ủng hộ → Dẫn dắt</td><td>App dễ dùng cho cửa hàng, nhiều tính năng</td><td>Refinement hằng tuần; Sprint Review; thống nhất quy tắc “đổi chứ không thêm”</td></tr>
  <tr><td>Giám đốc tài chính FreshMart</td><td>Cao</td><td>Thấp</td><td>Giữ hài lòng</td><td>Trung lập → Ủng hộ</td><td>Chi đúng ngân sách, hóa đơn rõ</td><td>Tóm tắt chi phí theo mốc thanh toán, gửi trước mỗi lần xuất hóa đơn</td></tr>
  <tr><td>Trưởng IT FreshMart</td><td>Trung bình</td><td>Cao</td><td>Quản lý chặt</td><td>Phản đối → Trung lập</td><td>Không làm vỡ POS, ít việc vận hành thêm</td><td>Mời review kiến trúc tuần 2; cam kết tài liệu vận hành và chuyển giao kiến thức</td></tr>
  <tr><td>Quản lý 30 cửa hàng</td><td>Thấp</td><td>Cao</td><td>Thông báo đầy đủ</td><td>Không biết → Ủng hộ</td><td>Thao tác nhanh, không thêm việc</td><td>Chọn 3 cửa hàng thí điểm làm UAT; bản tin Zalo hằng tháng</td></tr>
  <tr><td>Shipper</td><td>Thấp</td><td>Cao</td><td>Thông báo đầy đủ</td><td>Không biết → Trung lập</td><td>Ít bấm, rõ đường đi, rõ tiền COD</td><td>2 shipper tham gia UAT; video hướng dẫn 3 phút</td></tr>
  <tr><td>Nhà cung cấp POS</td><td>Cao (với tiến độ)</td><td>Thấp</td><td>Giữ hài lòng</td><td>Trung lập → Ủng hộ</td><td>Không tốn công thêm, có thể muốn thu phí</td><td>Nhờ anh Minh giới thiệu; họp kỹ thuật tuần 1; chốt SLA phản hồi 2 ngày</td></tr>
  <tr><td>Cổng thanh toán</td><td>Trung bình</td><td>Thấp</td><td>Theo dõi</td><td>Trung lập</td><td>Hồ sơ đầy đủ</td><td>Nộp hồ sơ ngay tuần 1; một đầu mối duy nhất</td></tr>
  <tr><td>Pháp chế / DPO FreshMart</td><td>Cao (có thể chặn go-live)</td><td>Thấp</td><td>Giữ hài lòng</td><td>Không biết → Ủng hộ</td><td>Tuân thủ Luật Bảo vệ dữ liệu cá nhân</td><td>Gửi danh mục dữ liệu cá nhân và luồng xin đồng ý trước Sprint 3</td></tr>
  <tr><td>Delivery Manager (sếp PM)</td><td>Cao</td><td>Trung bình</td><td>Giữ hài lòng</td><td>Ủng hộ</td><td>Lợi nhuận dự án, không có bất ngờ</td><td>1–1 hằng tuần, báo ngay rủi ro Đỏ</td></tr>
  </tbody></table></div>`,
  pitfalls: ["Chỉ liệt kê người trong phòng họp, quên pháp chế, nhà cung cấp, IT khách.", "Ghi chiến lược chung chung kiểu “giao tiếp tốt”. Chiến lược phải có tần suất, kênh và hành động."]
},
"1.2": {
  how: ["Dùng 5 câu hỏi của Buổi 2 làm khung, kết luận rõ một mô hình, nêu cách vận hành cụ thể."],
  html: `<div class="callout"><p><b>Đề xuất: Hybrid.</b> Hợp đồng FreshGo là Fixed Price với mốc cứng 1/7, nên cần chốt phạm vi tổng (danh sách Must) và 4 mốc nghiệm thu như mô hình Predictive. Tuy nhiên, yêu cầu về trải nghiệm app và quy trình cửa hàng còn chưa rõ, và FreshMart chưa từng có app. Đây là vùng cần phản hồi sớm. Vì vậy, bên trong mỗi mốc, team chạy Sprint 2 tuần, demo cho chị Lan sau mỗi Sprint để điều chỉnh sớm thay vì đợi đến UAT. Mọi yêu cầu mới vào Product Backlog: thay story cùng độ lớn thì không cần ký thêm; làm tăng tổng phạm vi thì đi qua Change Request. Rủi ro chính của Hybrid là chị Lan chỉ có 4 giờ/tuần, nên cần lịch Review và Refinement cố định ngay từ kickoff. (≈150 chữ)</p></div>`,
  pitfalls: ["Chọn “Agile” mà không giải quyết được ràng buộc Fixed Price.", "Không nêu rủi ro của chính mô hình mình chọn."]
},
"1.3": {
  how: ["Mỗi mục tiêu có: chỉ số, mốc hiện tại, mục tiêu, hạn. Phân biệt mục tiêu dự án và mục tiêu kinh doanh."],
  html: `<ol>
  <li><b>(Dự án)</b> Go-live app khách hàng (iOS, Android), web quản trị cửa hàng và luồng giao hàng cho cả 30 cửa hàng trước 30/6, trong ngân sách 2,4 tỷ, không còn bug Critical hoặc High khi go-live.</li>
  <li><b>(Chất lượng)</b> 95% màn hình chính tải dưới 2 giây trên mạng 4G; hệ thống chịu 500 đơn đồng thời; tỷ lệ lỗi thanh toán dưới 1% trong 30 ngày đầu.</li>
  <li><b>(Kinh doanh, đo sau go-live)</b> Giảm tỷ lệ sót đơn từ 8% xuống dưới 1% và đạt 5.000 đơn/tháng qua app trong vòng 3 tháng sau go-live.</li></ol>`,
  pitfalls: ["Viết “tăng trải nghiệm người dùng” mà không có con số.", "Lẫn mục tiêu kinh doanh vào cam kết của team dự án mà không ghi rõ phụ thuộc marketing và vận hành."]
},
"N1": {
  how: ["Charter gọn trong 2 trang, đủ 13 mục của Mẫu 1. Mục “ngoài phạm vi” và “quyền hạn PM” là hai mục được chấm kỹ nhất.", "Agenda kickoff có thời lượng từng mục và đầu ra rõ."],
  html: `
  <h3>Project Charter – FreshGo</h3>
  <div class="tablewrap"><table><tbody>
  <tr><td><b>Tên / Mã</b></td><td>FreshGo – App đặt hàng và giao hàng FreshMart · FM-2027-01</td></tr>
  <tr><td><b>Nhà tài trợ</b></td><td>Anh Minh, CEO FreshMart</td></tr>
  <tr><td><b>PM và quyền hạn</b></td><td>[Tên bạn]. Được: điều chỉnh phân công trong team; chi phát sinh dưới 20 triệu/lần; đổi thứ tự story trong phạm vi đã ký (cùng PO). Phải trình nhà tài trợ: thay đổi mốc go-live, chi phí vượt 5% ngân sách, thay đổi danh sách Must.</td></tr>
  <tr><td><b>Bối cảnh</b></td><td>Đơn online qua Zalo và điện thoại bị sót khoảng 8%, không có dữ liệu khách, đối thủ đã có app. FreshMart cần một kênh đặt hàng riêng trước mùa khuyến mãi 1/7.</td></tr>
  <tr><td><b>Mục tiêu</b></td><td>Xem 3 mục tiêu SMART ở bài 1.3.</td></tr>
  <tr><td><b>Trong phạm vi</b></td><td>App khách hàng (iOS/Android): đăng ký OTP, danh mục theo cửa hàng, giỏ hàng, thanh toán COD và 1 ví điện tử, theo dõi đơn. Web quản trị: sản phẩm, giá, nhận và xử lý đơn, phân đơn, báo cáo cơ bản. Giao diện shipper. Tích hợp POS (đồng bộ tồn kho, giá) và cổng thanh toán. Đào tạo, UAT, go-live, bảo hành 3 tháng.</td></tr>
  <tr><td><b>Ngoài phạm vi</b></td><td>Tích điểm thành viên; chat với cửa hàng; gợi ý sản phẩm bằng AI; web cho khách hàng; tích hợp kế toán; vận hành máy chủ sau bảo hành; nội dung marketing; chi phí quảng cáo app.</td></tr>
  <tr><td><b>Sản phẩm bàn giao</b></td><td>App trên 2 store; web quản trị; mã nguồn và tài liệu; biên bản UAT; tài liệu đào tạo.</td></tr>
  <tr><td><b>Mốc chính</b></td><td>M1 Chốt yêu cầu & thiết kế: 31/1 (Scope và Figma được ký) · M2 Beta nội bộ: 15/4 (đặt và giao đơn end-to-end trên staging) · M3 UAT xong: 10/6 (biên bản UAT ký) · M4 Go-live: 30/6 (app có trên store, 30 cửa hàng nhận đơn).</td></tr>
  <tr><td><b>Ngân sách</b></td><td>2,4 tỷ, gồm khoảng 0,28 tỷ dự phòng rủi ro. Thanh toán 4 đợt theo mốc: 20% · 30% · 30% · 20%.</td></tr>
  <tr><td><b>Rủi ro cấp cao</b></td><td>API POS thiếu tài liệu; PO có ít thời gian; app bị store từ chối; tuân thủ Luật Bảo vệ dữ liệu cá nhân; nhân sự mobile mỏng.</td></tr>
  <tr><td><b>Giả định</b></td><td>Nhà cung cấp POS hỗ trợ kỹ thuật trong 2 ngày làm việc; FreshMart cung cấp dữ liệu sản phẩm trước 1/3; tài khoản Apple và Google do FreshMart đứng tên, có trước 1/4.</td></tr>
  <tr><td><b>Ràng buộc</b></td><td>Go-live trước 1/7; ngân sách 2,4 tỷ; tuân thủ Luật Bảo vệ dữ liệu cá nhân 2025 và Nghị định 356/2025.</td></tr>
  <tr><td><b>Tiêu chí thành công</b></td><td>Đạt cả 4 mốc; nghiệm thu không còn bug Critical hoặc High; chi phí không vượt ngân sách; sau 3 tháng tỷ lệ sót đơn dưới 1%.</td></tr>
  <tr><td><b>Phê duyệt</b></td><td>Anh Minh – ngày … · Đại diện công ty phần mềm – ngày …</td></tr>
  </tbody></table></div>
  <h3 style="margin-top:12px">Agenda Kickoff (90 phút, 10/1, tại FreshMart)</h3>
  <ol><li>09:00 Giới thiệu thành viên và vai trò (10′)</li><li>09:10 Anh Minh: vì sao làm FreshGo (5′)</li><li>09:15 Mục tiêu, phạm vi, ngoài phạm vi (15′) → đầu ra: xác nhận danh sách Must</li><li>09:30 Lộ trình 4 mốc và lịch Sprint (15′)</li><li>09:45 Cách làm việc: Review 2 tuần, Refinement thứ Tư 14h, kênh liên lạc, phản hồi trong 1 ngày làm việc (15′)</li><li>10:00 Quy trình thay đổi và escalation (10′)</li><li>10:10 Rủi ro và việc FreshMart cần chuẩn bị: dữ liệu, tài khoản store, đầu mối POS (10′)</li><li>10:20 Hỏi đáp, chốt việc cần làm (10′)</li></ol>
  <p><b>Câu hỏi cần làm rõ tại kickoff:</b> ai thay chị Lan khi chị vắng? Ai đứng tên tài khoản store? Chính sách đổi trả và hoàn tiền là gì? Có KPI nào khác ngoài tỷ lệ sót đơn?</p>`,
  pitfalls: ["Charter dài 10 trang. Nhà tài trợ sẽ không đọc.", "Thiếu quyền hạn PM, nên mọi việc nhỏ đều phải xin.", "Mốc không có tiêu chí hoàn thành (“xong thiết kế” là thế nào?)."]
},
"2.1": {
  how: ["Mỗi sản phẩm bàn giao có tiêu chí nghiệm thu đo được.", "Ngoài phạm vi ít nhất 5 mục; giả định và ràng buộc tách riêng."],
  html: `
  <p><b>Mô tả sản phẩm:</b> hệ thống đặt hàng online gồm app khách hàng (iOS 15+, Android 9+), web quản trị cho 30 cửa hàng, giao diện shipper (web responsive trên điện thoại), backend tích hợp POS và một cổng thanh toán.</p>
  <div class="tablewrap"><table><thead><tr><th>Sản phẩm bàn giao</th><th>Tiêu chí nghiệm thu</th></tr></thead><tbody>
  <tr><td>App khách hàng</td><td>Đạt 100% kịch bản UAT nhóm Must; được duyệt trên App Store và Google Play; tải màn hình chính dưới 2 giây trên mạng 4G</td></tr>
  <tr><td>Web quản trị</td><td>Đơn mới hiện trong 5 giây; quản lý sản phẩm, giá, đơn, shipper; phân quyền 3 vai trò</td></tr>
  <tr><td>Giao diện shipper</td><td>Nhận đơn, cập nhật trạng thái, mở bản đồ, xác nhận thu COD</td></tr>
  <tr><td>Tích hợp POS</td><td>Đồng bộ tồn kho và giá mỗi 15 phút; sai lệch dưới 1% trên mẫu 200 sản phẩm</td></tr>
  <tr><td>Thanh toán</td><td>COD và 1 ví điện tử; giao dịch thật thành công trên 3 cửa hàng thí điểm</td></tr>
  <tr><td>Tài liệu và đào tạo</td><td>Hướng dẫn sử dụng (3 vai trò), tài liệu vận hành, 2 buổi đào tạo có biên bản</td></tr>
  </tbody></table></div>
  <p><b>Ngoài phạm vi:</b> (1) tích điểm và hạng thành viên; (2) chat với cửa hàng; (3) gợi ý sản phẩm bằng AI; (4) web cho khách hàng; (5) thanh toán thẻ quốc tế và ví thứ hai; (6) tích hợp phần mềm kế toán; (7) vận hành máy chủ sau 3 tháng bảo hành; (8) nhập liệu ảnh và mô tả sản phẩm (FreshMart cung cấp).</p>
  <p><b>Giả định:</b> POS có API REST và tài liệu tối thiểu; dữ liệu sản phẩm có trước 1/3. <b>Ràng buộc:</b> 2,4 tỷ; go-live trước 1/7; Luật Bảo vệ dữ liệu cá nhân 2025 và Nghị định 356/2025.</p>`,
  pitfalls: ["Tiêu chí nghiệm thu kiểu “chạy ổn định”: không đo được.", "Quên ghi ai chịu trách nhiệm nhập dữ liệu sản phẩm. Đây là nguồn trễ rất hay gặp."]
},
"2.2": {
  how: ["Cấp 2 theo sản phẩm; có nhánh Quản lý dự án, Kiểm thử, Triển khai.", "Ước lượng E (man-day); gói rủi ro dùng PERT, ghi rõ O/M/P."],
  html: `
  <div class="tablewrap"><table><thead><tr><th>Mã</th><th>Gói công việc</th><th>E (man-day)</th></tr></thead><tbody>
  <tr class="modsep"><td colspan="3">1. Quản lý dự án – 78</td></tr>
  <tr><td>1.1</td><td>Lập kế hoạch, kickoff</td><td class="num">8</td></tr><tr><td>1.2</td><td>Báo cáo, họp, quản lý rủi ro (6 tháng)</td><td class="num">60</td></tr><tr><td>1.3</td><td>Quản lý cấu hình, môi trường</td><td class="num">10</td></tr>
  <tr class="modsep"><td colspan="3">2. Yêu cầu & thiết kế – 95</td></tr>
  <tr><td>2.1</td><td>Khảo sát nghiệp vụ cửa hàng</td><td class="num">10</td></tr><tr><td>2.2</td><td>Đặc tả, user story</td><td class="num">25</td></tr><tr><td>2.3</td><td>UI/UX cho 3 giao diện</td><td class="num">45</td></tr><tr><td>2.4</td><td>Kiến trúc, thiết kế CSDL</td><td class="num">15</td></tr>
  <tr class="modsep"><td colspan="3">3. App khách hàng – 122</td></tr>
  <tr><td>3.1</td><td>Đăng ký / đăng nhập OTP</td><td class="num">12</td></tr><tr><td>3.2</td><td>Danh mục, tìm kiếm theo cửa hàng</td><td class="num">25</td></tr><tr><td>3.3</td><td>Giỏ hàng, đặt hàng</td><td class="num">22</td></tr><tr><td>3.4</td><td>Thanh toán COD + ví</td><td class="num">30</td></tr><tr><td>3.5</td><td>Theo dõi đơn, thông báo</td><td class="num">18</td></tr><tr><td>3.6</td><td>Hồ sơ, địa chỉ, lịch sử</td><td class="num">15</td></tr>
  <tr class="modsep"><td colspan="3">4. Web quản trị – 90</td></tr>
  <tr><td>4.1</td><td>Sản phẩm, giá</td><td class="num">20</td></tr><tr><td>4.2</td><td>Nhận, xử lý đơn real-time</td><td class="num">25</td></tr><tr><td>4.3</td><td>Shipper, phân đơn</td><td class="num">15</td></tr><tr><td>4.4</td><td>Báo cáo doanh thu</td><td class="num">20</td></tr><tr><td>4.5</td><td>Phân quyền</td><td class="num">10</td></tr>
  <tr class="modsep"><td colspan="3">5. App shipper (native) – 47</td></tr>
  <tr><td>5.1</td><td>Nhận đơn, trạng thái</td><td class="num">20</td></tr><tr><td>5.2</td><td>Bản đồ đường đi</td><td class="num">15</td></tr><tr><td>5.3</td><td>Xác nhận giao, thu COD</td><td class="num">12</td></tr>
  <tr class="modsep"><td colspan="3">6. Backend & tích hợp – 120</td></tr>
  <tr><td>6.1</td><td>API lõi</td><td class="num">60</td></tr><tr><td>6.2</td><td>Tích hợp POS (PERT 8/15/40)</td><td class="num">18</td></tr><tr><td>6.3</td><td>Cổng thanh toán (PERT 10/15/32)</td><td class="num">17</td></tr><tr><td>6.4</td><td>Push, SMS</td><td class="num">10</td></tr><tr><td>6.5</td><td>Bảo mật, Luật Bảo vệ dữ liệu cá nhân (mã hóa, xin đồng ý)</td><td class="num">15</td></tr>
  <tr class="modsep"><td colspan="3">7. Kiểm thử – 133</td></tr>
  <tr><td>7.1</td><td>Kế hoạch, test case</td><td class="num">20</td></tr><tr><td>7.2</td><td>Test hệ thống theo Sprint</td><td class="num">80</td></tr><tr><td>7.3</td><td>Hiệu năng</td><td class="num">10</td></tr><tr><td>7.4</td><td>Bảo mật</td><td class="num">8</td></tr><tr><td>7.5</td><td>Regression trước release</td><td class="num">15</td></tr>
  <tr class="modsep"><td colspan="3">8. Triển khai – 95</td></tr>
  <tr><td>8.1</td><td>Hạ tầng cloud, CI/CD</td><td class="num">15</td></tr><tr><td>8.2</td><td>Nhập dữ liệu 30 cửa hàng</td><td class="num">10</td></tr><tr><td>8.3</td><td>Đào tạo, tài liệu</td><td class="num">12</td></tr><tr><td>8.4</td><td>Hỗ trợ UAT, sửa lỗi</td><td class="num">30</td></tr><tr><td>8.5</td><td>Nộp store, go-live</td><td class="num">8</td></tr><tr><td>8.6</td><td>Hypercare 2 tuần</td><td class="num">20</td></tr>
  <tr><td colspan="2"><b>Tổng</b></td><td class="num"><b>780</b></td></tr>
  </tbody></table></div>
  <p><b>5 gói rủi ro nhất (P − O lớn):</b> 6.2 POS (32), 6.3 cổng thanh toán (22), 2.3 UI/UX, 4.2 real-time, 8.4 UAT. Cả 5 gói này nên được đưa vào Risk Register.</p>`,
  pitfalls: ["Không có nhánh Kiểm thử riêng. Kiểm thử thường chiếm 15–25% công sức.", "Gộp “Phát triển” thành một gói 400 man-day."]
},
"2.3": {
  how: ["Tính công suất thực, có trừ Tết và hệ số hiệu quả; so với tổng ước lượng cộng dự phòng; đề xuất cắt có số liệu."],
  html: `
  <p><b>Công suất:</b> 6 tháng khoảng 130 ngày làm việc, trừ khoảng 7 ngày Tết còn 123 ngày × 8 người = 984 ngày công. Nhân hệ số hiệu quả 6/8 giờ (75%) ra khoảng <b>738 man-day hiệu quả</b>.</p>
  <p><b>Nhu cầu:</b> 780 + 10% dự phòng = <b>858 man-day</b>. <b>Thiếu khoảng 120 man-day (16%).</b></p>
  <div class="tablewrap"><table><thead><tr><th>Đề xuất</th><th>Tiết kiệm</th><th>Đánh đổi</th></tr></thead><tbody>
  <tr><td>App shipper native → web responsive trên điện thoại</td><td class="num">−40</td><td>Trải nghiệm kém hơn một chút, đủ dùng cho bản 1.0</td></tr>
  <tr><td>Báo cáo doanh thu nâng cao → giai đoạn 2 (giữ báo cáo đơn giản)</td><td class="num">−15</td><td>Chị Lan tạm xuất Excel</td></tr>
  <tr><td>Dùng bộ UI kit có sẵn thay vì thiết kế từ đầu</td><td class="num">−15</td><td>Giao diện ít riêng biệt</td></tr>
  <tr><td>Chỉ 1 ví điện tử ở bản 1.0</td><td class="num">−10</td><td>Một phần khách dùng ví khác phải chọn COD</td></tr>
  <tr><td>Rút gọn hồ sơ và lịch sử đơn</td><td class="num">−7</td><td>Lịch sử chỉ 3 tháng gần nhất</td></tr>
  <tr><td>Thêm 1 tester part-time từ tháng 3 (≈ +35 man-day công suất)</td><td class="num">+35 công suất</td><td>Tăng khoảng 80 triệu chi phí, vẫn trong phần dự phòng</td></tr>
  <tr><td colspan="3"><b>Tổng: giảm 87 man-day nhu cầu và tăng 35 man-day công suất, bù được khoảng 122 man-day thiếu hụt.</b></td></tr>
  </tbody></table></div>`,
  pitfalls: ["Lập kế hoạch với 8 giờ hiệu quả/ngày và quên Tết.", "Tự cắt dự phòng về 0% để “vừa”."]
},
"N2": {
  how: ["Đủ 4 phần: WBS (bài 2.2), Gantt/lịch Sprint có đường găng, ngân sách theo tháng có dự phòng, RACI."],
  html: `
  <h3>Lịch tổng thể (Hybrid, Sprint 2 tuần)</h3>
  <div class="tablewrap"><table><thead><tr><th>Giai đoạn</th><th>Thời gian</th><th>Nội dung chính</th><th>Mốc</th></tr></thead><tbody>
  <tr><td>Sprint 0</td><td>2/1 – 15/1</td><td>Khảo sát, kiến trúc, hạ tầng, CI/CD, spike POS</td><td></td></tr>
  <tr><td>Sprint 1–2</td><td>16/1 – 28/2 (gồm Tết)</td><td>Thiết kế UI, đăng nhập, danh mục, API lõi</td><td>M1 31/1</td></tr>
  <tr><td>Sprint 3–5</td><td>1/3 – 11/4</td><td>Giỏ hàng, đặt hàng, web quản trị, tích hợp POS</td><td></td></tr>
  <tr><td>Sprint 6</td><td>12/4 – 25/4</td><td>Thanh toán, theo dõi đơn</td><td>M2 Beta 15/4</td></tr>
  <tr><td>Sprint 7–8</td><td>26/4 – 23/5</td><td>Giao diện shipper, thông báo, báo cáo, test hiệu năng và bảo mật</td><td></td></tr>
  <tr><td>UAT</td><td>24/5 – 10/6</td><td>UAT, sửa lỗi, nộp store (trước 1/6)</td><td>M3 10/6</td></tr>
  <tr><td>Go-live</td><td>11/6 – 30/6</td><td>Nhập dữ liệu, đào tạo, go-live, hypercare</td><td>M4 30/6</td></tr>
  </tbody></table></div>
  <p><b>Đường găng:</b> Spike POS → Tích hợp POS → Đặt hàng end-to-end → Thanh toán → UAT → Store review → Go-live. Mọi trễ ở POS hoặc cổng thanh toán đều làm trễ go-live, nên đây là hai mục ưu tiên theo dõi.</p>
  <h3 style="margin-top:12px">Ngân sách theo tháng (tỷ đồng) – dùng làm PV cho EVM</h3>
  <div class="tablewrap"><table><thead><tr><th>Tháng</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody>
  <tr><td>Chi trong tháng</td><td class="num">0,35</td><td class="num">0,35</td><td class="num">0,50</td><td class="num">0,40</td><td class="num">0,40</td><td class="num">0,40</td></tr>
  <tr><td>Lũy kế (PV)</td><td class="num">0,35</td><td class="num">0,70</td><td class="num">1,20</td><td class="num">1,60</td><td class="num">2,00</td><td class="num">2,40</td></tr>
  </tbody></table></div>
  <p>Cơ cấu: nhân sự 2,016 · hạ tầng và dịch vụ 0,10 · dự phòng rủi ro 0,284 (khoảng 13%). RACI: dùng Mẫu 2, thêm dòng “Tích hợp POS” (A: Backend lead, R: Backend dev, C: IT FreshMart, I: PM).</p>`,
  pitfalls: ["Gantt không có mốc và không chỉ ra đường găng.", "Ngân sách chỉ có một con số tổng, không phân theo tháng, nên không làm được EVM."]
}
});
