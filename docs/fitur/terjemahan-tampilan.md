---
title: Terjemahan & Tampilan
---

# Terjemahan & Tampilan

Balasan karakter tidak selalu datang dalam bahasamu, dan tampilan baca pun selera tiap orang berbeda. Halaman ini merangkum empat pengaturan yang mengatur **cara teks dan layar chat tampil**: terjemahan per pesan, wallpaper percakapan, gaya tampilan chat (Chat UI), dan opsi menyembunyikan cetak miring. Semuanya bersifat tampilan - tidak ada yang mengubah isi chat yang tersimpan atau yang dikirim ke model.

## Terjemahan Pesan

Setiap balasan bot punya tombol **"Lihat terjemahan"** berikon bahasa di bawah bubble. Terjemahan ini aktif saat bahasa antarmuka bukan Inggris - dengan bahasa UI Indonesia, balasan AI diterjemahkan ke bahasa Indonesia, mengikuti bahasa AI yang disetel untuk karakter tersebut. Yang penting dipahami: terjemahan bersifat **hanya tampilan**. Hasilnya disimpan terpisah di perangkatmu (IndexedDB) dan **tidak pernah ikut dalam data pesan maupun payload yang dikirim ke AI** - teks asli selalu yang dipakai percakapan.

Pengerjaannya dilakukan **per paragraf** di latar belakang, termasuk menerjemahkan ulang riwayat lama secara diam-diam (*backfill*). Karena itu hasilnya bisa **parsial**: paragraf yang sudah selesai langsung tampil, yang belum selesai ditandai kerangka animasi, dan yang gagal diterjemahkan jatuh kembali ke teks aslinya - jadi kamu tidak pernah menunggu seluruh pesan untuk mulai membaca.

Cara menampilkannya bergantung gaya tampilan chat yang kamu pilih:

- **Mikazuki UI**: terjemahan tampil sebagai **blok terpisah di bawah pesan** dengan garis putus-putus, sehingga teks asli tetap utuh di atasnya. Tombolnya berganti antara *"Lihat terjemahan"* dan *"Sembunyikan terjemahan"*.
- **HaloStory UI**: bubble mengganti isinya dengan hasil terjemahan, dan tombolnya berubah menjadi *"Lihat asli"* untuk kembali ke teks semula.

Saklar terjemahan berlaku per bubble dan tidak disimpan permanen - bubble lain tetap pada kondisi semula, dan setiap sesi membuka chat dimulai dari tampilan asli.

::: tip Untuk membaca cepat
Riwayat panjang diterjemahkan otomatis di latar belakang saat kamu membuka chat, jadi saat kamu butuh, terjemahannya biasanya sudah siap. Satu paragraf pun aman gagal sendiri: paragraf itu tampil dalam bahasa aslinya tanpa membolokkan seluruh pesan.
:::

## Wallpaper Chat

Wallpaper memberi latar gradien pada area percakapan. Pilihannya ada empat preset bernama **Sakura**, **Umi**, **Mori**, dan **Yoru**, ditambah opsi **Mati**. Sesuai keterangan pada menu Preferensi: *"Wallpaper ditampilkan pada layar di bawah 1024px agar teks tetap terbaca."* - jadi di layar yang lebih lebar (desktop) wallpaper sengaja disembunyikan, sementara di ponsel dan jendela sempit ia tampil dengan lapisan peredup agar teks tetap nyaman dibaca.

Pengaturannya terbuka dari menu **titik tiga** panel chat lewat item **"Wallpaper"**, berupa *bottom sheet* dengan dua bagian. Bagian **"Untuk chat ini"** mengatur khusus percakapan yang sedang dibuka dengan pilihan **"Ikuti global"**, **Mati**, atau salah satu preset. Bagian **"Default untuk semua chat"** menentukan latar bawaan seluruh percakapan. Ada juga tombol **"Gunakan sebagai default semua chat"** yang menjadikan pilihan chat ini sebagai pengaturan global sekaligus.

Aturan penentuannya sederhana: chat yang disetel **"Ikuti global"** memakai wallpaper default, sedangkan chat dengan wallpaper sendiri tidak terpengaruh - persis seperti catatan di Preferensi: *"Chat yang diatur ke 'Ikuti global' akan menggunakan ini. Chat dengan wallpaper sendiri tetap tidak berubah."* Penyimpanannya pun terpisah: override per chat tersimpan di IndexedDB (ikut dalam data backup chat), sedangkan pilihan global tersimpan di perangkat.

## Gaya Chat UI

Mikazuki AI menyediakan **dua tata letak visual** yang bisa dipilih dari menu **Preferensi** lewat bagian **"Gaya Tampilan Chat (Chat UI)"**. Deskripsi pilihannya:

- **Mikazuki UI** (bawaan): *"Format novel modern: dialog di dalam bubble, narasi & aksi berada di luar bubble (tengah)."*
- **HaloStory UI**: *"Format klasik HaloStory: seluruh teks balasan karakter dimasukkan ke dalam bubble chat tradisional."*

Pilihan ini tersimpan di perangkat dan berlaku untuk semua chat tanpa kecuali. Bila kamu memilih HaloStory UI, seluruh balasan kembali ke bentuk bubble klasik yang familier; bila kembali ke Mikazuki UI, aksi seperti `*tertawa kecil*` tampil di tengah layar dengan huruf miring sementara dialognya masuk bubble. Detail tampilannya sudah dibahas di halaman [Chat Dasar](/fitur/chat-dasar). Perlu dicatat, pilihan ini juga menentukan cara blok terjemahan tampil seperti dijelaskan di atas.

## Sembunyikan Italic

Di menu **titik tiga** panel chat ada saklar **"Sembunyikan Cetak Miring (Aksi)"**. Saat diaktifkan, format aksi bergaya novel seperti `*menunduk*` atau `*tertawa kecil*` tidak lagi tampil memiring - teks terasa seperti dialog murni tanpa hilang dari cerita. Cocok untuk kamu yang menganggap tanda bintang mengganggu konsentrasi baca.

Saklar ini **tersimpan per chat di perangkat**, jadi kamu bisa menyembunyikan aksi di satu karakter sambil tetap melihatnya di karakter lain. Seperti terjemahan, ini murni **preferensi tampilan**: pesan tetap tersimpan lengkap dengan format aslinya, dan menonaktifkan saklar kapan pun akan mengembalikan cetak miring tanpa kehilangan apa pun.

::: warning Terjemahan itu hasil mesin
Terjemahan dibuat otomatis oleh layanan penerjemah, bukan oleh model karakter. Untuk istilah nama, sapaan khas, atau gaya bahasa cerita, teks asli tetap rujukan paling akurat - gunakan tombol *"Lihat asli"* sewaktu-waktu.
:::
