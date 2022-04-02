
let database =
[
    "p4ArZyZ859Q?start=1796",
    "p4ArZyZ859Q?start=2488",
    "p4ArZyZ859Q?start=3242",
    "p4ArZyZ859Q?start=4422",
    "p4ArZyZ859Q?start=6296",
    "p4ArZyZ859Q?start=7830",
    "p4ArZyZ859Q?start=8652",
    "p4ArZyZ859Q?start=9934",
    "p4ArZyZ859Q?start=21791",
    "BlbspOrcFEo?start=261",
    "BlbspOrcFEo?start=608",
    "BlbspOrcFEo?start=2185",
    "BlbspOrcFEo?start=3524",
    "BlbspOrcFEo?start=4130",
    "BlbspOrcFEo?start=5410",
    "BlbspOrcFEo?start=7074",
    "BlbspOrcFEo?start=8664",
    "BlbspOrcFEo?start=10219",
    "BlbspOrcFEo?start=19638",
    "9XGqlTQEeoE",
    "wNz3ZWPhEC4"
];

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.classList.contains("loadmodalbutton") == true) {
        y = Array.from(document.querySelector('body').getElementsByClassName("loadmodalbutton")).indexOf(e.target);
        console.log(`Modal.js-onClick-index:${y}`,database[y]);
        document.getElementById("videoframe").src = "https://www.youtube.com/embed/"+database[y];
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