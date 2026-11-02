import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Mikazuki AI Book",
  description: "Full Documentation and User Guide of Mikazuki AI",

    // TAMBAHKAN BAGIAN INI UNTUK FORMAT JUDUL DINAMIS
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }], // Opsional: warna tema browser
  ],
  
  // Konfigurasi ini yang mengatur format judul tab browser
  titleTemplate: ' Mikazuki AI Book',


  // Konfigurasi Multibahasa (i18n)
  locales: {
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/en/introduction' },
              { text: 'Character Data', link: '/en/fitur/character-data' },
              { text: 'Basic Chat', link: '/en/fitur/basic-chat' },
              { text: 'Memories & Summaries', link: '/en/fitur/memories-summaries' },
              { text: 'Translation & Appearance', link: '/en/fitur/translation-appearance' },
              { text: 'Persona & System Note', link: '/en/fitur/persona-system-note' },
              { text: 'Group Chat', link: '/en/fitur/group-chat' },
              { text: 'Bond & Calendar', link: '/en/fitur/bond-calendar' },
              { text: 'VIP & Backup', link: '/en/fitur/vip-backup' },
              { text: 'Your Characters', link: '/en/fitur/your-characters' },
              { text: 'Settings & Account', link: '/en/fitur/settings-account' },
              { text: 'Safety', link: '/en/fitur/safety' },
            ]
          },
          {
            text: 'Bring your own AI',
            collapsed: false,
            items: [
              { text: 'BYOK Intro', link: '/en/byok/' },
              { text: 'Installation', link: '/en/byok/instalasi' },
              { text: 'Basic Parameters', link: '/en/byok/parameter-dasar' },
              { text: 'Advanced Parameters', link: '/en/byok/parameter-lanjutan' },
              { text: 'Advanced Options', link: '/en/byok/advanced-options/' },
              {
                text: 'Parameter Options',
                collapsed: true,
                items: [
                  { text: 'Max Tokens', link: '/en/byok/options/max-tokens' },
                  { text: 'Context Window', link: '/en/byok/options/context-window' },
                  { text: 'Temperature', link: '/en/byok/options/temperature' },
                  { text: 'Top P', link: '/en/byok/options/top-p' },
                  { text: 'Repetition Penalty', link: '/en/byok/options/repetition-penalty' },
                  { text: 'Frequency Penalty', link: '/en/byok/options/frequency-penalty' },
                  { text: 'Stream', link: '/en/byok/options/stream' },
                  { text: 'Stop Sequences', link: '/en/byok/options/stop-sequences' },
                  { text: 'Message Parsers', link: '/en/byok/options/message-parsers' },
                  { text: 'Reasoning', link: '/en/byok/options/reasoning' },
                  { text: 'Custom System Prompt', link: '/en/byok/options/system-prompt' },
                  { text: 'Custom UJB', link: '/en/byok/options/custom-ujb' },
                  { text: 'Bot Response Prefilling', link: '/en/byok/options/prefill' },
                ],
              },
            ]
          },
          {
            text: 'AI Providers',
            collapsed: false,
            items: [
              { text: 'Mikazuki System AI', link: '/en/providers/systemai' },
              { text: 'Gemini AI', link: '/en/providers/gemini' },
              { text: 'Claude AI', link: '/en/providers/claude' },
              { text: 'DeepSeek', link: '/en/providers/deepseek' },
              { text: 'Mistral AI', link: '/en/providers/mistral-ai' },
              { text: 'OpenRouter', link: '/en/providers/openrouter' },
              { text: 'Z.AI / GLM', link: '/en/providers/zai' },
              { text: 'Groq', link: '/en/providers/groq' },
              { text: 'Featherless AI', link: '/en/providers/featherless' },
              { text: 'NanoGPT', link: '/en/providers/nanogpt' },
              { text: 'Venus Chub AI', link: '/en/providers/venus' },
              { text: 'Chutes', link: '/en/providers/chutes' },
              { text: 'Arli AI', link: '/en/providers/arli' },
              { text: 'Mancer', link: '/en/providers/mancer' },
              { text: 'AI Horde', link: '/en/providers/horde' },
              { text: 'NovelAI', link: '/en/providers/novelai' },
              { text: 'OpenAI Compatible', link: '/en/providers/openaicompat' },
            ]
          },
          {
            text: 'Legal',
            collapsed: false,
            items: [
              { text: 'Privacy Policy', link: '/en/privacy-policy' },
              { text: 'Terms of Service', link: '/en/terms-of-service' }
            ]
          }
        ]
      }
    },
    root: {
      label: 'Indonesia',
      lang: 'id-ID',
      link: '/',
      themeConfig: {
        nav: [
          { text: 'Beranda', link: '/' }
        ],
        sidebar: [
          {
            text: 'Memulai',
            collapsed: false,
            items: [
              { text: 'Pengenalan', link: '/pengenalan' },
              { text: 'Data Karakter dan Memori', link: '/fitur/data-karakter' },
              { text: 'Chat Dasar', link: '/fitur/chat-dasar' },
              { text: 'Memori & Ringkasan', link: '/fitur/memori-dan-ringkasan' },
              { text: 'Terjemahan & Tampilan', link: '/fitur/terjemahan-tampilan' },
              { text: 'Persona & System Note', link: '/fitur/persona-system-note' },
              { text: 'Group Chat', link: '/fitur/group-chat' },
              { text: 'Bond & Kalender', link: '/fitur/bond-dan-kalender' },
              { text: 'VIP & Backup', link: '/fitur/membership-backup' },
              { text: 'Karakter Buatanmu', link: '/fitur/karakter-buatanmu' },
              { text: 'Pengaturan & Akun', link: '/fitur/pengaturan' },
              { text: 'Keamanan', link: '/fitur/keamanan' },
            ]
          },
          {
            text: 'Bring your own AI',
            collapsed: false,
            items: [
              { text: 'Pengenalan', link: '/byok/' },
              { text: 'Instalasi & Aktivasi', link: '/byok/instalasi' },
              { text: 'Opsi Parameter Dasar', link: '/byok/parameter-dasar' },
              { text: 'Parameter Lanjutan', link: '/byok/parameter-lanjutan' },
              { text: 'Opsi Parameter Lanjutan', link: '/byok/advanced-options/' },
              {
                text: 'Opsi Parameter',
                collapsed: true,
                items: [
                  { text: 'Max Tokens', link: '/byok/options/max-tokens' },
                  { text: 'Context Window', link: '/byok/options/context-window' },
                  { text: 'Temperature', link: '/byok/options/temperature' },
                  { text: 'Top P', link: '/byok/options/top-p' },
                  { text: 'Repetition Penalty', link: '/byok/options/repetition-penalty' },
                  { text: 'Frequency Penalty', link: '/byok/options/frequency-penalty' },
                  { text: 'Stream', link: '/byok/options/stream' },
                  { text: 'Stop Sequences', link: '/byok/options/stop-sequences' },
                  { text: 'Message Parsers', link: '/byok/options/message-parsers' },
                  { text: 'Reasoning', link: '/byok/options/reasoning' },
      { text: 'Custom System Prompt', link: '/byok/options/system-prompt' },
      { text: 'Custom UJB', link: '/byok/options/custom-ujb' },
      { text: 'Bot Response Prefilling', link: '/byok/options/prefill' },
                ],
              },
            ]
          },
          {
            text: 'Jenis-Jenis Provider AI',
            collapsed: false,
            items: [
              { text: 'Mikazuki System AI', link: '/providers/systemai' },
              { text: 'Gemini AI', link: '/providers/gemini' },
              { text: 'Claude AI', link: '/providers/claude' },
              { text: 'DeepSeek', link: '/providers/deepseek' },
              { text: 'Mistral AI', link: '/providers/mistral-ai' },
              { text: 'OpenRouter', link: '/providers/openrouter' },
              { text: 'Z.AI / GLM', link: '/providers/zai' },
              { text: 'Groq', link: '/providers/groq' },
              { text: 'Featherless AI', link: '/providers/featherless' },
              { text: 'NanoGPT', link: '/providers/nanogpt' },
              { text: 'Venus Chub AI', link: '/providers/venus' },
              { text: 'Chutes', link: '/providers/chutes' },
              { text: 'Arli AI', link: '/providers/arli' },
              { text: 'Mancer', link: '/providers/mancer' },
              { text: 'AI Horde', link: '/providers/horde' },
              { text: 'NovelAI', link: '/providers/novelai' },
              { text: 'OpenAI Compatible', link: '/providers/openaicompat' },
            ]
          },
          {
            text: 'Legal',
            collapsed: false,
            items: [
              { text: 'Kebijakan Privasi', link: '/kebijakan-privasi' },
              { text: 'Syarat dan Ketentuan', link: '/syarat-ketentuan' }
            ]
          }
        ]
      }
    }
  }
})