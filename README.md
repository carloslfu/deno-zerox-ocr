# Zerox <> Deno support issue

To reproduce the issue run:
```bash
cd deno
deno task start
```

The you get the following error:

```
╰─❯ deno task start                                                                                                                                                  ─╯
Task start deno run -A --allow-scripts --env-file main.ts
error: Uncaught (in promise) TypeError: gm.prototype.options is not a function
    at Function.subClass (file:///Users/c/d/p/deno-zerox-ocr/deno/node_modules/.deno/gm@1.25.0/node_modules/gm/index.js:108:16)
    at new a (file:///Users/c/d/p/deno-zerox-ocr/deno/node_modules/.deno/pdf2pic@3.1.3/node_modules/pdf2pic/dist/index.js:1:1026)
    at c (file:///Users/c/d/p/deno-zerox-ocr/deno/node_modules/.deno/pdf2pic@3.1.3/node_modules/pdf2pic/dist/index.js:1:3611)
    at exports.fromPath (file:///Users/c/d/p/deno-zerox-ocr/deno/node_modules/.deno/pdf2pic@3.1.3/node_modules/pdf2pic/dist/index.js:1:5080)
    at file:///Users/c/d/p/deno-zerox-ocr/deno/node_modules/.deno/zerox@1.0.41/node_modules/zerox/node-zerox/dist/utils.js:299:55
    at step (file:///Users/c/d/p/deno-zerox-ocr/deno/node_modules/.deno/zerox@1.0.41/node_modules/zerox/node-zerox/dist/utils.js:67:23)
    at Object.next (file:///Users/c/d/p/deno-zerox-ocr/deno/node_modules/.deno/zerox@1.0.41/node_modules/zerox/node-zerox/dist/utils.js:48:53)
    at file:///Users/c/d/p/deno-zerox-ocr/deno/node_modules/.deno/zerox@1.0.41/node_modules/zerox/node-zerox/dist/utils.js:42:71
    at new Promise (<anonymous>)
    at __awaiter (file:///Users/c/d/p/deno-zerox-ocr/deno/node_modules/.deno/zerox@1.0.41/node_modules/zerox/node-zerox/dist/utils.js:38:12)
```

Same is done with Node for comparison:
```bash
cd node
npm install
npm start
```

Here we get the results:

```js
{
  completionTime: 21005,
  fileName: '25d2dfb0469f4ba595f808f602ee4e72',
  inputTokens: 36898,
  outputTokens: 517,
  pages: [
    {
      content: '| Type     | Description                               | Wrapper Class |\n' +
        '|----------|-------------------------------------------|---------------|\n' +
        '| byte     | 8-bit signed 2s complement integer        | Byte          |\n' +
        '| short    | 16-bit signed 2s complement integer       | Short         |\n' +
        '| int      | 32-bit signed 2s complement integer       | Integer       |\n' +
        '| long     | 64-bit signed 2s complement integer       | Long          |\n' +
        '| float    | 32-bit IEEE 754 floating point number     | Float         |\n' +
        '| double   | 64-bit floating point number              | Double        |\n'
    ]
  }
]
```
