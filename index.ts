import puppeteer, { Browser, Page } from "puppeteer";

async function pageWithDifferentIdentity(url: string, userAgent: string): Promise<void> {
    const browser: Browser = await puppeteer.launch({
        headless: false,
        executablePath: '/usr/bin/google-chrome'
    });
    const page: Page = await browser.newPage();
    await page.setUserAgent(userAgent);
    // await page.waitForTimeout(2000);
    await page.goto(url);
    // await page.waitForTimeout(2000);
    // await page.click('https://oladoc.com/health-zone/')
    // await browser.close();
}

const userAgents: string[] = [
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/37.0.2062.94 Chrome/37.0.2062.94 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9',
    'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4',
    'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240',
    'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0'
];
const url = 'https://oradentdentalclinic.com/';
for (let i = 0; i < 10; i++) {
    const userAgent: string = userAgents[i % userAgents.length];
    const randomDelay = Math.floor(Math.random() * 3000) + 2000;
    setTimeout((async () => {
        await pageWithDifferentIdentity(url, userAgent)
    }), randomDelay);
    console.log(randomDelay)
}