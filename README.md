# Interior Website

Halo! 👋

Project ini dibuat menggunakan **Next.js**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, dan **Payload CMS**.

Website ini memang ditujukan untuk kebutuhan **website interior**, tetapi kita tetap berusaha membangun komponen yang reusable supaya mudah dikembangkan dan di-maintain ke depannya.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Payload CMS

---

## Mindset Project

Ada satu mindset yang ingin kita pakai selama mengembangkan project ini.

> **Jangan membangun component berdasarkan halaman. Bangun reusable block yang bisa digunakan di berbagai halaman.**

Misalnya saat melihat desain baru, jangan langsung berpikir:

- Hero Home
- Hero About
- Hero Services

Tapi coba lihat sebagai:

- Hero
- Gallery
- CTA
- Timeline
- FAQ
- Testimonials
- Statistics

Karena kemungkinan besar block tersebut bisa digunakan lagi di halaman lain.

---

## Kenapa Begitu?

Kalau component dibuat berdasarkan halaman, lama-kelamaan project akan dipenuhi file seperti:

```text
HomeHero.tsx
AboutHero.tsx
ServicesHero.tsx
PortfolioHero.tsx
```

Padahal secara fungsi hampir sama.

Lebih baik cukup punya:

```text
Hero.tsx
```

Perbedaan isi berasal dari data CMS, bukan dari component yang berbeda.

---

## Arsitektur Singkat

Payload CMS hanya menyediakan data.

Frontend bertugas mengubah data tersebut menjadi tampilan website.

Kurang lebih alurnya seperti ini:

```text
Payload CMS
      │
      ▼
Page Data
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

Kalau belum pernah menggunakan Payload CMS, tidak masalah.

Yang penting dipahami adalah frontend menerima data, lalu merender block yang sesuai.

---

## Prinsip Pengembangan

Sebelum membuat block baru, coba tanyakan:

- Apakah block seperti ini sudah ada?
- Apakah cukup ditambah props?
- Apakah benar-benar perlu component baru?
- Apakah nanti bisa dipakai lagi?

Kalau masih bisa reuse, lebih baik reuse.

---

## Dokumentasi

Untuk memahami project lebih lanjut, silakan baca:

- `docs/ARCHITECTURE.md`
- `docs/CONTRIBUTING.md`

Semoga dokumentasi ini bisa membantu kita menjaga project tetap rapi seiring bertambahnya fitur. Kalau ada ide atau pendekatan yang lebih baik, jangan ragu buat diskusi.
