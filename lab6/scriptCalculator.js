function sumPurchase() {
    let products = document.getElementById("products").value;
    let cost = document.getElementById("cost").value;
    let result;

    if (!(isNumber(products))) {
        result = "Допускаются только цифры";
    } else if (!(isNumber(cost))) {
        result = "Допускаются только цифры";
    } else if (products == '') {
        result = "введите цену товара";
    } else if (cost == '') {
        result = "введите количество товара";
    } else {
        result = Number(products) * Number(cost);
    }


    let hide = document.querySelector("#test");
    let rel = document.querySelector("#rel");
    
    hide.addEventListener("click", function(hide) {
        rel.style.height = (rel.style.height == "85px") ? "0px" : "85px";
    }

    //document.getElementById("outResult").innerHTML = result;
}