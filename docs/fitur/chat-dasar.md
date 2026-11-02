---
title: Chat Dasar
---

# Chat Dasar

Halaman ini menjadi pusat aktivitas harianmu di Mikazuki AI: daftar seluruh percakapan beserta alat pengelolahannya. Semua data daftar chat - mulai dari riwayat pesan hingga preferensi urutan - tersimpan langsung di perangkatmu (IndexedDB), sehingga daftar tetap bisa dibuka meski koneksi sedang mati. Karena tidak disinkronkan antar perangkat, aplikasi menampilkan pengingat di bagian atas: *"Data chat tidak disinkronkan antar perangkat. Silakan gunakan fitur penyimpanan cloud untuk mentransfer data."*

## Daftar Chat

Setiap baris chat menampilkan avatar karakter, nama yang dipotong sekitar 15 karakter agar rapi satu baris, dan status ikatan berupa hati dengan angka bond di sisi kanan. Ada juga beberapa penanda kecil di sekitar avatar: pin untuk chat yang disematkan, emoji kue 🎂 bila hari ini ulang tahun karakternya, serta badge khusus untuk karakter anak-anak. Judul halaman menampilkan jumlah chat aktif, misalnya "Chat (12)".

Kamu bisa **menyematkan (pin)** chat favorit agar mudah ditemukan, dengan batas **maksimal 5 chat**. Bila jatah pin sudah habis, aplikasi akan memberi tahu: *"Anda dapat menyematkan maksimal 5 chat."* Chat yang disematkan **selalu ditempatkan di paling atas** daftar, mengesampingkan urutan apa pun.

Urutan daftar bisa diatur lewat tombol **Sort** di kanan atas. Pilihannya adalah **Terbaru**, **Nama**, dan **Ikatan**, dan masing-masing bisa dibalik antara naik-turun lewat tombol arah di sebelahnya. Pilihan urutan ini **tersimpan di perangkat** secara otomatis, jadi tak perlu diatur ulang setiap kali membuka aplikasi.

Untuk mengelola banyak chat sekaligus, masuk ke **mode seleksi**: klik kanan (tap-kanan) pada baris chat, atau tekan dan tahan sedikit lebih lama di layar sentuh. Setelah terpilih, muncul tiga aksi pada bilah atas: **Pin** untuk menyematkan, **Ringkas Ulang** untuk me-reset ringkasan, dan ikon tempat sampah untuk menghapus lewat panel *Hapus lanjutan*. Baris yang terpilih disorot dengan warna dan diberi tanda centang pada avatarnya.

::: tip Pin untuk yang penting
Sematkan lima chat yang paling sering kamu buka. Chat yang dipin tetap di atas walau ada chat lain yang lebih baru dibalas, jadi percakapan penting tidak pernah tenggelam.
:::

## Tampilan Pesan

Mikazuki AI menyediakan **dua gaya tampilan chat** yang bisa dipilih dari menu **Preferensi** di bagian **Gaya Tampilan Chat (Chat UI)**:

- **Mikazuki UI** (bawaan): format novel modern - *"dialog di dalam bubble, narasi & aksi berada di luar bubble (tengah)"*. Kalimat aksi seperti `*tertawa kecil*` tampil di tengah layar dengan huruf miring, sementara dialognya masuk ke dalam bubble.
- **HaloStory UI**: format klasik - *"seluruh teks balasan karakter dimasukkan ke dalam bubble chat tradisional"*, persis seperti tampilan generasi sebelumnya.

Balasan karakter yang panjang otomatis dipecah menjadi beberapa bubble per paragraf, sehingga enak dibaca layaknya pesan singkat sungguhan. Di atas setiap bubble balasan tampil **avatar dan nama karakter**, lengkap dengan warna pembicara masing-masing di group chat.

**Pesan milikmu** punya dua tombol melayang di sisi kirinya: **edit (ikon pensil ✎)** dan **hapus**. Menghapus sebuah pesan juga menghapus semua pesan setelahnya dan meminta konfirmasi: *"Hapus pesan ini dan semua pesan setelahnya? Tindakan ini tidak dapat dibatalkan."* Di bawah bubble terdapat jam pengiriman serta status pesan: ikon jam saat masih dikirim, satu centang saat terkirim, dan centang ganda saat sedang diproses atau selesai. Setiap pesan juga diberi nomor urut seperti `#12` sebagai identitas posisinya dalam percakapan.

**Pesan balasan bot** menyediakan tombol **Salin**, tombol **regenerate (ikon panas putar)** untuk membuat ulang jawaban, dan nomor urut pesan. Bila model yang kamu pakai mendukung proses penalaran (*reasoning*), muncul blok **"berpikir"** yang bisa dilipat di atas bubble - saat aktif ditandai *"Sedang berpikir..."*, dan setelah jawaban mengalir otomatis terlipat menjadi *"Tampilkan proses berpikir"*. Pesan error sistem tampil sebagai baris tersendiri dengan tombol salin.

## Detail Chat

Percakapan bisa discroll bebas; bila riwayat sangat panjang, tombol **"Muat lebih banyak"** memuat pesan-pesan lama tanpa kehilangan posisi baca. Tombol panah ke bawah melayang di kanan bawah membantumu melompat kembali ke pesan terbaru saat kamu sedang membaca ke atas. Terjemahan tersedia per pesan lewat tombol **"Lihat terjemahan"** di bawah bubble bot, dengan opsi *"Lihat asli"* untuk kembali ke teks aslinya.

Menu **titik tiga** di panel chat membuka beberapa pengaturan percakapan:

- **Sembunyikan Cetak Miring (Aksi)** - menyembunyikan format aksi `*seperti ini*` agar teks terasa seperti dialog murni.
- **Wallpaper** - mengganti latar percakapan khusus untuk chat ini atau menjadikannya default semua chat.
- **Ringkas Ulang** - menampilkan info ringkas ulang; pembuatan ulang ringkasan dijalankan dari mode seleksi di daftar chat.
- **Hapus** - membuka *Hapus lanjutan* untuk membersihkan data chat secara selektif.

Selain itu, lewat area input kamu bisa membuka modal **Catatan Sistem** (instruksi tambahan khusus chat ini) dan **Persona Chat** (mendefinisikan siapa kamu di mata karakter). Untuk profil karakter, ringkasan, dan memori, buka halaman [Data Karakter dan Memori](/fitur/data-karakter) dari topbar chat.

Nomor pesan `#n` yang tampil kecil di samping jam bukan sekadar hiasan: sistem **memakai nomor urut ini sebagai acuan** saat kamu mengedit atau me-regenerate. Saat tombol edit atau regenerate ditekan, aplikasi menunjuk pesan pada nomor tersebut di riwayat, lalu memotong dan membangun ulang percakapan dari titik itu - jadi hasil edit dan regenerate selalu tepat sasaran.
