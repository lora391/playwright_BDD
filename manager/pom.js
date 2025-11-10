const Home=require("../pageObjects/home");
const register=require("../pageObjects/login_register");
const plp=require("../pageObjects/plp");

 class pom{
    constructor(page)
    {
        this.page=page;
        this.registerObject=new register(this.page);
        this.homeObject= new Home(this.page);
        this.plpObject=new plp(this.page);
        
    }
    getRegisterObject()
    {
        return this.registerObject;
    }
    getHomeObject()
    {
        return this.homeObject;
    }
    getPlpObject()
    {
        return this.plpObject;
    }
}
module.exports=pom;