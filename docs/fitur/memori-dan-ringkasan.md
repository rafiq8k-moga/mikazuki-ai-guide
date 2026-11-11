---
title: Memori & Ringkasan
---

# Memori & Ringkasan

Bagaimana karakter mengingatmu setelah ratusan pesan? Mikazuki AI merawatnya dengan **Peristiwa Lampau** — satu ringkasan perjalanan chat yang **disiapkan otomatis di server** dan diperbarui terus-menerus saat percakapan berjalan. Tidak ada tombol yang perlu kamu tekan, tidak ada data yang tersimpan hanya di satu perangkat: buka chat dari HP atau laptop lain, ingatannya tetap sama.

Pengelolaannya kini terpusat di tab **Peristiwa Lampau** pada halaman [Data Karakter dan Memori](/fitur/data-karakter). Selain itu, dua lapisan memori lama tetap bekerja: **lorebook** (pengetahuan manual yang kamu tulis sendiri) dan **memori jangka panjang** berbasis pencarian otomatis atas pesan-pesan lama.

## Peristiwa Lampau

Peristiwa Lampau adalah catatan naratif tentang perjalanan chatmu: hubungan yang terbentuk, keputusan penting, janji, dan momen yang membentuk cerita. Di latar belakang, sistem meringkas bagian percakapan yang sudah meninggalkan jendela konteks dan **menggabungkannya dengan catatan sebelumnya** — sehingga ringkasan selalu mutakhir tanpa pernah menambah beban sebesar-besarnya ke prompt. Ringkasannya juga ikut "diringkas ulang" saat terlalu panjang, jadi ukurannya terkendali selamanya.

Karena tersimpan di server, catatan ini:

- **Konsisten antar perangkat** — tidak lagi bergantung pada browser tempat kamu chat dulu.
- **Selalu mutakhir** — diperbarui otomatis jauh lebih sering daripada ringkasan batch lama (per 20 pesan).
- **Gagal aman** — kalau proses peringkasan bermasalah, chatmu tetap jalan normal; catatan hanya tertinggal sebentar.

### Mengedit dan mengeset ulang

Di tab Peristiwa Lampau kamu bisa:

- **Edit** — tulis ulang catatan sesukamu (maksimal 6.000 karakter). Catatan yang kamu edit ditandai sebagai *catatanmu sendiri* dan **tidak akan ditimpa** oleh pembaruan otomatis: sistem menghormati tulisanmu.
- **Reset** — hapus catatan dan sistem mulai meringkas ulang dari nol. Konfirmasinya persis seperti yang tampil: *"Hapus catatan peristiwa lampau? Worker akan meringkas ulang mulai nol."*

Pratinjau tab akan menampilkan *"Ringkasan perjalanan chat ini, dirawat otomatis oleh worker. Edit manual menandainya sebagai catatanmu sendiri."* — dan untuk VIP ada lencana *"VIP: detail lebih kaya"*.

::: tip Kenapa catatanku berhenti berubah?
Setelah kamu mengedit, sistem sengaja berhenti menimpanya. Ingin sistem merangkum lagi otomatis? Tekan **Reset** — caranya kotak yang kamu tulis dibuang dan ringkasan dibangun ulang dari riwayat chat.
:::

## VIP: ruang ingat lebih besar

Pengguna mendapatkan Peristiwa Lampau yang sama, bedanya bukan pada fitur terkunci lagi melainkan **kapasitas**:

- **VIP** mendapat **budget memori lebih besar** dan ringkasan yang **lebih detail** (lebih banyak paragraf yang dipertahankan sebelum diringkas ulang), sehingga nuansa cerita dan detail kecil bertahan lebih lama.
- **Free** tetap mendapat ringkasan penuh dengan budget yang lebih ramping.

Semua pengguna, VIP maupun bukan, tetap menikmati lorebook dan memori jangka panjang yang sama.

## Yang berubah dari sistem lama

Fitur **Chat Memories** (daftar fakta lokal per chat) dan **Global Memories** (fakta lintas chat khusus VIP) **sudah dilepas**. Peran keduanya kini ditangani Peristiwa Lampau plus memori jangka panjang otomatis: fakta-fakta penting yang pernah kamu sebut ikut masuk ringkasan, dan pesan-pesan lama tetap bisa ditemukan kembali lewat pencarian memori jangka panjang — tanpa kamu harus mencatatnya satu per satu.

Bila sebelumnya kamu rutin menulis Chat Memories, sekarang cukup ceritakan di chat: sistem yang mencatatnya ke ringkasan. Untuk aturan permanen yang harus selalu aktif (gaya bicara, aturan dunia, fakta wajib), gunakan **[Lorebook](/fitur/data-karakter)**.

## Menghapus

**Hapus lanjutan** (dari mode seleksi daftar chat, atau menu titik tiga di panel chat) kini berisi:

- **"Hapus chat lokal"** — *"Riwayat chat lokal dan terjemahan dihapus permanen."*
- **Opsi ringkasan** — *"Menghapus ringkasan server. Worker meringkas ulang otomatis."* Cocok saat kamu ingin karakter "mulai dari halaman bersih" tanpa kehilangan riwayat: chat utuh, catatan dibangun ulang.
- **"Reset bond"** — *"Menghapus row bond - karakter kembali Belum direkrut."*

Konfirmasi dua tahap tetap berlaku: *"Tindakan ini tidak dapat dibatalkan. Tekan hapus sekali lagi untuk konfirmasi."*

::: tip Pilih sesuai niat
Ingin aplikasi terasa "belum pernah kenal"? **Hapus chat lokal**. Ingin cerita dimulai segar tapi data aman di server? Reset ringkasan. Ingin karakter melupakan satu fakta saja? Cukup jelaskan ulang di chat — ringkasan akan ikut diperbarui.
:::
