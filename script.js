let hoverButton = document.querySelector(".xxx");
let showHiddenIcons = document.querySelector(".for-social-icons");
let michelleContainer = document.querySelector(".michelle-container");
let x2 = document.getElementById("x2")


//mobile version 

let mobileVersion = document.getElementById("x2");
 mobileVersion.addEventListener("click", x2function)

 function x2function(){
    showHiddenIcons.classList.toggle("non-active")
 }

hoverButton.addEventListener("mouseover", showHover)
hoverButton.addEventListener("mouseout", removeHover)



function showHover(){
    showHiddenIcons.classList.add("active")
    showHiddenIcons.classList.add("non-active")
}

function removeHover(){
    showHiddenIcons.classList.remove("active")
}

/**/
