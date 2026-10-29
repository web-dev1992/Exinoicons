
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const input = 'src/index.ts';

const isReact = (id) =>
  id === 'react' || id.startsWith('react/');

const isCoreIcons = (id) =>
  id === '@exinoicons/core-free-icons' ||
  id.startsWith('@exinoicons/core-free-icons/');

const externalEsmCjs = (id) =>
  isReact(id) || isCoreIcons(id);

const basePlugins = [
  nodeResolve({
    extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
  }),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: false,
    sourceMap: false,
    noEmit: false,
    exclude: [
      '**/__tests__/**',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.ts',
      '**/*.spec.tsx',
    ],
  }),
];

/**
 * Creates package.json files inside output directories so Node
 * interprets ESM and CommonJS files with the correct module format.
 */
function writeModulePackageJson({ directory, type }) {
  return {
    name: `write-${type}-package-json`,
    generateBundle() {
      mkdirSync(directory, { recursive: true });
      writeFileSync(
        path.join(directory, 'package.json'),
        JSON.stringify({ type }, null, 2) + '\n',
      );
    },
  };
}

const prodPlugins = [
  terser({
    format: {
      comments: false,
    },
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_getters: true,
    },
  }),
];

export default defineConfig([
  // ESM: preserves individual modules for tree shaking.
  {
    input,
    output: {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].js',
      chunkFileNames: 'chunks/[name]-[hash].js',
    },
    external: externalEsmCjs,
    plugins: [
      ...basePlugins,
      writeModulePackageJson({
        directory: path.resolve('dist/esm'),
        type: 'module',
      }),
    ],
  },

  // CommonJS: a single compatibility entry.
  {
    input,
    output: {
      file: 'dist/cjs/index.cjs',
      format: 'cjs',
      exports: 'named',
      interop: 'auto',
    },
    external: externalEsmCjs,
    plugins: basePlugins,
  },

  // UMD: standalone browser build. React is provided by the host page.
  {
    input,
    output: {
      file: 'dist/umd/index.js',
      format: 'umd',
      name: 'ExinoiconsReact',
      exports: 'named',
      globals: {
        react: 'React',
        'react/jsx-runtime': 'jsxRuntime',
      },
    },
    external: isReact,
    plugins: [
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        sourceMap: false,
        noEmit: false,
        exclude: [
          '**/__tests__/**',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
        ],
      }),
      ...prodPlugins,
    ],
  },
]);
