Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});  
var camera=document.getElementById("camera");
Webcam.attach('#camera');
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capture_img">'
    });
}
console.log('ml5 version',ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xE1DB396Q/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded Successfully");
}