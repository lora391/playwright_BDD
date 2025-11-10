const{ Given, When, Then, setDefaultTimeout } =require("@cucumber/cucumber");
const POM= require("../manager/pom");
const playwright=require("@playwright/test");
const { expect } = require('@playwright/test');

setDefaultTimeout(30 * 1000); // ✅ increase timeout to 60 seconds
//Scenario 1 - log in 
Given("user is in login page or form", async function(){

    this.pom=new POM(this.page); //create instance of pom, this is used so that can use same pom object in all the steps 
    const home=this.pom.getHomeObject();
    this.login=this.pom.getRegisterObject();
    
    await home.goTo(); //go to the URl
    await home.goToLoginRegisterForm(); // go to register page from home
  
});
When('user login with valid email {string} and password {string}', async function(email,password)
{
    await this.login.login(email, password);
});
Then('user should be logged in or get valid message {string}', async function(result)
{
    const text=await this.login.loginSuccessValidation();
    await expect(text).toContain(result);
});