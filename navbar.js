document.querySelector("body").addEventListener('click', (e) => {
    if (e.target.classList.contains('navicon') == true) {
        document.getElementById("navbarcontent").classList.remove("d-none");
        document.getElementById("navbarcontent").classList.add("fadefromright");
    }
    else if (e.target.classList.contains("mainpagenavi") == true) {

        z = Array.from(document.querySelector('#contentcontainer').getElementsByClassName("mainpagenavi")).indexOf(e.target);
        document.querySelector(".navitemactive").classList.remove("navitemactive");
        document.querySelectorAll(".navitem")[z + 1].classList.add("navitemactive");
        headerContent = document.getElementById("contentcontainer");
        document.querySelector(".section").classList.remove("fadein");
        document.querySelector(".section").classList.add("fadeout", "check");
        document.querySelector('#contentcontainer').addEventListener('webkitAnimationEnd', ContentAnimationEnd);
    }

})

function ContentAnimationEnd(item) {
    console.log("mainpagenavi:" + (item + 1));
    text = "asset/template/" + Navbarvariable[item + 1];
    fetchHtmlAsText(text)
        .then(data => headerContent.innerHTML = data);
    document.querySelector('#navbarcontent').removeEventListener('webkitAnimationEnd', ContentAnimationEnd);
}


