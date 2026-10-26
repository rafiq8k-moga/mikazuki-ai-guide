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
            ]
          },
          {
            text: 'Bring your own AI',
            collapsed: false,
            items: [
              { text: 'Pengenalan', link: '/byok/' },
              { text: 'Instalasi & Aktivasi', link: '/byok/instalasi' },
              { text: 'Parameter Dasar', link: '/byok/parameter-dasar' },
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
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Examples', link: '/en/markdown-examples' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en/api-examples' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    // Pengaturan global yang berlaku untuk semua bahasa
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})