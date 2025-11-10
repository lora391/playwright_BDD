const { expect } = require('@playwright/test');

class login_register
{
    constructor(page)
    {
        this.page=page;
        this.myAccount=this.page.locator("#menu-item-50"); //my account locator
        this.registerForm=this.page.locator(".u-column2.col-2"); //register form locator
        this.registerEmail=this.page.locator("#reg_email"); //register email
        this.registerPassword=this.page.locator("#reg_password"); //register password field
        this.registerButton=this.page.getByRole("button",{name:"Register"}); //register button
        this.registerError=this.page.locator(".woocommerce-error");

        this.loginEmail=this.page.locator("#username");
        this.loginPassword=this.page.locator("#password");
        this.loginButton=this.page.getByRole("button",{name:"Login"});
        this.loginError=this.page.locator(".woocommerce-error");
        
        this.loginSuccessMessage=this.page.locator(".woocommerce-MyAccount-content");

    }
    async validRegistration(registerData)
    {
        await expect(this.registerForm).toBeVisible();
        await this.registerEmail.fill(registerData.email);
        //since password validation not responding with .fill(), first click on the field, fill with blank value, and then type into field with some delay while typing
        await this.registerPassword.click();
        await this.registerPassword.fill(''); // clear any existing
        await this.registerPassword.type(registerData.password,{delay:100});

        await expect(this.registerButton).toBeEnabled();
        await this.registerButton.click();
      
    }
    async pageAfterRegistration()
    {
        await expect(this.page.getByText("Sign out")).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    }
    async emptyEmailRegistration()
    {
        await expect(this.registerForm).toBeVisible();
       
        await expect(this.registerButton).toBeEnabled();
        await this.registerButton.click();
        
      
    }
    async emptyEmailValidation()
    {
        await expect(this.registerError).toContainText("Please provide a valid email address.");
    }
    async disableRegistration(registerData)
    {
        await expect(this.registerForm).toBeVisible();
        await this.registerEmail.fill(registerData.email);
        //since password validation not responding with .fill(), first click on the field, fill with blank value, and then type into field with some delay while typing
        await this.registerPassword.click();
        await this.registerPassword.fill(''); // clear any existing
        await this.registerPassword.type(registerData.password,{delay:100});

        
    }
    async disableRegistrationValidation()
    {
        await expect(this.registerButton).toBeDisabled();   
    }
    async login(email, password)
    {
        await this.loginEmail.type(email);
        await this.loginPassword.type(password);
        await this.loginButton.click();
    }
    async loginSuccessValidation()
    {
        if(await this.loginSuccessMessage.isVisible())
        {
            const text=await this.loginSuccessMessage.textContent();
            return text;

        }
        else if(await this.loginError.isVisible())
        {
            const text=await this.loginError.textContent();
            return text;
        }
        else
        {
            return "invalid scenario";
        }
    }
}

module.exports=login_register;