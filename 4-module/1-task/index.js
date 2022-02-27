function makeFriendsList(friends) {
    ul = document.createElement('ul');
    for (let key of friends) {
      let li = document.createElement('li')
      li.innerHTML = `${key.firstName} ${key.lastName}`;
      ul.appendChild(li);
    }
    return ul;
}
