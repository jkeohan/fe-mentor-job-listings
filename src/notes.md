
Needed to do the following:

```js
yarn add web-vitals --save-dev
yarn add typescript @typescript-eslint/parser
```

create tsconfig.json file and add

```js
{
    "include": [
        "./src/**/*"
    ],
    "compilerOptions": {
        "strict": true,
        "esModuleInterop": true,
        "lib": [
            "dom",
            "es2015"
        ],
        "jsx": "react"
    },
     "files": ["globals.d.ts"]
}
```