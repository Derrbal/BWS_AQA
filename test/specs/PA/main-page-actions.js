const mainpage = require('../PO/main-page');
const mainp = new mainpage();

class mainpageActions {
    
    OpenMasterSignInForm() {
        mainp.SignInAsMaster_Button.click();
    }

}

module.exports = mainpageActions;