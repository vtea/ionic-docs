module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['index', 'intro/environment', 'intro/cli', 'intro/cdn', 'intro/vscode-extension', 'intro/next'],
    },
    {
      type: 'category',
      label: 'Upgrade Guides',
      collapsed: false,
      items: ['updating/7-0'],
    },
    {
      type: 'category',
      label: 'Contributing',
      collapsed: false,
      items: ['contributing/how-to-contribute', 'contributing/coc'],
    },
  ],

  api: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['components'],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: ['api'],
    },
  ],

  cli: [
    {
      type: 'category',
      label: 'CLI Documentation',
      collapsed: false,
      items: [
        'cli',
        'cli/configuration',
        'cli/livereload',
        'cli/using-a-proxy',
      ],
    },
  ],

  native: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['native', 'native-setup', 'native-faq'],
    },
  ],
};
