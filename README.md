# fennek2
## Getting Started

Note: Puppeteer requires at least Node v6.4.0, but the examples below use async/await which is only supported in Node v7.6.0 or greater.

1. Install **npm10** on tumbleweed:

`sudo zypper in npm10`

2. Install Puppeteer:

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

### Capturing specific WebUI Elements:

```
// Systems : SSM Systems
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/ListSystems.do');
    const ssmSystems = await page.$('#spacewalk-content');
    await ssmSystems.screenshot({path: systemsSSM + 'ssmSystems.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmSystems.png'.bgMagenta.bold);
```

3. Save the file as example.js and execute the following on the command line:

`node example.js`


For more informatin on working with the Google puppeteer API see:

https://github.com/GoogleChrome/puppeteer

You can also view the official API:
 
https://pptr.dev/
