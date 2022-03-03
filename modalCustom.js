
let database = ["p4ArZyZ859Q","p4ArZyZ859Q","p4ArZyZ859Q","p4ArZyZ859Q","p4ArZyZ859Q","p4ArZyZ859Q","p4ArZyZ859Q","p4ArZyZ859Q","p4ArZyZ859Q","BlbspOrcFEo","BlbspOrcFEo","BlbspOrcFEo","BlbspOrcFEo","BlbspOrcFEo","BlbspOrcFEo","BlbspOrcFEo","BlbspOrcFEo","BlbspOrcFEo","BlbspOrcFEo"]

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.classList.contains("loadmodalbutton") == true) {
        y = Array.from(document.querySelector('body').getElementsByClassName("loadmodalbutton")).indexOf(e.target);
        console.log(`Modal.js-onClick-index:${y}`,database[y]);
        document.getElementById("videoframe").src = "https://www.youtube.com/embed/"+database[y];
    }

    else if(e.target.id == "closemodal" && (document.getElementById("videoframe").src !== "about:blank")){
        document.getElementById("videoframe").src = "about:blank";
    }
    else if((e.target.id == "exampleModal") || (e.target.classname != "modal-header") || (e.target.classname != "modal-body") || (document.getElementById("videoframe").src !== "about:blank")){
        document.getElementById("videoframe").src = "about:blank";
    }
    else{
    }
})