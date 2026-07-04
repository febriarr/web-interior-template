# Contributing

Halo 👋

Terima kasih sudah ikut berkontribusi di project ini.

Dokumen ini berisi beberapa panduan supaya kita tetap memiliki cara kerja yang sama dan project tetap konsisten.

---

# Sebelum Membuat Block Baru

Coba tanyakan dulu ke diri sendiri:

- apakah block seperti ini sudah ada?
- apakah cukup ditambah props?
- apakah benar-benar block baru?
- apakah nanti bisa digunakan lagi?

Kalau masih bisa menggunakan block yang sudah ada, lebih baik reuse.

---

# Naming

Gunakan nama berdasarkan fungsi, bukan berdasarkan halaman.

✅ Disarankan

```text
Hero
Gallery
CTA
FeatureGrid
FAQ
Timeline
Testimonials
```

❌ Sebaiknya dihindari

```text
HomeHero
AboutHero
LandingCTA
ServicesGallery
```

---

# Fokus pada Block

Saat membuat block, fokuslah pada UI block tersebut.

Block tidak perlu mengetahui:

- halaman apa yang sedang dirender
- layout halaman
- spacing antar section
- container halaman

Block cukup menerima data dan merender tampilannya.

---

# Layout Ditangani Renderer

Page Renderer bertanggung jawab untuk menyusun halaman.

Renderer yang akan:

- membaca data dari Payload CMS
- membungkus block dengan struktur layout yang sudah ditentukan
- menjaga konsistensi antar section
- merender block sesuai tipe yang diterima

Dengan begitu setiap block tetap sederhana dan mudah digunakan kembali.

---

# Styling

Beberapa kebiasaan yang kita usahakan:

- gunakan Tailwind CSS
- gunakan komponen shadcn/ui jika sesuai
- hindari styling yang hanya cocok untuk satu halaman
- utamakan reusable dibanding copy-paste
- gunakan props atau variant jika hanya berbeda tampilan

---

# Kalau Ragu

Kalau bingung apakah perlu membuat block baru atau cukup mengembangkan block yang sudah ada, lebih baik diskusi dulu.

Biasanya ada solusi yang lebih sederhana daripada menambah component baru.

---

# Tujuan Kita

Project ini bukan tentang memiliki banyak component.

Tujuannya adalah memiliki kumpulan block yang reusable sehingga ketika halaman baru dibuat, kita cukup menyusun block yang sudah ada tanpa harus membuat ulang UI dari awal.

Semoga project ini tetap nyaman dikembangkan, baik sekarang maupun beberapa bulan ke depan. 😄
