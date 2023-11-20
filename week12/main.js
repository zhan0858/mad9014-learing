(() => {
    //create an observer passing in a callback function
    let observer = new ResizeObserver(handleResize);
    //tell the observer what to watch
    observer.observe(document.querySelector('.something'));
})()

//create your callback function
function handleResize(entries) {
    //function will be sent an array of elements being observed
    //each entry has a `target` property that points to the observed element
    let myElement = entries[0].target;
    myElement.className.add('hasChanged');
    //each entry also has a `contentRect` object with width and height properties
    console.log(entries[0].contentRect.width);
    console.log(entries[0].contentRect.height);
}