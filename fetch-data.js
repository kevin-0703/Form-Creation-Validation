// Step 1: Define the asynchronous function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container
    const dataContainer = document.getElementById('api-data');

    // Step 4: Use try-catch to fetch data
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear loading message
        dataContainer.innerHTML = '';

        // Step 6: Create and populate user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 7: Append list to container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 8: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 9: Call fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
