# CUPTEA ESTEH TIAN GROUP — Next.js

Website starter bergaya **Futuristic 3000** menggunakan Next.js App Router, TypeScript, Tailwind CSS, dan Lucide React. Dirancang untuk deployment ke Vercel.

## Isi awal
- Beranda premium gelap dengan aksen teal
- Halaman menu dengan data produk contoh
- Cerita merek
- Form minat kemitraan (membuka WhatsApp; belum menyimpan data)
- Halaman kontak
- Metadata dasar dan layout responsif

## 1. Persiapan
Pasang Node.js versi LTS yang memenuhi persyaratan Next.js dari https://nodejs.org/.

## 2. Jalankan lokal
```bash
npm install
cp .env.example .env.local
npm run dev
```
Buka http://localhost:3000.

Di Windows PowerShell, salin `.env.example` menjadi `.env.local` secara manual bila perintah `cp` tidak tersedia.

Isi `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=628xxxxxxxxxx
```
Gunakan nomor bisnis dalam format internasional tanpa tanda `+`, spasi, atau strip. Jangan memasukkan nomor sebelum nomor resmi dipastikan.

## 3. Uji build
```bash
npm run build
```

## 4. Unggah ke GitHub
1. Buat repository baru bernama `cuptea-nextjs` (atau nama pilihan Anda).
2. Unggah seluruh isi folder proyek ini ke root repository, termasuk `src`, `public`, dan file konfigurasi.
3. Jangan unggah `node_modules`, `.next`, `.env.local`, atau rahasia/token.
4. Commit perubahan.

## 5. Deploy ke Vercel
1. Masuk ke https://vercel.com/ dan pilih Add New → Project.
2. Import repository GitHub `cuptea-nextjs`.
3. Framework preset: Next.js; Root Directory: `./`.
4. Tambahkan Environment Variable `NEXT_PUBLIC_WHATSAPP_NUMBER` jika nomor resmi sudah tersedia.
5. Deploy. Setiap push ke branch produksi akan memicu deployment baru.

## 6. Domain
Tambahkan domain melalui Project → Settings → Domains di Vercel. Ikuti persis record DNS yang ditampilkan Vercel untuk domain Anda. Jangan menebak atau mengganti nameserver/DNS yang sudah berfungsi sebelum memeriksa konfigurasi aktif.

## Catatan penting sebelum peluncuran
- Produk, harga, foto, alamat, akun sosial, dan nomor WhatsApp di starter ini harus diverifikasi pemilik bisnis.
- Harga di halaman menu adalah contoh awal, bukan daftar harga terkonfirmasi.
- Form kemitraan saat ini membuka WhatsApp dan tidak menyimpan data di server/database.
- Dashboard admin, pembayaran online, inventori, autentikasi, dan database belum diaktifkan. Tambahkan setelah kebutuhan dan kebijakan operasional ditentukan.
- Jangan menganggap formulir contoh sebagai sistem pemesanan produksi.
