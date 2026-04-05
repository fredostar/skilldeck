import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs"],           // CommonJS pour compatibilité Node
    clean: true,
    banner: {
        js: "#!/usr/bin/env node", // ← indispensable pour un CLI npx
    },
});