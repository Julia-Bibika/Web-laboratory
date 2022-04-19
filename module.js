/* Дано оцінки студента за n предметів у 100 бальній шкалі ECTS. Вивести
номери предметів, з яких у студента незадовільні оцінки (<60 балів).*/ 
let n = parseInt(prompt("Кількість предметів: ", ""));
let array = [];
let number_less = [];
for (let i=0; i<=n; i++){
    array[i] = parseFloat(prompt(`Enter ${i}-th element`, " "));
}
for(let i = 0; i <= n ; i++)
{
    if(array[i] < 60){
        alert(`Оцінка з ${i+1} предмету є незадовільною`);
    }
}