import {
    ObjectDetector,
    FilesetResolver,
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2";

let objectDetector;
// IMAGE single image
// VIDEO decoded frames of a video
// LIVE_STREAM decoded frames of a live stream
let runningMode = "IMAGE";

const initializeObjectDetector = async () => {
    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm"
    );
    objectDetector = await ObjectDetector.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite`,
            delegate: "GPU"
        },
        scoreThreshold: 0.5, // Results below this value are rejected.
        runningMode: runningMode
    });
    // demosSection.classList.remove("invisible");
};

initializeObjectDetector();



let imageContainer = document.querySelectorAll(".imageDiv");
console.log(imageContainer);
for (let i = 0; i < imageContainer.length; i++) {
    imageContainer[i].children[0].addEventListener("click", handleClickImage);
}

function handleClickImage(event) {
    let image = event.target;
    const detections = objectDetector.detect(image);
    // console.log(detections);
    // displayDetections(detections, image);
    displayAllDetections(detections, image);
}


function displayDetections(detections, image) {
    console.log(detections);
    console.log(image);
    let p = document.createElement("p");

    p.textContent = detections.detections.length > 0 ? `${detections.detections[0].categories[0].categoryName} - with ${Math.round(parseFloat(detections.detections[0].categories[0].score) * 100)}% confidence.` : 'No object detected.';
    // image.parentElement.appendChild(p);
    image.parentNode.insertBefore(p, image.nextSibling);

    // Positioned at the top left of the bounding box.
    // Height is whatever the text takes up.
    // Width subtracts text padding in CSS so fits perfectly.
    // p.style =
    //     "left: " +
    //     detections.detections[0].boundingBox.originX * ratio +
    //     "px;" +
    //     "top: " +
    //     detections.detections[0].boundingBox.originY * ratio +
    //     "px; " +
    //     "width: " +
    //     (detections.detections[0].boundingBox.width * ratio - 10) +
    //     "px;";
}

function displayAllDetections(detections, image) {
    const ratio = image.height / image.naturalHeight;
    console.log(ratio);
    if (detections.detections.length === 0) {
        const p = document.createElement("p");
        p.innerText = 'No object detected.';
        image.parentNode.appendChild(p);
        return;
    }
    for (let detection of detections.detections) {
        const p = document.createElement("p");
        p.innerText = detection.categories[0].categoryName +
            " - with " +
            Math.round(parseFloat(detection.categories[0].score) * 100) +
            "% confidence.";
        const highlighter = document.createElement("div");
        highlighter.setAttribute("class", "highlighter");
        highlighter.style =
            "left: " +
            detection.boundingBox.originX * ratio +
            "px;" +
            "top: " +
            detection.boundingBox.originY * ratio +
            "px;" +
            "width: " +
            detection.boundingBox.width * ratio +
            "px;" +
            "height: " +
            detection.boundingBox.height * ratio +
            "px;";
        image.parentNode.appendChild(highlighter);
        image.parentNode.appendChild(p);
    }
}

