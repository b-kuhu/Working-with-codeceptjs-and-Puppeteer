const puppeteer = require('puppeteer');

(async ()=>{
    const browser =  await puppeteer.launch({
        "headless":false
    });

const page = await browser.newPage();
await page.goto("file:///home/dell/Desktop/index.html");
const [username]=await page.$x("//input[@name='Name']");
await username.type('kuhu');

await browser.close();
})();