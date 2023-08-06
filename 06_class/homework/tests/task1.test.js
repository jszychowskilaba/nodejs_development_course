test("Expect properties to not be changed", () => {
  const { person } = require("../tasks/task1/person");
  //Attempting to modify newPerson propertires
  person.firstName = "Homero";
  person.lastName = "Simpson";
  person.age = 35;
  person.email = "newEmail@gmail.com";

  expect(person.firstName).toBe("John");
  expect(person.lastName).toBe("Doe");
  expect(person.age).toBe(30);
  expect(person.email).toBe("john.doe@example.com");
});

test("Expect properties to ONLY be updated with updateInfo property", () => {
  const { person } = require("../tasks/task1/person");

  const newInfo = {
    firstName: "Jane",
    lastName: "Mary",
    age: 32,
    email: "mary.jane@example.com",
    surname: "MaryJane",
  };

  person.updateInfo(newInfo);
  person.name = "Jose"; // Name must not be changef with out updateInfo

  expect(person.firstName).toBe("Jane");
  expect(person.lastName).toBe("Mary");
  expect(person.age).toBe(32);
  expect(person.email).toBe("mary.jane@example.com");
  expect(person.surname).toBe(undefined);
  
});

test("Expect person address property to {}, non enumerable and non configurable", () => {
    const { person } = require("../tasks/task1/person");

    const personAddressDescriptors = Object.getOwnPropertyDescriptors(person).address;
    expect(personAddressDescriptors.value).toEqual({});
    expect(personAddressDescriptors.writable).toBe(true);
    expect(personAddressDescriptors.configurable).toBe(false);
    expect(personAddressDescriptors.enumerable).toBe(false);
})