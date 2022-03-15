const Startpage = require('./test/specs/**/startpage.ts');
const start = new Startpage(); 

class StartpageActions {
    OpenMasterSignInForm() {
        start.SignInAsMaster_Button.click();

    }
}

module.exports = StartpageActions;