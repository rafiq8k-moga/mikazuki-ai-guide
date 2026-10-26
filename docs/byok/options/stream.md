---
title: Stream
---

# Stream (`payload: stream`)

`stream` mengatur **cara jawaban dikirim** ke UI. Nilainya boolean (on/off), dan di panel **"Opsi Dasar"** pengaturan engine tampil sebagai toggle. **Defaultnya aktif** dan itulah yang direkomendasikan.

Saat aktif (`stream: true`), jawaban dikirim bertahap: server mengirim potongan kecil (chunk) begitu token siap, bukan menunggu seluruh jawaban selesai. Di UI Mikazuki, teksnya muncul karakter demi karakter - efek *typewriter* yang kamu lihat saat AI mengetik.

## Cara Kerja Streaming

Secara teknis, streaming berjalan via **HTTP SSE** (Server-Sent Events). Alurnya:

1. Server mengirim event `data: {...}` berisi **delta** - potongan teks tambahan yang increment.
2. Satu chunk terakhir menyertakan `finish_reason` (mis. `stop`) sebagai penanda selesai.
3. Koneksi ditutup dengan sinyal `[DONE]`.

Klien (Mikazuki) menyambung delta-delta ini secara real-time, sehingga kata pertama muncul hanya beberapa ratus milidetik setelah request - bukan setelah seluruh paragraf selesai dibuat.

::: info 📡 Stream hanya soal pengiriman
Streaming tidak mengubah apa pun pada isi jawaban. Model yang sama + prompt yang sama = hasil yang sama, entah disetrum bertahap atau sekaligus. Biaya token juga identik.
:::

## Kapan Mematikan Stream

Saat OFF (`stream: false`), server **menyelesaikan seluruh jawaban dulu** baru mengirim sekaligus. Total waktu sebenarnya mirip, tapi terasa seperti "lag" panjang di jawaban panjang karena tidak ada teks yang muncul selama proses.

Alasan paling umum untuk mematikannya:

- **Provider third-party dengan streaming parsial** - sebagian provider OpenAI-compatible menggarap streaming-nya kurang rapi: chunk `usage` di akhir beda bentuk dari standar, atau *tool-calling* tidak didukung di mode streaming. Kalau model di provider-mu terlihat error atau gagal hanya saat stream ON, coba matikan.
- **Integrasi & debugging** - jawaban JSON utuh lebih mudah dibaca saat menguji payload atau mencari penyebab masalah di [Advanced Payload](../parameter-dasar#advanced-payload).

::: tip 💡 Saran untuk pengguna biasa
Kalau tidak ada masalah apa-apa, **biarkan stream aktif**. Untuk pemakaian chat sehari-hari, streaming umumnya tidak memiliki kekurangan - hanya pengalaman yang jauh lebih responsif.
:::

## Mitos & Fakta

::: details "Stream ON bikin jawaban beda / lebih boros?"
Tidak. Streaming hanya mengubah **cara pengiriman**, bukan cara model berpikir. Isi jawaban, jumlah token yang dihasilkan, dan biaya ke provider semuanya sama persis antara stream ON maupun OFF. Yang berbeda hanya kapan potongan teks sampai ke layarmu.
:::

::: details "Jawaban terasa lebih lambat saat stream OFF"
Terasa, ya - tapi total waktu sebenarnya mirip. Bedanya, stream ON menampilkan kata pertama hampir seketika, sedangkan stream OFF "menahan" semuanya sampai jawaban utuh selesai dibuat, lalu mengirim sekaligus.
:::
