![Exinoicons Logo](https://raw.githubusercontent.com/exinoicons/exinoicons/main/assets/logo.png)

# @exinoicons/vue

> Exinoicons Vue rendering library for fast, customizable icons with TypeScript and tree-shaking support

## What is Exinoicons?

Exinoicons is a large icon set for modern web and mobile apps. The free package includes 6,000+ Stroke Rounded icons. The Pro package provides 60,000+ icons across 10 styles.

## How It Works

This package (`@exinoicons/vue`) is a **rendering library** - it provides the `ExinoiconsIcon` component that displays icons in your Vue app. The icons themselves come from separate icon packages:

- **Free icons**: `@exinoicons/core-free-icons` (6,000+ icons)
- **Pro icons**: `@exinoicons-pro/core-*` packages (60,000+ icons, requires license)

### Key Highlights

- **6,000+ Free Icons**: Stroke Rounded set for unlimited personal and commercial projects
- **60,000+ Pro Icons, 10 Styles**: Stroke, Solid, Bulk, Duotone, and Twotone families for sharp, rounded, and standard needs with richer variants
- **Pixel Perfect Grid**: Built on a 24x24 grid for crisp rendering at any size
- **Customizable**: Easily adjust colors, sizes, and styles to match your design needs
- **Tree Shaking Ready**: Named exports keep bundles lean in modern bundlers
- **Regular Updates**: New icons added regularly to keep up with evolving design trends

> **Looking for Pro Icons?** Check out our docs at [exinoicons.com/docs](https://exinoicons.com/docs) for detailed information about pro icons, styles, and advanced usage.

![Exinoicons Icons](https://raw.githubusercontent.com/exinoicons/exinoicons/main/assets/banner.png)

## Table of Contents

- [What is Exinoicons?](#what-is-exinoicons)
- [How It Works](#how-it-works)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
  - [Basic Usage](#basic-usage)
  - [Custom Size and Color](#custom-size-and-color)
  - [More examples and patterns](#more-examples-and-patterns)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)
- [Browser Support](#browser-support)
- [Related Packages](#related-packages)
- [Pro Version](#pro-version)
- [License](#license)
- [Related](#related)

## Features

- Customizable colors, sizes, and stroke width
- TypeScript support with full type definitions
- Tree shakeable for optimal bundle size
- Multiple bundle formats (ESM, CJS, UMD)
- Vue 2 and Vue 3 compatible
- Alternate icon support for dynamic interactions

## Installation

```bash
# Using npm
npm install @exinoicons/vue @exinoicons/core-free-icons

# Using yarn
yarn add @exinoicons/vue @exinoicons/core-free-icons

# Using pnpm
pnpm add @exinoicons/vue @exinoicons/core-free-icons

# Using bun
bun add @exinoicons/vue @exinoicons/core-free-icons
```

## Usage

```vue
<template>
  <ExinoiconsIcon
    :icon="SearchIcon"
    :size="24"
    color="currentColor"
    :stroke-width="1.5"
  />
</template>

<script setup>
import { ExinoiconsIcon } from "@exinoicons/vue";
import { SearchIcon } from "@exinoicons/core-free-icons";
</script>
```

## Props

| Prop                    | Type               | Default        | Description                                                          |
| ----------------------- | ------------------ | -------------- | -------------------------------------------------------------------- |
| `icon`                  | `IconArray`        | Required       | The main icon to display                                             |
| `alt-icon`              | `IconArray`        | -              | Alternative icon for states, interactions, or dynamic icon swapping  |
| `show-alt`              | `boolean`          | `false`        | When true, displays the altIcon instead of the main icon             |
| `size`                  | `number \| string` | `24`           | Icon size in pixels                                                  |
| `color`                 | `string`           | `currentColor` | Icon color (CSS color value)                                         |
| `stroke-width`          | `number`           | -              | Width of the icon strokes                                            |
| `absolute-stroke-width` | `boolean`          | `false`        | When true, the stroke width will be scaled relative to the icon size |

## Examples

### Basic Usage

```vue
<template>
  <ExinoiconsIcon :icon="Video01Icon" />
</template>

<script setup>
import { ExinoiconsIcon } from "@exinoicons/vue";
import { Video01Icon } from "@exinoicons/core-free-icons";
</script>
```

### Custom Size and Color

```vue
<template>
  <ExinoiconsIcon :icon="NotificationIcon" :size="32" color="#FF5733" />
</template>

<script setup>
import { ExinoiconsIcon } from "@exinoicons/vue";
import { NotificationIcon } from "@exinoicons/core-free-icons";
</script>
```

### More examples and patterns

- Examples: https://exinoicons.com/docs/integrations/vue/examples
- Best practices: https://exinoicons.com/docs/integrations/vue/best-practices

## Performance

- **Tree-shaking**: The package is fully tree-shakeable, ensuring only the icons you use are included in your final bundle
- **Optimized SVGs**: All icons are optimized for size and performance
- **Code Splitting**: Icons can be easily code-split when using dynamic imports

## Troubleshooting

### Common Issues

1. **Icons not showing up?**
   - Make sure you've installed both `@exinoicons/vue` and `@exinoicons/core-free-icons`
   - Check that the icon names are correctly imported

2. **TypeScript errors?**
   - Ensure your `tsconfig.json` includes the necessary type definitions
   - Check that you're using the latest version of the package

3. **Bundle size concerns?**
   - Use named imports instead of importing the entire icon set
   - Implement code splitting for different sections of your app

## Browser Support

The library supports all modern browsers.

## Related Packages

- [@exinoicons/react](https://www.npmjs.com/package/@exinoicons/react) - React component
- [@exinoicons/angular](https://www.npmjs.com/package/@exinoicons/angular) - Angular component
- [@exinoicons/svelte](https://www.npmjs.com/package/@exinoicons/svelte) - Svelte component
- [@exinoicons/react-native](https://www.npmjs.com/package/@exinoicons/react-native) - React Native component

## Pro Version

> **Want access to 60,000+ icons and 10 unique styles?**
> Check out our [Pro Version](https://exinoicons.com/pricing) and visit our [docs](https://exinoicons.com/docs) for detailed documentation.

### Available Pro Styles

- **Stroke Styles**
  - Stroke Rounded (`@exinoicons-pro/core-stroke-rounded`)
  - Stroke Sharp (`@exinoicons-pro/core-stroke-sharp`)
  - Stroke Standard (`@exinoicons-pro/core-stroke-standard`)
- **Solid Styles**
  - Solid Rounded (`@exinoicons-pro/core-solid-rounded`)
  - Solid Sharp (`@exinoicons-pro/core-solid-sharp`)
  - Solid Standard (`@exinoicons-pro/core-solid-standard`)
- **Special Styles**
  - Bulk Rounded (`@exinoicons-pro/core-bulk-rounded`)
  - Duotone Rounded (`@exinoicons-pro/core-duotone-rounded`)
  - Duotone Standard (`@exinoicons-pro/core-duotone-standard`)
  - Twotone Rounded (`@exinoicons-pro/core-twotone-rounded`)

## License

The code in this package (`@exinoicons/vue`) is licensed under the MIT License.

This package only provides rendering utilities. It does not include or grant any rights to Exinoicons icon assets. Using Pro icon styles requires a valid Exinoicons Pro license.

Exinoicons icon packs are licensed separately:

- **Free icon packs** (`@exinoicons/core-free-icons`): MIT License. The `LICENSE.md` ships in the package.
- **Pro icon packs (`@exinoicons-pro/*`)**: require a paid Exinoicons Pro license and are governed by the [Exinoicons License Agreement](https://exinoicons.com/license-agreement) (summary in the package's `PRO-LICENSE.md`).

## Related

- [Changelog](CHANGELOG.md) - Version history and release notes
- [@exinoicons/core-free-icons](https://www.npmjs.com/package/@exinoicons/core-free-icons) - Free icon package
- [Exinoicons Website](https://exinoicons.com) - Browse all available icons
