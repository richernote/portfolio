


function lodd () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("body").style.display = "block";
}

window.onload = function(){
    window.setTimeout(lodd, 1500);
};
