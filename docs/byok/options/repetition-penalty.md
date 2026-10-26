---
title: Repetition Penalty
---

# Repetition Penalty (`repetition_penalty`)

Parameter klasik dunia model *open-source* untuk menghukum token yang **sudah pernah muncul** sebelumnya, supaya model tidak mengulang frasa yang sama terus-menerus. Di Mikazuki, `repetition_penalty` punya **default 1.1** dengan rentang **0.0 sampai 2.0**; isi `0` untuk menonaktifkan penalti.

::: info 📜 Parameter warisan open-source
Per dokumentasi HuggingFace, `repetition_penalty` adalah parameter bawaan ekosistem HuggingFace *transformers*, bukan parameter resmi di chain OpenAI. Beberapa provider kompatibel OpenAI mendukungnya, beberapa mengabaikannya begitu saja. Nilai > 1 membagi kecilkan probabilitas token yang sudah pernah muncul (penalti eksponensial per dokumentasi HF). Nilai 1.0 berarti tanpa penalti sama sekali.
:::

## Masalah yang Dipecahkan

Penalti pengulangan dibuat untuk satu musuh klasik: model yang **"mengekor di lingkaran"**. Kamu pasti pernah melihatnya: karakter mengucapkan kalimat yang sama persis tiga kali berturut-turut, narasi berputar pada frasa favoritnya, atau jawaban berakhir jadi mantra tanpa akhir. Ini penyakit yang paling sering menyerang model open-weight (Llama, Qwen, Mistral, dan kawan-kawannya) di sesi panjang, karena model kecil cenderung "percaya diri" pada pilihan token yang sudah ia pakai, karena makin sering token dipakai, makin besar peluangnya dipilih lagi, dan lingkaran terbentuk.

`repetition_penalty` memotong lingkaran itu: setiap token yang sudah muncul sebelumnya (termasuk yang berasal dari prompt atau riwayat, tergantung implementasi provider) kehilangan sebagian probabilitasnya, sehingga model terdorong mengambil jalur baru.

## Arti Angka

| Nilai | Efek |
| --- | --- |
| `0` | Penalti nonaktif (dikirim 0 atau tidak dikirim, tergantung backend). |
| `1.0` | Tanpa penalti; perilaku model mentah. |
| `1.1` | **Default Mikazuki.** Titik aman yang disebut umum di komunitas (≈). |
| `1.3` sampai `1.5` | Agresif; mulai berisiko merusak kualitas (≈, angka komunitas). |
| `> 1.5` | Hampir pasti merusak output. Hindari. |

## Bahaya Nilai Terlalu Tinggi

::: warning ⚠️ Jangan asal naikkan
Pengalaman komunitas di forum HuggingFace (Okt 2026, per dokumentasi HuggingFace): penalti terlalu tinggi **merusak kualitas teks**, bukan memperbaikinya. Model mulai **menghindari kata-kata yang memang harus sering muncul** (nama karakter, kata depan, kata ganti seperti "you") karena kata itu sudah sering ada di teks. Hasilnya: grammar kacau, kalimat terasa aneh dan terpaksa, kata penting ditolak hanya karena kebetulan sering dipakai. Komunitas umum menyebut **1.1 sebagai titik aman**, dan di atas sekitar 1.3 sampai 1.5 kualitas mulai runtuh (angka komunitas, ≈).
:::

Aturan praktisnya: naikkan pelan-pelan, amati satu-dua balasan, jangan melompat dari 1.1 ke 1.5 dalam satu tarikan napas.

## vs Frequency Penalty & Presence Penalty

Jangan tertukar dengan pasangan ala OpenAI: [`frequency_penalty`](./frequency-penalty) dan `presence_penalty` adalah parameter resmi OpenAI yang bekerja dengan logika berbeda (menghukum berdasarkan jumlah kemunculan dan keberadaan kata baru, bukan penalti eksponensial ala HuggingFace). Ikhtisarnya:

- **`repetition_penalty`**: penalti ala HuggingFace pada token yang pernah muncul; satu tombol untuk semua pengulangan.
- **`frequency_penalty`**: makin sering kata muncul, makin besar hukumannya (gaya OpenAI).
- **`presence_penalty`**: bonus/hukuman sekali saja per kata baru yang muncul; mendorong topik segar.

Ketiganya sama-sama menekan pengulangan, jadi **jangan pasang semuanya tinggi sekaligus**, karena efeknya menumpuk dan output jadi kering atau pincang. Pilih satu yang kamu naikkan, sisanya biarkan di default.

## Rekomendasi untuk Roleplay

Default **1.1 sudah baik** untuk mayoritas karakter. Kalibrasi kecilnya begini:

- Karakter mulai **mengulang mantra favoritnya** ("aku bersumpah akan melindungimu...") → naikkan sedikit, misal `1.15`.
- Teks mulai **kering, kaku, atau menghindari nama karakter/ kata penting** → turunkan, misal `1.05`, atau `0` untuk mematikan total.
- Model open-weight kecil yang parah lingkaran pengulangannya → coba `1.2`, berhenti di situ.
