# fasilitasumrah.com (Standalone Vue Application)

Aplikasi web mandiri berbasis **Vue 3 + Vite** untuk landing page penawaran layanan umrah **fasilitasumrah.com**.

Proyek ini telah dipisahkan secara independen dari folder `24visa` agar dapat di-*deploy* atau dikembangkan sebagai website mandiri.

---

## 📁 Struktur Folder

```text
fasilitasumrah/
├── public/
│   └── banner-baitullah.webp
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── fasilitasUmrah.css      # Style khusus fasilitasumrah.com
│   │   └── images/
│   │       └── fasilitas-umrah-banner-baitullah.webp
│   ├── components/
│   │   ├── ContactPanel.vue            # Bagian kedua: Form identitas & WhatsApp
│   │   ├── Footer.vue                  # Footer fasilitasumrah.com
│   │   ├── HeroBanner.vue              # Banner hero bagian atas
│   │   ├── Navbar.vue                  # Header navigasi & brand fasilitasumrah.com
│   │   ├── RecaptchaWidget.vue         # Integrasi Google reCAPTCHA
│   │   ├── ServicePanel.vue            # Bagian pertama: Pilihan layanan & jemaah
│   │   └── SuccessState.vue            # Tampilan sukses kode pengajuan & tracking
│   ├── composables/
│   │   └── useFasilitasUmrahForm.js    # State management, validasi, & integrasi API
│   ├── constants/
│   │   └── index.js                    # Daftar opsi layanan, preset cepat, & saran
│   ├── utils/
│   │   └── recaptcha.js                # Loader asinkron reCAPTCHA
│   ├── App.vue                         # Root Vue Component
│   └── main.js                         # Entry point aplikasi
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Cara Menjalankan

### 1. Masuk ke direktori
```bash
cd C:\laragon\www\fasilitasumrah
```

### 2. Pasang dependensi
```bash
npm install
```

### 3. Konfigurasi Environment (`.env`)
Salin file `.env.example` ke `.env`:
```bash
cp .env.example .env
```
Isi konfigurasi:
```env
# URL backend API (Laravel 24visa)
VITE_API_BASE_URL=http://127.0.0.1:8000

# Google reCAPTCHA v2 Site Key (opsional)
VITE_RECAPTCHA_SITE_KEY=
```

### 4. Jalankan Dev Server
```bash
npm run dev
```
Aplikasi akan aktif di `http://127.0.0.1:5174` (atau vhost Laragon).

### 5. Build untuk Produksi
```bash
npm run build
```
Hasil build akan berada di direktori `dist/` dan siap di-*deploy* ke hosting manapun (Vercel, Netlify, VPS, cPanel, dll.).

---

## 🔗 Integrasi Backend API

Aplikasi ini berkomunikasi dengan backend (misal backend 24visa):
- **CSRF Token**: `GET {VITE_API_BASE_URL}/paket-custom/csrf-token`
- **Submit Form**: `POST {VITE_API_BASE_URL}/paket-custom/quick` dengan payload:
  - `lead_source`: `'iklan_fasilitas_umrah'`
  - `service_groups`: array layanan yang dipilih
  - `pax`: jumlah jemaah
  - `departure_month`: perkiraan bulan keberangkatan
  - `contact_name`: nama lengkap
  - `contact_phone`: nomor WhatsApp (+62...)
  - `notes`: catatan tambahan
  - `terms_accepted`: persetujuan syarat & ketentuan
  - `g-recaptcha-response`: token verifikasi bot
- **Pelacakan Pengajuan**: `GET {VITE_API_BASE_URL}/lacak-pesanan?code={booking_code}`
