---
title: Memori & Ringkasan
---

# Memori & Ringkasan

Bagaimana cara karakter mengingatmu setelah puluhan pesan? Mikazuki AI menjawabnya dengan arsitektur memori bertingkat yang bekerja di latar belakang: **ringkasan otomatis** untuk alur percakapan, **Chat Memories** untuk fakta penting per chat, dan **Global Memories** untuk fakta lintas chat. Ketiganya bekerja bersama - ringkasan menjaga kelangsungan cerita, sementara memori menyimpan fakta yang wajib diingat. Semua tombol pengelolaannya ada di tab **Summary** dan **Memories** pada halaman [Data Karakter dan Memori](/fitur/data-karakter).

## Chat Memories

**Chat Memories** adalah daftar fakta penting tentang dirimu khusus untuk satu chat - panggilan sayang, preferensi, atau konteks hidup yang ingin karakter ingat terus. Semuanya tersimpan **lokal di perangkatmu (IndexedDB)** dan, sesuai kalimat petunjuk di halamannya: *"Memori di sini dikirim ke model setiap chat."* Artinya setiap kali kamu mengirim pesan, isi memori ini ikut disuntikkan ke model agar karakter tetap konsisten.

Kapasitasnya adalah **maksimal 10 item per chat, masing-masing maksimal 500 karakter**. Menambah memori cukup ketik di kolom "Tambah" lalu tekan enter atau tombol tambah; menghapusnya memakai konfirmasi singkat *"Hapus memori ini?"* karena *"Memori yang dihapus tidak lagi dikirim ke model."* Daftar ini juga bisa diperbarui otomatis oleh proses ringkasan di latar belakang - saat sistem meringkas percakapan, ia boleh menyimpan fakta baru yang layak diingat. Di group chat, hanya Chat Memories yang dipakai.

## Global Memories (VIP)

**Global Memories** melangkah lebih jauh: fakta penting yang tersimpan **di server** dan **terikat pada karakter tersebut**, sehingga bisa dikenalikan lintas chat dengan karakter yang sama. Cukup ceritakan sekali - misalnya makanan kesukaan atau nama panggilanmu - dan kamu tidak perlu mengulangnya dari awal. Seperti Chat Memories, catatan petunjuknya menjelaskan: *"Global memories VIP juga ikut terkirim di chat ini."*, dikirim bersamaan pada setiap pesan.

Fitur ini **khusus pengguna VIP**. Di paket Free, tab Global Memories tampil terkunci dengan keterangan *"Khusus VIP"*; men-getuknya akan mengantarmu ke halaman `/membership` untuk upgrade. Untuk VIP, memori bisa dihapus satu per satu lewat konfirmasi yang sama seperti Chat Memories, dan tombol hapus **nonaktif sementara saat proses pembuatan summary sedang berjalan** agar tidak terjadi konflik data.

::: warning Global Memories tersimpan di server
Berbeda dari Chat Memories yang hidup di perangkatmu, Global Memories disimpan di server Mikazuki AI. Isi hanya fakta yang nyaman kamu bagikan, dan hapus kapan pun kamu berubah pikiran.
:::

## Ringkasan Otomatis

Setiap **20 pesan lengkap**, sistem secara otomatis meringkas percakapan di latar belakang langsung dari halaman chat - tanpa tombol apa pun yang perlu kamu tekan. Hasilnya tampil di tab Summary halaman Data Karakter, dikelompokkan per batch seperti "Pesan 1-20", "Pesan 21-40", dan seterusnya. Ringkasan ini tersimpan lokal di IndexedDB dan menjadi tulang punggung ingatan jangka panjang: saat model diberi konteks, recap batch terakhir yang dikirim agar token tetap hemat.

Batch yang gagal dibuat tidak hilang diam-diam; ia ditandai *"Batch ini gagal diringkas."* dan akan dicoba ulang otomatis pada pengerjaan berikutnya. Jika kamu ingin memulai dari nol, gunakan mode **seleksi** di daftar chat (lihat [Chat Dasar](/fitur/chat-dasar)): pilih satu atau beberapa chat, lalu tekan **Ringkas Ulang**. Aplikasi akan bertegas menanyakan: *"Reset semua ringkasan dan memori untuk chat ini, lalu buat ulang? Memori global (VIP) juga akan dihapus."* Setelah selesai muncul kabar *"Ringkasan direset untuk {count} chat."* - lalu ringkasan dibuat ulang dari seluruh riwayat.

## Menghapus

Saat menghapus, kamu tidak harus menghapus semuanya sekaligus. Tombol hapus - baik di mode seleksi daftar chat maupun menu titik tiga pada panel chat - membuka **Hapus lanjutan**, satu panel berisi opsi yang bisa kamu centang sendiri:

- **"Hapus chat + summary"** - *"Riwayat lokal, summary, dan terjemahan dihapus permanen."* Chat hilang dari daftar beserta seluruh turunannya.
- **"Hapus chat memories"** - *"Menghapus chat memories per bot (chat boleh tetap ada)."* Cocok saat kamu hanya ingin karakter "melupakan" fakta-faktamu, tanpa kehilangan riwayat obrolan.
- **"Hapus global memories (server)"** - opsi VIP untuk menghapus memori lintas chat di server beserta cache lokalnya.
- **"Reset bond"** - menghapus data ikatan sehingga karakter kembali berstatus belum direkrut.

Sebelum eksekusi, panel meminta konfirmasi dua tahap dengan peringatan: *"Tindakan ini tidak dapat dibatalkan. Tekan hapus sekali lagi untuk konfirmasi."* Bila sebagian opsi gagal dijalankan karena gangguan jaringan, aplikasi melaporkan berapa item yang gagal agar bisa dicoba lagi.

::: tip Pilih sesuai niat
Ingin "amnesia total"? Pakai **Hapus chat + summary**. Ingin karakter lupa fakta tentangmu tapi cerita tetap ada? Pakai **Hapus chat memories** saja. Pemisahan ini membuat kontrol data berada penuh di tanganmu.
:::
