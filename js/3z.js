let coins = parseInt(prompt("Введіть кількість копійок",""));
let grn = 0;
if(coins > 100){
    grn = parseInt(coins / 100);
}
let coin = coins - (grn*100);
alert(`З ${coins} копійок вийде ${grn} грн і ${coin} копійок` );