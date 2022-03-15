const actions = require('./test/specs/**/startpageActions.ts');
const act = new actions(); 



describe('BWS', async () => {
    it('should open sign in as a master', async () => {
        browser.url('/');
        await browser.pause(5000)
        await act.OpenMasterSignInForm();
        await browser.pause(10000)
    })
})

