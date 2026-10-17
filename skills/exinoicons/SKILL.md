---
name: exinoicons
description: Use and find Exinoicons icons in any framework — React, Vue, Svelte, SolidJS, Angular, React Native, and Flutter. Covers installation, rendering, props, icon naming, and the full icon catalog. Use whenever a project depends on @exinoicons/*, @exinoicons-pro/*, or the Flutter exinoicons package and you need to add, render, or pick an icon.
---

# Exinoicons

Exinoicons is an SVG icon library with one rendering package per framework plus a shared icon
set. This skill covers **all** official packages. Work in three steps: detect the framework,
render with its component, then pick icon names from the right catalog.

> ## ⚠️ Read this first: grep the icon lists, never read them whole
>
> The reference files under `references/` list **thousands** of icons and run tens of thousands
> of tokens each. **Never open one in full** — always `grep` for a keyword and copy the exact
> match:
>
> ```bash
> grep -i search references/icon-list.md          # JS frameworks
> grep -i home   references/icon-list-flutter.md   # Flutter
> ```
>
> Do **not** rely on memory for icon names — a guessed name may not exist, or may exist but be
> the wrong glyph (e.g. `LeftToRightBlockQuoteIcon` is quote marks, not the bracket you wanted).
> Grep, confirm, copy.

## 1. Detect the framework

Check the project's manifest and match the installed package:

| Framework    | Detect by                                  | Component         |
| ------------ | ------------------------------------------ | ----------------- |
| React        | `@exinoicons/react` in package.json        | `ExinoiconsIcon`  |
| Vue          | `@exinoicons/vue` in package.json          | `ExinoiconsIcon`  |
| Svelte       | `@exinoicons/svelte` in package.json       | `ExinoiconsIcon`  |
| SolidJS      | `@exinoicons/solid-js` in package.json     | `ExinoiconsIcon`  |
| Angular      | `@exinoicons/angular` in package.json      | `exinoicons-icon` |
| React Native | `@exinoicons/react-native` in package.json | `ExinoiconsIcon`  |
| Flutter      | `exinoicons` in pubspec.yaml               | `ExinoIcon`        |

If more than one matches (e.g. a monorepo), use the one for the file you are editing.

## 2. Two architectures

- **JS frameworks (React, Vue, Svelte, SolidJS, Angular, React Native)** — the `@exinoicons/*` package is a _renderer only_. Icons are
  **named exports** imported from a separate package, `@exinoicons/core-free-icons` (free).
  The same icon names work across all six frameworks.
- **Flutter** — the `exinoicons` package _bundles_ the icon data. Icons are `ExinoIcons.*`
  constants of type `List<List<dynamic>>` (SVG path data, **not** Flutter `IconData`), rendered
  with `ExinoIcon` — never Flutter's `Icon`.

## 3. Install & render (per framework)

> **Keep generated code minimal:** `icon` is the only required prop. Don't write props that just
> repeat the component's default value (e.g. `size={24}`, `color="currentColor"`,
> `strokeWidth={1.5}`) — pass a prop only when overriding a default. The defaults are listed in
> each props table below.

### React

Install:

```bash
npm install @exinoicons/react @exinoicons/core-free-icons
```

Render:

```jsx
import { ExinoiconsIcon } from "@exinoicons/react";
import { Search01Icon } from "@exinoicons/core-free-icons";

function App() {
  // Only `icon` is required; pass other props only to override a default.
  return <ExinoiconsIcon icon={Search01Icon} />;
}
```

Props:

| Prop                      | Type               | Default      | Description                                                     |
| ------------------------- | ------------------ | ------------ | --------------------------------------------------------------- |
| `icon`                    | `IconSvgElement`   | Required     | The main icon to display (a named export from an icon package)  |
| `altIcon`                 | `IconSvgElement`   | -            | Alternative icon for states, interactions, or dynamic swapping  |
| `showAlt`                 | `boolean`          | false        | When true, displays `altIcon` instead of `icon`                 |
| `size`                    | `number \| string` | 24           | Icon size in pixels                                             |
| `color`                   | `string`           | currentColor | Icon color (any CSS color value)                                |
| `strokeWidth`             | `number`           | 1.5          | Width of the icon strokes                                       |
| `absoluteStrokeWidth`     | `boolean`          | false        | When true, stroke width is scaled relative to icon size         |
| `primaryColor`            | `string`           | -            | Primary color for multicolor Pro icons (Bulk, Duotone, Twotone) |
| `secondaryColor`          | `string`           | -            | Secondary color for multicolor Pro icons                        |
| `disableSecondaryOpacity` | `boolean`          | false        | Disables default opacity applied to the secondary color         |
| `className`               | `string`           | -            | Additional CSS classes                                          |

### Vue

Install:

```bash
npm install @exinoicons/vue @exinoicons/core-free-icons
```

Render:

```vue
<script setup>
import { ExinoiconsIcon } from "@exinoicons/vue";
import { Search01Icon } from "@exinoicons/core-free-icons";
</script>

<template>
  <!-- Only :icon is required; pass other props only to override a default. -->
  <ExinoiconsIcon :icon="Search01Icon" />
</template>
```

Props:

| Prop          | Type            | Default      | Description                                                    |
| ------------- | --------------- | ------------ | -------------------------------------------------------------- |
| `icon`        | `IconSvgObject` | Required     | The main icon to display (a named export from an icon package) |
| `altIcon`     | `IconSvgObject` | -            | Alternative icon for states, interactions, or animations       |
| `showAlt`     | `boolean`       | false        | When true, displays `altIcon` instead of `icon`                |
| `size`        | `number`        | 24           | Icon size in pixels                                            |
| `color`       | `string`        | currentColor | Icon color (any CSS color value)                               |
| `strokeWidth` | `number`        | 1.5          | Width of the icon strokes                                      |
| `class`       | `string`        | -            | Additional CSS classes                                         |

### Svelte

Install:

```bash
npm install @exinoicons/svelte @exinoicons/core-free-icons
```

Render:

```svelte
<script>
  import { ExinoiconsIcon } from '@exinoicons/svelte'
  import { Search01Icon } from '@exinoicons/core-free-icons'
</script>

<!-- Only icon is required; pass other props only to override a default. -->
<ExinoiconsIcon icon={Search01Icon} />
```

Props:

| Prop          | Type            | Default      | Description                                                    |
| ------------- | --------------- | ------------ | -------------------------------------------------------------- |
| `icon`        | `IconSvgObject` | Required     | The main icon to display (a named export from an icon package) |
| `altIcon`     | `IconSvgObject` | -            | Alternative icon for states, interactions, or animations       |
| `showAlt`     | `boolean`       | false        | When true, displays `altIcon` instead of `icon`                |
| `size`        | `number`        | 24           | Icon size in pixels                                            |
| `color`       | `string`        | currentColor | Icon color (any CSS color value)                               |
| `strokeWidth` | `number`        | 1.5          | Width of the icon strokes                                      |
| `class`       | `string`        | -            | Additional CSS classes                                         |

### SolidJS

Install:

```bash
npm install @exinoicons/solid-js @exinoicons/core-free-icons
```

> **Note:** The package is `@exinoicons/solid-js` — not `@exinoicons/solid`. "Solid" is also an icon
> style (`@exinoicons-pro/core-solid-*`), so don't confuse the two.

Render:

```jsx
import { ExinoiconsIcon } from "@exinoicons/solid-js";
import { Search01Icon } from "@exinoicons/core-free-icons";

function App() {
  // Only `icon` is required; pass other props only to override a default.
  return <ExinoiconsIcon icon={Search01Icon} />;
}
```

Props:

| Prop                      | Type               | Default      | Description                                                     |
| ------------------------- | ------------------ | ------------ | --------------------------------------------------------------- |
| `icon`                    | `IconSvgElement`   | Required     | The main icon to display (a named export from an icon package)  |
| `altIcon`                 | `IconSvgElement`   | -            | Alternative icon for states, interactions, or dynamic swapping  |
| `showAlt`                 | `boolean`          | false        | When true, displays `altIcon` instead of `icon`                 |
| `size`                    | `number \| string` | 24           | Icon size in pixels                                             |
| `color`                   | `string`           | currentColor | Icon color (any CSS color value)                                |
| `strokeWidth`             | `number`           | 1.5          | Width of the icon strokes                                       |
| `absoluteStrokeWidth`     | `boolean`          | false        | When true, stroke width is scaled relative to icon size         |
| `primaryColor`            | `string`           | -            | Primary color for multicolor Pro icons (Bulk, Duotone, Twotone) |
| `secondaryColor`          | `string`           | -            | Secondary color for multicolor Pro icons                        |
| `disableSecondaryOpacity` | `boolean`          | false        | Disables default opacity applied to the secondary color         |
| `class`                   | `string`           | -            | Additional CSS classes                                          |

### Angular

Install:

```bash
npm install @exinoicons/angular @exinoicons/core-free-icons
```

> **Note:** The component is `ExinoiconsIconComponent`, rendered via the `<exinoicons-icon>` selector. Import the icon in the component class and bind it with `[icon]`.

Render:

```typescript
// example.component.ts
import { Component } from "@angular/core";
import { ExinoiconsIconComponent } from "@exinoicons/angular";
import { Search01Icon } from "@exinoicons/core-free-icons";

@Component({
  selector: "app-example",
  standalone: true,
  imports: [ExinoiconsIconComponent],
  // Only [icon] is required; bind other props only to override a default.
  template: `<exinoicons-icon [icon]="searchIcon" />`,
})
export class ExampleComponent {
  searchIcon = Search01Icon;
}
```

Props:

| Prop          | Type            | Default      | Description                                                    |
| ------------- | --------------- | ------------ | -------------------------------------------------------------- |
| `icon`        | `IconSvgObject` | Required     | The main icon to display (a named export from an icon package) |
| `altIcon`     | `IconSvgObject` | -            | Alternative icon for states, interactions, or animations       |
| `showAlt`     | `boolean`       | false        | When true, displays `altIcon` instead of `icon`                |
| `size`        | `number`        | 24           | Icon size in pixels                                            |
| `color`       | `string`        | currentColor | Icon color (any CSS color value)                               |
| `strokeWidth` | `number`        | 1.5          | Width of the icon strokes                                      |
| `class`       | `string`        | -            | Additional CSS classes                                         |

### React Native

Install:

```bash
npm install @exinoicons/react-native @exinoicons/core-free-icons
```

> **Note:** Color defaults to `#000000` (not `currentColor`) because React Native has no CSS color inheritance.

Render:

```jsx
import { ExinoiconsIcon } from "@exinoicons/react-native";
import { Search01Icon } from "@exinoicons/core-free-icons";

export default function App() {
  // Only `icon` is required; pass other props only to override a default.
  return <ExinoiconsIcon icon={Search01Icon} />;
}
```

Props:

| Prop          | Type            | Default  | Description                                                    |
| ------------- | --------------- | -------- | -------------------------------------------------------------- |
| `icon`        | `IconSvgObject` | Required | The main icon to display (a named export from an icon package) |
| `altIcon`     | `IconSvgObject` | -        | Alternative icon for states, interactions, or animations       |
| `showAlt`     | `boolean`       | false    | When true, displays `altIcon` instead of `icon`                |
| `size`        | `number`        | 24       | Icon size in pixels                                            |
| `color`       | `string`        | #000000  | Icon color (color string)                                      |
| `strokeWidth` | `number`        | 1.5      | Width of the icon strokes                                      |

### Flutter

Install:

```bash
flutter pub add exinoicons
```

> **Note:** Flutter bundles the icon data directly: `ExinoIcons.*` constants are `List<List<dynamic>>` SVG path data, not `IconData`. Render with `ExinoIcon`, never Flutter's `Icon`.

Render:

```dart
import 'package:exinoicons/exinoicons.dart';

// Only `icon` is required; color and size fall back to the ambient IconTheme.
// Pass color/size only to override those defaults.
ExinoIcon(
  icon: ExinoIcons.strokeRoundedHome01,
  color: Colors.black,
)
```

Props:

| Prop          | Type                  | Default         | Description                                                         |
| ------------- | --------------------- | --------------- | ------------------------------------------------------------------- |
| `icon`        | `List<List<dynamic>>` | Required        | The icon data (a `ExinoIcons.*` constant) — NOT a Flutter `IconData` |
| `color`       | `Color`               | IconTheme color | Icon color; falls back to the ambient `IconTheme`                   |
| `size`        | `double`              | 24.0            | Icon size in logical pixels; falls back to `IconTheme` size         |
| `strokeWidth` | `double`              | -               | Stroke thickness for stroke-style icons                             |

## 4. Find an icon

- **React, Vue, Svelte, SolidJS, Angular, React Native** — PascalCase named exports ending in `Icon` (e.g. `Search01Icon`, `Home01Icon`,
  `Notification03Icon`). Number words are spelled out: `1st-bracket` → `FirstBracketIcon`,
  `3d-view` → `ThreeDViewIcon`. Import from `@exinoicons/core-free-icons`.
  Full list: [references/icon-list.md](references/icon-list.md) (5,471 icons).
- **Flutter** — `ExinoIcons.strokeRounded<Name>` constants (e.g. `ExinoIcons.strokeRoundedSearch01`).
  Full list: [references/icon-list-flutter.md](references/icon-list-flutter.md) (4,547 icons).

**Grep these files — don't read them whole** (see the warning at the top). Search for a term,
copy the **exact** matching name, and don't guess: many icons have numbered variants (`01`, `02`,
`03`) — pick the one that best fits.

## 5. Free vs Pro icons

- **Free** (default): `@exinoicons/core-free-icons` — 6,000+ stroke-rounded icons. Suggest only these
  unless the user has a Pro license.
- **Pro** (license required, authenticated install): `@exinoicons-pro/core-stroke-rounded`, `@exinoicons-pro/core-stroke-sharp`, `@exinoicons-pro/core-stroke-standard`, `@exinoicons-pro/core-solid-rounded`, `@exinoicons-pro/core-solid-sharp`, `@exinoicons-pro/core-solid-standard`, `@exinoicons-pro/core-bulk-rounded`, `@exinoicons-pro/core-duotone-rounded`, `@exinoicons-pro/core-duotone-standard`, `@exinoicons-pro/core-twotone-rounded`.

Never suggest a Pro-only icon to a free user — the import will fail.

## Troubleshooting

- **Icon not rendering**: confirm `icon` is a valid export/constant and not null.
- **JS import fails**: the name is misspelled or Pro-only. Check the exact export in
  `references/icon-list.md`.
- **Flutter type error expecting `IconData`**: wrong type — Exinoicons constants are
  `List<List<dynamic>>`. Render with `ExinoIcon`, not `Icon`.
