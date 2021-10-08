function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eJjD8IZ0O/', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    console.log('got results')
}