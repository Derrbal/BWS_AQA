const registration = require('../PO/registration');
const start = new registration();
const testData = require('../Test Data/start-page-data.json');

class StartpageActions {
    
    OpenMasterSignInForm() {
        start.SignInAsMaster_Button.click();
    }
    OpenWorkerSignInForm() {
        start.SignInAsWorker_Button.click();
    }
    OpenSignUpForm() {
        start.SignUp_Link.click();
    }
    OpenSignInForm() {
        start.SignIn_Link.click();
    }
    FillMasterSignUpForm() {
        start.Email_Field.waitForExist();
        start.Email_Field.setValue(testData.Email);
        start.Name_Field.waitForExist();
        start.Name_Field.setValue(testData.TenantName);
        start.Password_Field.waitForExist();
        start.Password_Field.setValue(testData.MasterPassword);
    }
    FillMasterSignInForm() {
        start.Email_Field.waitForExist();
        start.Email_Field.setValue(testData.Email);
        start.Password_Field.waitForExist();
        start.Password_Field.setValue(testData.MasterPassword);
    }
    FillWorkerSignInForm() {
        start.TenantName_Field.waitForExist();
        start.TenantName_Field.setValue(testData.TenantNameForWorkerSignIn);
        start.WorkerName_Field.waitForExist();
        start.WorkerName_Field.setValue(testData.WorkerName);
        start.Password_Field.waitForExist();
        start.Password_Field.setValue(testData.WorkerPassword);
    }
    Sign() {
        start.Sign_Button.click();
    }
}

module.exports = StartpageActions;