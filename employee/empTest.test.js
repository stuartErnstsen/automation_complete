const { Capabilities, Builder, By } = require('selenium-webdriver')

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const empList = require('./empList')


beforeAll(async () => {
    await driver.get('http://localhost:3000')
})

afterAll(async () => {
    await driver.quit()
})


const checkEmp = async (driver, empIndex) => {
    await driver.findElement(By.xpath(`//li[text()="${empList[empIndex].name}"]`)).click()


    const nameValue = await driver.findElement(By.name('nameEntry')).getAttribute('value')
    const phoneValue = await driver.findElement(By.name('phoneEntry')).getAttribute('value')

    expect(nameValue).toEqual(empList[empIndex].name)
    expect(phoneValue).toEqual(empList[empIndex].phone)
    await driver.sleep(2000)
}


test('test the thing', async () => {

    // expect(true).toBeTruthy()
    // await driver.sleep(5000)
    for (let i = 0; i < empList.length; i++) {
        await checkEmp(driver, i)
    }
})