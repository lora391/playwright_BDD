const{ Given, When, Then, setDefaultTimeout } =require("@cucumber/cucumber");
const POM= require("../manager/pom");
const registerData=require("../utils/generateRegisterData");
const playwright=require("@playwright/test");
const invalidData=require("../testData/invalidRegisterData.json");

setDefaultTimeout(30 * 1000); // ✅ increase timeout to 60 seconds
//Scenario 1 - valid registration
Given("user is in registration page or form", async function(){

    this.pom=new POM(this.page); //create instance of pom, this is used so that can use same pom object in all the steps 
    const home=this.pom.getHomeObject();
    this.register=this.pom.getRegisterObject();
    
    await home.goTo(); //go to the URl
    await home.goToLoginRegisterForm(); // go to register page from home
  
});
When("user registers with valid details", async function () {
    const data=registerData.getRegisterData(); //get the data
    console.log(data);
    await this.register.validRegistration(data); //call the function to do registration
});

Then("user should be successfully registered and see the valid message", async function () {
    await this.register.pageAfterRegistration();
})
//Scenario2 - registration with empty username & password

When("user does not enter email or password and click on register", async function () {
    
    await this.register.emptyEmailRegistration(); //call the function to do registration
});

Then("valid error message should be displayed", async function () {
    await this.register.emptyEmailValidation();
});
//Scenario3 - register button stays disabled with weak or empty password

When("user registers with valid email and weak or empty password", async function () {
 
    await this.register.disableRegistration(invalidData); //call the function to do registration
});

Then("register button should be disabled", async function () {
    await this.register.disableRegistrationValidation();
});

