---
title: Settings & Account
---

# Settings & Account

All of Mikazuki AI's settings are gathered on the **Settings** page, which can be opened from the app menu. The page honestly writes *"Manage your account and preferences."* and presents four menu cards: **"Account"** (*"Profile, password, 2FA, sessions"*), **"Language"**, **"Engine"**, and **"Preferences"**. This page dissects them one by one, including how to install the app on your device's home screen through the PWA.

## Account

Signing in to Mikazuki AI does not use a local password — login is handled by the **Mikazuki Account Center** through an SSO mechanism, so the same one account is used everywhere. On the **Settings → Account** page there is a **"Mikazuki Account Center"** card with a short explanation: *"Email, password, 2FA, and account deletion are managed there."* Press the **"Manage Account"** button to open the account center: changing your email, changing your password, enabling 2FA, all the way to deleting your account is done there.

The rest is managed directly in the app. The **"Profile Information"** form holds your display name and profile photo; the **"Username"** form explains how the system works: *"The username is generated automatically from the display name (slug + a 4-digit number). Only the part before # can be changed every 30 days. The #XXXX discriminator cannot be changed."* The rules are strict but easy to read — lowercase letters, numbers, and dashes only, with a preview of the result (`name#1234`) shown below the field. If you are still in the waiting period, the app counts it down: *"You can only change your username every 30 days. {days} days remaining."*

The **"Browser Sessions"** card lists every session currently signed in with your account, including which devices and when. Through the **"Log Out Other Browser Sessions"** button you can sign out every other device in one press — handy if you forgot to log out on a friend's computer. Meanwhile your chat data, the [Cloud Backup](/en/fitur/vip-backup#backup-restore), and [.hsai file imports](/en/fitur/vip-backup#import-from-halostory-ai) also live on that same Account page.

## AI Engine

The **Settings → Engine** page opens with its key sentence (quoted as is): *"Choose the AI engine for chat and summary. BYOK keys are stored locally (IDB) and are never sent to the server."* The **"Mode"** menu decides where your chat's brain comes from: **"System"** uses the server's built-in engine (quota and models from Mikazuki), while **"BYOK"** uses your own API keys with 16 providers ready to use, from Google Gemini, Anthropic Claude, and DeepSeek to AI Horde. When BYOK is active, a reminder appears: *"BYOK mode active - keys remain local only (Privacy Policy)."*

One special card, the **"Prompt Engine"**, stands apart from the provider choice: the **"Mikazuki Engine"** with the description *"Currently tuned prompts. Provides the best character consistency, bond milestones, and safety."*, or the **"HaloStory Engine (Legacy)"** which enables the classic prompt style with the *"legacy"* note: *"Legacy style may be less consistent with bond levels and XP tags."* This setting is saved to your account automatically. The **"BYOK"** section below it — provider, API Key, Model, the *Fetch models* button, up to the Base URL for OpenAI Compatible — is covered in full in the **BYOK guide**; all the advanced parameters like Max Tokens, Temperature, and Reasoning have their own explanation pages there.

As a note of honesty: the Engine card on the Settings page still shows the old caption *"Model settings — coming soon"*, even though the page itself is already fully functional. Ignore that text — the engine page can be opened straight from the Settings side menu too.

## Language

The **Settings → Language** page holds three things in one place, according to its description: *"Interface language, AI language, and translation settings."* The **"UI Language"** section has two buttons — **English** and **Bahasa Indonesia** — which switch the app's display language the moment they are pressed.

The **"AI Language"** section sets the language your characters reply in, with the official suggestion above it: *"English is recommended; Indonesian is also available."* The **"English"** option is labeled *"Default - optimal roleplay performance"*, while **"Bahasa Indonesia"** is labeled *"Native Indonesian"*. If you change it, press **"Save"** and this setting is stored to your account as well.

The third section, **"AI Translation"**, works automatically: *"Automatically translates AI responses into your selected UI language."* Its status shows as an **Active** or **Off** badge on the same card, complete with two built-in notes: *"Follows UI Language automatically - English: off, other languages: on. There is no manual toggle."* and *"Skipped when AI Language matches UI Language. Press 'View original' on any message to read the raw reply."* The details of how translation works are covered further in [Translation & Appearance](/en/fitur/translation-appearance).

## Preferences

The **Settings → Preferences** page contains two display cards, according to the page's description: *"Default chat wallpaper and other settings."* The first card, **"Default chat wallpaper"**, stores the background for all chats that follow the global setting — pick **Off** or one of the preset previews, with a small conversation mock-up that immediately follows your choice. Its note is honest about the limit: *"Used by chats that follow the global setting. Wallpapers show on screens under 1024px so text stays readable."* And its relationship with specific chats: *"Chats set to 'Follow global' use this. Chats with their own wallpaper remain unchanged."*

The second card, **"Chat UI Style"**, decides the layout of character replies: **Mikazuki UI** (badged *Default*) with the description *"Modern novel format: speech in bubbles, narrative actions centered outside bubbles."*, or **HaloStory UI** with the description *"Classic HaloStory format: all character responses contained inside traditional chat bubbles."* Each option comes with a small visual example so the difference is visible before you choose.

Meanwhile the dark theme is not on the Preferences page — it is a sun/moon icon in the app's topbar that switches dark↔light mode in a single click. Your choice is stored on that device itself, and dark mode is the default.

## Install the App (PWA)

Mikazuki AI is a Progressive Web App: just a browser, no app store, and it can be installed on Android, iOS, as well as desktop. When you visit from a phone, a floating **"Install Mikazuki AI"** banner appears with its invitation: *"Add this app to your home screen for quick access, just like a native application."* Press the **"Install"** button and you are done. The banner can be closed with the **"Dismiss"** button, and it will not appear again after the app is installed.

On iPhone and iPad, the browser does not provide an automatic install button, so the banner gives manual instructions: *"Tap the Share button in your browser, then select 'Add to Home Screen'."* followed by the **Share → Add to Home Screen** icons as a reminder of which one to press. The same method applies if the banner never shows up — do it directly from your browser's Share menu.

Once installed, the app is kept up to date on its own: when a new version appears you get the notice *"New version available. Reload to update."* with a **"Reload"** button, and once all assets are ready you are told *"Mikazuki AI is ready for offline use."* — meaning your chats stay openable even when the connection is not there.
