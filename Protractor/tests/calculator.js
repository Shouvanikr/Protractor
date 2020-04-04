let homepage = require('../pages/homepage.js');
describe('Demo Calculator Tests' ,function()
{

    it('Addition Tests',function()
    {
      
      homepage.get('http://juliemr.github.io/protractor-demo/')
       
      homecpage.enterFirstNumber('2');
        
      homepage.enterSecondNumber('5');
       
      homepage.clickGO(); 
  
      homepage.verifyResults('7');

      browser.sleep(5000);
      
    });
    
    it('Substarction Tests',function()
    {

    });

}
);