
import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";

export default defineConfig({
  input: "src/index.ts",
  output: {
    file: "dist/types/index.d.ts",
    format: "es",
  },
  plugins: [dts()],
});
