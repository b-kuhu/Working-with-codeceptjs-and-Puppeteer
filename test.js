const puppeteer = require('puppeteer');

(async ()=>{
    const browser =  await puppeteer.launch({
        "headless":false
    });


const page = await browser.newPage();
await page.goto("file:///home/dell/Desktop/index.html");
await browser.close();
})();