describe ('Login into Transition',function()
{
    it('Navigate to the Login Page',function()
    {

        browser.driver.get('https://qa-network.curaspan.local/connect/curaspanidentity/login?service=https%3A%2F%2Fqa-network.curaspan.local%2Fconnect%2Fcommonservices%2Fj_spring_cas_security_check');

        browser.driver.findElement(by.xpath("//input[@id='username']")).sendKeys('shouvanikrock');
        browser.driver.findElement(by.id('password')).sendKeys('Staging123');
        browser.driver.findElement(by.id('login')).click();
        browser.sleep(35000);
    });


    it('Navigate to nH Discharge',function()
    {
        browser.driver.findElement(by.xpath("//div[@class='row cards-row']//div[1]//div[1]")).click();
        driver.driver.
        browser.driver.findElement(by.xpath("//button[@class='cs-gray-btn pull-right ng-scope']")).click();
    });



}
);