
Navbarvariable = ["home.html","about.html","mranti.html","livestage.html","competition.html"];


async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}


function removeall(item,index){
    item.classList.add("d-none");
    item.classList.remove("fadein");
    item.classList.remove("fadefromleft2","hidetillscroll");}