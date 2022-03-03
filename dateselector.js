document.querySelector('#dateselector').addEventListener('click', (e) => {
    if(e.target.classList.contains("dateselectbutton")==true && e.target.classList.contains("dateselectbuttonactive")==false ){
        y = Array.from(document.querySelector('#dateselector').getElementsByClassName("buttonstyle1")).indexOf(e.target);

        document.querySelector(".datecontentboxactive").classList.add("d-none");
        document.querySelector(".datecontentboxactive").classList.remove("datecontentboxactive");
        document.querySelectorAll(".datecontentbox")[y].classList.remove("d-none");
        document.querySelectorAll(".datecontentbox")[y].classList.add("datecontentboxactive");

        document.querySelector(".buttonstyle1active").classList.remove("buttonstyle1active");
        e.target.classList.add("buttonstyle1active");
    }

})