---
title: Frequency Penalty
---

# Frequency Penalty

`frequency_penalty` adalah parameter penalti pengulangan ringan di panel BYOK Mikazuki. Tugasnya sederhana: menekan kemungkinan model mengulang kata atau frasa yang sama berulang kali, sehingga jawaban terasa lebih bervariasi tanpa harus mengubah gaya bicara karakter.

Nilai `0` berarti nonaktif, dan itulah defaultnya. Untuk sebagian besar percakapan, default ini sudah cukup, dan kamu hanya perlu menyentuhnya jika karakter mulai terlihat seperti piringan rusak: frasa yang sama berulang di paragraf berbeda.

Beberapa provider mengabaikan parameter ini tanpa pemberitahuan. Tidak ada error, tidak ada efek, nilai tidak dipakai. Jika setelah dinaikkan tidak ada perubahan sama sekali, kemungkinan provider kamu termasuk yang mengabaikannya.

Tak semua provider juga kompatibel menerima nilai negatif, jadi di Mikazuki rentang 0.0 - 2.0 sudah mencakup semua yang berguna.

## Cara Kerja Berbasis Frekuensi

::: info 📊 Definisi resmi OpenAI
"Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim."
:::

Artinya: makin sering sebuah token sudah muncul di teks sejauh ini, makin besar penaltinya. Parameter ini berskala mengikuti frekuensi, bukan sekadar hadir atau tidak.

Contohnya, sebuah kata yang sudah dipakai empat kali akan jauh lebih ditekan daripada kata yang hanya muncul satu kali. Inilah alasan parameter ini efektif melawan kalimat yang diulang persis: semakin sering model mengulang pola yang sama, semakin kuat dorongan untuk keluar dari pola itu. Penalti yang tumbuh seiring frekuensi ini juga yang membedakannya dari penalti berbasis kehadiran biasa.

Perlu diketahui juga, rentang resmi parameter ini di API OpenAI adalah -2.0 sampai 2.0, dan nilai negatif justru *mendorong* pengulangan. Nilai negatif sangat jarang berguna, jadi di UI Mikazuki rentang efektifnya cukup 0.0 sampai 2.0.

## Frequency vs Presence

Di dunia API OpenAI ada dua parameter penalti yang mirip tapi berbeda:

- `presence_penalty` menghukum token **sekali saja** jika token itu sudah pernah muncul, lalu mendorong model ke topik atau kosakata baru.
- `frequency_penalty` menghukum token **setiap saat** berdasarkan berapa kali token itu muncul, sehingga melawan kalimat yang berulang persis.

Ringkasnya: presence mendorong hal baru, frequency melawan pengulangan. Keduanya ada di API OpenAI, tapi di Mikazuki parameter inilah yang bertindak sebagai penalti pengulangan berbasis frekuensi: ia membantu mencegah AI terus mengulang kata atau frasa favoritnya di tengah roleplay yang panjang.

## Panduan Nilai untuk Roleplay

| Nilai | Efek |
| --- | --- |
| 0 (default) | Nonaktif. Cocok untuk tugas biasa atau jawaban singkat. |
| 0.2 - 0.6 | Titik manis untuk roleplay: menekan variasi tanpa merusak gaya. |
| 0.6 - 1.2 | Tekanan makin kuat. Coba hanya jika pengulangan masih terasa. |
| Di atas 1.2 | Berisiko. Bisa membuat kalimat kacau. |

::: warning ⚠️ Jangan terlalu tinggi
Nilai di atas 1.2 berbahaya untuk roleplay, serupa `repetition_penalty` yang berlebihan. Kata yang memang membutuhkan frekuensi tinggi (nama karakter, kata "you", kata depan) ikut terhukum, dan struktur kalimat mulai kacau. Jika jawaban tiba-tiba janggal setelah menaikkan angka ini, turunkan kembali.
:::

## Jangan Dua Penalti Bersamaan

::: tip 💡 Pilih satu dulu
`frequency_penalty` dan `repetition_penalty` sama-sama melawan pengulangan. Menjalankan keduanya dengan nilai tinggi membuat tekanan menumpuk dan merusak kualitas teks. Mulai dari satu parameter, nilai kecil. Kalau belum cukup, baru pertimbangkan pasangan lain.
:::

Baca detail perilakunya di [Repetition Penalty](./repetition-penalty).
