# Architecture

Dokumen ini menjelaskan bagaimana project ini disusun dan alasan di balik arsitektur yang digunakan.

---

# Gambaran Besar

Website dibangun menggunakan pendekatan **CMS-Driven**.

Payload CMS bertugas menyediakan data, sedangkan frontend bertugas mengubah data tersebut menjadi tampilan website.

```text
Payload CMS
      │
      ▼
Pages
      │
      ▼
Sections
      │
      ▼
Page Renderer
      │
      ▼
React Blocks
      │
      ▼
Website
```

---

# Page Renderer

Semua halaman dirender melalui satu **Page Renderer**.

Renderer bertugas untuk:

- membaca data dari Payload CMS
- menentukan block yang harus dirender
- membangun layout halaman
- menjaga konsistensi struktur website

Dengan pendekatan ini, halaman tidak perlu mengetahui bagaimana block dirender.

---

# Block

Setiap block hanya memiliki satu tanggung jawab:

> Merender UI berdasarkan data yang diterima.

Contohnya:

- Hero
- Gallery
- Feature Grid
- FAQ
- CTA
- Testimonials

Block tidak perlu mengetahui:

- berada di halaman apa
- urutan section
- layout halaman
- bagaimana data diambil

Semua itu sudah ditangani oleh Page Renderer.

---

# Section

Layout setiap bagian halaman dikelola oleh komponen `Section`.

Setiap **Section hanya memiliki satu Block**.

Contohnya secara konsep:

```text
Section
└── Hero

Section
└── Gallery

Section
└── CTA
```

Block **tidak** membuat `Section` sendiri.

Page Renderer yang bertanggung jawab membungkus setiap block menggunakan struktur layout yang telah disediakan sehingga spacing, container, dan konsistensi layout tetap sama di seluruh website.

---

# Reusable First

Setiap kali menerima desain baru, jangan langsung membuat component baru.

Coba cek terlebih dahulu:

- apakah block seperti ini sudah ada?
- apakah cukup ditambah props?
- apakah hanya berbeda konten?
- apakah bisa digunakan kembali di halaman lain?

Kalau jawabannya "iya", lebih baik gunakan block yang sudah ada.

---

# Naming Convention

Gunakan nama yang menggambarkan fungsi block.

Contoh yang disarankan:

```text
Hero
Gallery
Timeline
FAQ
CTA
Statistics
Testimonials
```

Hindari nama berdasarkan halaman.

Contoh yang sebaiknya dihindari:

```text
HomeHero
AboutHero
LandingGallery
ServiceCTA
```

---

# Tujuan Arsitektur

Tujuan utama arsitektur ini adalah:

- component lebih reusable
- maintenance lebih mudah
- konsisten di seluruh website
- mudah menambah halaman baru
- cukup menambah data dari CMS tanpa membuat ulang UI
