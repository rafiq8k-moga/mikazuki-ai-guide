---
title: Chat Safety & Privacy
---

# Chat Safety & Privacy

This page sums up how Mikazuki AI keeps your chats safe: the safety rules that stay on even when you bring your own prompt, the special shield that appears when the system detects you are going through a hard time, and where your conversation data actually lives. The principle is simple: the built-in safety is non-negotiable, while your data stays in your own hands.

## Safety Filter

If you use **BYOK** mode, you can write your own **Custom System Prompt** and **Custom UJB** — but the text on the Engine page says it straight: *"Add your own system prompt on top of the default one. Your text is placed ABOVE the default prompt - not replacing it. App safety rules stay active. BYOK chats only."* The same description is repeated directly under the field: *"Your text runs ABOVE the default prompt - app safety rules stay active."* Custom UJB works on a similar principle — *"Your own extra UJB text, appended AFTER the default UJB instruction on the last message - not replacing it"* — so the safety instructions of the sender are still delivered to the model too.

For user-made characters, there is one more filter before saving: the **AI Safety Check**. Every character draft is reviewed and given one of the tiers — `none`, `low`, `medium`, `high`, `critical`, or `restricted`. The result shows up as a warning board that spells things out as they are, for example *"Ambiguous elements — The AI detected ambiguous elements. Please edit if needed."* in the Cloud flow, or *"Cannot be saved — This content breaks the guidelines and must be edited before saving."* when the guidelines are seriously broken.

Enforcement differs quite a bit between flows. In the Cloud flow, `high` and above stop the submission until you edit — `critical` is flagged *"Rejected — This is not a false positive. Edit your content."* and `restricted` locks with *"1 hour cooldown — You are blocked from the Create/Edit Cloud feature for 60 minutes."* In the local flow (a character for yourself), only `critical` and `restricted` lock the save button, while `high` gets a confirmation speed bump: *"High-risk content — The AI detected high-risk content. Are you sure you want to save?"* If the checking engine is slow or down, this check is intentionally advisory — the save button is not locked without certainty.

## The Need Help Feature

Mikazuki AI does not just filter content; it also stops the casual conversation when the system detects that yours is touching on a crisis or thoughts of self-harm. On certain messages from a character, a colored help block appears automatically right below the bubble with the title **"Need Help - You are not alone"** and the body: *"If you are experiencing a crisis or feeling self-harm, please reach out to a trusted individual or a professional help service."* Inside it there is a **"Find a helpline ->"** link to [findahelpline.com](https://findahelpline.com/) — a global directory of crisis services — plus a note with the emergency numbers: *"ID: 119 · 1500454 / outside ID open findahelpline.com. This message is automated and is not a substitute for professional help."*

The next two layers also light up on the chat page. At the top of the screen a **"Safety and Support"** bar appears — *"Going through a hard time? You're not alone. Support is available."* — which can be closed through the **"Dismiss"** button. In the middle of the screen there is also a help dialog containing *"If you are in crisis or experiencing thoughts of self-harm, please contact someone you trust or a local help service immediately. You are not alone."*, the big **"Find a helpline - findahelpline.com ->"** button, quick-dial numbers [119](tel:119) and [1500454](tel:1500454), and an **"Open"** button.

All of those layers appear once per occurrence — the dialog does not repeat every time you reopen the chat, and the top bar only comes back passively until it is dismissed. One final statement is shown below the dialog, please read it: *"Automatically displayed when the system detects a crisis. This is not a substitute for professional help."* The app points the way; people and professional services are the ones who accompany you.

## Your Data

Your conversations in Mikazuki AI live on your device: chat history is stored locally in the browser (IndexedDB), not as a long archive on a server. When you use BYOK mode, the Engine page confirms where your key sits: *"BYOK keys are stored locally (IDB) and are never sent to the server."* The consequence cuts both ways — the server does not archive your conversations, but your data does not travel across devices on its own either; the chat list even reminds you: *"Chat data is not synced across devices. Please use the cloud save feature to transfer data."*

To carry your data between devices, there is the [encrypted Cloud Backup](/en/fitur/vip-backup#backup-restore): data is encrypted on your own device with a password only you hold before it is sent, and the same goes for [restoring from a .hsai file](/en/fitur/vip-backup#import-from-halostory-ai), which is processed 100% locally with no upload. The encryption details, the 12-character minimum password rule, and the device-to-device transfer steps are covered in full on the [VIP & Backup](/en/fitur/vip-backup) page. The complete terms on what data the service processes and stores remain in effect as written in the **Privacy Policy**.
