function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

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

    document.getElementById("outResult").innerHTML = result;
}
