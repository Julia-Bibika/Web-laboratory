/*
Описати клас для створення об'єктів згідно з варіантом. 
Описати клас для для створення відповідної колекції обєктів. Реалізувати методи:
• отримання інформації щодо одного об’єкту (за Кодом),
• отримання вибірки з колекції згідно з вказаними запитами.
• додавання одного об’єкту,
• додавання колекції об’єктів,
• редагування інформації  про вказаний об’єкт.
• видалення інформації про вказаний об’єкт.
  
Об’єкт “ДАІ” (Код, ПІБ власника машини; марка, номер машини; колір. Запит автомобілів марки Х, 
номери яких починаються із вказаного шаблону.*/
let id = 0;
class DAI {
    constructor(code, pib, mark, number,color) {
      this.code = code ;
      this.pib = pib;
      this.mark = mark;
      this.number = number;
      this.color = color;
      this.id = ++id;
    }
  }
  class StringDAI extends DAI {
    ToString() {
      return `
              ПІБ: ${this.pib}
              mark: ${this.mark}
              number: ${this.number}
              color: ${this.color}
              `;
    }
  }
  class AllCars {
    constructor() {
      this.cars = [];
    }

    addOne(elem) {
        this.cars.push(elem);
    }
    addMany(elems) {
        elems.forEach((elem) => {
            this.cars.push(elem);
        });
    }
    delete(someId) {
        this.cars.splice(someId, 1);
      }
    edit(someId, newObj) {
        this.cars[someId] = newObj;
    }
    getById(someId) {
        return this.cars.find((elem) => elem.id == someId);
      }
    getByMark(someMark) {
        return this.cars.filter((elem) => elem.mark == someMark);
    }
    getByTime(someNumber) {
        return this.cars.filter((elem) => elem.number.substring(0,4) == someNumber);
    }
    getInfo(someId) {
        return this.getById(someId).ToString();
      }
}
let Car1 = new StringDAI("LSJA16E3XCG067514","Ткачук Микита Юрійович","Tesla","AE8181EX","black");
let Car2 = new StringDAI("JMZGJ423810008110","Руденко Григорій Андрійович","BMW","AC1533BE","white");
let Car3 = new StringDAI("VSMJYB22S00155897","Деркач Андрій Михайлович","Mercedes-Benz","BB4177CH","red");
let Car4 = new StringDAI("XTA210771V2560252","Гавриш Ангеліна Іванівна","Tesla","AE8151ME","grey");

let all = new AllCars();

all.addOne(Car1);
all.addOne(Car2);
all.addOne(Car3);
all.addOne(Car4);

console.log(all.getInfo(3));