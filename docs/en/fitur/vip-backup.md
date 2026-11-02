---
title: VIP & Backup
---

# VIP & Backup

Mikazuki AI can be used free forever, and there is also a **VIP** status for a more complete experience plus the **Cloud Backup** feature to keep your conversations safe. This page sums up what the membership plans contain, how to redeem a code, how the encrypted backup works, and how to move your chat data to a new device. Every backup process works on the same principle: only you can read its contents.

## VIP Membership

The membership settings are on the **"Membership"** page, which can be opened from the profile page (see [Basic Chat](/en/fitur/basic-chat) for app navigation). The **Free** plan is priced at **Rp0** with two built-in features: **"Unlimited chat"** and **"Chat memories"**. The **VIP** plan is given a crown and is priced at **Rp100.000/month**, with a note displayed as it is: *"Billed every 30 days. Not a one-time lifetime payment."*

The VIP plan contents are written on the same page: **"Everything in Free, plus:"** — **"Highly natural AI responses"**, **"Send Photos"**, **"Global Memories"**, and **"No Ads"**. Global Memories itself is covered in depth on [Memories & Summaries](/en/fitur/memories-summaries), because that is the feature that lets characters remember you across chats. When your VIP is active, an **"Active"** badge appears along with the note *"VIP active until {date}. The Choose button becomes available again after expiry."* with the date written out in full according to your device's language; the **"Choose"** button becomes available again after the term ends.

Pressing **"Choose"** takes you to the payment gate at Mikazuki Account Center, because billing is managed there — not in the app. After the payment completes you are taken to the **"Payment Successful"** page and your VIP status is activated. If the payment button shows *"Coming soon"*, the gate is indeed not open yet — just keep an eye on the official announcements.

## Redeem Codes

At the bottom of the Membership page there is a **"Have a redeem code?"** card for extending your VIP period with a code, with the hint *"Enter a code to extend your VIP period."* Type the code into the field with the `MK-XXXX-XXXX-XXXX` placeholder, then press **"Redeem"** and wait for the *"Processing..."* status to finish. The app automatically turns your letters capital and strips spaces while you type, so copying a code from a chat or a screenshot is no problem.

The code is read on the server, including fixing letters that got swapped — just write it roughly right. The limit is firm and written directly below the form: *"Each code can only be redeemed once per account."* When a code succeeds, a success message shows in the same card; when it is rejected, a red warning appears with a close button.

## Backup & Restore

Backup lives in **Settings → Account** inside the **"Cloud Backup"** card, together with its short pitch: *"Your chats will be securely backed up with a password. Only you can decrypt it."* What gets backed up is broad: all chats and messages, Summaries, Chat Memories and global memories, chat translations, global and per-chat wallpapers, even records of chats you just deleted — so removed data doesn't "resurrect" during a restore on another device.

The key is one thing: **the backup password, minimum 12 characters**. Data is encrypted on your own device (a PBKDF2-SHA256 key derived from the password with 310,000 iterations → AES-256-GCM, gzip-compressed first) before it is sent, so the server only stores a random blob and never sees the contents. The consequence is serious and worth holding onto: **forgetting the password = the backup contents can never be opened by anyone, including us**. Tick *"Remember password for this session (for auto-backup)"* if you want the password reused only until this browser session ends.

Press **"Back Up Now"** for a manual backup; its status shows as *"Backup v{version} · {size}"* plus the last date. There is also **auto-backup**: tick *"Auto-backup every 50 saves"* and the app will send a backup every 50 chat-storage activities — this feature only runs when the session password is available, otherwise it waits for the next manual backup. If an upload fails because of the connection, the already-sealed blob is kept with you offline and re-sent automatically when the device is back online.

**"Restore"** downloads the backup from the cloud and first presents it as a summary — *"{chats} chats · {messages} messages from {exported_at}."* — complete with the warning *"Warning: Current chats on this device will be overwritten."* before you confirm *"Yes, overwrite this device"*. The restored data is merged neatly and reported as it is: *"Restore merged: {chats} chats, {added} new messages."* If the cloud turns out to hold a newer backup (*"The cloud has a newer backup."*), you pick one of three paths: **"Merge both (recommended)"**, **"Use cloud, overwrite local"**, or **"Use mine, overwrite cloud"**.

Besides the cloud, there is a **"Restore from File (.json)"** button to load a local backup file or the result of a domain migration. The app reads the file, shows the number of chats and messages found, then merges them *"safely"* into this device's history. Files of 0 bytes are rejected with a long and useful message: if you are on Android, try another file manager like Files by Google or ZArchiver.

## Import from HaloStory AI

Right below backup there is a **"Migrate from .hsai file"** card for restoring chats exported from HaloStory AI: press **"Pick .hsai file"**, wait for the *"Reading {name}..."* status, and the result is reported directly — *"{chats} chats ({messages} messages) restored."* Chat names, avatars, and colors are restored from the file's contents, including group chats with their members, Summaries, and the chat list you had pinned. Files that fail to open get the message *"This file cannot be opened. Please ensure it is a valid .hsai backup."*, and if the browser storage is full you are asked to sort out the capacity first.

The process is 100% local, exactly as written on the card: *"Your .hsai file is decrypted and restored locally on this device. Nothing is uploaded to our servers."* Your old account identity isn't needed either — the .hsai file is your own possession. Once the import finishes, the old chats appear right away in the chat list and can be continued immediately.

## Transferring Between Devices

Mikazuki AI chat data does not sync automatically between devices; the chat list reminds you of it too: *"Chat data is not synced across devices. Please use the cloud save feature to transfer data."* So the transfer path is clear. On the old device: open **Settings → Account**, fill in the backup password, press **"Back Up Now"**. On the new device: sign in with the same account, open the same Account page, fill in **the same backup password**, then press **"Restore"**.

Because a restore is *merged* with deletion handling, chats you deliberately deleted on the old device will not reappear on the new one. If the new device turns out to already hold its own newer cloud backup, the conflict dialog above is what decides. Two closing notes: the auto-backup setting is stored per browser, so re-enable it on the new device; and when a cloud backup isn't possible, a **.json** or **.hsai** file can still be restored through the two cards in the previous sections — everything funnels back to the [Backup & Restore](#backup-restore) mechanism above.
