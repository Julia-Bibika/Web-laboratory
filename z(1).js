/*
 Дано масив, який містить оцінки студента з К предметів. Знайти середній бал студента і з’ясувати до якої категорії він відноситься (відмінник (всі оцінки відмінно), двійочник (має хоча би одну двійку),
  хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).*/
  let k = parseInt(prompt("Введіть кількість предметів: "));
  let arr = [];
  let sum = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;
  
  for (let i=0; i<k; i++){
      el = parseInt(prompt(`Введіть оцінку ${i+1} предмета`, "0"));
      arr.push(el);
  }
  alert(`Ваші бали: ${arr} ` );
  for (let i=0; i<k; i++){
      sum += arr[i];
  }
  
  var average = sum/k;
  alert(`Середній бал студента: ${average} ` );
  
  for (let i=0; i<k; i++){
      if(0<=arr[i] && arr[i]<60){
          two += 1;
      }
      if(60<=arr[i] && arr[i]<=73){
          three += 1;
      }
      if(90<=arr[i] && arr[i]<=100){
          five += 1;
  
      }
      if(74<=arr[i] && arr[i]<=100){
           four += 1;
  
      }
  }
  if(two > 0){
      alert(`Ви двійочник(`)
  }
  if(three > 0 && three > two && three > four && three > five){
      alert(`Ви трійочник`)
  }
  if( four > five){
      alert(`Ви хорошист`)
  }
  if( five == k ){
      alert(`Ви відмінник!`)
  }