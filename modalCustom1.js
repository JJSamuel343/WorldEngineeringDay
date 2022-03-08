
let database =["BlbspOrcFEo?start=259"];

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.classList.contains("loadmodalbutton") == true) {
        y = Array.from(document.querySelector('body').getElementsByClassName("loadmodalbutton")).indexOf(e.target);
        console.log(`Modal.js-onClick-index:${y}`,database[y]);
        document.getElementById("videoframe").src = "https://www.youtube.com/embed/BlbspOrcFEo?start=259"+database[y];
    }

    else if(e.target.id == "closemodal"){
        document.getElementById("videoframe").src = "about:blank";
    }
    else if((e.target.id == "exampleModal") && (e.target.classname != "modal-header") && (e.target.classname != "modal-body")){
        document.getElementById("videoframe").src = "about:blank";
    }
    else{
    }
})