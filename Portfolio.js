function SoundParty(){
    var sound=new Audio("/Clicker.mp3");
    sound.play();
}
let sound= document.getElementById("audiotext");
for(var i=0; i<=document.getElementsByTagName("li").length;i++)
$("li")[i].addEventListener("mouseover",function(){
sound.play();
});

for(var i=0; i<=document.getElementsByTagName("li").length;i++)
$("li")[i].addEventListener("mouseout",function(){
sound.pause();
});

//Jquery Works Only for QuerySelector
