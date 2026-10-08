import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const includePattern = /<include\s+src="([^"]+)"\s*>\s*<\/include>/g;

function expandIncludes(filePath, seen = new Set()) {
  const absolutePath = path.resolve(filePath);
  if (seen.has(absolutePath)) {
    throw new Error(`Circular include: ${absolutePath}`);
  }

  seen.add(absolutePath);
  const directory = path.dirname(absolutePath);
  const html = fs.readFileSync(absolutePath, 'utf8').replace(includePattern, (_, src) => {
    return expandIncludes(path.resolve(directory, src), seen);
  });
  seen.delete(absolutePath);
  return html;
}

function htmlIncludes() {
  const partialsDir = path.resolve(rootDir, 'src/partials');

  return {
    name: 'html-includes',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const directory = path.dirname(ctx.filename);
        return html.replace(includePattern, (_, src) => {
          return expandIncludes(path.resolve(directory, src));
        });
      },
    },
    configureServer(server) {
      server.watcher.add(partialsDir);
      server.watcher.on('change', file => {
        if (file.startsWith(partialsDir)) {
          server.ws.send({ type: 'full-reload' });
        }
      });
    },
  };
}

export default defineConfig({
  root: 'src',
  base: '/',
  publicDir: false,
  plugins: [htmlIncludes()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(rootDir, 'src/index.html'),
        shopping: path.resolve(rootDir, 'src/shopping-cart.html'),
      },
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  },
});
