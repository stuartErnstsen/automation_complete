// We are importing some things here from Selenium, but also our array of employee information
const { By } = require("selenium-webdriver")
const empList = require('./empList.js')

export const empVerify = async (driver, empNumber) => {

    // First we are clicking on the employee based on the employee number parameter
    await (await driver.findElement(By.xpath(`//*[text()="${empInfo[empNumber].name}"]`))).click()

    // Now we're going to set up all of our selectors as variables before hand to make things a little easier for us later
    let empName = await driver.findElement(By.name('nameEntry'))
    let empPhone = await driver.findElement(By.name('phoneEntry'))
    let empTitle = await driver.findElement(By.name('titleEntry'))

    // We're now going to get the 'value' of each of our 3 input fields
    // We'll also log that in the console
    let name = await empName.getAttribute('value')
    console.log(`The employee's name is: ${name}`)


    let phone = await empPhone.getAttribute('value')
    console.log(`The employee's phone number is is: ${phone}`)


    let title = await empTitle.getAttribute('value')
    console.log(`The employee's title is: ${title}`)

    // Finally we have our automation expect the value of each of the input fields
    // to be equal to the employee information provided inside of our array
    expect(name).toBe(empList[empNumber].name)
    expect(phone).toBe(empList[empNumber].phone)
    expect(title).toBe(empList[empNumber].title)
}