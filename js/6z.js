/*6. На складі є певна кількість ящиків з яблуками (у прикладі 15). Коли
під'їжджає машина для завантаження, попросити користувача ввести скільки
ящиків завантажити в першу машину, в другу і так далі, поки не закінчаться
ящики з яблуками. Передбачити той випадок, коли користувач введе
кількість ящиків більше, ніж на складі.*/
let box = 15;
let n = 0
while(n < box) {
    let n = parseInt(prompt("Скільки ящиків бажаєте завантажити?: ",""));
    box = box - n;
    if (box < n){
        alert(`На жаль нема ящиків заданої кількості,залишилось ${box} ящиків`);
        if (box == 0){
            break
        }
    }
}