const Intern = require("../lib/Intern");

describe ("Intern class", () => {
    it("should create a new Intern instance", () => {
        let intName= "Pat";
        let intId= "1";
        let intEmail= "test@test.com";
        let intSchool= "UPenn";
        
        let practiceInt = new Intern(intName, intId, intEmail, intSchool)
        
        expect(practiceInt.name).toBe(intName)
    })

    it("should return this.school when getSchool is called", () => {
        let intName= "Pat";
        let intId= "1";
        let intEmail= "test@test.com";
        let intSchool= "UPenn";
        
        let practiceInt = new Intern(intName, intId, intEmail, intSchool)

        let practiceSchool = practiceInt.getSchool();

        expect(practiceSchool).toBe(practiceInt.school);
    })

    it("should return 'Intern' when getRole is called", () => {
        let intName= "Pat";
        let intId= "1";
        let intEmail= "test@test.com";
        let intSchool= "UPenn";
        
        let practiceInt = new Intern(intName, intId, intEmail, intSchool)
        
        let practiceRole = practiceInt.getRole();

        expect(practiceRole).toBe('Intern');
    })
})