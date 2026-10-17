<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/logo/white.svg" />
  <img src="assets/logo/black.svg" alt="Exinoicons" width="280" />
</picture>

### Beautiful, consistent, pixel-perfect icons for every framework you build with.

**60,000+ icons** · **10 styles** · **6,000+ free** · crafted on a 24×24 grid and trusted by 700,000+ developers.

<br/>

[![Website](https://img.shields.io/badge/Website-exinoicons.com-000000?style=flat-square)](https://exinoicons.com)
[![Docs](https://img.shields.io/badge/Docs-read-blue?style=flat-square)](https://exinoicons.com/docs)
[![npm](https://img.shields.io/npm/v/@exinoicons/react?style=flat-square&label=@exinoicons/react&color=cb3837)](https://www.npmjs.com/package/@exinoicons/react)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE.md)

[**Browse icons →**](https://exinoicons.com/icons) · [**Documentation →**](https://exinoicons.com/docs) · [**Figma →**](https://exinoicons.com/figma-icon-library)

</div>

<br/>

<div align="center">
  <img src="assets/banner.png" alt="A preview of Exinoicons" width="100%" />
</div>

<br/>

## Why Exinoicons

Every icon is hand-crafted for consistency, clarity, and balance, so your interface looks sharp at any size, in any style. One design language, available natively wherever you work.

- **10 styles:** Stroke, Solid, Bulk, Duotone and Twotone across rounded, sharp, and standard families
- **Pixel-perfect:** built on a 24×24 grid for crisp rendering at any scale
- **Tree-shakeable:** ship only the icons you use
- **Native everywhere:** first-class libraries for React, Vue, Svelte, SolidJS, Angular, React Native and Flutter
- **6,000+ free icons:** for unlimited personal and commercial use
- **Always growing:** new icons added regularly

<br/>

## Packages

Pick your framework and install:

| Framework | Package | Latest | Install |
| --- | --- | --- | --- |
| **React** | [`@exinoicons/react`](packages/react) | [![npm](https://img.shields.io/npm/v/@exinoicons/react?style=flat-square&label=)](https://www.npmjs.com/package/@exinoicons/react) | `npm i @exinoicons/react @exinoicons/core-free-icons` |
| **Vue** | [`@exinoicons/vue`](packages/vue) | [![npm](https://img.shields.io/npm/v/@exinoicons/vue?style=flat-square&label=)](https://www.npmjs.com/package/@exinoicons/vue) | `npm i @exinoicons/vue @exinoicons/core-free-icons` |
| **Svelte** | [`@exinoicons/svelte`](packages/svelte) | [![npm](https://img.shields.io/npm/v/@exinoicons/svelte?style=flat-square&label=)](https://www.npmjs.com/package/@exinoicons/svelte) | `npm i @exinoicons/svelte @exinoicons/core-free-icons` |
| **SolidJS** | [`@exinoicons/solid-js`](packages/solid-js) | [![npm](https://img.shields.io/npm/v/@exinoicons/solid-js?style=flat-square&label=)](https://www.npmjs.com/package/@exinoicons/solid-js) | `npm i @exinoicons/solid-js @exinoicons/core-free-icons` |
| **Angular** | [`@exinoicons/angular`](packages/angular) | [![npm](https://img.shields.io/npm/v/@exinoicons/angular?style=flat-square&label=)](https://www.npmjs.com/package/@exinoicons/angular) | `npm i @exinoicons/angular @exinoicons/core-free-icons` |
| **React Native** | [`@exinoicons/react-native`](packages/react-native) | [![npm](https://img.shields.io/npm/v/@exinoicons/react-native?style=flat-square&label=)](https://www.npmjs.com/package/@exinoicons/react-native) | `npm i @exinoicons/react-native @exinoicons/core-free-icons react-native-svg` |
| **Flutter** | [`exinoicons`](packages/flutter) | [![pub](https://img.shields.io/pub/v/exinoicons?style=flat-square&label=)](https://pub.dev/packages/exinoicons) | `flutter pub add exinoicons` |

<br/>

## Plugins

Use Exinoicons across your favorite tools and platforms:

| Plugin | Get it |
| --- | --- |
| **Figma** | [Figma Community](https://www.figma.com/community/plugin/1209922740177393208/exinoicons-pro) |
| **Framer** | [Framer Marketplace](https://www.framer.com/marketplace/plugins/exinoicons/) |
| **Webflow** | [Webflow Apps](https://webflow.com/apps/detail/exinoicons) |
| **WordPress** | [WordPress.org](https://wordpress.org/plugins/exinoicons/) |
| **Elementor** | [`plugins/elementor`](plugins/elementor) |

<br/>

## Tools

| Tool | Get it |
| --- | --- |
| **MCP Server** | [`@exinoicons/mcp-server`](https://www.npmjs.com/package/@exinoicons/mcp-server) · [source](tools/mcp-server) |

<br/>

## Agent skill

[`skills/exinoicons`](skills/exinoicons) is an [agent skill](https://www.skills.sh) that gives coding agents like Claude Code, Codex, and other AI coding agents accurate, first-party guidance on using Exinoicons — so they stop guessing icon names and props from stale training data.

One skill covers every framework. The agent detects which one a project uses and applies the right component, props, and icon catalog:

- **Detect → install → render → props** for React, Vue, Svelte, SolidJS, Angular, React Native, and Flutter
- The complete icon catalog — [`references/icon-list.md`](skills/exinoicons/references/icon-list.md) for the shared JS exports and [`references/icon-list-flutter.md`](skills/exinoicons/references/icon-list-flutter.md) for Flutter constants — so names are copied, never invented
- Free vs Pro guidance, plus minimal-code conventions (only pass props that override a default)

Install it with the [`skills`](https://www.skills.sh) CLI from your project root — your agent picks it up on the next session:

```bash
npx skills add exinoicons/exinoicons
```

<br/>

## Quick start

Here's React. Every other framework follows the same shape (see each package's README for details):

```jsx
import { ExinoiconsIcon } from '@exinoicons/react';
import { SearchIcon } from '@exinoicons/core-free-icons';

function App() {
  return (
    <ExinoiconsIcon
      icon={SearchIcon}
      size={24}
      color="currentColor"
      strokeWidth={1.5}
    />
  );
}
```

The framework libraries are renderers. The icons themselves come from:

- **Free:** [`@exinoicons/core-free-icons`](https://www.npmjs.com/package/@exinoicons/core-free-icons) (6,000+ icons)
- **Pro:** `@exinoicons-pro/core-*` (60,000+ icons across 10 styles)

<br/>

## Free & Pro

|  | Free | Pro |
| --- | --- | --- |
| Icons | 6,000+ | 60,000+ |
| Styles | Stroke Rounded | 10 styles (Stroke, Solid, Bulk, Duotone, Twotone × variants) |
| Use | Personal & commercial | Personal & commercial |
| License | [MIT](LICENSE.md) | [Pro License](https://exinoicons.com/license-agreement) |

Upgrade any time. [Explore Pro](https://exinoicons.com/pricing).

<br/>

## Community & contributing

- Browse and search every icon at [exinoicons.com/icons](https://exinoicons.com/icons)
- Read the full docs at [exinoicons.com/docs](https://exinoicons.com/docs)
- Found a bug or have a request? [Open an issue](https://github.com/exinoicons/exinoicons/issues)
- Questions and ideas are always welcome

<br/>

## License

The free icons (`@exinoicons/core-free-icons`) and all source code in this repository are released under the [MIT License](LICENSE.md). Use, modify and redistribute them in personal and commercial projects.

Pro icon packs (`@exinoicons-pro/*`) are a separate product and require a valid [Exinoicons Pro license](https://exinoicons.com/license-agreement). Pro icons may be used in unlimited end products but may not be redistributed in downloadable templates, kits or open-source code.

<div align="center">
<br/>

Made with care by [Exinoicons](https://exinoicons.com)

</div>
