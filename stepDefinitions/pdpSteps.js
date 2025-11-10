const{ Given, When, Then, setDefaultTimeout } =require("@cucumber/cucumber");
const POM= require("../manager/pom");
const playwright=require("@playwright/test");
const data=require("../testData/addToCartData.json");
const { expect } = require('@playwright/test');


When("user navigates to the PDP from PLP", async function()
{
    this.pdp=await this.plp.goToPdp(data.pdp.productIndex); //we get the object of pdp page here
})
Then("product details should be correct in PDP", async function()
{
    this.title=await this.pdp.getPdpTitle();
    await this.pdp.validatePdpDetails(this.title);

})
When("user adds the product to the cart from PDP", async function()
{
    this.quant=await this.pdp.addToCartFromPdp(data.pdp.quantity);
})
Then ("product should be added to the cart successfully from PDP", async function(){
    await this.pdp.addedToCartValidation(this.title,this.quant);
})