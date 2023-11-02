let movieList = document.getElementById('movie-list');
let movieDetails = document.getElementById('movie-details');

movieList.addEventListener('click', (event) => {
    let target = event.target;
    console.log('event target', target)
    movieDetails.innerHTML = `
            <p>name is: ${target.textContent} is directed by  ${target.getAttribute('data-director')} in ${target.getAttribute('data-year')} year </p>
        `;
})