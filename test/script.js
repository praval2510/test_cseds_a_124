async function fetchGitHubUsers() {
    try {
        const response = await fetch('https://api.github.com/users');
        const users = await response.json();
        const topUsers = users.slice(0, 10);
        displayUsers(topUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = user.html_url;
        link.textContent = user.login;
        link.target = '_blank';
        listItem.appendChild(link);
        userList.appendChild(listItem);
    });
}

function sortUsers() {
    const sortOption = document.getElementById('sortOptions').value;
    const userList = document.getElementById('userList');
    let usersArray = Array.from(userList.children);

    if (sortOption === 'alphabetical') {
        usersArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
    } else {
        usersArray = usersArray.sort(() => Math.random() - 0.5);
    }

    usersArray.forEach(user => userList.appendChild(user));
}

