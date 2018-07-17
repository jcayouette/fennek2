# fennek2
## Getting Started

Note: Puppeteer requires at least Node v6.4.0, but the examples below use async/await which is only supported in Node v7.6.0 or greater.

Install npm10 on tumbleweed:
`sudo zypper in npm10`

Install Puppeteer:
`npm i puppeteer`

## Example - Navigates to https://example.com and saves a screenshot as example.png.

```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```

Save the file as example.js and execute the following on the command line:

`node example.js`
