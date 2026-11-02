# Introduction
![Mikazuki AI Hero Banner](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6gbMDkssBPYM3JH5nFf-CfMSVIj4cjcDDqZEei0VMjX2l4aCaiw5Qy0vDPhv1brj4-qYaH0auJ9Vat9xh-Pqpc9p5NTdvfUQyEXL0nBalAhliTQZxwFl9l_rLLPWszP-yH-mnSc7o2-QUx2xCTEznj3-Z49AIP2MbPzyaBWW0MqrbMil9BfSxq0Mr5A/s2752/17876662893dbf.png)
*Figure 1: Nakagawa Airi, an original character*

> **"A fictional character is no longer just a still image on a screen or a string of dialogue in a visual novel. With context understanding, consistent memory, and a natural way of speaking, they can become a companion that shares your everyday conversations."**  
> — *Developer's Note, Rafiq Azizi (Rafiq8K Studio)*


## Prologue: Why Does Mikazuki AI Exist?

For most anime and visual novel fans, interacting with a favorite character usually hits a wall: static, linear dialogue scripts. When *Large Language Model* (LLM) technology took off, a new hope appeared — what if you could casually chat with them, the way you send short messages every day?

But most international platforms around at the time had three big problems:
1. **Stiff, unnatural language**: Characters sounded like news articles or machine translations, losing all emotional touch, *slang*, or the cutesy anime tone.
2. **Cloud quota dependency & privacy**: Users were forced into expensive monthly subscriptions while their conversations sat on remote servers, outside their control.
3. **Extreme censorship that breaks roleplay context**: Character personas often "shattered" and refused ordinary conversations simply because a safety filter was misread.

Out of that frustration, a long journey began: building a character chat platform rooted in a local community. The path was never straight or easy — it was a winding evolution full of technical experiments.

---

## Chapter 1: Looking Back — The BlueTalk Era (2024)

<!-- SLOT GAMBAR: Screenshot Tampilan Antarmuka BlueTalk MomoTalk v0.7.0 -->
<!-- Rekomendasi file: /images/wiki/history-bluetalk-interface.png -->
![The Early BlueTalk Interface](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTB1mohMC1NTdDYUtR0J385PVSCSz_1WHAnFD0u82U7R57HSVExjZeSbWr-vSV5fhNCXtHoBLoPpF_7tCZKPssFH3iXz6XBFkMThEvihe9agdgxwsViTYPKjpGh2VFdlJmjb82-oXZCAPH5plFI51NztUAMpD8Etk1RuDkxDXWTLt2l_lPg-uH6O6utw/s1600/image.png)
*Figure 2: The BlueTalk 0.7.x conversation interface, inspired by Blue Archive's MomoTalk.*

### A Love for Blue Archive & the Start of a Fan-Made Project
It all began with a hobby project named **BlueTalk**. As a die-hard *Blue Archive* player, Rafiq Azizi wanted to build an interactive simulation that mimicked the in-game instant messaging feature, *MomoTalk*.

In this early period (versions 0.1.0 through 0.7.x), BlueTalk was built with a Laravel-based web architecture and a simple Android app. Every Kivotos Academy student had her own profile page, complete with an avatar, a signature quote, and academy background. One point was always emphasized: this was a purely fan-made project, with no official affiliation with the game's developer or publisher.

### The Birth of BYOK (Bring Your Own Key)
When BlueTalk first launched, the server ran on free API quota funded by the developer for the public. Within weeks, thousands of incoming messages blew through that quota. The service kept hitting *error 429 (Too Many Requests)* or went down for days at a time.

Facing the reality that funding AI tokens out of his own pocket was a shortcut to bankruptcy, the developer created a feature that would become a core foundation: **Bring Your Own Key (BYOK)**.

With BYOK, users who had a Google AI Studio, OpenRouter, or other provider account could plug their personal API Key straight into the app. The key is stored only on the user's device and pays only for their own messages. This move saved BlueTalk from an early death and unlocked unlimited exploration with no server limit.

### Note System & Manual Dialogue Creator
The BlueTalk era also introduced two signature features:
* **The Note system (story context)**: Users could insert a short scenario note (for example: *"Right now Sensei is stuck in the rain with Shiroko in front of the convenience store"*). The note gets injected into the AI model's instructions so the character's responses stay on the user's chosen scenario.
* **Manual Dialogue Creator**: A tool for building two-sided conversations manually, with no AI involved. Content creators on social media loved it for crafting visual fiction stories and community memes.

### Community Friction & Early Setbacks
Building an independent project in a community inevitably brings friction. While trying to share beta release notes (such as versions 0.7.0 and 0.7.5) in several Facebook community groups (such as *Blue Archive Indonesia - SMGW*), some of the developer's posts were removed by moderators for being "product promotion" — even though the app was shared completely free.

On top of that, server log abuse and system manipulation attempts by a few users began to surface. It became clear that the security foundation and data architecture needed to be rebuilt from the ground up.

---

## Chapter 2: The Expansion Phase — Becoming HaloStory AI (2025)

<!-- SLOT GAMBAR: Screenshot Tampilan HaloStory AI & Fitur Bond System -->
<!-- Rekomendasi file: /images/wiki/history-halostory-bond.png -->
![HaloStory AI Interface and Bond System](https://raw.githubusercontent.com/HaloStory-AI/.github/refs/heads/main/profile/halostory.png)
*Figure 3: HaloStory AI introduced a modern interface and a level-based Bond System.*

### Breaking Out of the Fandom: Toward a Universal Platform
Entering 2025, BlueTalk's limits became more painful: the app was too tied to a single game title (*Blue Archive*). More and more users asked for characters from other anime titles, other games (such as *Genshin Impact*, *Honkai: Star Rail*, *Fate/Grand Order*), and even original characters made by the community itself (*Original Characters / OC*).

With that in mind, BlueTalk was retired and **HaloStory AI** was born.

The name *HaloStory* was chosen as a philosophical bridge: it kept the "Halo" flavor (the anime-style halo above a character's head) while widening the scope into a universal character *storytelling* platform. In this phase, the app ecosystem was rebuilt on the Flutter framework for smooth multiplatform performance (Android, iOS, Windows desktop, and Web).

### The Feature Breakthrough: The Bond System Is Born
In HaloStory AI, conversations were no longer an endless, consequence-free Q&A. The developer introduced the **Bond System**, a relationship-simulation mechanic that makes interactions feel like they truly progress:
* **XP & Leveling**: Every quality message you send earns bond Experience Points (XP).
* **Relationship Status Tiers**: From Level 1 (*Stranger*), Level 10 (*Acquaintance*), Level 25 (*Good Friend*), Level 50 (*Confidant*), up to Level 100 (*Soulmate*).
* **Milestone Dialog**: When a bond level rises, the character unlocks new reactions, changes how they greet you, and reveals a more personal, warmer side of their personality.

### Group Chat, Broadcast Channel & Birthday Calendar
HaloStory AI kept accelerating with new social features:
* **Group Chat**: A room where you can invite 2 up to several characters at once, and watch them interact and respond to each other.
* **Broadcast Channel**: A channel-feed feature where characters post illustrated short stories (*visual short story*) and regular updates to their followers.
* **Birthday Calendar**: An interactive in-app calendar that reminds you when your favorite characters are celebrating their birthday, complete with special party dialog.

### The Critical Point: Server Cost Crisis & Token Scalability
HaloStory AI's popularity turned out to be a double-edged sword. Thousands of active daily users produced millions of LLM tokens on the centralized model. As users leaned into group chats and long stories, the server's API bill swelled to millions of rupiah per month — far beyond what came in as voluntary donations through the Trakteer platform.

The server frequently suffered *overload*, message queues piled up, and *streaming* latency crawled. The developer faced a hard dilemma: **shut the project down for good, or completely rebuild its business and technology model?**

---

## Chapter 3: The Big Decision — Open Source & Total Transformation

After deep discussions in late 2025 with the community, fellow developers, and technical mentors, Rafiq Azizi made a bold decision that surprised many.

### Clarification: Saving the Project
A lot of rumors claimed the HaloStory AI project had "gone bankrupt and shut down." The official clarification: **the old centralized HaloStory AI server was never turned off**, and neither the technology nor the project itself was killed. Instead, the project was split into two complementary strategy branches: the **Open Source movement** and the **rebranding into Mikazuki AI**.

### Step 1: Releasing the Source Code to the Public (Mikazuki AI Lite)
So that years of development work wouldn't simply vanish, the entire backend and frontend source code of HaloStory AI was officially released on GitHub under a **100% Free & Open Source** license.

The publicly released version is positioned as the **"Mikazuki AI Lite Version"**. With this move:
* **Absolute Privacy (Self-Hosting)**: Communities or individual users can download the code, run it on their own computer or VPS server, and connect their own API Keys. Their conversations stay 100% under their own control — invisible to outsiders and to the central developer.
* **Decentralized Load**: The server's computing load spreads into the hands of community members who want to be self-sufficient.

### Step 2: Total Rebranding into Mikazuki AI (HaloStory 2.0)
While the *open source* version was handed to the self-hosting community, the official centralized service was fully overhauled and reborn under the name **Mikazuki AI** (internally also called *HaloStory AI 2.0*).

Mikazuki AI was rebuilt from zero to eliminate every weakness of the past:
1. **The VIP-only "Orion" AI Model**: A dedicated reasoning model, optimized for far more expressive and intelligent Indonesian conversations.
2. **A Sustainable Financial Model**: A transparent VIP membership designed to cover high-performance cloud server costs without sacrificing free users.
3. **Local Storage with IndexedDB**: Free users' chats are stored directly in the user's browser memory (IndexedDB), so the server is no longer burdened with millions of rows of inactive conversations.

### Community Incentive: Lifetime VIP for Self-Host Operators
As a concrete thank-you to the community members who help shoulder the infrastructure, the developer offers a special deal: **any individual or community that manages to run the open-source server (Mikazuki Lite) on their own and keep it active for at least 3 months earns a free Lifetime VIP account on the Mikazuki AI cloud server**, backed by direct technical guidance from Rafiq8K Studio.

---

## Chapter 4: Modern Technical Architecture (Deep Dive)

<!-- SLOT GAMBAR: Diagram Arsitektur Sistem Mikazuki AI (Hybrid Architecture) -->
<!-- Rekomendasi file: /images/wiki/mikazuki-system-architecture.png -->
![Mikazuki AI Architecture Diagram](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2836WXjb3zQCgL24DXFr9pdnseCIGylmQs9ha_UQuMMzxtTV8b3wPA4FVBGmh1FDUG5rekobGy2T1ThfZTqiDMM7Xc6KzqUObGPNNiU1NzxGeZ7rNk7kIwNRAuO2ZlZq5oLV1ZPeF8VsjDFF3fH-Nm5MrT33mkyDvA2kO-4Gw_CRIDPsTCHn85LGgVg/s1280/Mikazuki_AI.png)
*Figure 4: Mikazuki AI.*

Unlike the old versions that piled everything onto a single monolithic application server, Mikazuki AI uses a *decoupled, high-concurrency* architecture that separates the web logic from the AI processing engine:

### Client Layer: Local-First with IndexedDB & PWA
* The interface is built with **Vue 3**, with rendering integrated through **Inertia.js** and the **TailwindCSS** utility framework.
* As a **Progressive Web App (PWA)**, the app installs directly to the home screen on Android, iOS, or desktop, with instant load speed through a *Service Worker*.
* **Local-First Database (Dexie.js / IndexedDB)**: Your entire chat history, local character metadata, and settings live in your device's browser. If the connection drops, you can still read your chats offline.

### Backend Layer: A Lightweight Laravel 12 API
* The main backend runs on **Laravel 12 (PHP 8.3+)**, focused purely on being an API gateway for authentication (Sanctum), official bot data in a MySQL database, the payment/VIP system, and validating user input for safety.
* When you send a chat message, Laravel does not call the AI model API directly (that would normally exhaust PHP's *process workers* and cause *timeouts*). Instead, the request is packed into a lightweight payload and pushed onto the **Redis Queue (`mzai_chat:queue`)**.

### Worker Engine: A High-Performance Golang Daemon
* AI execution is handled entirely by a dedicated worker written in **Go (Golang)**.
* **Zero-Blocking Concurrency**: The Go worker leans on extremely lightweight *goroutines*. A single Go server can hold thousands of simultaneous *Server-Sent Events (SSE)* streaming connections without any significant memory spike.
* This worker is responsible for assembling the *system prompt*, injecting memories, applying child-safety filters, calculating bond XP, cleaning up text formatting, and *streaming* the response character by character to your screen.

### The "Orion" AI Model System & BYOK Gateway
* **System Pool ("Orion")**: Provided directly by the server for users who want instant simplicity. This model has gone through deep prompt calibration so it understands Indonesian slang and casual speech.
* **BYOK Multi-Provider Gateway**: The Go worker exposes a unified interface compatible with the OpenAI standard, Anthropic Claude, Google Gemini, OpenRouter, DeepSeek, Mistral, Groq, and more. Your API Key is only processed in temporary memory while a request runs, and is never stored in the server's database.

---

## Chapter 5: Core Features & How They Work

A full walkthrough of every feature — from basic chat, memories, and group chat, to account settings and conversation safety — lives in the **Getting Started** section in the sidebar of this documentation.

### Natural Indonesian-Language Roleplay
One of Mikazuki AI's biggest strengths is a system prompt designed specifically to understand Indonesian conversation culture:
* It distinguishes formal pronouns (*Anda, Saya*), casual ones (*Aku, Kamu*), street slang (*Gua, Lu*), and anime-style honorifics (*Senpai, Sensei, Master*).
* It keeps action descriptions inside asterisks (`*a faint smile while letting out a sigh*`) poetic and natural, without sounding like a literal translation from English.

### Large-Scale Group Chat (Up to 255 Characters)

Group chat in Mikazuki AI has been upgraded dramatically, from an initial limit of 10 characters to **up to 255 characters** in a single chat room:
* **Dynamic Turn-Taking**: You can pick which character speaks next, choose a random (*shuffle*) mode, or let characters respond automatically when their name is called (*mention* `@CharacterName`).
* **Anti-Mimic Shield**: The Go worker ships with a guard algorithm that stops the AI model from imitating or speaking as another character whose turn it isn't.
* **Roster Context Optimization**: To save token quota, only the character currently speaking is loaded into the model's memory with their full persona; the other characters present are loaded only as lightweight contextual names.

### A Tiered Memory Architecture (Chat Memory & Global Memory)

So that characters don't suffer "amnesia" after dozens of messages:
1. **Auto-Summary (every 20 messages)**: Every 20 message turns, the system automatically summarizes the important facts of the conversation in the background and keeps them as compact memory points.
2. **Global Memory (VIP-exclusive feature)**: Important memory points about you — favorite food, your nickname, a significant event — can be shared across chat rooms, so other characters recognize the same facts without you having to explain everything from scratch.

### Safety & Ethics: Child Safety System & UGC Moderation

Mikazuki AI holds a firm standard for content protection:
* **Child Safety Protocol**: Fictional characters categorized as children/minors are automatically flagged `child: true`. For these characters, the system injects a locking instruction that firmly rejects any inappropriate (NSFW) or exploitative topics, and restricts interactions to purely friendly, strictly platonic relationships.
* **AI Safety Check for UGC**: User-made characters submitted to the public catalog (*Cloud Characters*) must pass an automatic AI Safety scan plus manual administrator approval before the public can access them.

### Data Backup: Encrypted Cloud Backup & JSON Export

Because chats are stored locally on your device, you get two easy ways to move your data when switching devices:
* **JSON File Export/Import**: Download your entire chat history as a single structured JSON file you can keep on your personal computer.
* **Zero-Knowledge Cloud Backup**: Your chat data is encrypted with your personal password directly in the browser before it's sent to the cloud server. Neither the developer nor the server database holds the key to read the contents of your backup.

---

## Chapter 6: Official Cloud vs Open Source (Lite) Comparison

If you're unsure whether to use the official Mikazuki AI website or self-host the *open source* version, here's the detailed comparison:

| Comparison | Mikazuki AI (Official Cloud) | Mikazuki AI Lite (Open Source on GitHub) |
| :--- | :--- | :--- |
| **Service Provider** | Rafiq8K Studio (Fully managed) | Community / Self-Hosted |
| **Usage Cost** | Free (with a VIP account option) | 100% Free, commercially licensed |
| **Technical Requirements** | None; just open a browser on your phone/PC | Requires knowledge of Linux servers, Docker, & Git |
| **Available AI Models** | System AI + BYOK flexibility | Must supply your own API Key (BYOK / Ollama) |
| **Chat Storage** | Local IndexedDB + Encrypted Cloud Backup | Stored in a local database / private server |
| **Feature Updates** | Automatic, always on the latest release | Updated manually via `git pull` |
| **Server Capacity** | Managed & optimized by the dev team | Depends on your own hardware/VPS specs |
| **Support** | Official, via Discord Tickets & Email | Community forum discussions & GitHub Issues |

---

## Chapter 7: Ecosystem, VIP Membership, and Community Links

### The VIP Account Philosophy
Mikazuki AI rejects the disruptive pop-up-ad business model — and refuses to sell your personal data. To fund high-performance server rentals, domain costs, and system maintenance, the platform relies on its **VIP** membership program:
* **Sponsorship Ad-Free**: A clean reading and chatting experience with zero distractions.
* **Model Access**: Queue-free *streaming* speed with a wider context token limit.
* **Maximum Memory Slots**: Raises your chat memory capacity from 4–6 slots to up to 14 active summary slots.
* **Visual Features (Photo Upload & Stickers)**: Send images that the character can analyze directly.
* **Priority Character Requests**: Requests to add new characters to the cloud catalog are processed with top priority.

For users who want to contribute or upgrade their account, support flow through the official donation platform **Trakteer**.

### Official Links & Help Channels
* **Main App Website**: [https://mikazuki.ai.id](https://mikazuki.ai.id)
* **Documentation Hub / Wiki**: This Wiki
* **Official Discord Community**: [https://s.my-bini.my.id/discord](https://s.my-bini.my.id/discord)
* **Sponsorship / Trakteer**: [https://trakteer.id/r8kstudio](https://trakteer.id/r8kstudio)
* **Official Support Email**: `support@r8kstudio.net`
* **Open Source Repository**: [GitHub Rafiq8K Studio](https://github.com/rafiq8k)

---

*This documentation is written and maintained on a regular basis by Rafiq8K Studio as the official guide for the Mikazuki AI platform.*
