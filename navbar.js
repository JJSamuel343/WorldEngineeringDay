document.querySelector("body").addEventListener('click', (e) => {
    if (e.target.classList.contains('navicon') == true) {
        document.getElementById("navbarcontent").classList.remove("d-none");
        document.getElementById("navbarcontent").classList.add("fadefromright");
    }
    else if (e.target.classList.contains("mainpagenavi") == true) {

        y = Array.from(document.querySelector('#contentcontainer').getElementsByClassName("mainpagenavi")).indexOf(e.target) + 1;
        console.log("mainpagenavi:" + (y));
        document.querySelector(".navitemactive").classList.remove("navitemactive");
        document.querySelectorAll(".navitem")[y].classList.add("navitemactive");
        headerContent = document.getElementById("contentcontainer");
        document.querySelector(".section").classList.remove("fadein");
        document.querySelector(".section").classList.add("fadeout", "check");

        document.querySelector('#contentcontainer').addEventListener("webkitAnimationEnd", (e) => {
            if (e.target.classList.contains("section") == true) {
                if (e.target.classList.contains("fadeout") == true) {
                    if (e.target.classList.contains("check") == true) {
                        e.target.classList.remove("check");
                        text = "asset/template/" + Navbarvariable[y];
                        fetchHtmlAsText(text)
                            .then(data => headerContent.innerHTML = data);
                    }
                }
            }
        })

    }

})


