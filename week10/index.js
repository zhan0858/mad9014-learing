(() => {
    document.getElementById('findButton').addEventListener('click', handleClick)
})()

function handleClick() {
    let name = document.getElementById('nameInput').value;
    if (name) {
        PeriodicNationality(name);
    }
}

function PeriodicNationality(name) {
    let resultDiv = document.getElementById('result');
    fetch(`https://api.nationalize.io/?name=${name}`).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }).then((data) => {
        console.log(data);

    }).catch((err) => {

    });

}