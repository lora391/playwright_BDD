const { expect } = require('@playwright/test');
class pdp{
    constructor(page)
    {
        this.page=page;
        this.pdpContent=this.page.locator("#content");
        this.pdpImage=this.pdpContent.locator(".images");
        this.pdpTitle=this.pdpContent.locator(".product_title.entry-title");
        this.pdpQuantity=this.pdpContent.locator(".quantity input");
        this.pdpAddToBasketButton=this.pdpContent.getByRole("button",{name:"Add to basket"});
        this.pdpDescription=this.page.locator(".description_tab");
        this.pdpReview=this.page.locator(".reviews_tab");
        this.addedToCartMessage=this.pdpContent.locator(".woocommerce-message");
        this.viewBasketButton=this.addedToCartMessage.getByRole("link",{name:"View Basket"});


    }
    async getPdpTitle()
    {
        return(await this.pdpTitle.textContent()).trim();
    }
    async validatePdpDetails(title)
    {
        await expect(this.pdpContent).toBeVisible();
        await expect(this.pdpImage).toBeVisible();
        await expect(this.pdpTitle).toContainText(title);
        console.log(await this.pdpQuantity.textContent());
        //await expect(this.pdpQuantity).toHaveValue("1"); //default 1 quantity should be there
        await expect(this.pdpDescription).toBeVisible();
        await expect(this.pdpReview).toBeVisible();

    }
    
    async addToCartFromPdp(quantity)
    {
        //change quantity to 2 and add product to cart
        await this.pdpQuantity.click();
        await this.pdpQuantity.press("Backspace"); //press backspace to clear quantity
        await this.page.waitForTimeout(100); //to wait sometime before cupdating quantity
        await this.pdpQuantity.type(String(quantity));
        await this.pdpAddToBasketButton.click();
        const addedQuantity=await this.pdpQuantity.inputValue(); //to get the input value
        return addedQuantity;
    }
    async addedToCartValidation(title,addedQuantity)
    {
        await expect(this.addedToCartMessage).toBeVisible();
        await expect(this.viewBasketButton).toBeVisible();
        const message=await this.addedToCartMessage.textContent();
        await expect(message).toContain(String(addedQuantity));
        await expect(message).toContain(title);
        await expect(message).toContain("have been added to your basket.");

    }
}
module.exports=pdp;