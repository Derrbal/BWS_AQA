class registration {
    
    get Sign_Button () {return $('button[class = "styles_btn__9DPcn styles_btnColorOrange__Jnd2G styles_btnStyleFilled__UVKdC"]')};
    get Email_Field () {return $('input[name = "email"]')};
    get Password_Field () {return $('input[name = "password"]')};
    get SignInAsWorker_Button () {return $('button[class = "styles_button__azUJI"]')};
    get SignInAsMaster_Button () {return $('button[class="styles_button__JSGQl"]')};
    get TenantName_Field () {return $('input[name = "tenantName"]')};
    get WorkerName_Field () {return $('input[name = "workerName"]')};
    get SignUp_Link () {return $('a[href="/sign-up"]')};
    get SignIn_Link () {return $('a[href="/sign-in"]')};
    get Name_Field () {return $('input[name = "name"]')};
    get Logo () {return $('img[class="styles_signUpLogo__iiydr"]')};

}

module.exports = registration;