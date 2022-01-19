var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

var checkDead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<330 && blockleft>200 && characterTop>=400){
        block.style.animation = "none";
        block.style.display = "none";
        alert("You Lose, Use space to jump");
    }
},20);