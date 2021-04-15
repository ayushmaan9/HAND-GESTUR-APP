console.log("hi");
Webcam.set({
    width:350,
    height:300,
    image_formate:'png',
    png_quality:90
});
 camera=document.getElementById("camera");
Webcam.attach('#camera');
function tsnap1(){
    Webcam.snap(function(e){
        console.log("test");
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+e+'"/>';
    });
    
}
console.log("ml5.version",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zav9M2_zE/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function check(){
   img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
} 
function gotResult(error,results){
    if(error){
        console.log(error);
    }
 else{
     console.log(results);
     document.getElementById("word").innerHTML=results[0].label;
     gesture = results[0].label;
toSpeak = "";
if(gesture == "thumb up")
{
toSpeak = "Thumbs Up"
document.getElementById("pic").innerHTML ="&#128077;";
}
if(gesture == "thumb down")
{
toSpeak = "Thumbs down"
document.getElementById("pic").innerHTML ="&#128078;";
}
if(gesture == "up")
{
toSpeak = "pointing Up"
document.getElementById("pic").innerHTML ="&#128070;";
}
speak();
 }   
}
function speak(){
var synth = window.speechSynthesis;
speak_data = toSpeak;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}
