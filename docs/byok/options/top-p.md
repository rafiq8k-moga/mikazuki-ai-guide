---
title: Top P
---

# Top P (`top_p`)

`top_p` mengendalikan **seberapa luas kelompok kandidat kata** yang boleh dipilih model saat menyusun jawaban. Ini teknik yang disebut *nucleus sampling*: alih-alih memilih dari semua kata yang ada, model hanya mempertimbangkan kandidat-kandidat teratas yang secara kumulatif menutupi `top_p` dari massa probabilitas. Default Mikazuki adalah **0.95**, dengan rentang yang diterima **0.0 sampai 1.0**.

Parameter ini sering dianggap "saudara kandung" `temperature` karena sama-sama membentuk keberagaman jawaban. Bedanya: `temperature` mengacak-ulang peluang semua kandidat, sedangkan `top_p` memotong daftar kandidatnya langsung.

## Cara Kerja Nucleus Sampling

Setiap kali model mau menulis satu kata, ia sebenarnya menghadiri "lelang" kandidat: semua kata berikutnya diurutkan dari yang paling mungkin sampai yang paling tidak mungkin. `top_p` lalu menggambar garis pada daftar itu: **"ambil kandidat dari atas sampai total peluangnya mencapai X%."**

Misal `top_p` 0.9: model menyusun kandidat terurut (kata A 40%, kata B 25%, kata C 15%, dst.), lalu memotong daftar tepat ketika jumlah kumulatifnya menyentuh 90%. Hanya kata-kata di atas garis itu yang ikut diundi; sisanya dibuang tanpa pernah dipertimbangkan.

::: info 💡 Analogi cepat
Bayangkan kumpulan kandidat kata diurut dari yang paling masuk akal. `top_p` menggambar garis: "ambil kandidat sampai total peluangnya mencapai X%." Turunkan garisnya, dan hanya kata-kata paling masuk akal yang lolos. Naikkan, dan kelompok kandidat makin lebar hingga kata-kata yang agak jauh dari konteks ikut terpilih.
:::

## Arti Angka

Semakin kecil nilainya, semakin "aman" dan dapat diprediksi jawabannya. Semakin besar, semakin lebar ruang kata yang bisa muncul.

| Nilai | Efek |
| --- | --- |
| `0.1` | Hanya kandidat-kandidat yang mencakup total 10% massa probabilitas teratas yang dipertimbangkan. Sangat fokus, hampir deterministik, jawaban cenderung monoton. |
| `0.5` | Setengah massa probabilitas teratas. Jawaban masuk akal dan stabil, tapi variasi kecil; jarang muncul pilihan mengejutkan. |
| `0.95` | Default Mikazuki. Potongan ringan: hanya kandidat-kandidat *gangsir* (peluang sangat kecil) yang dibuang, sisanya tetap hidup. Titik seimbang untuk *roleplay* dan chat. |
| `1.0` | Tanpa pemotongan sama sekali. Semua kandidat ikut sampling, dan perilakunya sepenuhnya ditentukan oleh `temperature`. |

> Praktisnya: di bawah sekitar 0.5 jawaban mulai terasa kaku berulang; di atas default, perbedaannya makin subtle karena kandidat yang dibuang memang kandidat yang hampir tidak pernah menang undian.

Perlu diingat: `top_p` bukan "level kegilaan" seperti `temperature`. Kenaikan dari 0.95 ke 1.0 jarang mengubah sesuatu yang terasa, karena yang masuk lewat tambahan persentase itu memang kandidat dengan peluang super kecil. Efek `top_p` paling terasa justru saat kamu **menurunkannya** jauh di bawah default.

Karena `top_p` dan `temperature` menumpang di jalur yang sama, aturan praktisnya begini: biarkan `top_p` di 0.95, dan anggap slider ini "set and forget". Nilai default 0.95 sudah berfungsi sebagai pengaman ringan yang membuang kandidat gangsir tanpa mengubah rasa jawaban.

Kapan `top_p` layak disentuh? Hanya kalau kamu sedang bereksperimen dengan gaya jawaban yang sangat spesifik: misalnya ingin jawaban super konsisten untuk data sortir (turunkan ke 0.1-0.3), atau sebaliknya ingin memaksimalkan kebebasan sampling dengan mengembalikan `temperature` ke rendah sambil melonggarkan `top_p`. Di luar itu, tidak ada yang hilang kalau slider ini tidak pernah kamu pegang.

## Temperature vs Top P

Di sini ada satu aturan yang layak dihafal:

::: tip 🎯 Ubah temperature ATAU top_p, jangan keduanya
Dokumentasi resmi OpenAI menyatakan: *"We generally recommend altering this or temperature but not both."* Keduanya bekerja di jalur yang sama (mengatur keacakan sampling), jadi menyetel dua-duanya sekaligus membuat efeknya saling menumpuk dan sulit diprediksi. Mayoritas orang menyetel `temperature` dan membiarkan `top_p` di nilai default. Kalau kamu sudah nyaman dengan hasil `temperature` kamu, biarkan `top_p` apa adanya.
:::

Kalau kamu memang ingin mencoba `top_p` sebagai pengganti `temperature`, mulai dari satu sumbu saja: kembalikan `temperature` ke default lalu mainkan `top_p`, dan bandingkan hasilnya. Jangan geser dua slider sekaligus lalu mencari tahu slider mana yang berpengaruh.

## Kalau Slider Tidak Berdampak

Beberapa provider atau server proxy **mengabaikan `top_p` diam-diam**: slider bergerak, nilai terkirim, tapi perilaku model tidak berubah sama sekali. Ini bukan bug Mikazuki, melainkan kebijakan masing-masing endpoint. Kalau pengecekan nilai tidak terasa efeknya, cek dokumentasi provider kamu, atau lihat halaman [OpenAI Compatible](../../providers/openaicompat) untuk catatan perilaku endpoint non-native.

Catatan tambahan untuk pengguna komunitas *local LLM*: di sana sering muncul parameter `top_k` yang memotong berdasarkan **jumlah** kandidat (mis. 40 kandidat teratas), bukan berdasarkan massa probabilitas seperti `top_p`. Mikazuki tidak menyediakan `top_k`, jadi jangan tertukar antara keduanya.
