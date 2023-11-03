import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.esm.js",
    format: "es",
  },
  plugins: [
    resolve({
        extensions: [".js", ".ts"],
    }),
    babel({
      babelHelpers: "runtime",
      extensions: [".js", ".ts"],

    }),
    commonjs(),
    // typescript({
    //   noEmitOnError: true,
    // }),
    // postcss({
    //   // extract: false,
    //   modules: {
    //     localsConvention: 'camelCase',
    //   },
    // }),
  ],
};
