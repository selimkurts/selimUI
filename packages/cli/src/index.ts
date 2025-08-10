#!/usr/bin/env node
import { Command } from 'commander';
import kleur from 'kleur';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const program = new Command();
program
  .name('selimui')
  .description('SELIM UI CLI')
  .version('0.0.0');

function pickPackageManager(targetDir: string): 'pnpm' | 'yarn' | 'npm' {
  const has = (file: string) => {
    try { return !!require('node:fs').existsSync(path.join(targetDir, file)); } catch { return false; }
  };
  if (has('pnpm-lock.yaml')) return 'pnpm';
  if (has('yarn.lock')) return 'yarn';
  return 'npm';
}

async function ensureDir(filePath: string) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function writeIfMissing(filePath: string, content: string) {
  try {
    await fs.access(filePath);
    return false;
  } catch {
    await ensureDir(filePath);
    await fs.writeFile(filePath, content, 'utf8');
    return true;
  }
}

program
  .command('init')
  .description('Initialize SELIM UI in your project')
  .option('-p, --path <dir>', 'target project path', '.')
  .option('--skip-install', 'skip installing dependencies', false)
  .action(async (opts: { path: string; skipInstall: boolean }) => {
    const target = path.resolve(process.cwd(), opts.path);
    const pm = pickPackageManager(target);
    const pkgJsonPath = path.join(target, 'package.json');
    try {
      await fs.access(pkgJsonPath);
    } catch {
      console.error(kleur.red(`✖ package.json not found in ${target}`));
      process.exit(1);
    }

    const postcssPath = path.join(target, 'postcss.config.js');
    const tailwindPath = path.join(target, 'tailwind.config.ts');
    const stylesPath = path.join(target, 'styles', 'selimui.css');

    const postcssWrote = await writeIfMissing(postcssPath, `module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};\n`);
    const tailwindWrote = await writeIfMissing(tailwindPath, `import type { Config } from 'tailwindcss';\n\nconst config: Config = {\n  darkMode: ['class', '[data-theme="dark"]'],\n  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],\n  theme: {\n    extend: {\n      colors: {\n        background: 'var(--su-color-background)',\n        foreground: 'var(--su-color-foreground)',\n        primary: 'var(--su-color-primary)',\n      },\n      borderRadius: { md: 'var(--su-radius-md)' }\n    },\n  },\n  plugins: [],\n};\n\nexport default config;\n`);
    const stylesWrote = await writeIfMissing(stylesPath, `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@import '@selim-ui/react/styles.css';\n`);

    console.log(kleur.green(`✔ Files ${[postcssWrote && 'postcss.config.js', tailwindWrote && 'tailwind.config.ts', stylesWrote && 'styles/selimui.css'].filter(Boolean).join(', ')} created`));

    if (!opts.skipInstall) {
      const toAddDev = ['tailwindcss', 'postcss', 'autoprefixer'];
      const toAdd = ['@selim-ui/react'];
      const devArg = pm === 'npm' ? ['install', '--save-dev'] : ['add', '-D'];
      const addArg = pm === 'npm' ? ['install'] : ['add'];
      await new Promise<void>((resolve, reject) => {
        const child = spawn(pm, [...devArg, ...toAddDev], { cwd: target, stdio: 'inherit' });
        child.on('close', (code) => (code === 0 ? resolve() : reject(new Error('install failed'))));
      });
      await new Promise<void>((resolve, reject) => {
        const child = spawn(pm, [...addArg, ...toAdd], { cwd: target, stdio: 'inherit' });
        child.on('close', (code) => (code === 0 ? resolve() : reject(new Error('install failed'))));
      });
      console.log(kleur.green('✔ Dependencies installed'));
    } else {
      console.log(kleur.yellow('ℹ Skipped dependency installation (use --skip-install=false to install)'));
    }

    console.log(kleur.green('✔ SELIM UI initialized. Import styles (styles/selimui.css) in your app layout.'));
  });

const ADD_TEMPLATES: Record<string, { path: string; content: string }> = {
  button: {
    path: 'components/ui/button.tsx',
    content: `"use client";\nexport { Button } from '@selim-ui/react';\n`,
  },
  input: {
    path: 'components/ui/input.tsx',
    content: `"use client";\nexport { Input } from '@selim-ui/react';\n`,
  },
  alert: {
    path: 'components/ui/alert.tsx',
    content: `"use client";\nexport { Alert } from '@selim-ui/react';\n`,
  },
  card: {
    path: 'components/ui/card.tsx',
    content: `"use client";\nexport { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@selim-ui/react';\n`,
  },
  table: {
    path: 'components/ui/table.tsx',
    content: `"use client";\nexport { Table, THead, TBody, TR, TH, TD } from '@selim-ui/react';\n`,
  },
  checkbox: {
    path: 'components/ui/checkbox.tsx',
    content: `"use client";\nexport { Checkbox } from '@selim-ui/react';\n`,
  },
  radio: {
    path: 'components/ui/radio.tsx',
    content: `"use client";\nexport { Radio } from '@selim-ui/react';\n`,
  },
  switch: {
    path: 'components/ui/switch.tsx',
    content: `"use client";\nexport { Switch } from '@selim-ui/react';\n`,
  },
  select: {
    path: 'components/ui/select.tsx',
    content: `"use client";\nexport { Select } from '@selim-ui/react';\n`,
  },
};

program
  .command('add')
  .argument('<component>', 'component to add (e.g., button, input)')
  .option('-p, --path <dir>', 'target project path', '.')
  .description('Add a SELIM UI component to your project')
  .action(async (component: string, opts: { path: string }) => {
    const key = component.toLowerCase();
    const tpl = ADD_TEMPLATES[key];
    if (!tpl) {
      console.error(kleur.red(`✖ Unknown component: ${component}`));
      console.log('Available:', Object.keys(ADD_TEMPLATES).join(', '));
      process.exit(1);
    }
    const target = path.resolve(process.cwd(), opts.path);
    const outPath = path.join(target, tpl.path);
    await ensureDir(outPath);
    await fs.writeFile(outPath, tpl.content, 'utf8');
    console.log(kleur.green(`✔ Added ${component} → ${path.relative(target, outPath)}`));
  });

program.parse();
