const setWritableDescriptor = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    writable: value,
  });
};

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  updateInfo: (newInfo) => {
    Object.keys(person).forEach((key) => {
      if (Object.keys(newInfo).includes(key)) {
        // If new info is not in person, we ignore it
        setWritableDescriptor(person, key, true);
        person[key] = newInfo[key];
        setWritableDescriptor(person, key, false);
      }
    });
  },
};

Object.keys(person).forEach((key) => setWritableDescriptor(person, key, false));

module.exports = {
  person,
};
