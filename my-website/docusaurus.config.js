// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Home Supplies Docs',

  tagline: 'Документация приложения домашних запасов',

  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://mosiliy.github.io',

  baseUrl: '/T-academy/',

  organizationName: 'mosiliy',

  projectName: 'T-academy',

  onBrokenLinks: 'warn',

  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  plugins: [
    ['drawio', {}],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',

          remarkPlugins: [simplePlantUML],
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],

    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'home-supplies-api',

            spec: 'docs/api/openapi.yaml',

            route: '/api/',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Home Supplies Docs',

      items: [
        {
          type: 'docSidebar',

          sidebarId: 'tutorialSidebar',

          position: 'left',

          label: 'Документация',
        },

        {
          to: '/api/',

          label: 'API',

          position: 'left',
        },

        {
          href: 'https://github.com/mosiliy/T-academy',

          label: 'GitHub',

          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      copyright: `Copyright © ${new Date().getFullYear()} Home Supplies Docs`,
    },

    prism: {
      theme: prismThemes.github,

      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;