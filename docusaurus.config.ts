import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'I See Fortune Documentation',
  tagline: 'Epoch game for those who trust no one',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.iseefortune.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IC42N', // Usually your GitHub org/user name.
  projectName: 'iseefortune-docs',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/IC42N/iseefortune-docs/tree/main/',
        },
        blog: false, // disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IC42N DOCS',
      logo: {
        alt: 'I See Fortune logo',
        src: 'img/eye-white-center-300.png',
      },
      items: [

        {
          href: 'https://iseefortune.com',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/IC42N',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'How to Play ', to: '/game/how-to-play' },
            { label: 'Game Engine', to: '/engine/overview' },
            { label: 'Winning Number', to: '/rng/winning-number' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'Main Website', href: 'https://iseefortune.com' },
            { label: 'GitHub', href: 'https://github.com/IC42N' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'X (Twitter)', href: 'https://x.com/IcFortune' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} I See Fortune (IC42N).`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
