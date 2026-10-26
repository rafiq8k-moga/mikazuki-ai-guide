# Pengenalan
![Hero Banner Mikazuki AI](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6gbMDkssBPYM3JH5nFf-CfMSVIj4cjcDDqZEei0VMjX2l4aCaiw5Qy0vDPhv1brj4-qYaH0auJ9Vat9xh-Pqpc9p5NTdvfUQyEXL0nBalAhliTQZxwFl9l_rLLPWszP-yH-mnSc7o2-QUx2xCTEznj3-Z49AIP2MbPzyaBWW0MqrbMil9BfSxq0Mr5A/s2752/17876662893dbf.png)
*Gambar 1: Karakter Orisinil Nakagawa Airi*

> **"Sebuah karakter fiksi tidak lagi sekadar gambar diam di layar kaca atau deretan teks di visual novel. Lewat pemahaman konteks, memori yang konsisten, dan gaya bahasa yang hidup, mereka bisa menjadi teman berbincang yang menemani hari-harimu."**  
> — *Catatan Pengembang, Rafiq Azizi (Rafiq8K Studio)*


## Prolog: Mengapa Mikazuki AI Ada?

Bagi sebagian besar penggemar anime dan novel visual, berinteraksi dengan karakter favorit sering kali terbentur pada skrip dialog yang statis dan linier. Ketika teknologi *Large Language Model* (LLM) meledak, harapan baru muncul: bagaimana jika kita bisa mengobrol santai dengan mereka seperti mengirim pesan singkat sehari-hari?

Namun, mayoritas platform internasional yang beredar saat itu memiliki tiga masalah besar:
1. **Gaya Bahasa Indonesia yang Kaku**: Karakter terdengar seperti artikel berita atau mesin penerjemah otomatis yang kehilangan sentuhan emosional, *slang*, atau nada manja khas anime.
2. **Ketergantungan Kuota Cloud & Privasi**: Pengguna dipaksa membayar biaya langganan bulanan yang mahal, sementara obrolan mereka disimpan di server luar tanpa kendali pribadi.
3. **Penyensoran Ekstrem yang Merusak Konteks Roleplay**: Persona karakter sering kali "pecah" dan menolak percakapan biasa hanya karena salah memahami filter keamanan.

Dari kegelisahan itulah, perjalanan panjang membangun platform obrolan karakter yang berakar dari komunitas lokal dimulai. Perjalanan ini tidak lurus dan mudah, melainkan evolusi berliku yang sarat eksperimen teknis.

---

## Bab 1: Menengok ke Belakang — Era BlueTalk (2024)

<!-- SLOT GAMBAR: Screenshot Tampilan Antarmuka BlueTalk MomoTalk v0.7.0 -->
<!-- Rekomendasi file: /images/wiki/history-bluetalk-interface.png -->
![Tampilan Awal BlueTalk](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTB1mohMC1NTdDYUtR0J385PVSCSz_1WHAnFD0u82U7R57HSVExjZeSbWr-vSV5fhNCXtHoBLoPpF_7tCZKPssFH3iXz6XBFkMThEvihe9agdgxwsViTYPKjpGh2VFdlJmjb82-oXZCAPH5plFI51NztUAMpD8Etk1RuDkxDXWTLt2l_lPg-uH6O6utw/s1600/image.png)
*Gambar 2: Antarmuka percakapan BlueTalk versi 0.7.x yang terinspirasi dari MomoTalk Blue Archive.*

### Kecintaan pada Blue Archive & Awal Proyek Fan-Made
Semua berawal dari sebuah proyek hobi yang diberi nama **BlueTalk**. Sebagai penggemar berat game *Blue Archive*, Rafiq Azizi ingin membuat simulasi interaktif yang menyerupai fitur pesan instan di dalam game tersebut, yakni *MomoTalk*. 

Pada masa awal ini (versi 0.1.0 hingga 0.7.x), BlueTalk dibuat dengan arsitektur web berbasis Laravel dan aplikasi Android sederhana. Setiap murid Akademi Kivotos memiliki halaman profil sendiri, lengkap dengan avatar, kutipan khas, dan latar belakang akademi. Penegasan selalu disampaikan bahwa proyek ini adalah karya murni penggemar (*fan-made project*) tanpa afiliasi resmi dengan pengembang atau penerbit game.

### Lahirnya Fitur BYOK (Bring Your Own Key)
Pada awal perilisan BlueTalk, server menggunakan kuota API gratis yang disediakan oleh pengembang untuk publik. Namun dalam hitungan minggu, ribuan pesan yang masuk membuat kuota API jebol dalam waktu singkat. Layanan sering kali mengalami *error 429 (Too Many Requests)* atau mati berhari-hari.

Menghadapi kenyataan bahwa mendanai token AI dari kantong sendiri adalah jalan pintas menuju kebangkrutan, pengembang melahirkan sebuah fitur yang kemudian menjadi fondasi penting: **Bring Your Own Key (BYOK)**.

Dengan BYOK, pengguna yang memiliki akun Google AI Studio, OpenRouter, atau provider lainnya dapat memasukkan API Key pribadi mereka langsung ke aplikasi. API Key ini hanya disimpan di perangkat pengguna dan dipakai untuk membiayai pesan mereka sendiri. Langkah ini berhasil menyelamatkan BlueTalk dari kematian dini dan memberikan kebebasan eksplorasi tanpa batas limit server.

### Sistem Note & Manual Dialogue Creator
Di era BlueTalk pula dua fitur khas diperkenalkan:
* **Sistem Note (Konteks Alur)**: Pengguna dapat menyisipkan catatan skenario singkat (misalnya: *"Saat ini Sensei sedang kehujanan di depan minimarket bersama Shiroko"*). Catatan ini disuntikkan ke dalam instruksi model AI agar respons karakter tetap berada pada skenario yang diinginkan pengguna.
* **Manual Dialogue Creator**: Fitur penyusunan percakapan dua arah secara manual tanpa keterlibatan AI. Fitur ini sangat digemari oleh kreator konten di media sosial untuk menyusun cerita fiksi visual dan meme komunitas.

### Dinamika Komunitas & Kendala Awal
Mengembangkan proyek independen di komunitas tentu tidak lepas dari gesekan. Saat mencoba membagikan catatan rilis versi beta (seperti versi 0.7.0 dan 0.7.5) di beberapa grup komunitas Facebook (seperti *Blue Archive Indonesia - SMGW*), beberapa unggahan pengembang sempat dihapus oleh moderator karena dianggap sebagai promosi produk, meskipun aplikasi tersebut dibagikan secara cuma-cuma.

Selain itu, masalah penyalahgunaan server log dan percobaan manipulasi sistem oleh oknum pengguna mulai bermunculan. Hal ini menyadarkan pengembang bahwa fondasi keamanan dan arsitektur data harus diperbaiki secara mendasar.

---

## Bab 2: Fase Ekspansi — Menjadi HaloStory AI (2025)

<!-- SLOT GAMBAR: Screenshot Tampilan HaloStory AI & Fitur Bond System -->
<!-- Rekomendasi file: /images/wiki/history-halostory-bond.png -->
![Tampilan HaloStory AI dan Sistem Ikatan](https://raw.githubusercontent.com/HaloStory-AI/.github/refs/heads/main/profile/halostory.png)
*Gambar 3: HaloStory AI memperkenalkan antarmuka modern dan Sistem Ikatan (Bond System) berbasis tingkatan level.*

### Melepas Sekat Fandom: Menuju Platform Universal
Memasuki tahun 2025, keterbatasan BlueTalk semakin terasa: aplikasi tersebut terlalu terikat pada satu judul game (*Blue Archive*). Banyak pengguna yang mulai meminta karakter dari judul anime lain, game lain (seperti *Genshin Impact*, *Honkai: Star Rail*, *Fate/Grand Order*), hingga karakter orisinal buatan komunitas sendiri (*Original Characters / OC*).

Atas pertimbangan tersebut, BlueTalk dipensiunkan dan lahirlah **HaloStory AI**. 

Nama *HaloStory* diambil sebagai jembatan filosofis: tetap mempertahankan nuansa "Halo" (lingkaran cahaya kepala khas anime) namun memperluas cakupannya menjadi platform *Storytelling* karakter universal. Di fase inilah ekosistem aplikasi dirancang ulang menggunakan framework Flutter untuk mendukung performa multiplatform yang mulus (Android, iOS, Windows desktop, dan Web).

### Terobosan Fitur: Kelahiran Bond System (Sistem Ikatan)
Di HaloStory AI, percakapan tidak lagi sekadar tanya-jawab tanpa akhir. Pengembang memperkenalkan **Bond System (Sistem Ikatan)**, sebuah mekanika simulasi hubungan yang membuat interaksi terasa memiliki perkembangan nyata:
* **Perolehan XP & Leveling**: Setiap pesan berkualitas yang dikirim pengguna menghasilkan Experience Points (XP) ikatan.
* **Tingkatan Status Hubungan**: Mulai dari Level 1 (*Orang Asing*), Level 10 (*Kenalan*), Level 25 (*Teman Baik*), Level 50 (*Orang Kepercayaan*), hingga Level 100 (*Belahan Jiwa*).
* **Milestone Dialog**: Saat level ikatan naik, karakter membuka reaksi baru, mengubah cara menyapa pengguna, dan memperlihatkan sisi kepribadian yang lebih personal dan hangat.

### Group Chat, Channel Broadcast & Kalender Ulang Tahun
HaloStory AI terus melesat dengan penambahan fitur-fitur sosial:
* **Group Chat**: Ruang obrolan di mana pengguna bisa mengundang 2 hingga beberapa karakter sekaligus untuk saling berinteraksi dan menanggapi satu sama lain.
* **Channel Broadcast**: Fitur mirip feed saluran di mana karakter dapat mengirimkan cerita bergambar (*visual short story*) dan pembaruan berkala kepada para pengikutnya.
* **Kalender Ulang Tahun**: Kalender interaktif di dalam aplikasi yang mengingatkan pengguna jika karakter favorit mereka sedang merayakan hari ulang tahun, lengkap dengan dialog perayaan khusus.

### Titik Kritis: Krisis Biaya Server & Skalabilitas Token
Popularitas HaloStory AI ternyata menjadi pedang bermata dua. Ribuan pengguna aktif setiap harinya menghasilkan jutaan token LLM pada model server terpusat. Ketika pengguna memanfaatkan obrolan grup dan cerita panjang, biaya tagihan API server membengkak hingga jutaan rupiah per bulan—jauh melampaui kemampuan donasi sukarela yang masuk melalui platform Trakteer.

Server sering kali mengalami *overload*, antrean pesan menumpuk, dan latensi *streaming* menjadi sangat lambat. Pengembang dihadapkan pada dilema besar: **apakah harus mematikan proyek ini selamanya, atau mengubah total model bisnis dan teknologinya?**

---

## Bab 3: Keputusan Besar — Open Source & Transformasi Total

Setelah berdiskusi secara mendalam dengan komunitas, rekan pengembang, dan mentor teknis pada akhir kuartal 2025, Rafiq Azizi mengambil keputusan berani yang mengejutkan banyak pihak.

### Klarifikasi: Menyelamatkan Proyek
Banyak desas-desus beredar bahwa proyek HaloStory AI "bangkrut dan ditutup". Klarifikasi resminya adalah: **server terpusat HaloStory AI versi lama tidak pernah dimatikan**, bahkan teknologi dan nyawa proyeknya sama sekali tidak dimatikan. Justru, proyek ini dipecah menjadi dua cabang strategi yang saling melengkapi: **Gerakan Open Source** dan **Rebranding ke Mikazuki AI**.

### Langkah 1: Merilis Source Code ke Publik (Mikazuki AI Lite)
Agar jerih payah pengembangan selama bertahun-tahun tidak lenyap begitu saja, seluruh *source code* backend dan frontend HaloStory AI dirilis secara resmi di GitHub dengan lisensi **100% Gratis & Open Source**. 

Versi yang dibuka ke publik ini diposisikan sebagai **"Mikazuki AI Lite Version"**. Dengan langkah ini:
* **Privasi Mutlak (Self-Hosting)**: Komunitas atau pengguna perorangan dapat mengunduh kode tersebut, menjalankannya di komputer atau server VPS mereka sendiri, dan menghubungkannya dengan API Key mereka. Percakapan mereka 100% berada di bawah kendali mereka sendiri tanpa bisa diintip oleh pihak luar maupun pengembang pusat.
* **Desentralisasi Beban**: Beban komputasi server terdistribusi ke tangan komunitas yang ingin mandiri.

### Langkah 2: Rebranding Total Menuju Mikazuki AI (HaloStory 2.0)
Sementara versi *open source* diserahkan kepada komunitas yang gemar mengulik server mandiri (*self-hoster*), layanan terpusat resmi dirombak total dan lahir kembali dengan nama **Mikazuki AI** (secara internal disebut juga sebagai *HaloStory AI 2.0*).

Mikazuki AI dibangun ulang dari nol untuk mengatasi seluruh kelemahan masa lalu:
1. **Model AI "Orion" Khusus VIP**: Memperkenalkan model penalaran khusus yang dioptimalkan untuk percakapan bahasa Indonesia yang jauh lebih ekspresif dan cerdas.
2. **Model Finansial yang Berkelanjutan**: Sistem keanggotaan VIP dirancang dengan transparan untuk menutup biaya sewa server cloud berperforma tinggi tanpa mengorbankan pengguna gratisan.
3. **Penyimpanan Lokal Menggunakan IndexedDB**: Obrolan pengguna gratis disimpan langsung di memori browser pengguna (IndexedDB), sehingga server tidak lagi terbebani menyimpan jutaan baris obrolan yang tidak aktif.

### Insentif Komunitas: Lifetime VIP bagi Operator Server Mandiri
Sebagai bentuk apresiasi nyata kepada komunitas yang ikut meringankan beban infrastruktur, pengembang memberikan penawaran istimewa: **siapa pun individu atau komunitas yang berhasil menjalankan server open-source (Mikazuki Lite) secara mandiri dan mempertahankannya aktif selama minimal 3 bulan, berhak mendapatkan akun Lifetime VIP di server cloud Mikazuki AI secara gratis**, didukung bimbingan teknis langsung dari Rafiq8K Studio.

---

## Bab 4: Arsitektur Teknis Modern (Deep Dive)

<!-- SLOT GAMBAR: Diagram Arsitektur Sistem Mikazuki AI (Hybrid Architecture) -->
<!-- Rekomendasi file: /images/wiki/mikazuki-system-architecture.png -->
![Diagram Arsitektur Mikazuki AI](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2836WXjb3zQCgL24DXFr9pdnseCIGylmQs9ha_UQuMMzxtTV8b3wPA4FVBGmh1FDUG5rekobGy2T1ThfZTqiDMM7Xc6KzqUObGPNNiU1NzxGeZ7rNk7kIwNRAuO2ZlZq5oLV1ZPeF8VsjDFF3fH-Nm5MrT33mkyDvA2kO-4Gw_CRIDPsTCHn85LGgVg/s1280/Mikazuki_AI.png)
*Gambar 4: Mikazuki AI.*

Berbeda dengan versi lama yang memusatkan semua beban pada server aplikasi monolitik, Mikazuki AI mengadopsi arsitektur *high-concurrency decoupled* yang memisahkan logika web dari mesin pemrosesan AI:

### Client Layer: Local-First dengan IndexedDB & PWA
* Antarmuka dibangun menggunakan **Vue 3** dengan rendering terintegrasi melalui **Inertia.js** dan utilitas CSS **TailwindCSS**.
* Didukung teknologi **Progressive Web App (PWA)**, memungkinkan aplikasi diinstal langsung di layar utama Android, iOS, maupun desktop dengan kecepatan muat instan melalui *Service Worker*.
* **Local-First Database (Dexie.js / IndexedDB)**: Seluruh riwayat obrolan, metadata karakter lokal, dan pengaturan disimpan di browser perangkat pengguna. Jika koneksi terputus, obrolan tetap dapat dibaca secara offline.

### Backend Layer: Laravel 12 API Ringan
* Backend utama menggunakan **Laravel 12 (PHP 8.3+)** yang difokuskan murni sebagai API gateway otentikasi (Sanctum), pengelolaan data bot resmi di database MySQL, sistem pembayaran/VIP, dan validasi keamanan masukan pengguna.
* Begitu pengguna mengirim pesan chat, Laravel tidak memanggil API model AI secara langsung (yang biasanya membuat PHP kehabisan *process worker* dan mengalami *timeout*). Sebaliknya, permintaan dikemas ke dalam payload ringan dan dimasukkan ke dalam antrean **Redis Queue (`mzai_chat:queue`)**.

### Worker Engine: Daemon Golang Berkinerja Tinggi
* Mesin eksekusi AI ditangani sepenuhnya oleh sebuah worker khusus yang ditulis dalam bahasa **Go (Golang)**.
* **Zero-Blocking Concurrency**: Go worker memanfaatkan sistem *goroutine* yang sangat ringan. Satu server Go sanggup menangani ribuan koneksi *streaming Server-Sent Events (SSE)* secara bersamaan tanpa lonjakan memori yang berarti.
* Worker ini bertanggung jawab atas penyusunan *system prompt*, injeksi memori, pemfilteran keamanan anak (*child safety*), perhitungan XP ikatan, pembersihan format teks, hingga *streaming* karakter demi karakter ke layar pengguna.

### Model AI System "Orion" & Gateway BYOK
* **System Pool ("Orion")**: Disediakan langsung oleh server untuk pengguna yang ingin kemudahan instan. Model ini telah melalui kalibrasi prompt mendalam agar responsif dan memahami slang/bahasa santai Indonesia.
* **BYOK Multi-Provider Gateway**: Worker Go memiliki antarmuka terpadu yang kompatibel dengan standar OpenAI, Anthropic Claude, Google Gemini, OpenRouter, DeepSeek, Mistral, Groq, dan lainnya. Kunci API hanya diproses di dalam memori sementara saat request berlangsung dan tidak pernah disimpan ke dalam basis data server.

---

## Bab 5: Fitur-Fitur Utama & Mekanisme Kerjanya

### Roleplay Bahasa Indonesia Alami
Salah satu keunggulan terbesar Mikazuki AI adalah instruksi sistem yang dirancang khusus untuk memahami budaya percakapan berbahasa Indonesia:
* Mampu membedakan panggilan formal (*Anda, Saya*), kasual (*Aku, Kamu*), akrab (*Gua, Lu*), hingga sebutan khas anime (*Senpai, Sensei, Master*).
* Menjaga deskripsi tindakan di dalam tanda bintang (`*tersenyum tipis sambil menghela napas*`) tetap puitis dan mengalir alami tanpa terdengar seperti terjemahan literal bahasa Inggris.

### Group Chat Skala Besar (Hingga 255 Karakter)

Grup chat di Mikazuki AI telah ditingkatkan secara drastis dari batas awal 10 karakter menjadi **hingga 255 karakter** dalam satu ruangan obrolan:
* **Turn-Taking Dinamis**: Pengguna dapat memilih karakter tertentu yang harus berbicara, memilih mode acak (*shuffle*), atau membiarkan karakter merespons otomatis saat namanya disebut (*mention* `@NamaKarakter`).
* **Anti-Mimic Shield**: Go worker dilengkapi algoritma pelindung yang mencegah model AI meniru atau berbicara atas nama karakter lain yang bukan gilirannya berbicara.
* **Roster Context Optimization**: Demi menghemat kuota token, hanya karakter yang sedang berbicara yang dimuat persona lengkapnya ke dalam memori model; karakter lain yang hadir hanya dimuat sebagai nama konteks pendukung.

### Arsitektur Memori Bertingkat (Chat Memory & Global Memory)

Agar karakter tidak mengalami "amnesia" setelah puluhan pesan:
1. **Auto-Summary (Batch 20 Pesan)**: Setiap 20 putaran pesan, sistem secara otomatis merangkum fakta-fakta penting percakapan di latar belakang dan menyimpannya sebagai poin memori ringkas.
2. **Global Memory (Fitur Eksklusif VIP)**: Poin memori penting tentang pengguna (seperti makanan kesukaan, nama panggilan, atau peristiwa penting) dapat dibagikan lintas ruangan obrolan, sehingga karakter lain dapat mengenali fakta yang sama tanpa perlu diceritakan ulang dari awal.

### Keamanan & Etika: Child Safety System & UGC Moderation

Mikazuki AI memegang teguh standar etika perlindungan konten:
* **Child Safety Protocol**: Karakter fiksi yang dikategorikan sebagai anak-anak/di bawah umur secara otomatis diberi tanda `child: true`. Pada karakter ini, sistem menyuntikkan instruksi penguncian yang menolak keras segala bentuk topik tidak pantas (NSFW) atau eksploitasi, serta membatasi interaksi hanya pada hubungan ramah dan persahabatan murni (*strictly platonic*).
* **AI Safety Check UGC**: Karakter buatan pengguna yang diajukan ke katalog publik (*Cloud Characters*) wajib melewati pemindaian AI Safety otomatis dan persetujuan manual administrator sebelum dapat diakses oleh publik.

### Pencadangan Data: Encrypted Cloud Backup & JSON Export

Karena obrolan disimpan secara lokal di perangkat, pengguna diberikan dua cara mudah untuk memindahkan data saat berganti perangkat:
* **Ekspor/Impor File JSON**: Mengunduh seluruh riwayat chat dalam bentuk satu file JSON terstruktur yang dapat disimpan di komputer pribadi.
* **Zero-Knowledge Cloud Backup**: Data obrolan dienkripsi menggunakan kata sandi pribadi pengguna langsung di browser sebelum dikirim ke server cloud. Pihak pengembang maupun database server tidak memiliki kunci untuk membaca isi percakapan cadangan tersebut.

---

## Bab 6: Perbandingan Cloud Resmi vs Open Source (Lite)

Bagi pengguna yang bingung memilih antara menggunakan situs resmi Mikazuki AI atau meng-hosting sendiri versi *open source*, berikut perbandingan rincinya:

| Parameter Perbandingan | Mikazuki AI (Cloud Resmi) | Mikazuki AI Lite (Open Source di GitHub) |
| :--- | :--- | :--- |
| **Penyedia Layanan** | Rafiq8K Studio (Dikelola penuh) | Komunitas / Dijalankan Mandiri (Self-Hosted) |
| **Biaya Penggunaan** | Gratis (Tersedia opsi akun VIP) | 100% Gratis & Bebas Lisensi Komersial |
| **Kebutuhan Teknis** | Tidak ada; cukup buka browser di HP/PC | Butuh pemahaman server Linux, Docker, & Git |
| **Model AI yang Tersedia** | System AI + Fleksibilitas BYOK | Wajib menyediakan API Key sendiri (BYOK / Ollama) |
| **Penyimpanan Obrolan** | Local IndexedDB + Backup Cloud Terenkripsi | Tersimpan di database lokal / server pribadi |
| **Pembaruan Fitur** | Otomatis & selalu mendapatkan rilis terbaru | Diperbarui manual melalui perintah `git pull` |
| **Kapasitas Server** | Dikelola & dioptimasi oleh tim pengembang | Tergantung spesifikasi hardware/VPS pribadi |
| **Dukungan Bantuan** | Resmi melalui Tiket Discord & Email | Diskusi forum komunitas & GitHub Issues |

---

## Bab 7: Ekosistem, Keanggotaan VIP, dan Tautan Komunitas

### Filosofi Akun VIP
Mikazuki AI menolak model bisnis berbasis iklan pop-up yang mengganggu atau menjual data pribadi pengguna. Untuk membiayai sewa server komputasi tinggi, biaya domain, dan pemeliharaan sistem, platform mengandalkan program keanggotaan **VIP**:
* **Bebas Iklan Sponsor**: Pengalaman membaca dan mengobrol yang bersih tanpa distraksi.
* **Akses Model**: Kecepatan *streaming* tanpa antre dengan batas token konteks yang lebih luas.
* **Slot Memori Maksimal**: Meningkatkan kapasitas memori obrolan dari 4–6 slot menjadi hingga 14 slot ringkasan aktif.
* **Fitur Visual (Upload Foto & Stiker)**: Kemampuan mengirimkan gambar yang dapat dianalisis langsung oleh karakter.
* **Prioritas Request Karakter**: Permintaan penambahan karakter baru di katalog cloud diproses dengan prioritas utama.

Bagi pengguna yang ingin berkontribusi atau meng-upgrade akun, dukungan dapat disalurkan melalui platform donasi resmi **Trakteer**.

### Tautan Resmi & Saluran Bantuan
* **Website Aplikasi Utama**: [https://mikazuki.ai.id](https://mikazuki.ai.id)
* **Pusat Dokumentasi / Wiki**: Halaman Wiki ini
* **Komunitas Discord Resmi**: [https://s.my-bini.my.id/discord](https://s.my-bini.my.id/discord)
* **Dukungan Sponsor / Trakteer**: [https://trakteer.id/r8kstudio](https://trakteer.id/r8kstudio)
* **Email Dukungan Resmi**: `support@r8kstudio.net`
* **Repository Open Source**: [GitHub Rafiq8K Studio](https://github.com/rafiq8k)

---

*Dokumentasi ini ditulis dan dipelihara secara berkala oleh Rafiq8K Studio sebagai panduan resmi platform Mikazuki AI.*

