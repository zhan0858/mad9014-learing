const API_KEY = '679f6362eb5ed713e61291e91ae499cc';
const APP = {
    init: () => {
        APP.loadData();
        window.addEventListener('popstate', APP2.popIn);
    },
    loadData: () => {
        let BASE_URL = 'https://api.themoviedb.org/3/trending/movie/';
        let time_window = 'day';
        fetch(`${BASE_URL}${time_window}?api_key=${API_KEY}`).then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        }).then((data) => {
            console.log(data);
            APP.displayData(data);
        }).catch((error) => {
            console.log(error);
        });
    },
    displayData: (data) => {
        let div = document.getElementById('main');
        div.innerHTML = '';

        // history.replaceState({}, null, '#list');
        history.replaceState(data, null, '#list');
        document.title = 'Movie List';
        data.results.forEach((movie) => {
            div.innerHTML +=
                `<div data-id='${movie.id}' class='card'> 
                <img src='https://image.tmdb.org/t/p/w500${movie.backdrop_path}' alt='${movie.title}'/>
                <h2>${movie.title}</h2>
                </div>`;
        })
        div.addEventListener('click', APP2.fetchCast)
    }
}

const APP2 = {
    fetchCast: (event) => {
        let id = event.target.closest('.card').getAttribute('data-id');
        // document.getElementById('list').classList.remove('active');
        // document.getElementById('details').classList.add('active');
        let url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
        fetch(url).then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        }).then((data) => {
            console.log('app2', data);
            APP2.displayCast(data);
        }).catch((error) => {
            console.log(error);
        });
    },
    displayCast: (data) => {
        let div = document.getElementById('main');
        div.innerHTML = '';
        history.pushState(data, null, '#details');
        document.title = 'Movie Cast';
        data.cast.forEach((cast) => {
            div.innerHTML +=
                `<div data-id='${cast.id}' class='card'> 
                    <img src='https://image.tmdb.org/t/p/w500${cast.profile_path}' alt='poster of ${cast.name}'/>
                    <p>Name: ${cast.name}</p>
                    <p>character Name: ${cast.character}</p>
                </div>`;
        })

    },
    popIn: (ev) => {
        console.log('popIn ===', history);
        console.log(location);
        // console.log(ev);
        // console.log(location);
        let hash = location.hash.replace('#', '');
        // document.querySelector('.active').classList.remove('active');
        // document.getElementById(hash).classList.add('active');
        console.log(ev.state);
        if (ev.state) {
            if (hash === 'details') {
                APP2.displayCast(ev.state);
            } if (hash === 'list') {
                APP.displayData(ev.state);
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', APP.init);