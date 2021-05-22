function setup(){
    canvas = createCanvas(300,300);
    canvas.position(600,400);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W9ScMSfkx/model.json",modelloaded);

}

function modelloaded(){
    console.log("model loaded");
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotresults);
}

function gotresults(error,results){
 if(error){
     console.error(error);
 }
 else{
     console.log(results);
     document.getElementById("object_name").innerHTML = results[0].label
     ans = results[0].confidence;
     ans_rounded = ans.toFixed(3);
     per = ans_rounded*100;
     document.getElementById("acc").innerHTML = per + " %";
  }
}