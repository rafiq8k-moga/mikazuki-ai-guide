---
title: Keamanan & Privasi Percakapan
---

# Keamanan & Privasi Percakapan

Halaman ini merangkum bagaimana Mikazuki AI menjaga chat-mu tetap aman: aturan keamanan yang selalu menyala meski kamu membawa prompt sendiri, perisai khusus yang muncul saat sistem mendeteksi kamu sedang sulit, dan letak data percakapanmu sebenarnya. Satu prinsipnya sederhana: keamanan bawaan tidak bisa ditawar, sedangkan datamu tetap di tanganmu sendiri.

## Filter Keamanan

Kalau kamu memakai mode [BYOK](/byok/), kamu bisa menulis **Prompt Sistem Kustom** dan **Custom UJB** sendiri - tetapi tulisan di halaman Mesin menyatakannya lurus: *"Tambahkan system prompt milikmu di atas prompt default. Teks kamu ditempatkan DI ATAS prompt default, bukan menimpanya. Aturan keamanan aplikasi tetap aktif. Khusus chat BYOK."* Uraian yang sama diulang langsung di bawah kolomnya: *"Teksmu berjalan DI ATAS prompt default - aturan keamanan aplikasi tetap aktif."* Custom UJB pun bekerja dengan prinsip serupa - *"ditambahkan SETELAH instruksi UJB default pada pesan terakhir - bukan menimpanya"* - jadi instruksi keamanan bawaan pengirim pun tetap ikut terkirim ke model.

Untuk karakter buatan pengguna, ada satu saringan lagi sebelum simpan: **AI Safety Check**. Setiap draf karakter diperiksa dan diberi salah satu tingkatan - `none`, `low`, `medium`, `high`, `critical`, atau `restricted`. Hasilnya tampil sebagai papan peringatan yang menjelaskan apa adanya, misalnya *"Unsur ambigu - AI mendeteksi unsur ambigu. Silakan edit jika perlu."* di alur Cloud, atau *"Tidak bisa disimpan - Konten melanggar pedoman. Harus diedit dulu sebelum bisa disimpan."* saat melanggar pedoman berat.

Penegakannya cukup berbeda antar alur. Di alur Cloud, `high` ke atas menghentikan pengiriman sampai kamu mengedit - `critical` ditandai *"Ditolak. Ini bukan false positive. Edit konten Anda."* dan `restricted` dikunci dengan *"Kamu diblokir dari fitur Create/Edit Cloud selama 60 menit."* Di alur lokal (karakter untuk dirimu sendiri), hanya `critical` dan `restricted` yang mengunci tombol simpan, sedangkan `high` diberi jeda setrum konfirmasi: *"Konten berisiko tinggi - AI mendeteksi konten berisiko tinggi untuk karakter ini. Yakin ingin menyimpan?"* Kalau mesin pemeriksa sedang lambat atau mati, check ini sengaja bersifat penasihat - tombol simpan tidak dikunci tanpa alasan yang pasti.

## Fitur Need Help

Mikazuki AI tidak hanya memfilter konten; ia juga berhenti mengobrol santai saat sistem mendeteksi percakapanmu sedang menyentuh krisis atau pikiran untuk menyakiti diri sendiri. Pada pesan tertentu dari karakter, blok bantuan berwarna muncul otomatis persis di bawah bubble dengan judul **"Butuh Bantuan - Anda Tidak Sendiri"** dan badan pesan: *"Jika Anda mengalami krisis atau memiliki pikiran untuk menyakiti diri sendiri, silakan hubungi orang terdekat atau layanan bantuan profesional."* Di dalamnya ada tautan **"Cari layanan bantuan →"** menuju [findahelpline.com](https://findahelpline.com/) - direktori global layanan krisis - plus catatan dengan nomor darurat: *"ID: 119 · 1500454 / luar ID buka findahelpline.com. Pesan ini otomatis dan bukan pengganti bantuan profesional."*

Dua lapis berikut ikut menyala di halaman chat. Di atas layar muncul bilah **"Keselamatan dan Dukungan"** - *"Sedang masa sulit? Anda tidak sendirian. Dukungan tersedia."* - yang bisa ditutup lewat tombol **"Tutup"**. Di tengah layar juga tampil dialog bantuan berisi *"Jika Anda berada dalam krisis atau mengalami pikiran untuk menyakiti diri sendiri, segera hubungi orang yang Anda percayai atau layanan bantuan lokal. Anda tidak sendirian."*, tombol besar **"Cari layanan bantuan - findahelpline.com →"**, nomor telepon cepat **119** dan **1500454**, serta tombol **"Buka"**.

Semua lapisan itu tampil sekali per kejadian - dialog tidak berulang tiap kali kamu membuka ulang chat, dan bilah atas hanya kembali pasif sampai ditutup. Penegasan terakhir tampil di bawah dialog, harap dibaca: *"Otomatis ditampilkan ketika sistem mendeteksi krisis. Ini bukan pengganti bantuan profesional."* Aplikasi mengarahkan, manusia dan layanan profesional yang menemani.

## Data Kamu

Percakapanmu di Mikazuki AI tinggal di perangkatmu: riwayat chat disimpan lokal di browser (IndexedDB), bukan sebagai arsip panjang di server. Saat kamu memakai mode BYOK, halaman Mesin menegaskan tempat kuncimu: *"Kunci BYOK disimpan secara lokal (IDB) dan tidak pernah dikirim ke server."* Konsekuensinya dua arah - server tidak ikut mengarsip obrolanmu, tapi data tidak ikut menyeberang dengan sendirinya; daftar chat bahkan mengingatkanmu: *"Data chat tidak disinkronkan antar perangkat. Silakan gunakan fitur penyimpanan cloud untuk mentransfer data."*

Untuk membawa data antar perangkat, tersedia [Cadangan Cloud terenkripsi](/fitur/membership-backup#backup-restore): data dienkripsi di perangkatmu sendiri dengan kata sandi yang hanya kamu pegang sebelum dikirim, begitu juga opsi [pulihkan dari file .hsai](/fitur/membership-backup#impor-dari-halostory-ai) yang diproses 100% lokal tanpa unggah. Rincian mekanisme enkripsi, aturan kata sandi minimal 12 karakter, dan langkah transfer antar perangkat dibahas penuh di halaman [VIP & Backup](/fitur/membership-backup). Ketentuan lengkap soal data apa yang diproses dan disimpan layanan tetap berlaku seperti tertulis di [Kebijakan Privasi](/kebijakan-privasi).
