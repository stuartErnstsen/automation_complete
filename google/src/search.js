// Here we need to import By, which will allow us to use either css or xpath selectors in our code
// We're importing WebDriver so we can type one of our parameters in the function below
const { By } = require('selenium-webdriver');


module.exports = async function search(driver, searchTerm) {

    // We are starting with an await since we're dealing with promises and the browser
    // We have our automation find the element which we can then use the sendKeys method to type
    // into that element, and the \n to hit enter after typing the search term
    await driver.findElement(By.name('q')).sendKeys(`${searchTerm}\n`)

    // We are then setting a variable to be the text from the results of our Google search
    // Instead of using the sendKeys method, we are using the getText method which will return 
    // the text in that element as a string
    let resultsText = await driver.findElement(By.id('res')).getText()

    // We make our restults lower case and then expect it to contain our original search term
    expect(resultsText.toLowerCase()).toContain(searchTerm.toLowerCase())

    await driver.sleep(5000)

    // await driver.findElement(By.name('q')).clear()

    // await driver.findElement(By.name('q')).sendKeys('Muck-duck\n')

    // await driver.sleep(4000)
}