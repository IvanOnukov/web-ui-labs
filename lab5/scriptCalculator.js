function sumPurchase(){
    let x = document.getElementById("products").value;
    let y = document.getElementById("cost").value;
    let result;
    if(x == ''){
        result = "введите цену товара"; 
    }
    else if(y == ''){
        result = "введите количество товара"; 
    }
    else{
       result = x*y;  
    }
    
    document.getElementById("outResult").innerHTML = result;
}