# Deep Learning Projects – CO3133 (2025-2026)

**Authors:** Đặng Vũ Tuấn Kiệt, Lê Chí Đại, Nguyễn Quốc Huy, Lương Minh Thuận (Nhóm **ML4u** – Đại học Bách Khoa TP.HCM)

**Course:** CO3133 – Bài tập lớn môn Học Sâu và Ứng dụng (2025-2026)  
**Instructor:** TS. Lê Thành Sách

🌐 **Landing Page & Reports:** [🔗 ML4u - Học Sâu và Ứng dụng CO3133](https://caotaytang.github.io/DL_page/)

---

## 🚀 Projects Overview

Repo này chứa các dự án bài tập lớn trong khuôn khổ môn học Học Sâu và Ứng dụng (CO3133):

| Project | Domain | Status | Landing Page | Demo (Colab/Notebook) |
| :--- | :--- | :---: | :--- | :--- |
| **BTL1 – Phân loại Ảnh (CNN/ViT)** | Computer Vision | ✅ Completed | [Báo cáo BTL1](assignment1.html) | [Open DL_Assignment1_Image.ipynb](DL_Assignment1_Image.ipynb) |
| **BTL1 – Phân loại Văn bản (RNN/Transformer)** | NLP / Text Data | ✅ Completed | [Báo cáo BTL1](assignment1.html) | [Open DL_BTL1_Text.ipynb](DL_BTL1_Text.ipynb) |
| **BTL 1 – Đa phương thức (Zero/Few-shot)** | Multimodal | ⏳ In Progress | - | - |

---

## 📊 Nội dung học thuật

Mỗi bài tập lớn được triển khai với luồng nghiên cứu sâu, bao gồm các bước chính:

- Khám phá và phân tích bộ dữ liệu ảnh, văn bản thực tế.
- Tiền xử lý dữ liệu & Data Augmentation.
- Xây dựng mô hình với các block hiện đại (ResNet, Vision Transformer, Transformer, LSTM).
- Fine-tune các pre-trained models, đánh giá & so sánh hiệu suất qua Accuracy, F1-Score.
- Viết báo cáo chuẩn hóa và thảo luận kết quả nghiên cứu cho môn Học Sâu và Ứng dụng CO3133.

---

## 📂 Repo Structure

```text
DL_page/
│── assets/
│   │── css/                    # Custom CSS
│   │── images/                 # Hình ảnh trích xuất từ EDA và Charts
│   │── js/                     # Scripts tương tác (Intersection Observers)
│── DL_Assignment1_Image.ipynb  # Notebook thực nghiệm dữ liệu Ảnh
│── DL_BTL1_Text.ipynb          # Notebook thực nghiệm dữ liệu Văn bản
│── spec.md                     # Tài liệu tham khảo, yêu cầu đồ án
│── index.html                  # Landing Page trang chủ
│── assignment1.html            # Báo cáo BTL1 style Research
│── README.md                   # Thông tin project
```

---

## ▶️ Usage

Clone repo và trải nghiệm hệ thống:

```bash
git clone https://github.com/caoTayTang/DL_page.git
cd DL_page

# Để xem Landing Page, mở file index.html qua Live Server hoặc trình duyệt:
# Hoặc tham khảo trực tiếp trên GitHub Pages.
```

**Môi trường thực thi cho Notebooks:**
Các notebook `.ipynb` được khuyến nghị mở và chạy thử nghiệm trên Google Colab với cấu hình GPU (T4 hoặc L4) do kích thước mô hình Pre-trained lớn.
