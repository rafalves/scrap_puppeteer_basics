const puppeteer = require('puppeteer')

    
const scrape = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100
    })

    const page = await browser.newPage()
    await page.goto('https://www.google.com')
    await page.reload()
    
    

    // for (let i = 0; i < 3; i++) {
    //     const context = await browser.createIncognitoBrowserContext()
    //     const page = await context.newPage()

    //     await page.goto('https://www.google.com')
    //     await page.waitForTimeout(2000)
    //     await context.close()
    // }

    // await page.goto('https://cobaltintelligence.com')

    // const title = await page.title()
    // console.log(title)

    // const h1 = await page.$eval('h1', el => el.textContent)
    // console.log('h1', h1)

    // // const dataPoints = await page.$$('.ml-9.text-lg.leading-6.font-medium.text-gray-900')
    // // console.log('dataPoints', dataPoints.length)
    // // for (let i = 0; i < dataPoints.length; i++) {
    // //     let name = dataPoints[i];
    // //     console.log(`${i+1} dataPoints:` , await name.evaluate( el => el.innerText))
    // // }
    
    // // // Sign in page and sign in
    // // await page.click('[href="https://app.cobaltintelligence.com/login"]')
    // // await page.waitForSelector('.mt-6.text-center.text-3xl.font-extrabold.text-gray-900')
    // // const singInText = await page.$eval('.mt-6.text-center.text-3xl.font-extrabold.text-gray-900', el => el.textContent)
    // // console.log('signInText', singInText)

    // await page.click('.mat-menu-trigger')
    // // click
    // //await page.click('.mat-menu-item:nth-of-type(3)')
    // // sometimes click does not work, do below
    // const element = await page.$('.mat-menu-item:nth-of-type(3)')
    // await page.evaluate(element => element.click(), element)
    // await page.waitForSelector('#businessName')
    // await page.type('#businessName', 'pizza')
    // await page.click('#businessName', {clickCount: 3})
    // await page.type('#businessName', 'pasta')
    // await page.click('[type="submit"]')

    // await page.goto('https://getbootstrap.com/docs/5.0/forms/select/')
    // await page.select('.form-select', '2')


    await page.waitForTimeout(5000)




    await browser.close()
}

scrape()