class home
{
    constructor(page)
    {
        this.page=page;
        this.myAccount=this.page.locator("#menu-item-50"); //my account locator
        this.shop=this.page.locator("#menu-item-40"); 
        this.cart=this.page.locator("#wpmenucartli");
        this.cartQuantity=this.cart.locator(".cartcontents");
        this.cartAmount=this.cart.locator(".amount");

    }
    async goTo()
    {
        await this.page.goto("https://practice.automationtesting.in/");
    }
    async goToLoginRegisterForm()
    {
        await this.myAccount.click();
    }
    async goToPlp()
    {
        await this.shop.click();
    }
    async checkCartCount()
    {
        const text= await this.cartQuantity.textContent();
        return text.trim();
    }
    async checkCartAmount()
    {
        const text= await this.cartAmount.textContent();
        return text.trim();
    }
    async cartCountValidation(plpCount,PdpCount)
    {
        totalCount=plpCount+PdpCount;
        const text= await this.cartQuantity.textContent();
        await expect(text).toContain(totalCount.toString());
        
    }
}
module.exports=home;