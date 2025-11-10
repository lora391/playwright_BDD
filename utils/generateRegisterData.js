const {faker} = require("@faker-js/faker");

function getRegisterData()
{
    return{
        email: faker.internet.email(),
        password: "SleepAnimal@34564"
                 
}

    }

module.exports={getRegisterData};