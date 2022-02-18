document.querySelector("body").addEventListener('click', (e) => {
    if (e.target.classList.contains('navicon') == true) {
        document.getElementById("navbarcontent").classList.remove("d-none");
        document.getElementById("navbarcontent").classList.add("fadefromright");
    }
})

function onWKAnimEnd() {
    console.log('triggered');
    document.getElementById('navbarcontent').classList.add('d-none');
    document.querySelector('#navbarcontent').classList.remove('fadeout');
    document.querySelector('#navbarcontent').removeEventListener('webkitAnimationEnd', onWKAnimEnd);
}

document.querySelector('#navbarcontent').addEventListener('click', (e) => {
    if (e.target.classList.contains('navitem') === true && e.target.classList.contains('navitemactive') === false) {
        if (e.target.classList.contains('closenav') == true) {
            document.getElementById("navbarcontent").classList.remove("fadefromtop1");
            document.getElementById("navbarcontent").classList.add("fadeout");
            document.querySelector('#navbarcontent').addEventListener('webkitAnimationEnd', onWKAnimEnd);
        }
        else{
            document.getElementById("navbarcontent").classList.remove("fadefromtop1");
            document.getElementById('navbarcontent').classList.add('d-none');


            y = Array.from(document.querySelector('#navbarcontent').getElementsByClassName("navitem")).indexOf(e.target);
            document.querySelector(".navitemactive").classList.remove("navitemactive");
            e.target.classList.add("navitemactive");
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
    }
});