const Employee = require("../lib/employee");

describe ("Employee class", () => {
    it("should create a new Employee instance", () => {
        let testNm= "Alex";
        let testId= "1";
        let testEmail= "test@test.com";
        
        let testEmp = new Employee(testNm, testId, testEmail)
        
        expect(testEmp.name).toBe(testNm)
    })

    it("should return this.name when getName is called", () => {
        let testNm= "Alex";
        let testId= "1";
        let testEmail= "test@test.com";
        
        let testEmp = new Employee(testNm, testId, testEmail)

        let practiceName = testEmp.getName();

        expect(practiceName).toBe(testEmp.name);
    })

    it("should return this.id when getId is called", () => {
        let testNm= "Alex";
        let testId= "1";
        let testEmail= "test@test.com";
        
        let testEmp = new Employee(testNm, testId, testEmail)

        let practiceId = testEmp.getId();

        expect(practiceId).toBe(testEmp.id);
    })

    it("should return this.email when getEmail is called", () => {
        let testNm= "Alex";
        let testId= "1";
        let testEmail= "test@test.com";
        
        let testEmp = new Employee(testNm, testId, testEmail)

        let practiceEmail = testEmp.getEmail();

        expect(practiceEmail).toBe(testEmp.email);
    })

    it("should return 'Employee' when getRole is called", () => {
        let testNm= "Alex";
        let testId= "1";
        let testEmail= "test@test.com";
        
        let testEmp = new Employee(testNm, testId, testEmail)

        let practiceRole = testEmp.getRole();

        expect(practiceRole).toBe('Employee');
    })
})