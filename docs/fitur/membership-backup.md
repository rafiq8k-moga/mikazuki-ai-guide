---
title: VIP & Backup
---

# VIP & Backup

Mikazuki AI bisa dipakai gratis selamanya, tersedia juga status **VIP** untuk pengalaman yang lebih lengkap plus fitur **Cadangan Cloud** untuk menjaga percakapanmu tetap aman. Halaman ini merangkum isi paket membership, cara menukar kode redeem, cara kerja backup terenkripsi, dan cara memindahkan data chat ke perangkat baru. Semua proses backup bekerja dengan prinsip yang sama: hanya kamu yang bisa membaca isinya.

## VIP Membership

Pengaturan membership ada di halaman **"Keanggotaan"**, yang bisa dibuka dari halaman profil (lihat [Chat Dasar](/fitur/chat-dasar) untuk navigasi aplikasi). Paket **Gratis** berharga **Rp0** dengan dua fitur bawaan: **"Chat tanpa batas"** dan **"Memori chat"**. Paket **VIP** diberi mahkota dan berharga **Rp100.000/bulan** dengan catatan yang tampil apa adanya: *"Ditagih tiap 30 hari. Bukan sekali bayar selamanya."*

Isi paket VIP tertulis di halaman yang sama: **"Semua fitur Gratis, ditambah:"** - **"Respons AI yang sangat natural"**, **"Kirim Foto"**, **"Memori Global"**, dan **"Tanpa Iklan"**. Memori Global sendiri dibahas mendalam di [Memori & Ringkasan](/fitur/memori-dan-ringkasan), karena fitur itulah yang membuat karakter mengingatmu lintas chat. Bila VIP-mu aktif, muncul lencana **"Aktif"** dan catatan **"VIP aktif sampai {date}"** dengan tanggal yang ditulis lengkap sesuai bahasa perangkatmu; tombol **"Pilih"** akan aktif lagi setelah masa berlaku habis.

Menekan **"Pilih"** mengarahkanmu ke gerbang pembayaran di Mikazuki Account Center, karena penagihan dikelola di sana - bukan di aplikasi. Setelah pembayaran selesai kamu dibawa ke halaman **"Pembayaran Berhasil"** dan status VIP akan diaktifkan. Kalau tombol pembayaran menampilkan *"Segera hadir"*, gerbangnya memang belum dibuka - pantau pengumuman resmi saja.

## Kode Redeem

Di bagian bawah halaman Keanggotaan ada kartu **"Punya kode redeem?"** untuk menambah masa aktif VIP lewat kode, dengan petunjuk *"Masukkan kode untuk menambah masa aktif VIP kamu."* Ketik kodenya di kolom berplaceholder `MK-XXXX-XXXX-XXXX`, lalu tekan **"Tukar kode"** dan tunggu status *"Memproses..."* selesai. Aplikasi otomatis mengubah hurufmu jadi kapital dan membuang spasi saat mengetik, jadi menyalin kode dari chat atau screenshot tidak masalah.

Pembacaan kode dilakukan di server, termasuk perbaikan huruf yang tertukar - cukup tulis sekira-kira benar. Batasnya tegas dan tertulis langsung di bawah formulir: *"Satu kode hanya bisa ditukar satu kali per akun."* Bila kode berhasil, pesan sukses tampil di kartu yang sama; bila ditolak, muncul peringatan merah dengan tombol tutup.

## Backup & Restore

Backup ada di **Pengaturan → Account** dalam kartu **"Cadangan Cloud"**, dengan penjelasan singkatnya: *"Chat Anda akan dicadangkan dengan aman menggunakan kata sandi. Hanya Anda yang dapat mendekripsinya."* Isi cadangannya luas: seluruh chat dan pesan, Summary, Chat Memories dan memori global, terjemahan chat, wallpaper global maupun per-chat, bahkan catatan chat yang barusan kamu hapus - supaya data yang hilang di perangkat lain tidak "bangkit" lagi saat restore.

Kuncinya satu: **kata sandi cadangan, minimal 12 karakter**. Data dienkripsi di perangkatmu sendiri (turunan PBKDF2 dari sandi → AES-256-GCM, dipadatkan lebih dulu) sebelum dikirim, jadi server hanya menyimpan blob acak tanpa pernah melihat isinya. Konsekuensinya serius dan perlu dipegang: **lupa kata sandi = isi backup tidak bisa dibuka lagi oleh siapa pun, termasuk kami**. Centang *"Ingat kata sandi untuk sesi ini (untuk cadangan otomatis)"* bila mau sandi dipakai kembali hanya sampai sesi browser ini berakhir.

Tekan **"Cadangkan Sekarang"** untuk backup manual; statusnya tampil sebagai *"Cadangan v{version} · {size}"* plus tanggal terakhir. Ada juga **cadangan otomatis**: centang *"Cadangan otomatis setiap 50 penyimpanan"* dan aplikasi akan mengirim backup setiap 50 kali aktivitas penyimpanan chat - fitur ini hanya jalan bila sandi sesi tersedia, kalau tidak ia menunggu backup manual. Bila upload gagal karena koneksi, blob yang sudah tersegel ikut kamu simpan offline dan dikirim ulang otomatis ketika perangkat kembali daring.

**"Pulihkan"** mengunduh cadangan dari cloud dan menampilkannya dulu sebagai ringkasan - *"{chats} chat · {messages} pesan dari {exported_at}"* - lengkap dengan peringatan *"Chat saat ini di perangkat ini akan ditimpa."* sebelum kamu mengonfirmasi *"Ya, timpa perangkat ini"*. Hasil pemulihan datanya digabungkan rapi dan dilaporkan apa adanya: *"Pemulihan digabungkan: {chats} chat, {added} pesan baru."* Bila cloud ternyata memegang cadangan yang lebih baru (*"Cloud memiliki cadangan yang lebih baru."*), kamu memilih salah satu dari tiga jalan: **"Gabungkan keduanya (disarankan)"**, **"Gunakan cloud, timpa lokal"**, atau **"Gunakan milik saya, timpa cloud"**.

Selain cloud, ada tombol **"Pulihkan dari File (.json)"** untuk memuat file cadangan lokal atau hasil migrasi domain. Aplikasi membaca file, menampilkan jumlah chat dan pesan yang ditemukan, lalu menggabungkannya *"secara aman"* ke riwayat di perangkat ini. File berukuran 0 byte ditolak dengan pesan yang panjang dan berguna: kalau kamu di Android, coba file manager lain seperti Files by Google atau ZArchiver.

## Impor dari HaloStory AI

Tepat di bawah backup ada kartu **"Migrasi dari file .hsai"** untuk memulihkan chat yang diekspor dari HaloStory AI: tekan **"Pilih file .hsai"**, tunggu status *"Membaca {name}..."*, dan hasilnya dilaporkan langsung - *"{chats} chat ({messages} pesan) dipulihkan."* Nama, avatar, dan warna chat dipulihkan dari isi file, termasuk chat grup beserta anggotanya, Summary, dan daftar chat yang dulu kamu pin. File yang gagal dibuka diberi pesan *"File ini tidak dapat dibuka. Pastikan ini adalah cadangan .hsai yang valid."*, dan bila penyimpanan browser penuh kamu diminta membereskan kapasitas dulu.

Prosesnya 100% lokal, persis seperti tertulis di kartu itu: *"File .hsai didekripsi dan dipulihkan secara lokal di perangkat ini. Tidak ada yang diunggah ke server kami."* Identitas akun lama pun tidak dibutuhkan - file .hsai adalah bawaanmu sendiri. Setelah impor selesai, chat lama langsung tampil di daftar chat dan bisa langsung diteruskan.

## Transfer Antar Perangkat

Data chat Mikazuki AI tidak sinkron otomatis antar perangkat; daftar chat pun mengingatkannya: *"Data chat tidak disinkronkan antar perangkat. Silakan gunakan fitur penyimpanan cloud untuk mentransfer data."* Jadinya jalur pemindahannya jelas. Di perangkat lama: buka **Pengaturan → Account**, isi kata sandi cadangan, tekan **"Cadangkan Sekarang"**. Di perangkat baru: masuk dengan akun yang sama, buka halaman Account yang sama, isi **kata sandi cadangan yang sama**, lalu tekan **"Pulihkan"**.

Karena restore itu *merge* dengan penanganan penghapusan, chat yang sengaja kamu hapus di perangkat lama tidak akan muncul kembali di perangkat baru. Kalau perangkat baru ternyata sudah punya cadangan cloud sendiri yang lebih baru, dialog konflik di atas yang memutuskan. Dua catatan penutup: setelan cadangan otomatis tersimpan per browser, jadi aktifkan ulang di perangkat baru; dan bila backup cloud tidak memungkinkan, file **.json** atau **.hsai** tetap bisa dipulihkan lewat dua kartu di bagian sebelumnya - semuanya bermuara ke mekanisme [Backup & Restore](#backup-restore) di atas.
