const { expect } = require('@playwright/test');
const pdp=require("./pdp"); //import pdp class

class plp{
    constructor(page)
    {
        this.page=page;
        this.productSlot=this.page.locator(".products.masonry-done li"); //will have all products
        this.productTitle=this.productSlot.locator("h3"); //will have title of all products
        this.productPrice=this.productSlot.locator(".price");
        this.addToBasketButton=this.productSlot.getByText("Add to basket");
       
    }
    async addToCartFromPlp(index,count)
    {
                while(count>0)
                {
                    await this.addToBasketButton.nth(index).click();
                    await this.page.waitForTimeout(1000); //to wait sometime before clicking on add to basket again
                    count--;
                }
      
    }
    async addedToCartPlpValidation(index)
    {
        
        await expect(this.productSlot.nth(index).getByRole("link",{name:"View Basket"})).toBeVisible();
    }
    async goToPdp(index)
    {
        await this.productTitle.nth(index).click(); //will go to the pdp of that page
        //await this.productTitle.nth(index).textContent();
        await this.page.waitForLoadState("networkidle"); //wait for pdp to load completely
        return new pdp(this.page);
    }
}
module.exports=plp;