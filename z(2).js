let week = [];
let m_klient_days = [];
let sum = 0;
for (let i = 0;i<7;i++){
    let day = parseInt(prompt(`Кількість людей в ${i+1}-день : `))
    week.push(day);
}
for (let i = 0;i<7;i++){
    if(week[i] < 20){
        m_klient_days.push(i+1);
    }
}
alert(`Дні ,коли людей менше 20: ${m_p_days}`);
let min = week[0];
let min_day = 1;
let max = week[0];
let max_day = 1;
for(let i = 1; i < 7;i++){
    if(week[i] < min){
        min = week[i];
        min_day = i;
    }
    if(week[i] > max){
        max = week[i];
        max_day = i;
    }
}
for(let i = 0;i<7;i++){
    sum += week[i];
}
alert(`У ${min_day}-ий день кількість була мінімальною : ${min}`);
alert(`У ${max_day}-ий день кількість була максимальною : ${max}`);
alert(`Загальна кількість людей за робочі дні: ${sum}`);
alert(`У суботу було ${week[5]},а у неділю ${week[6]}`);