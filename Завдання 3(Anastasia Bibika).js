document.getElementById("calc-total").onclick = () =>{
    let baggage = "";
    for (let radio of document.getElementsByName("baggage")){
        if (radio.checked)
        baggage=radio.value;
    }
    if (baggage == "post"){
        currency += 50
    } else if (baggage == "new-post"){
        currency += 55
    } else if (baggage == "new-post-one"){
        currency += 60
    }
    else if (baggage == "new-post-two"){
        currency += 70
    }
    else if (baggage == "new-post-three"){
        currency += 80
    }
    else if (baggage == "new-post-four"){
        currency += 100
    }
    else {
        alert ("Вагу не вибрано");
    }
}