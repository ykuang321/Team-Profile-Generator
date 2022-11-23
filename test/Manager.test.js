/* 
create test for the properties below with dummy input data
1. name
2. id
3. email
4. getOfficeNumber()
5. getRole()
*/

const Manager = require('../lib/Manager');

describe('Name', ()=> {
  test('the name should be Steven', () => {

    const testName = "Steven";    
    const result = new Manager(testName, 123456, "steven123456@gmail.com");

    expect(result.name).toBe(testName);
  })
})

describe('Id', ()=> {
  test('the id should be 123456', () => {

    const testId = 123456;    
    const result = new Manager("Steven", testId, "steven123456@gmail.com");

    expect(result.id).toBe(testId);
  })
})

describe('email', ()=> {
  test('the email should be steven123456@gmail.com', () => {

    const testEmail = "steven123456@gmail.com";    
    const result = new Manager("Steven", 123456, testEmail);

    expect(result.email).toBe(testEmail);
  })
})

describe('getOfficeNumber', ()=> {
  test('the getSchool should return RIT', () => {

    const testGetOfficeNumber = "111-222-3333";    
    const result = new Manager("Steven", 123456, "steven123456@gmail.com","111-222-3333");

    expect(result.getOfficeNumber()).toBe(testGetOfficeNumber);
  })
})

describe('getRole', ()=> {
  test('the getRole should return Manager', () => {

    const testGetRole = "Manager";    
    const result = new Manager("Steven", 123456, "steven123456@gmail.com");

    expect(result.getRole()).toBe(testGetRole);
  })
})
