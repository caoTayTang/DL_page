<div align="center">
  <h1>🚀 Deep Learning Projects & Reports (CO3133)</h1>
  <p>
    <b>Course:</b> CO3133 (Học Sâu và Ứng dụng) – 2025/2026<br>
    <b>Instructor:</b> TS. Lê Thành Sách
  </p>
  
  [![Website](https://img.shields.io/badge/Website-HTML5_Report-success?style=for-the-badge&logo=html5)](#)
  [![Hugging Face](https://img.shields.io/badge/Demo-HuggingFace_Space-FFD21E?style=for-the-badge&logo=huggingface)](#)
  [![PyTorch](https://img.shields.io/badge/Framework-PyTorch-EE4C2C?style=for-the-badge&logo=pytorch)](#)
</div>

<br>

## 👥 Nhóm Thực Hiện: **ML4u**
*Đại học Bách Khoa TP.HCM (HCMUT)*
- Đặng Vũ Tuấn Kiệt
- Lê Chí Đại
- Nguyễn Quốc Huy
- Lương Minh Thuận

---

## 🌟 Trực quan hóa & Báo cáo Tương tác
Toàn bộ kết quả nghiên cứu, bảng xếp hạng mô hình và các tiện ích dùng thử trực tiếp (ChatUI/Gradio) được trình bày chi tiết trên **Hệ thống HTML Report**:

👉 **[Truy cập Landing Page Chính - ML4u DL Projects](https://caotaytang.github.io/DL_page/)**

---

## 🚀 Projects Overview

Repository này chứa toàn bộ mã nguồn, tài liệu và hệ thống deploy HTML cho các bài tập lớn môn Học Sâu và Ứng dụng.

| 🗂️ Bài tập lớn | Trạng thái | Báo cáo chi tiết | Cấu trúc code | Demo Notebook |
| :--- | :---: | :--- | :--- | :--- |
| **1. Phân loại Ảnh (Image Classification)**<br><sub>ResNet, EfficientNet, ViT, Swin Transformer</sub> | ✅ **Hoàn thành** | [📄 Xem Báo Cáo Image](assignment1_image.html) | Notebook thuần | [DL_Assignment1_Image.ipynb](DL_Assignment1_Image.ipynb) |
| **2. Phân loại Văn bản (Text Classification)**<br><sub>RNN, LSTM, Text Transformer</sub> | ✅ **Hoàn thành** | [📄 Xem Báo Cáo Text](assignment1_text.html) | Notebook thuần | [DL_BTL1_Text.ipynb](DL_BTL1_Text.ipynb) |
| **3. Đa phương thức (Multimodal Classification)**<br><sub>Zero-Shot CLIP, LoRA Few-Shot CLIP, ONNX</sub> | ✅ **Hoàn thành** | [📄 Xem Báo Cáo Multimodal](assignment1_multimodal.html) | Gradio / HuggingFace | 🚀 Tích hợp trong báo cáo |

---

## 🛠️ Công Nghệ Sử Dụng

- **Deep Learning Framework:** PyTorch, Transformers (Hugging Face), PEFT (LoRA).
- **Computer Vision & NLP:** Torchvision, ViT, Swin, CLIP.
- **Explainable AI (XAI):** GradCAM (đối với CNN architectures), EigenCAM & Attention Rollout (đối với Transformer architectures).
- **Optimization & Deployment:** ONNX Runtime, Gradio Blocks.
- **Frontend / Reporting:** Vanilla HTML5/CSS3/JS, Plotly (Interactive Charts).

---

## 📂 Repository Structure

```text
DL_page/
├── assets/                     # Tài nguyên nội dung tĩnh (Data/Images)
│   ├── css/                    # Custom CSS framework cho báo cáo
│   ├── images/                 # Ảnh EDA, Heatmaps, Attention Rollout
│   ├── js/                     # JS Hooks cho Intersection Observers
│   └── plots/                  # Plotly HTML Visualizations (Latency, Loss, vv)
├── app.py                      # (Multimodal) Gradio application file
├── benchmark.py                # Pipeline đo đạc P50/P90/P99 latency
├── export_onnx.py              # Export model PyTorch sang ONNX
├── index.html                  # Giao diện Landing Page toàn project
├── assignment1_*.html          # Các site báo cáo tương ứng cho từng phần
└── *.ipynb                     # Các file jupyter notebook training gốc
```

---

## ▶️ Xem báo cáo nội bộ (Local Usage)

Clone repository này về máy và dùng Live Server để chạy hệ thống HTML, giúp load đầy đủ các interactive plots (`iframes`):

```bash
# 1. Clone repository
git clone https://github.com/caoTayTang/DL_page.git
cd DL_page

# 2. Khởi chạy HTTP Server nhẹ (Python)
python -m http.server 8000

# 3. Mở trình duyệt tại địa chỉ:
# http://localhost:8000
```

> **Lưu ý:** Các notebook `.ipynb` chứa quá trình training với pre-trained model dung lượng lớn, hãy mở trên Google Colab với GPU (T4 hoặc ưu tiên L4) để có thể chạy mượt mà nhất.
