const checkAll = document.getElementById("Checkall")
let checkAllSwitch = 0
const iceCream = document.getElementById("Ice-cream")
const hotDog = document.getElementById("Hot-dog")
const popcorn = document.getElementById("Popcorn")
const cookie = document.getElementById("Cookie")
let switchs = [0,0,0,0]

checkAll.onclick = () =>{
    if(!checkAllSwitch){
        checkAll.classList.add("contentbuttonDark")
        checkAllSwitch = 1
        switchs[0] = 0
        switchs[1] = 0
        switchs[2] = 0
        switchs[3] = 0
        iceCream.onclick()
        hotDog.onclick()
        popcorn.onclick()
        cookie.onclick()
    }
    else{
        checkAll.classList.remove("contentbuttonDark")
        checkAllSwitch = 0
        switchs[0] = 1
        switchs[1] = 1
        switchs[2] = 1
        switchs[3] = 1
        iceCream.onclick()
        hotDog.onclick()
        popcorn.onclick()
        cookie.onclick()
        document.getElementById("foodList").innerText = "Choose some food"
    }
}
iceCream.onclick = () =>{
    if(!switchs[0]){
        iceCream.classList.add("contentbuttonDark")
        switchs[0] = 1
    }
    else{
        iceCream.classList.remove("contentbuttonDark")
        switchs[0] = 0
    }
    audit()
    labelStr()
}

hotDog.onclick = () =>{
    if(!switchs[1]){
        hotDog.classList.add("contentbuttonDark")
        switchs[1] = 1
    }
    else{
        hotDog.classList.remove("contentbuttonDark")
        switchs[1] = 0
    }
    audit()
    labelStr()
}

popcorn.onclick = () =>{
    if(!switchs[2]){
        popcorn.classList.add("contentbuttonDark")
        switchs[2] = 1
    }
    else{
        popcorn.classList.remove("contentbuttonDark")
        switchs[2] = 0
    }
    audit()
    labelStr()
}

cookie.onclick = () =>{
    if(!switchs[3]){
        cookie.classList.add("contentbuttonDark")
        switchs[3] = 1
    }
    else{
        cookie.classList.remove("contentbuttonDark")
        switchs[3] = 0
    }
    audit()
    labelStr()
}
function audit(){
    if(switchs[0] + switchs[1] + switchs[2] + switchs[3] != 4){
        checkAll.classList.remove("contentbuttonDark")
        checkAllSwitch = 0
    }
    else{
        checkAll.classList.add("contentbuttonDark")
        checkAllSwitch = 1
    }
}

function labelStr(){
    let arr = ["","","",""]
    let str = ""

    for(let i = 0; i < 4; i++){
        if(i == 0 && switchs[i] == 1){
            arr[i] = "Ice-cream"
        }
        else if(i == 1 && switchs[i] == 1){
            arr[i] = "Hot-dog"
        }
        else if(i == 2 && switchs[i] == 1){
            arr[i] = "Popcorn"
        }
        else if(i == 3 && switchs[i] == 1){
            arr[i] = "Cookie"
        }
    }
    for(let i = 0; i < 4; i++){
        if(str.split(" ").length >= 3){
            break
        }
        if(arr[i]!=""){
            str += arr[i]
            if(str.split(" ").length == 1){
                str += ", "
            }
            else{
                str += " "
            }
        }
    }
    if(switchs[0] + switchs[1] + switchs[2] + switchs[3] >= 3){
        str += `and more ${switchs[0] + switchs[1] + switchs[2] + switchs[3] - 2}`
    }
    else if(switchs[0] + switchs[1] + switchs[2] + switchs[3] == 0){
        str = "Choose some food"
    }
    document.getElementById("foodList").innerText = str
}