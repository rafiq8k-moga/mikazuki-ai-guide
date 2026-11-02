---
title: Pengaturan & Akun
---

# Pengaturan & Akun

Semua pengaturan Mikazuki AI terkumpul di halaman **Settings** yang bisa dibuka dari menu aplikasi. Halamannya dengan jujur menulis *"Manage your account and preferences"* dan menyajikan empat kartu menu: **"Account"** (*"Profile, password, 2FA, sessions"*), **"Bahasa"**, **"Engine"**, dan **"Preferensi"**. Halaman ini membedah satu per satu, termasuk juga cara memasang aplikasi di layar utama perangkatmu lewat PWA.

## Akun

Masuk ke Mikazuki AI tidak memakai password lokal - login ditangani oleh **Mikazuki Account Center** lewat mekanisme SSO, jadi satu akun yang sama dipakai di semua tempat. Di halaman **Pengaturan → Account** ada kartu **"Mikazuki Account Center"** dengan penjelasan singkat: *"Email, password, 2FA, dan hapus akun dikelola di sana."* Tekan tombol **"Kelola Akun"** untuk membuka pusat akun: mengganti email, mengganti password, mengaktifkan 2FA, hingga menghapus akun semuanya dikerjakan di sana.

Sisanya diatur langsung di aplikasi. Formulir **"Profile Information"** untuk nama tampilan dan foto profil; formulir **"Username"** menjelaskan sistemnya: *"Username dibuat otomatis dari display name (slug + #4 angka). Hanya bagian sebelum # yang bisa diganti tiap 30 hari. Diskriminator #XXXX tidak bisa diubah."* Aturannya ketat tapi terbaca jelas - hanya huruf kecil, angka, dan dash, dengan pratinjau hasil akhir (`nama#1234`) tampil di bawah kolom. Kalau masih dalam masa tunggu, aplikasi menghitung mundurnya: *"Username hanya bisa diganti tiap 30 hari. Sisa {days} hari lagi."*

Kartu **"Browser Sessions"** mencantumkan semua sesi yang sedang login memakai akunmu, perangkat mana saja beserta waktunya. Lewat tombol **"Log Out Other Browser Sessions"** kamu bisa mengeluarkan semua perangkat lain dalam sekali tekan - berguna kalau kamu lupa logout di komputer teman. Sementara data chat, [Cadangan Cloud](/fitur/membership-backup#backup-restore), dan [impor file .hsai](/fitur/membership-backup#impor-dari-halostory-ai) juga tinggal di halaman Account yang sama.

## Engine AI

Halaman **Pengaturan → Mesin** dibuka dengan kalimat kuncinya (dikutip apa adanya): *"Pilih mesin AI untuk chat dan ringkasan. Kunci BYOK disimpan secara lokal (IDB) dan tidak pernah dikirim ke server."* Menu **"Mode"** menentukan sumber brain chat-mu: **"Sistem"** memakai mesin bawaan server (kuota dan model dari Mikazuki), sedangkan **"BYOK"** memakai kunci API milikmu sendiri dengan 16 penyedia siap pakai, dari Google Gemini, Anthropic Claude, DeepSeek, sampai AI Horde. Bila BYOK aktif, muncul pengingat *"Mode BYOK aktif - kunci tetap lokal saja (Kebijakan Privasi)."*

Satu kartu khusus **"Mesin Prompt"** berdiri terpisah dari pilihan penyedia: **"Mesin Mikazuki"** dengan keterangan *"Memberikan konsistensi karakter, pencapaian ikatan, dan keamanan terbaik"*, atau **"Mesin HaloStory (Lawas)"** yang memampukan gaya prompt klasik dengan catatan *"legacy"*: *"Gaya lawas mungkin kurang konsisten dengan level ikatan dan tag XP."* Setelan ini tersimpan otomatis ke akunmu. Bagian **"BYOK"** di bawahnya - penyedia, Kunci API, Model, tombol *Ambil model*, sampai URL Dasar untuk OpenAI Compatible - dibahas penuh di [panduan BYOK](/byok/); semua parameter lanjutan seperti Token Maks, Temperatur, dan Reasoning punya halaman penjelasan sendiri di sana.

Sebagai catatan kejujuran: kartu Engine di halaman Settings masih mencantumkan keterangan lama *"Model settings — coming soon"*, padahal halamannya sendiri sudah berfungsi penuh. Abaikan tulisan itu - langsung dari menu samping Pengaturan pun halaman mesin bisa dibuka.

## Bahasa

Halaman **Pengaturan → Bahasa** memuat tiga hal dalam satu tempat, sesuai deskripsinya: *"Bahasa antarmuka, bahasa AI, dan pengaturan terjemahan."* Bagian **"Bahasa UI"** punya dua tombol - **English** dan **Indonesia** - yang mengubah bahasa tampilan aplikasi seketika saat ditekan. 

Bagian **"Bahasa AI"** mengatur bahasa balasan karaktermu, dengan saran resminya di atas: *"Inggris disarankan; Indonesia juga tersedia."* Pilihan **"Bahasa Inggris"** berlabel *"Default - performa roleplay optimal"*, sedangkan **"Bahasa Indonesia"** berlabel *"Bahasa Indonesia asli"*. Kalau kamu menggantinya, tekan **"Simpan"** dan setelan ini ikut tersimpan ke akunmu.

Bagian ketiga, **"Terjemahan AI"**, bekerja otomatis: *"Secara otomatis menerjemahkan respons AI ke bahasa UI yang Anda pilih."* Statusnya tampil sebagai lencana **Aktif** atau **Nonaktif** di kartu yang sama, lengkap dengan dua catatan bawaan: *"Mengikuti Bahasa UI secara otomatis - Bahasa Inggris: nonaktif, bahasa lain: aktif. Tidak ada tombol manual."* dan *"Dilewati jika Bahasa AI sama dengan Bahasa UI. Tekan 'Lihat asli' pada pesan mana pun untuk membaca balasan mentah."* Detail cara kerja terjemahan dibedah lanjut di [Terjemahan & Tampilan](/fitur/terjemahan-tampilan).

## Preferensi

Halaman **Pengaturan → Preferensi** berisi dua kartu tampilan, sesuai deskripsi halamannya: *"Wallpaper chat default dan pengaturan lainnya."* Kartu pertama, **"Wallpaper chat default"**, menyimpan latar untuk semua chat yang mengikuti pengaturan global - pilih **Mati** atau salah satu pratinjau preset, dengan gambaran mini percakapan yang langsung mengikuti pilihanmu. Catatannya jujur soal batas: *"Digunakan oleh chat yang mengikuti pengaturan global. Wallpaper ditampilkan pada layar di bawah 1024px agar teks tetap terbaca."* Dan hubungannya dengan chat tertentu: *"Chat yang diatur ke 'Ikuti global' akan menggunakan ini. Chat dengan wallpaper sendiri tetap tidak berubah."*

Kartu kedua, **"Gaya Tampilan Chat (Chat UI)"**, menentukan tata letak balasan karakter: **Mikazuki UI** (berbadge *Default*) dengan keterangan *"Format novel modern: dialog di dalam bubble, narasi & aksi berada di luar bubble (tengah)."*, atau **HaloStory UI** dengan keterangan *"Format klasik HaloStory: seluruh teks balasan karakter dimasukkan ke dalam bubble chat tradisional."* Masing-masing opsi dilengkapi contoh visual kecil supaya bedanya kelihatan langsung sebelum kamu memilih.

Sementara tema gelap tidak ada di halaman Preferensi - ia berupa ikon matahari/bulan di bilah atas aplikasi yang mengalihkan mode gelap↔terang dalam satu klik. Pilihanmu tersimpan di perangkat itu sendiri, dan mode gelap adalah bawaannya.

## Instal Aplikasi (PWA)

Mikazuki AI adalah Progressive Web App: cukup browser, tanpa toko aplikasi, dan bisa dipasang di Android, iOS, maupun desktop. Saat berkunjung lewat HP muncul banner melayang **"Pasang Mikazuki AI"** dengan ajakannya: *"Tambahkan aplikasi ini ke layar utama Anda untuk akses cepat, layaknya aplikasi native."* Tekan tombol **"Pasang"** dan selesai. Banner ini bisa ditutup lewat tombol **"Tutup"**, dan tidak akan muncul lagi setelah aplikasi terpasang.

Di iPhone dan iPad, browser tidak menyediakan tombol pasang otomatis, jadi banner memberi instruksi manual: *"Ketuk tombol Bagikan di browser, lalu pilih 'Tambah ke Layar Utama'."* diikuti ikon **Share → Add to Home Screen** sebagai pengingat ikon mana yang ditekan. Cara yang sama berlaku bila banner tak kunjung muncul - lakukan ini langsung dari menu Share browsermu.

Setelah terpasang, aplikasi tetap dijaga up to date: bila ada versi baru muncul pemberitahuan *"Versi baru tersedia. Silakan muat ulang halaman untuk memperbarui."* dengan tombol **"Muat Ulang"**, dan saat semua aset siap kamu dikabari *"Mikazuki AI siap digunakan secara offline."* - artinya chat-mu tetap bisa dibuka walau koneksi sedang tidak ada.
