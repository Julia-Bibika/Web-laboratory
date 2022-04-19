/*Створити форму авторизації, яка містить поля для введення логіну, пароля
та позначку «залишатись в системі» . Користувач вводить логін та пароль.
Здійснити їх перевірку (вірні пари логінів та паролів зберігаються у масиві)*/
document.getElementById("calc-total").onclick = () =>{
    let login = toString(document.getElementById("login").value);
    let password = toString(document.getElementById("password").value);
    let remember = [];
    remember.push(login);
    remember.push(password);
}
    if (login == remember[0] || password == remember[1]){
        alert(`Hello ${login}`);
    }
    else{
        alert("Ви ввели неправильний логін або пароль");
    }