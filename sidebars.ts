import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',

    {
      type: 'category',
      label: 'Game Play',
      items: [
        'game/the-game',
        'game/how-to-play',
        'game/game-mechanics',
        'game/verifiable-fair',
        'game/glossary',
      ],
    },

    {
      type: 'category',
      label: 'Game Engine',
      items: [
        'engine/overview',
        'engine/epoch-monitoring',
        'engine/resolution-pipeline',
      ],
    },

    {
      type: 'category',
      label: 'Winning Number',
      items: [
        'rng/winning-number',
      ],
    },

    {
      type: 'category',
      label: 'Claims',
      items: [
        'claims/overview',
        'claims/merkle-model',
        'claims/claim-endpoint',
      ],
    },

    {
      type: 'category',
      label: 'User Interfaces',
      items: [
        'ui/overview',
        'ui/web',
        'ui/mobile',
        'ui/cli',
      ],
    },
  ],
};

export default sidebars;