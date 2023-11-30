// namespace
const APP = {
    init: () => {
        //any page has loaded
        APP.addListeners();
        APP.pageSpecific();
    },
    pageSpecific: () => {
        // step2 to console
        //run code that is specific to each page
        let id = document.body.id;
        console.log(id);
        if (!id) return; //page is missing an id
        switch (id) {
            case 'index':
                APP.homepage();
                //on the home page
                break;
            case 'contact':
                APP2.contactPage();
                //on the contact page
                break;
            default:
            //page that we don't recognize the id
            //or page with no specific code needed
        }
    },
    addListeners: () => {
        // step1 to console
        console.log('addListeners()');
        //load any event listeners that are common to all pages
        //like hashchange, popstate, main nav clicks, etc
    },
    homepage: () => {
        // step3 to console
        console.log('I am in a homepage');

        //run code that is specific to the home page
    },
};

const APP2 = {
    contactPage: () => {
        console.log('I am in a contact page');
    },
};

window.addEventListener('DOMContentLoaded', APP.init);
// export { APP, APP2 };

// window.addEventListener('DOMContentLoaded', () => {
//     let id = document.body.id;
//     console.log(id);
// });

// APP.pageSpecific();
// APP.addListeners();
