# Kebijakan Privasi

## 1. Introduction

Mikazuki AI ("we", "us", "our") is an AI character interaction platform operated by **Rafiq8K Studio**. We are committed to protecting your privacy and handling your personal information responsibly.

This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.

---

## 2. Information We Collect

We collect only the information necessary to provide and maintain our service.

### 2.1 Information You Provide During Registration

- **Email address** — used for account identification, OTP verification, and password reset.
- **Name / Display name** — shown in your profile.
- **Password** — encrypted before reaching our servers. We never store passwords in plain text.

### 2.2 Information Collected Automatically

- **Device information** — device ID, model, brand, OS version, platform (collected only during ban events for enforcing bans).
- **Activity data** — anonymous usage statistics for internal analytics (e.g., number of active users).

### 2.3 Information Stored Locally on Your Device (Not Sent to Our Servers)

The following data remains on your device and is **not** collected or stored by us:

- Your **chat history** with AI characters
- Your **persona / roleplay identity**
- Your **API keys** (used for Bring Your Own Key mode)
- Your **app preferences** (theme, language, AI parameters, wallpaper, etc.)
- Your **app lock PIN** (SHA-256 hashed)
- Your **chat summaries and memories**

We do not upload, store, or process this data on our servers beyond what is required for real-time AI inference (see Section 4).

### 2.4 User-Generated Content (Fan Creations & Submissions)

When submitting custom characters to our Cloud library:
- **Character metadata** (name, description, personality, sample dialogs) is stored on our servers for moderation and cataloging.
- **Images** are automatically sanitized, stripped of all metadata (including camera and GPS tags), and re-encoded to WebP.
- **IP addresses** are cryptographically hashed with a keyed HMAC before storage to preserve your privacy while detecting abuse. Raw IP addresses are never retained.

---

## 3. How We Use Your Information

We use the information we collect for the following purposes:

1. **Account management** — creating and maintaining your account, verifying your email, processing password resets.
2. **AI chat processing** — transmitting your chat messages to third-party AI providers for real-time inference. Messages are processed ephemerally and are not stored by us.
3. **Security** — detecting and preventing abuse, enforcing bans, monitoring for suspicious activity.
4. **Communication** — sending you transactional emails (OTP verification, password reset).
5. **Analytics** — understanding aggregate usage patterns to improve the service. This data is anonymous and cannot be traced back to you.

We **never** use your data for advertising, profiling, or any purpose beyond what is explicitly described here.

---

## 4. Data Sharing & Third Parties

We do **not** sell, rent, or trade your personal information to third parties.

We share data only where necessary to provide the service:

| Third Party | Purpose | Data Shared |
|---|---|---|
| **AI Providers** (Google Gemini, Anthropic Claude, Mistral AI, NVIDIA NIM, etc.) | Process AI chat responses | Your chat messages (processed in real time, not stored) |
| **Brevo** | Send verification and password reset emails | Your email address |
| **Trakteer** | Process donations (VIP) | Your Trakteer transaction ID (no financial data handled by us) |
| **Discord** | Community support and child safety alerts | Anonymized alert information (only in case of policy violations) |
| **Cloudflare** | CDN, DNS, DDoS protection | Standard connection metadata (IP address) |

All third-party providers have their own privacy policies governing the use of your data. We encourage you to review them.

---

## 5. Data Retention

| Data Type | Retention Period |
|---|---|
| **Chat messages, persona, API keys, app preferences** | Stored locally on your device — you control this data. Delete the app or clear app data to remove it. |
| **Account data** (email, name, password hash) | Until you request account deletion |
| **Activity logs** | Up to 1 year (aggregated and anonymized after analysis) |
| **Verification OTPs** | 15 minutes (deleted after use or expiry) |

You may request account deletion at any time by contacting **support@r8kstudio.net**. Upon deletion, all account data is permanently removed.

---

## 6. Data Security

We take reasonable precautions to protect your data:

- Passwords are **bcrypt-hashed** before storage.
- Account access is secured via **JWT tokens** with 30-day expiry.
- Your optional app lock PIN is **SHA-256 hashed** and stored only on your device.
- Backup files can be **AES-256-CBC encrypted** for additional protection.

However, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.

---

## 7. Your Rights

You have the following rights regarding your personal information:

- **Access** — request a copy of the data we hold about you.
- **Update** — update your email, name, or password through the app.
- **Delete** — request deletion of your account and associated data by emailing **support@r8kstudio.net**.
- **Export** — create a local backup of your chat data from within the app.
- **Withdraw consent** — stop using the service at any time.

To exercise any of these rights, contact us at **support@r8kstudio.net**. We will respond within 30 days.

---

## 8. Children's Privacy

Mikazuki AI is **not intended for users under the age of 16**. We do not knowingly collect personal information from children under 16.

If we become aware that a user under 16 has created an account, we will delete their data and suspend the account immediately.

---

## 9. International Data Transfers

Our servers are located in **Indonesia**. AI providers we integrate with may operate servers in various countries. By using Mikazuki AI, you consent to the transfer of your data to these locations for processing.

We ensure that all third-party providers we work with maintain adequate data protection standards.

---

## 10. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Material changes will be communicated via:

- In-app notification
- Email (if you have provided one)

We encourage you to review this policy periodically. Your continued use of Mikazuki AI after changes take effect constitutes your acceptance of the updated policy.

---

## 11. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:

- **Email:** support@r8kstudio.net
- **Developer:** Rafiq8K Studio

---

*This Privacy Policy was last updated on July 25, 2026.*
