# Discord Announcement — Sistem Memori Baru

Artikel lengkap: https://guide.mikazuki.ai.id/fitur/memori-dan-ringkasan (EN: /en/fitur/memories-summaries)

Dua versi caption: **A** untuk roleplayer umum (pengguna Character.AI dan sejenisnya), **B** untuk power user (SillyTavern dan sejenisnya). Pilih sesuai channel, atau pakai keduanya (umum dulu, teknis sebagai thread/belah bawah).

---

## 📢 Versi A — Roleplayer umum

**Karaktermu sekarang punya ingatan baru: Peristiwa Lampau** 📖

Cara Mikazuki mengingat ceritamu dirombak total. Dulu, ringkasan cerita dibuat per 20 pesan dan disimpan hanya di browser-mu — buka chat dari HP lain, ingatannya bisa beda.

Sekarang ada **Peristiwa Lampau**: satu catatan perjalanan chatmu yang dijaga otomatis di server, terus diperbarui sambil kamu chat.

Yang berubah buatmu:

- 📱 **Ingat sama di semua perangkat** — cerita tidak hilang ganti browser/HP
- 🔄 **Selalu mutakhir** — diperbarui otomatis, tanpa tombol apa pun
- ✍️ **Bisa kamu tulis ulang** — buka tab Peristiwa Lampau, edit catatannya sesukamu; editanmu dihormati, tidak ditimpa sistem
- ♻️ **Mau mulai cerita baru?** Tekan Reset — karakter merangkum ulang dari nol, riwayat chat tetap aman
- 👑 **VIP**: ingatan lebih besar dan lebih detail

Karakter juga tetap mengingat fakta-fakta penting yang pernah kamu ceritakan (panggilan sayang, kesukaan, kebijakan) secara otomatis — tidak perlu lagi menjaga daftar memori manual.

Jadi dulu ada "Chat Memories" dan "Global Memories" — keduanya sudah pensiun dan digantikan sistem ini. Panduan lengkap:

https://guide.mikazuki.ai.id/fitur/memori-dan-ringkasan

*Catatan: ringkasan lama di browser tidak dipindah. Cerita dulu beberapa pesan, lalu cek tab Peristiwa Lampau — kamu akan lihat catatannya terbentuk.*

---

## 🔧 Versi B — Power user

**Memory architecture rework: server-side rolling summary (SupaMemory-style)**

Old pipeline removed entirely: no more client-side batch (20-msg) summarization, `/api/summarize` + `/go-summary` SSE, IndexedDB stores (`summaries`, `chatMemories`, `globalMemoriesCache`), and the `user_bot_global_memories` table is dropped.

New pipeline — everything runs in the Go worker:

- When the sliding window prunes messages, an internal goroutine (5-min throttle) merges the **pruned tail** with the existing summary via an LLM merge prompt → persisted to a new `chat_summaries` table (1 row per chat, unique namespaced `chat_id`, `last_msg_seq` anchor so merges resume exactly where they left off).
- **Recursive collapse**: when the summary exceeds the paragraph cap, it re-summarizes itself — bounded size forever.
- Injection is a single `<PAST_EVENTS_SUMMARY>` block above the history, replacing the old `<CONVERSATION_RECAP>` + `<CHAT_MEMORIES>` + `<GLOBAL_MEMORIES>` stack.
- **Fail-open by contract**: summary fetch/merge errors never break the chat; the block just degrades gracefully.

**Tier budgets** (per-context tokens, from `TierBudgetLimits` — one source of truth):

| Tier | Memory budget | Summary cap | Collapse at |
|---|---|---|---|
| Free | 1200 | 2500 chars | 4 paragraphs |
| BYOK | 2000 | 6000 chars | 8 paragraphs |
| VIP | 4000 | 6000 chars | 8 paragraphs |

LTM embeddings budget is now an explicit per-tier value (600/1000/2000) instead of derived `maxMem/2`. Lorebooks unchanged.

**User-facing control** (`/api/chats/{chatId}/summary`, owner-only via user-prefixed chat_id):
- GET / PUT / DELETE; PUT caps at 6,000 chars and sets `edited_by_user` — a user-edited summary is **frozen**: the worker never overwrites it until reset (DELETE clears the flag and rebuilding starts from scratch). "Re-summarize" is now just reset.
- Backup format key: `chat_summaries_data` (replaces the old `summaries` key; legacy import maps accepted, imported summaries do not freeze).

Practical upshot: consistent memory across devices, no client state dependency, and prompt composition you can reason about — one deterministic summary block + LTM retrieval + lorebook.

Full write-up: https://guide.mikazuki.ai.id/en/fitur/memories-summaries

---

## Caption super-pendek (crosspost/reply)

Memory system baru sudah tayang! Karaktermu sekarang menyimpan **Peristiwa Lampau** di server: selalu mutakhir, konsisten antar perangkat, bisa diedit, dan VIP dapat detail lebih kaya. Panduan lengkap: https://guide.mikazuki.ai.id/fitur/memori-dan-ringkasan
