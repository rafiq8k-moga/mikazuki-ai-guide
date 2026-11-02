---
title: Persona & System Note
---

# Persona & System Note

Selain kepribadian bawaan karakter, Mikazuki AI memberimu dua ruang teks untuk **mengarahkan chat dari sisi kamu**: **Persona Chat** dan **Catatan Sistem** (System Note). Keduanya dibuka dari area input chat, tersimpan per chat di perangkatmu, dan ikut dikirim bersama setiap pesan yang kamu kirim. Bedanya dengan pengaturan karakter di [Data Karakter dan Memori](/fitur/data-karakter): ini bukan tentang siapa karakternya, melainkan tentang kamu dan keinginanmu untuk percakapan ini.

## Persona Chat

Persona Chat menjawab pertanyaan *"Siapa kamu di chat ini?"* - petunjuk di modalnya berbunyi: *"Siapa kamu di chat ini? AI akan menyesuaikan perilakunya. Maks 500 karakter."*, dan **AI akan menyesuaikan perilakunya** dengan jawabanmu: cara memanggilmu, hubunganmu dengan karakter, atau latar dirimu yang ingin dikenali. Isinya bebas - cukup satu dua kalimat seperti nama panggilan dan sifatmu, atau lebih panjang bila perlu.

Batasnya **maksimal 500 karakter**, dihitung langsung di pojok kanan bawah modal (`x/500`) sehingga kamu selalu tampak berapa sisa ruang. Persona ini **khusus untuk chat yang sedang kamu buka** - karakter lain punya persona terpisah, dan sistemnya menyimpannya terikat pada chat masing-masing. Di group chat pun pengaturan ini tersedia, berlaku untuk seluruh grup.

## System Note

**Catatan Sistem** (*System Note*) adalah instruksi tambahan yang lebih teknis. Kalimat petunjuknya menjelaskan semuanya: *"Instruksi tambahan khusus chat ini, mis. adegan, nada, atau batasan. Dikirim bersama setiap pesan."* Inilah tempat yang tepat untuk hal-hal seperti mengatur adegan yang sedang berlangsung, meminta nada tertentu, atau menetapkan batasan yang wajib dipatuhi AI sepanjang chat ini.

Ruangnya lebih besar daripada persona: **maksimal 1000 karakter**, juga dengan penghitung di modal. Karena dikirim bersama **setiap pesan**, isi Catatan Sistem selalu "terpasang" di percakapan - tidak perlu diulang saat ganti topik, dan otomatis aktif kembali setiap kali kamu melanjutkan chat. Setelah menekan **Simpan**, nilainya tersimpan di perangkat untuk chat ini saja; pesan baru saja yang merasakan perubahan, karena teks pesan lampau tidak diubah.

::: tip Pakai sesuai perannya
Persona = siapa kamu. System note = aturan mainnya. Kalimat seperti "panggil saya Rian" cocok di persona; "gunakan sudut pandang orang ketiga, jangan melompat waktu" cocok di system note. Memisahkan keduanya membuat instruksi lebih mudah dirawat.
:::

## Bedanya dengan Custom Prompt BYOK

Selain dua ruang di atas, ada satu lagi di dunia [BYOK](/byok/): **Custom System Prompt** di [Opsi BYOK](/byok/options/system-prompt). Persamaannya, keduanya menyuntikkan instruksi ke model. Bedanya jelas pada cakupan dan mode:

- **Persona & System Note** - terikat pada **satu chat**, tersimpan di perangkat, dan bekerja di **semua mode** (pool Mikazuki maupun BYOK).
- **Custom System Prompt** - **global untuk semua chat BYOK** dan **hanya aktif di mode BYOK**; di mode system (pool kurir Mikazuki) field ini tidak dikirim dari UI dan dibuang di server.

Jadi kalau kamu ingin aturan yang melekat pada satu cerita tertentu, gunakan persona atau system note; kalau kamu menjalankan API sendiri dan ingin prompt sistem kustom yang berlaku di mana-mana, gunakan Custom System Prompt BYOK. Keduanya bisa hidup berdampingan tanpa saling menghapus.
