// Lodash
const _ = require("lodash");

// Only change code below this line
// users nested array with four objects starts here
const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: "male"
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female"
  },
  {
    id: 3,
    firstName: "Jim",
    lastName: "Carrey",
    age: 54,
    gender: "male"
  },
  {
    id: 4,
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female"
  }
];
// users nested array with four objects ends here

// getUser function - list of users starts here
function getUsers() {
  var output = "";
  for (let i = 0; i < users.length; i++) {
    output += `${users[i].id} - ${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n\n`;
  }
  console.log(output);
  return output;
}
// getUser function - list of users ends here

// findUserById(id) function starts here
function findUserById(id) {
  try {
    // add appropriate code here
    var user = _.filter(users, { id: id });
    var iFoundUser = `${user[0].id} - ${user[0].firstName} ${user[0].lastName} is ${user[0].age}, ${user[0].gender}`;
    console.log(iFoundUser);
    return iFoundUser;
  } catch (error) {
    console.log("Cannot read property 'id'"); // Change this line
    return "Cannot read property 'id'"; // Change this line
  }
}
// findUserById(id) function ends here
// Only change code above this line
getUsers();
findUserById(2); // Change this line

module.exports = findUserById;
