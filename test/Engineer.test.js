/* 
create test for the properties below with dummy input data
1. name
2. id
3. email
4. getGithub()
5. getRole()
*/

const Engineer = require('../lib/Engineer');

describe('Name', ()=> {
  test('the name should be Steven', () => {

    const testName = "Steven";    
    const result = new Engineer(testName, 123456, "steven123456@gmail.com");

    expect(result.name).toBe(testName);
  })
})

describe('Id', ()=> {
  test('the id should be 123456', () => {

    const testId = 123456;    
    const result = new Engineer("Steven", testId, "steven123456@gmail.com");

    expect(result.id).toBe(testId);
  })
})

describe('email', ()=> {
  test('the email should be steven123456@gmail.com', () => {

    const testEmail = "steven123456@gmail.com";    
    const result = new Engineer("Steven", 123456, testEmail);

    expect(result.email).toBe(testEmail);
  })
})

describe('getGithub', ()=> {
  test('the getGithub should return Engineer', () => {

    const testGetGithub = "steven123456";    
    const result = new Engineer("Steven", 123456, "steven123456@gmail.com","steven123456");

    expect(result.getGithub()).toBe(testGetGithub);
  })
})

describe('getRole', ()=> {
  test('the getRole should return Engineer', () => {

    const testGetRole = "Engineer";    
    const result = new Engineer("Steven", 123456, "steven123456@gmail.com");

    expect(result.getRole()).toBe(testGetRole);
  })
})
