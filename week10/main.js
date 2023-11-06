let url = 'https://jsonplaceholder.org/users';
fetch(url)
    .then((response) => {
        console.log(response)
        //we have a response from the server
        if (!response.ok) throw new Error(response.statusText);
        //if we got a bad response then we can trigger the catch
        //if the response was a JSON file then we can extract the contents with:
        return response.json();
        //extract the JSON String from the body of the response
        //convert the JSON String into an object
    })
    .then((data) => {
        console.log(data);
        const userList = new DocumentFragment();
        data.forEach((item, index) => {
            let user = document.createElement('div');
            user.classList.add('userCard');
            user.innerHTML = `<h1>${index + 1}. ${item.lastname} ${item.firstname}</h1>
            <p>✉️Email: ${item.email}</p>
            <p>🏠Address: ${item.address.street}${item.address.city}</p>`;
            userList.appendChild(user);
        });
        document.querySelector('main').appendChild(userList);
        //data will be the Object that was extracted from the JSON String
    })
    .catch((err) => {
        //this code runs if there was a network error preventing sending the request
        //OR if the response gave a bad status code
    });