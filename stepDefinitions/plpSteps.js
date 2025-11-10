const{ Given, When, Then, setDefaultTimeout } =require("@cucumber/cucumber");
const POM= require("../manager/pom");
const playwright=require("@playwright/test");
const data=require("../testData/addToCartData.json");
const { expect } = require('@playwright/test');

setDefaultTimeout(30 * 1000); // ✅ increase timeout to 60 seconds


Given("user is on the Product Listing Page", async function()
{
    this.pom=new POM(this.page); //create instance of pom, this is used so that can use same pom object in all the steps 
    this.home=this.pom.getHomeObject();
    this.plp=this.pom.getPlpObject();
    await this.home.goTo();
    await this.home.goToPlp();
});
When("user adds a product to the cart from PLP", async function()
{
    await this.plp.addToCartFromPlp(data.plp.productIndex,data.plp.quantity); //product added to cart if title matching
    
});
Then("product should be added to the cart successfully", async function()
{
    await this.plp.addedToCartPlpValidation(data.plp.productIndex);
})
Then("cart icon should show correct product count", async function()
{
    let cartCount=await this.home.checkCartCount();
    await expect(cartCount).toContain(data.plp.quantity.toString()); // since cart returns 2 items, to compare with 2 quantity converted it into string & used contain comparision
})