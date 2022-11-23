/* 
create test for the properties below with dummy input data
1. name
2. id
3. email
4. getSchool()
5. getRole()
*/

const Intern = require('../lib/Intern');

describe('Name', ()=> {
  test('the name should be Steven', () => {

    const testName = "Steven";    
    const result = new Intern(testName, 123456, "steven123456@gmail.com");

    expect(result.name).toBe(testName);
  })
})

describe('Id', ()=> {
  test('the id should be 123456', () => {

    const testId = 123456;    
    const result = new Intern("Steven", testId, "steven123456@gmail.com");

    expect(result.id).toBe(testId);
  })
})

describe('email', ()=> {
  test('the email should be steven123456@gmail.com', () => {

    const testEmail = "steven123456@gmail.com";    
    const result = new Intern("Steven", 123456, testEmail);

    expect(result.email).toBe(testEmail);
  })
})

describe('getSchool', ()=> {
  test('the getSchool should return RIT', () => {

    const testGetSchool = "RIT";    
    const result = new Intern("Steven", 123456, "steven123456@gmail.com","RIT");

    expect(result.getSchool()).toBe(testGetSchool);
  })
})

describe('getRole', ()=> {
  test('the getRole should return Intern', () => {

    const testGetRole = "Intern";    
    const result = new Intern("Steven", 123456, "steven123456@gmail.com");

    expect(result.getRole()).toBe(testGetRole);
  })
})
