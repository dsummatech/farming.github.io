window.onscroll = function(){scrollFunction()};
function scrollFunction() {
    var wedo = document.getElementById("wedo");
    var next = document.getElementById("next");
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop > 100) {
        wedo.style.left = 0 + "%";
        setTimeout(() => {
            document.getElementById("work").style.right = 0 + "%";
        }, 2000);
    }
    
    else{
        document.getElementById("wedo").style.left = 100 + "%";
        document.getElementById("work").style.right = 100 + "%";
    }
}

function menu() {
    var submenu = document.getElementById("submenu");
    if (submenu.style.display == "block") {
        submenu.style.display = "none";
    }
    else{
        submenu.style.display = "block";
    }
}


