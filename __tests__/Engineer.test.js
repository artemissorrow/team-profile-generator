const Engineer = require("../lib/Engineer");

describe ("Engineer class", () => {
    it("should create a new Engineer instance", () => {
        let engName= "Sally";
        let engId= "1";
        let engEmail= "test@test.com";
        let engGithub= "UserName";
        
        let practiceEng = new Engineer(engName, engId, engEmail, engGithub)
        
        expect(practiceEng.name).toBe(engName)
    })

    it("should return this.github when getGithub is called", () => {
        let engName= "Sally";
        let engId= "1";
        let engEmail= "test@test.com";
        let engGithub= "UserName";

        let practiceEng = new Engineer(engName, engId, engEmail, engGithub)

        let practiceGit = practiceEng.getGithub();

        expect(practiceGit).toBe(practiceEng.github);
    })

    it("should return 'Engineer' when getRole is called", () => {
        let engName= "Sally";
        let engId= "1";
        let engEmail= "test@test.com";
        let engGithub= "UserName";

        let practiceEng = new Engineer(engName, engId, engEmail, engGithub);
        
        let practiceRole = practiceEng.getRole();

        expect(practiceRole).toBe('Engineer');
    })
})