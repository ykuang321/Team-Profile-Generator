/* 
create test for the properties below with dummy input data
1. name
2. id
3. email
4. getName()
5. getId()
6. getEmail()
7. getRole()
*/

const Employee = require('../lib/Employee');

describe('Name', ()=> {
  test('the name should be Steven', () => {

    const testName = "Steven";    
    const result = new Employee(testName, 123456, "steven123456@gmail.com");

    expect(result.name).toBe(testName);
  })
})

describe('Id', ()=> {
  test('the id should be 123456', () => {

    const testId = "123456";    
    const result = new Employee("Steven", testId, "steven123456@gmail.com");

    expect(result.id).toBe(testId);
  })
})

describe('email', ()=> {
  test('the email should be steven123456@gmail.com', () => {

    const testEmail = "steven123456@gmail.com";    
    const result = new Employee("Steven", 123456, testEmail);

    expect(result.email).toBe(testEmail);
  })
})

describe('getName', ()=> {
  test('the getName method should be Steven', () => {

    const testGetName = "Steven";    
    const result = new Employee("Steven", 123456, "steven123456@gmail.com");

    expect(result.getName()).toBe(testGetName);
  })
})

describe('getID', ()=> {
  test('the getID should return 123456', () => {

    const testGetId = 123456;    
    const result = new Employee("Steven", 123456, "steven123456@gmail.com");

    expect(result.getId()).toBe(testGetId);
  })
})

describe('getEmail', ()=> {
  test('the getEmail should return steven123456@gmail.com', () => {

    const testGetEmail = "steven123456@gmail.com";    
    const result = new Employee("Steven", 123456, "steven123456@gmail.com");

    expect(result.getEmail()).toBe(testGetEmail);
  })
})

describe('getRole', ()=> {
  test('the getRole should return Employee', () => {

    const testGetRole = "Employee";    
    const result = new Employee("Steven", 123456, "steven123456@gmail.com");

    expect(result.getRole()).toBe(testGetRole);
  })
})