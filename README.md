# Zerox <> Deno support issue

To reproduce the issue run:
```bash
cd deno
deno task start
```

The you get the following error:

...


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
