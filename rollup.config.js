import typescript from "@rollup/plugin-typescript";

export default {
  input: {
    a: "src/a.ts",
    b: "src/b.ts",
  },
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    //
    typescript(),
  ],
};
