# Aturan Tambahan — Supaya Tidak Mengulangi Kesalahan Lama

Ditempel di setiap folder proyek website baru, sebagai pelengkap aturan
global di ~/.claude/CLAUDE.md. Aturan global sudah mengatur mobile-first,
ukuran font, target sentuh, dan bukti screenshot — berkas ini isinya
kesalahan konkret yang pernah kejadian, supaya tidak terulang.

## 1. Halaman utama (index.html) harus selalu "hidup"

Jangan biarkan index.html jadi placeholder kosong sementara halaman yang
sungguhan dikerjakan disimpan di nama lain (mis. hero-bromo.html). Begitu
ada halaman yang seharusnya jadi beranda, langsung jadikan/timpa
index.html — jangan ditunda "nanti dipindah belakangan". Kalau dibiarkan,
saat situs dibuka lewat alamat pendek (localhost:5500/), yang muncul
placeholder lama, bukan halaman yang sedang dikerjakan.

## 2. "Halaman terpisah" bukan "kotak yang muncul"

Kalau diminta suatu bagian dibuka sebagai HALAMAN TERPISAH (bukan
modal/popup): itu harus jadi berkas HTML sendiri dengan alamatnya
sendiri, dibuka lewat tautan <a href> biasa — alamat di address bar ikut
berubah. Bukan <div> yang disembunyikan lalu dimunculkan lewat JavaScript
di atas halaman yang sama. Itu namanya modal, beda kategori, jangan
disamakan kecuali memang diminta modal.

## 3. Elemen yang dipakai di lebih dari satu halaman: satu berkas sejak awal

Header, menu navigasi, menu HP, footer — begitu ada halaman KEDUA yang
memakai elemen yang sama, pindahkan CSS/JS-nya ke berkas bersama
(mis. situs.css, transisi.js) SEJAK SAAT ITU JUGA. Jangan disalin dulu ke
halaman baru dengan niat "dirapikan belakangan" — keburu lupa, dan dua
salinan itu diam-diam mulai berbeda.

## 4. Kalau nama/lokasi berkas diganti, cari SEMUA rujukan sebelum dianggap selesai

Sebelum dibilang selesai, cari nama berkas lama di SELURUH proyek (semua
.html, .css, .js) — bukan cuma di halaman yang sedang dikerjakan. Tautan
yang lupa diperbarui tidak error di layar, cuma diam-diam menuju alamat
yang salah.

## 5. Menengahkan elemen absolut yang lebarnya tidak tetap: jangan left: 50%

Untuk badge/label di atas foto yang lebar teksnya bisa berubah,
left: 50%; transform: translateX(-50%) memotong ruang yang tersedia jadi
cuma separuh lebar induknya — teks yang sebetulnya muat jadi terpaksa
turun baris atau terpotong. Pakai:
left: Npx; right: Npx; width: fit-content; margin-inline: auto
Ruang yang tersedia jadi selebar induknya penuh.

## 6. Referensi "tampilan HP" harus benar-benar komposisi HP

Kalau gambar acuan berlabel "HP" isinya kartu sejajar berjajar atau kolom
ganda (ciri layout laptop), itu salah label — bukan referensi HP yang
sah. Konfirmasi dulu sebelum dipakai, jangan dianggap benar hanya karena
namanya begitu.

## 7. Setelah edit, jangan percaya tampilan yang sama sebelum "paksa muat ulang"

Server lokal Python (http.server) dan sebagian browser tidak selalu
mengambil versi terbaru berkas. Kalau sehabis mengubah CSS/HTML tampilan
di browser terlihat SAMA PERSIS dengan sebelumnya, itu bisa jadi cache —
tambahkan parameter acak di URL (?v=2) atau muat ulang paksa, baru
disimpulkan perubahan gagal atau berhasil.
## Aturan yang berlaku

Aturan global di `~/.claude/CLAUDE.md` berlaku penuh di sini — mobile-first,
ruang napas ditambah di mobile, batas ukuran font, target sentuh 44×44px, dan
kewajiban bukti screenshot dari dua ukuran. Berkas ini hanya mencatat hal yang
khusus proyek ini.
INSTRUKSI DESAIN RESPONSIVE (wajib diikuti):

Referensi desain yang saya berikan adalah tampilan DESKTOP/LAPTOP. 
Buat versi mobile-nya dengan aturan berikut:

1. BREAKPOINT yang dipakai:
   - Desktop: di atas 1024px
   - Tablet: 768px - 1024px
   - Mobile: di bawah 768px

2. NAVIGASI:
   - Desktop: menu horizontal seperti referensi
   - Mobile: ubah jadi hamburger menu (ikon ☰), menu utama disembunyikan 
     dan muncul saat ikon ditekan

3. LAYOUT/GRID:
   - Kolom yang sejajar di desktop (misal 3 kolom galeri foto, 
     4 kolom fasilitas) HARUS disusun ulang jadi 1 kolom di mobile
   - Jangan biarkan konten terpotong atau perlu geser ke samping (horizontal scroll)

4. GAMBAR:
   - Gambar harus menyesuaikan lebar layar (max-width: 100%)
   - Untuk gambar hero/banner, pastikan bagian penting (misal wajah 
     villa/pemandangan utama) tetap terlihat saat gambar terpotong di mobile

5. TEKS:
   - Ukuran judul besar di desktop harus mengecil di mobile 
     (jangan sampai judul memenuhi 2-3 baris tidak perlu)
   - Jarak antar-section tetap nyaman dibaca, tidak terlalu mepet

6. CTA WHATSAPP:
   - Tombol/link WhatsApp harus tetap mudah ditekan jari (ukuran minimal 
     44x44px sesuai standar tap target)
   - Kalau ada floating WhatsApp button, pastikan tidak menutupi 
     konten penting di mobile

7. TESTING:
   - Setelah selesai satu section, jalankan pengecekan tampilan di 
     lebar layar 375px (ukuran HP umum) sebelum lanjut ke section berikutnya
   - Laporkan ke saya jika ada elemen yang berpotensi rusak di mobile

## Teknologi

HTML, CSS, dan JavaScript murni. Tanpa Node.js, npm, bundler, atau framework.
Server lokal untuk pratinjau memakai Python (sudah terpasang: 3.11).

## Struktur berkas

```
portofolioku/
├── index.html          halaman utama — hero penginapan Bromo
├── css/
│   └── style.css       dasar: reset, box-sizing, ukuran font minimum
├── js/
│   └── main.js         belum ada isi
├── assets/
│   ├── img/            gambar (foto, hero, ikon)
│   └── font/           font lokal kalau nanti dipakai
└── .claude/
    └── launch.json     konfigurasi server lokal
```

## Menjalankan pratinjau

Server lokal di port 5500 (jangan buka lewat `file://` — screenshot mobile
tidak akurat dari sana):

```bash
python -m http.server 5500
```

Lalu buka `http://localhost:5500`.

## Sebelum mulai menulis HTML/CSS

Wajib ada dua referensi dulu: **tampilan laptop** dan **tampilan HP**. Kalau
baru satu yang dikirim, minta yang satunya — jangan menurunkan tampilan HP dari
tampilan laptop.



