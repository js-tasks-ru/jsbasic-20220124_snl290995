function showSalary(users, age) {
    return users
      .filter(item => item.age <= age)
      .map(item => `${item.name}, ${item.balance}`)
      .join('\n');
  }


let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$1,490.15",
  "picture": "https://placehold.it/32x32",
  "age": 26,
  "name": "Duncan Randall",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user3 = {
  "balance": "$1,805.90",
  "picture": "https://placehold.it/32x32",
  "age": 43,
  "name": "Marty McFly",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

// Массив пользователей
let users = [user1, user2, user3]

let newUsers = showSalary(users, 40)
console.log( newUsers );
