var speechrecognishationshanoshintion=window.webkitSpeechRecognition;   
var recognitionshantionsham=new speechrecognishationshanoshintion();
function butan(){
    document.getElementById("textbox").innerHTML="";
    recognitionshantionsham.start();
}
recognitionshantionsham.onresult=function run(event){
    console.log(event)
    content=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content
    speak();
}
function speak(){
    var regonitionsfboagnoduangvoua=window.speechSynthesis;
    var data=document.getElementById("textbox").value;

 if(data="yes"){
    var nou1=new SpeechSynthesisUtterance("Taking Selfie in 5 seconds");
    regonitionsfboagnoduangvoua.speak(nou1);
    Webcam.attach("#camera")
    setTimeout(snapshot,5000)
    }
    else{
        var nou1=new SpeechSynthesisUtterance("Sorry, I didn't understand");
    regonitionsfboagnoduangvoua.speak(nou1);
    }
}

Webcam.set({
    width:360,
    height:250,
image_format:"jpeg",
jpeg_quality:90
})
var num=0;
function snapshot(){
    Webcam.snap(function (dataURI){
        num=num+1;
document.getElementById("result").innerHTML+="<img id='selfie"+num+"' src="+dataURI+">" 
    })
document.getElementById("lol").style.visibility="visible"
}
function save(){
    link=document.getElementById("dis");
    result=document.getElementById("selfie1").src
    link.href=result;
link.click();
        link2=document.getElementById("dis");
    result2=document.getElementById("selfie2").src
    link2.href=result2;
link2.click();
        link3=document.getElementById("dis");
    result3=document.getElementById("selfie3").src
    link3.href=result3;
link3.click();
        link4=document.getElementById("dis");
    result4=document.getElementById("selfie4").src
    link4.href=result4;
link4.click();
        link5=document.getElementById("dis");
    result5=document.getElementById("selfie5").src
    link5.href=result5;
link5.click();
    
}
