# 1. Giới Thiệu
Dự án có tên harukoapp-project thực hành tự động hóa kiểm thử giao diện người dùng với web mẫu [Herokuapp](https://the-internet.herokuapp.com). Sử dụng công cụ kiểm thử WebDriverIO trên nền tảng Node.js. Sử dụng Mocha framework và tích hợp Allure Reporter để trình bày kết quả test.

# 2. Cây Thư Mục
    harukoapp-project/
    ├── node_modules/              # Thư viện được cài bởi npm
    ├── test/
    │   └── specs/
    │       └── example.e2e.js     # File test mẫu được tạo tự động
    ├── wdio.conf.js               # File cấu hình chính của WebdriverIO
    ├── package.json               # File quản lý dependencies và scripts
    ├── package-lock.json          # Ghi lại version chính xác của package

# 3. Testcase

    | #  | **Tính năng**               | **Mục tiêu kiểm thử (Objective)**                                                                 |
    |----|-----------------------------|----------------------------------------------------------------------------------------------------|
    | 1  | Form Authentication         | Đảm bảo login thành công với thông tin hợp lệ                                                      |
    | 2  | Form Authentication         | Hiển thị lỗi khi nhập sai tên người dùng hoặc mật khẩu                                             |
    | 3  | Checkboxes                  | Kiểm tra checkbox có thể được chọn / bỏ chọn                                                       |
    | 4  | Dropdown                    | Chọn được option từ dropdown và hiển thị đúng                                                      |
    | 5  | Dynamic Controls            | Kiểm tra thêm/xóa input field và nút enable/disable hoạt động đúng                               |
    | 6  | Messsage in Dynamic Control | Xử lý Alert – xác nhận alert hiện lên và nội dung chính xác                                       |
    | 7  | Input                       | Bấm “Cancel” trong confirm alert, kiểm tra phản hồi                                               |
    | 8  | JavaScript Prompt           | Nhập text vào prompt và xác nhận text hiển thị đúng sau khi submit                                |
    | 9  | File Upload                 | Tải tệp lên thành công và hiển thị tên tệp                                                         |
    | 10 | File Download               | Bấm tải tệp và kiểm tra tệp được tải về thành công                                                 |
    | 11 | Hover                       | Di chuột vào ảnh và xác nhận thông tin xuất hiện                                                   |
    | 12 | Multiple Windows            | Mở cửa sổ mới, chuyển context đúng và kiểm tra tiêu đề                                             |
    | 13 | Notification Messages       | Click nút và xác nhận thông báo hiển thị ngẫu nhiên đúng cú pháp                                  |
    | 14 | Inputs                      | Nhập số vào input field và xác minh giá trị đã nhập                                                |
    | 15 | Add/Remove Elements         | Thêm nhiều phần tử và xóa từng cái – xác minh phần tử không còn tồn tại                            |
    | 16 | Typos                       | Xác minh text bị lỗi và reload cho đến khi đúng chính tả                                          |
    | 17 | Broken Images               | Kiểm tra URL ảnh bị hỏng – phát hiện ảnh không load                                                |
    | 18 | Key Presses                 | Nhấn phím bất kỳ và xác nhận text phản hồi                                                         |
    | 19 | Entry Ad                    | Popup quảng cáo xuất hiện đúng khi truy cập trang lần đầu                                          |
    | 20 | AB Testing                  | Xác minh layout hoặc nội dung được thay đổi ngẫu nhiên (A/B)                                       |

# 4. Test Result

