# 🎉 Happy Birthday Gift Website 🎂

Một website nhỏ nhắn, dễ thương được thiết kế riêng để dành tặng sinh nhật cho người đặc biệt. 
Dự án được xây dựng với giao diện bắt mắt, các hiệu ứng tương tác sinh động và âm thanh vui nhộn để tạo ra sự bất ngờ cho người nhận.

## 🌟 Tính năng nổi bật
- **Màn hình khóa (Password Screen):** Yêu cầu nhập đúng mật mã (Mặc định là `0706`) để bước vào bữa tiệc.
- **Tương tác Thắp / Thổi nến:** Click vào chiếc bánh kem để thắp nến và click tiếp vào ngọn nến để thổi.
- **Hiệu ứng chúc mừng:** Pháo hoa, bóng bay, confetti và các biểu tượng cảm xúc (emoji) bay lên vô cùng sinh động.
- **Trang thiệp chúc mừng:** Sau khi thổi nến xong, màn hình sẽ tự động chuyển đến một trang thư chúc mừng cực kỳ đáng yêu với hiệu ứng mở thư, thay đổi avatar liên tục, vv.
- **Âm thanh và Nhạc nền:** Đi kèm với các hiệu ứng âm thanh (gõ phím, thổi nến, pháo nổ) và nhạc nền lãng mạn. Đặc biệt có tích hợp script ngăn IDM tự động tải file mp3 làm gián đoạn trải nghiệm.

## 🚀 Công nghệ sử dụng
- **HTML5 & CSS3:** Xây dựng cấu trúc, giao diện hiện đại và các animation mượt mà (CSS Animations, Keyframes).
- **Vanilla JavaScript:** Xử lý toàn bộ logic tương tác (nhập mật khẩu, thổi nến, spawn hiệu ứng, chuyển trang, điều khiển âm thanh v.v.).
- **Thư viện bên thứ ba:** Canvas-Confetti (hiệu ứng tung pháo giấy), jQuery (DOM manipulation ở trang thiệp).

## 📁 Cấu trúc thư mục

```text
├── asset/                  # Chứa các tài nguyên hình ảnh (nến, bánh, bong bóng) và âm thanh
├── aqsa/                   # Thư mục chứa trang thiệp chúc mừng chi tiết xuất hiện sau khi thổi nến
│   ├── index.html          # File HTML trang thiệp
│   ├── style.css           # CSS định dạng trang thiệp
│   └── images/             # Hình ảnh dùng riêng cho trang thiệp
├── index.html              # Trang chủ (màn hình khóa và chiếc bánh sinh nhật)
├── script.js               # File xử lý logic chính
├── style.css               # File CSS định dạng giao diện chính
└── README.md               # File thông tin dự án
```

## 💡 Hướng dẫn sử dụng
1. Clone repository này về máy của bạn:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Mở file `index.html` bằng trình duyệt web (Khuyên dùng **Live Server** trên VSCode để đảm bảo các file âm thanh, font được fetch đúng cách).
3. Tại màn hình khóa, nhập mật khẩu: **`0706`**.
4. Trải nghiệm tương tác với chiếc bánh kem và cùng đón chờ điều bất ngờ ở phía sau!

## 📸 Ảnh minh họa (Screenshots)
*(Bạn có thể upload và chèn các bức ảnh chụp màn hình dự án vào đây để README thêm phần sinh động)*

---
*Được tùy biến và tạo ra với ❤️!*
