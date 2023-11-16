(() => {

    // getSpecificUser();
    // getImage();
    getSecondImage()

})();

function getSpecificUser() {
    const url = `https://jsonplaceholder.org/users`;
    fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }).then((data) => {
        data.sort((a, b) => a.firstname.localeCompare(b.firstname));

        // data.sort((a, b) => {
        //     const nameA = a.firstname.toUpperCase();
        //     const nameB = b.firstname.toUpperCase();
        //     if (nameA < nameB) {
        //         return -1;
        //     }
        //     if (nameA > nameB) {
        //         return 1;
        //     }
        //     return 0;
        // });
        console.log(data);
        let sepcificArray = data.filter((user) => user.email === 'emmagarcia@example.com');
        console.log(sepcificArray);
    }).catch((error) => {
        console.log(error)
    });
}

function getImage() {
    let imageElement = document.getElementById('image');
    fetch('https://source.unsplash.com/random').then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.blob();
    }).then((data) => {
        console.log(data);
        let objectURL = URL.createObjectURL(data);
        imageElement.src = objectURL;
        console.log(objectURL);
    }).catch((error) => {
        console.log(error)
    });
}

function getSecondImage() {
    // let imageElement = document.getElementById('image');
    const API_KEY = 'live_Dm1hjl4QuiUdlg4CLT1NvksZLnDid9Gwn3yl2H81OcqnWROSM2jH8Na6HzAvXf3g'
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${API_KEY}`;
    fetch(url, {
        headers: {
            'x-api-key': API_KEY
        }
    }).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }).then((data) => {
        console.log(data);

    }).catch((error) => { })


}