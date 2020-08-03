import typescript from "@rollup/plugin-typescript";

export default {
  input: {
    a: "src/a.ts",
    b: "src/b.ts",
  },
  output: {
    dir: "dist1",
    format: "cjs",
  },
  plugins: [
    //
    typescript({ tsconfig: "tsconfig.cjs.json" }),
  ],
};
