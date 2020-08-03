# rollup-typescript-duplicate-repro

When `tsconfig.json > compilerOptions > module` options is set to `es6` or `esnext`,
and entry point `src/b.ts` imports another entry point `src/a.ts`,
the output of `src/b.ts` will container duplicated codes of `src/a.ts`.

Note that when `tsconfig.json > compilerOptions > module` is set to `commonjs`, this error will not occur.

Input:

```typescript
// entry point a.ts
export function hello() {
  return "hello";
}

// entry point b.ts
import { hello } from "./a";

export function sayHello() {
  console.log(hello());
}
```

Expected output:
(run `npx rollup -c rollup.config.cjs.js` to output to dist1)

```javascript
// a.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
function hello() {
  return "hello";
}
exports.hello = hello;

// b.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
const a_1 = require("./a");
function sayHello() {
  console.log(a_1.hello());
}
exports.sayHello = sayHello;
```

Actual ouput:
(run `npx rollup -c` to output to dist)

```javascript
// a.js
Object.defineProperty(exports, '__esModule', { value: true });

function hello() {
    return "hello";
}

exports.hello = hello;


// b.js
Object.defineProperty(exports, '__esModule', { value: true });

function hello() {
    return "hello";
}

function sayHello() {
    console.log(hello());
}

exports.sayHello = sayHello;
```
