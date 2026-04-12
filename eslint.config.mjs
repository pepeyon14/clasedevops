import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.node, ...globals.jest } }, //aqui se agrga el global de jest para que no marque error en el test de jest
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } }, //esto permite que el require de test funcione correctamente
]);
