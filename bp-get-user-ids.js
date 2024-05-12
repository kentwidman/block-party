// This script just looks up the ids of a instagrm user need so we can block via api call in the other script.

const users = [
['Drake', '5/9/2024', 'Inaction', 'champagnepapi'],
['Hailey Bieber', '5/9/2024', 'Inaction', 'haileybieber'],
['Justin Bieber', '5/9/2024', 'Inaction', 'justinbieber'],
// ...
];

let updatedUsers = [];
let user_index = 0;

(function fetchUserData() {
  let user = users[user_index];
  let [name, date, action, username, id] = user;
  user_index += 1;
  console.log(`User: ${name}, Date: ${date}, Action: ${action}, Username: ${username}, Id: ${id}`);

  while(typeof id !== 'undefined') {
    user_index += 1;
    const user = users[user_index];
    [name, date, action, username, id] = user;
  }

  if (user_index >= users.length) {
    console.log('All users fetched:', updatedUsers);
    return;
  } else {
    setTimeout(function() {
      fetchUserData();
    }, 1000);
  }

  fetch(`https://www.instagram.com/web/search/topsearch/?query=${username}`)
  .then(response => response.json())
  .then(data => {
    const newUserData = [name, date, action, username, data.users[0].user.pk];
    // Add the user to the list of updated users
    updatedUsers.push(newUserData);
    console.log('User data fetched:', newUserData);
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });
}());
