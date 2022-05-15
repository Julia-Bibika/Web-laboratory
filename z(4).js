/*4. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500).
 Користувач вибирає номер елементу, поки не відмовиться від подальшої гри, або не вибере всі елементи.
 Після кожного ходу показувати сумарний виграш. Кожен елемент можна вибирати тільки 1 раз.*/
 let arr = [];
 let n = 5;
 let index = 0;
 let sum = 0;
 let usedid = [];
 let continuep = "";
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 for (let i=0; i<n; i++){
    arr.push(getRandomInt(-500,500));
 }

 let k = getRandomInt(-500,500);
 do{
   if(usedid.length == arr.length){
      alert(`Ви використали всі спроби, ось ваш вийграш: ${sum}`); 
      break; 
   } 
   index = parseInt(prompt("Введіть число від 1 до 5: ")); 
   if(usedid.indexOf(index) != -1) 
    { 
        alert("Ви вже обирали це число, оберіть інше"); 
        continue; 
    } 
    sum += arr[index-1];
    usedid.push(index);
    alert(`Ваш вийграли: ${sum} гривень`); 
    continuep = prompt("Хочете продовжити гру?" )

 }
 while(continuep.toLowerCase() == "так")