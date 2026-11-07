import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.tsx'],
    setupFiles: ['src/test-setup.ts'],
    snapshotSerializers: ['./scripts/emotion-serializer.mjs'],
  },
});
