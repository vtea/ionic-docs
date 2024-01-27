module.exports = {
  docs: [
    {
      type: 'category',
      label: '快速开始',
      collapsed: false,
      items: ['index', 'intro/course', 'intro/cli', 'intro/cdn', 'intro/vscode-extension', 'intro/next'],
    },
    {
      type: 'category',
      label: '版本更新/升级操作',
      collapsed: false,
      items: ['updating/7-0','updating/pro'],
    },
    {
      type: 'category',
      label: '版本说明',
      collapsed: false,
      items: ['function/intro', 'function/pro', 'function/ce'],
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
