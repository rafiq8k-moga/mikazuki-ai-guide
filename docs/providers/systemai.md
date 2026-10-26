---
title: System AI (Mode Bawaan)
---

# System AI (Mode Bawaan)

**System AI** adalah mode *engine* bawaan Mikazuki AI — AI-nya Mikazuki sendiri. Kamu tidak perlu punya API key, tidak perlu mengisi *Base URL*, dan tidak ada apa pun yang harus dikonfigurasi. Buka aplikasi, kirim pesan, Model AI bawaan server langsung merespons.

> **Analoginya:** Mode System = kamu naik **taksi** (semua diurus, tinggal duduk). Mode BYOK = kamu **menyetir mobil sendiri** (bawa kuncimu sendiri, atur sendiri jalannya). Panduan BYOK ada di [Pengenalan BYOK](../byok/index.md).

Mode engine bisa diganti kapan saja lewat halaman **/settings/engine** — pilih **System** atau **BYOK**. Selama mode System aktif, kamu sudah memakai AI milik server, tanpa biaya dan tanpa setup.

---

## Dua Jalanku: Free vs VIP

Di balik layar, Mode System menjalankan dua tingkat layanan yang berbeda. Semua kamu perlu tahu hanyalah perbedaan kapasitasnya:

| Aspek | **Free** | **VIP** |
| --- | --- | --- |
| Status akun | Pengguna biasa | Pelanggan VIP |
| **Context window** (memori karakter dalam satu request) | Standar — nyaman untuk obrolan harian | Jauh lebih besar — ideal untuk roleplay super panjang |
| **Panjang jawaban** | Ringkas dan efisien | Lebih lega |
| Ragam respons | Normal | Ideal untuk roleplay panjang dan grup besar |

::: tip Context window itu memori karakter
Context window menentukan berapa banyak konteks (riwayat chat, persona, memori) yang bisa dimuat dalam satu request. Tingkat Free tetap nyaman untuk obrolan sehari-hari, tetapi jika kamu suka *roleplay* super panjang atau *group chat* besar dengan 255 karakter, konteks VIP membuat karakter jadi nyaris tak pernah "lupa".
:::

**Kapan upgrade ke VIP masuk akal?**

- 📚 Percakapanmu sering melewati ratusan pesan dan karakter mulai kehilangan jejak → konteks VIP melarutkan masalah ini.
- 👥 Kamu main *group chat* besar sehingga model harus memuat banyak persona sekaligus.
- 💆 Kamu ingin kuota/limit yang lebih lega tanpa bergantung kuota gratis server.

::: details Nama model dan API key-nya di mana?
Itulah keindahan Mode System: semua model, endpoint, dan kunci API **adalah rahasia server**. Kamu tidak pernah mengelolanya — tidak ada dropdown model, tidak ada key yang harus diisi. Server Mikazuki yang memilih dan mengatur penyedia di belakang layar, sehingga nanti jika model di-upgrade, kamu otomatis ikut menikmatinya.
:::

---

## Yang Masih Bisa Kamu Setel di Mode System

Walaupun parameter generasi terkunci server, pengalaman berkarakter milikmu tetap penuh kustomisasi:

### Prompt Engine: mikazuki vs halostory

Di bagian **Prompt Engine** di halaman settings yang sama, kamu bisa memilih dua ragam mesin prompt:

| Opsi | Penjelasan |
| --- | --- |
| **mikazuki** *(default)* | Gaya prompt terbaru, dikalibrasi khusus untuk Mikazuki AI — paling optimal untuk bahasa santai Indonesia dan format respons terkini. |
| **halostory** | Mode kesetaraan *legacy* dengan era HaloStory lama. berguna jika kamu merasa respons karakter terasa "berbeda" dari versi lama dan ingin nuansa klasik itu kembali. |

::: warning Catatan mode halostory
Mode `halostory` dipertahankan murni untuk *parity* aplikasi lama. Untuk karakter baru atau pengguna baru, tetap disarankan memakai `mikazuki` karena itulah mode yang terus dikembangkan.
:::

### Fitur memori & karakter — sama persis dengan BYOK

Mode System hanya mengganti "otak" yang memproses jawaban; seluruh fitur Mikazuki tidak berubah:

- ✅ **Memori Chat & Global Memories (VIP)** — tetap jalan. Per request, sistem mengirim maksimal **9 memori terbaru** untuk menjaga respons tetap fokus dan hemat konteks.
- ✅ **Summary / Auto-Summarize** — ringkasan batch percakapan tetap disuntikkan (satu batch ringkasan terakhir per request).
- ✅ **Persona, System Notes, gaya bahasa karakter** — identik.
- ✅ **Bond System** — XP dan level ikatan tetap bertambah.
- ✅ **Dynamic Delete (Hapus Lanjutan)** — kurasi memori tetap tersedia.

---

## Kontrak & Kebijakan Mode System

**Kenapa `temperature`, `max_tokens`, dan context window tidak bisa diutak-atik?**

Parameter generasi di Mode System disetel penuh oleh server — kamu tidak bisa mengubah `temperature`, `top_p`, batas token keluaran, maupun context window. Ini keputusan sadar, bukan pembatasan kikuk:

1. **Konsistensi** — Server telah mengkalibrasi semua nilai ini agar model menghasilkan respons roleplay yang stabil dan tidak "melar" dari persona karakter.
2. **Anti-abuse & pemerataan** — Kuota gratis harus bisa dirasakan semua pengguna. Pembatasan token mencegah segelintir pengguna menghabiskan kapasitas gratis dengan request raksasa.
3. **Stabilitas layanan** — Server menerapkan *rate limit* dan *throttling* internal agar streaming tetap sehat bagi semua, bukan hanya yang paling cepat klik.

::: tip Butuh kendali penuh?
Jika kamu ingin parameter canggih — memilih model sendiri, `temperature` bebas, context window kustom — itu tugas **BYOK**. Bawa kuncimu ke [Pengenalan BYOK](../byok/index.md) dan mulai dari halaman [Instalasi & Aktivasi](../byok/instalasi).
:::

---

## FAQ Singkat

::: details Apakah Mode System gratis?
Ya. Tingkat **Free** tersedia untuk semua akun tanpa biaya, dengan kuota dan batas panjang jawaban yang berlaku. Upgrade **VIP** memperluas memori karakter (context window) dan panjang balasan secara signifikan, plus fitur Global Memory lebih luas.
:::

::: details Data obrolanku di Mode System tersimpan di server?
Tidak. Sama seperti BYOK, riwayat obrolanmu disimpan **lokal di perangkatmu** (IndexedDB). Server hanya memproses request saat percakapan berlangsung dan tidak menyimpan isi chat-mu di database.
:::

::: details Kenapa jawaban kadang terasa terpotong?
Mode System membatasi panjang keluaran per balasan demi pemerataan kuota. Kalau kamu butuh balasan yang lebih panjang dan mendetail, pindahkan obrolan ke **BYOK** di mana `max_tokens` kamu tentukan sendiri — atau pecah interaksi jadi pesan-pesan lebih pendek.
:::

---

## Selanjutnya

- Ingin model dan parameter sesukamu? Masuk ke dunia [BYOK (Bring Your Own Key)](../byok/index.md).
- Kenali arsitektur memori karakter di [Pengenalan](../pengenalan.md).
- Atur ulang memori karaktermu lewat fitur **Hapus Lanjutan (Dynamic Delete)** di dalam aplikasi.
