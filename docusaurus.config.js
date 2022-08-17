// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AssetMerge',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.assetmerge.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AssetMerge', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AssetMerge',
        logo: {
          alt: 'AssetMerge Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/using-the-dapp',
            position: 'left',
            label: 'dApp',
          },
          {
            type: 'doc',
            docId: '/category/protocol-mechanics',
            position: 'left',
            label: 'Protocol',
          },
          {
            type: 'doc',
            docId: '/category/developers',
            position: 'left',
            label: 'Developers',
          },
          {
            href: 'https://github.com/AssetMerge',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                to: '/docs/category/using-the-dapp',
                label: 'dApp',
              },
              {
                to: '/docs/category/protocol-mechanics',
                label: 'Protocol',
              },
              {
                to: '/docs/category/developers',
                label: 'Developers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Medium',
                href: 'https://assetmerge.medium.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/WgUfSfmWNv',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AssetMerge',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AssetMerge.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
