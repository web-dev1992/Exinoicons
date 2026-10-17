# @exinoicons/docs

Interactive documentation for browsing free Exinoicons and copying import statements.

## Develop

From the repo root:

```bash
pnpm install
pnpm docs:dev
```

Or from this package:

```bash
pnpm dev
```

## Behavior

- Icon list is derived at runtime from `@exinoicons/core-free-icons` exports (including custom icons).
- Browse with category chips and A–Z letter filters (categories are inferred from icon names).
- Click an icon name (or preview) to copy:
  `import { IconName } from "@exinoicons/core-free-icons";`
