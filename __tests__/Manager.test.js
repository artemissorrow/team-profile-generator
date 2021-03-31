const Manager = require("../lib/Manager");

describe ("manager class", () => {
    it("should create a new Manager instance", () => {
        
        var manName = "Bob";
        var manId = "1";
        var manEmail = "test@test.com";
        var manOffice = "42";
        
        var practiceMan = new Manager(manName, manId, manEmail, manOffice)
        
        expect(practiceMan.name).toBe(manName)
    })

    it("should return 'Manager' when getRole is called", () => {
        var manName = "Bob";
        var manId = "1";
        var manEmail = "test@test.com";
        var manOffice = "42";
        var practiceMan = new Manager(manName, manId, manEmail, manOffice);
        
        var practiceRole = practiceMan.getRole();

        expect(practiceRole).toBe('Manager');
    })
})