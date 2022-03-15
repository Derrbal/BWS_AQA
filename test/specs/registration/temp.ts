const assert = require('assert');
const StartpageActions = require('../PA/registration-actions');
const act = new StartpageActions(); 

describe('User', async () => {
    it('can sign up', async () => {
        browser.url('/');
        await act.OpenMasterSignInForm();
        await act.OpenSignUpForm();
        await act.FillMasterSignUpForm();
        await browser.pause(2000);
        await act.Sign();
        await act.Sign();
        await browser.pause(10000);
        await assert (await($('a[href="/eam"]')).isDisplayed() === true , "Error");
    })
    
    it('can sign in as a master', async () => {
        browser.url('/');
        await act.OpenMasterSignInForm();
        await act.FillMasterSignInForm();
        await browser.pause(2000);
        await act.Sign();
        await act.Sign();
        await browser.pause(10000);
        await assert (await($('a[href="/eam"]')).isDisplayed() === true , "Error");
    })

    it('can sign in as a worker', async () => {
        browser.url('/');
        await act.FillWorkerSignInForm();
        await browser.pause(2000);
        await act.Sign();
        await act.Sign();
        await browser.pause(10000);
        await assert (await($('a[href="/eam"]')).isDisplayed() === true , "Error");
    })
})