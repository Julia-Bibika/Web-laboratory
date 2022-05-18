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
  class StringifyDAI extends DAI {
    ToString() {
      return `
              code:${this.code}
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
      let index = this.cars.findIndex((elem) => elem.id == someId);
      if (index == -1) throw "Not found";
      this.cars.splice(index, 1);
    }
    edit(someId, newObj) {
      let oldObj = this.cars.findIndex((elem) => elem.id == someId);
      this.cars[oldObj] = newObj;
      this.cars[oldObj].id = someId;
      id--;
    }
    getById(someId) {
        return this.cars.find((elem) => elem.id == someId);
      }
    getByMark(someMark) {
        return [...this.cars.filter((elem) => elem.mark == someMark)];
    }
    getByNumber(someNumber) {
        return [...this.cars.filter((elem) => elem.number.substring(0,someNumber.length) == someNumber)];
    }
    getInfo(someId) {
        return this.getById(someId).ToString();
    }
    getAll() {
      return [...this.cars];
    }
}
class CarsWithDOM extends AllCars {
  carsToHTML(car) {
    return `
      <tr>
      <td>
          ${car.id}
      </td>
      <td>
          ${car.code}
      </td>
      <td>
          ${car.pib}
      </td>
      <td>
          ${car.mark}
      </td>
      <td>
          ${car.number}
      </td>
      <td>
          ${car.color}
      </td>
      <td> 
          <button onclick="DeleteUser(${car.id})">
              Delete
          </button>
      </td>
      <td> 
          <button onclick="StartEditUser(${car.id})">
              Edit
          </button>
      </td>
      </tr>
    `;
  }
  carsTableToHTML() {
    let rows = "";
    for (let car of this.getAll()) {
      rows += this.carsToHTML(car);
    }
    return `
        <table>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Code
                </th>
                <th>
                    ПІБ
                </th>
                <th>
                    Mark
                </th>
                <th>
                    Number
                </th>
                <th>
                    Color
                </th>
                <th colspan="2">
                    Actions
                </th>
            </tr>
            ${rows}
        </table>
        <br>
        <button type="button" onclick="ShowAddUser()">
            Add user
        </button>
    `;
  }
  addFormToHTML() {
    return ` 
        <div id="add">
            <form name="addForm" method="post" action="#">
                <h3> Add User </h3>
                <input name="code" placeholder="code"> 
                <input name="pib" placeholder="pib"> 
                <input name="mark" placeholder="mark">
                <input name="number" placeholder="number">
                <input name="color" placeholder="color">
                <button type="button" onclick="AddNewUser()">
                    Save
                </button>
            </form>
        </div>
    `;
  }
  editFormToHTML() {
    return ` 
        <div id="edit">
            <form name="editForm" method="post" action="#">
                <h3> Edit User </h3>
                <input name="id" type="hidden">
                <input name="code" placeholder="code"> 
                <input name="pib" placeholder="pib"> 
                <input name="mark" placeholder="mark">
                <input name="number" placeholder="number">
                <input name="color" placeholder="color">
                <button type="button" onclick="EditUser()">
                    Save
                </button>
            </form>
        </div>
    `;
  }
  toHTML() {
    return (
      all.carsTableToHTML() + this.addFormToHTML() + this.editFormToHTML()
    );
  }
  addEventListners() {
    document.addEventListener("deleteUser", (event) => {
      super.delete(event.detail.id);
      document.getElementById("root").innerHTML = this.toHTML();
    });

    document.addEventListener("addUser", (event) => {
      super.addOne(
        new StringifyDAI(
          event.detail.code,
          event.detail.pib,
          event.detail.mark,
          event.detail.number,
          event.detail.color,
        )
      );
      document.getElementById("root").innerHTML = this.toHTML();
    });
    document.addEventListener("editUser", (event) => {
      super.edit(
        event.detail.id,
        new StringifyDAI(
          event.detail.code,
          event.detail.pib,
          event.detail.mark,
          event.detail.number,
          event.detail.color,
        )
      );
      document.getElementById("root").innerHTML = this.toHTML();
    });
  }
}
function DeleteUser(id) {
  let deleteUserEvent = new CustomEvent("deleteUser", { detail: { id } });
  document.dispatchEvent(deleteUserEvent);
}

function AddNewUser() {
  const code = document.getElementsByName("code")[0].value;
  const pib = document.getElementsByName("pib")[0].value;
  const mark = document.getElementsByName("mark")[0].value;
  const number = document.getElementsByName("number")[0].value;
  const color = document.getElementsByName("color")[0].value;
  let addUserEvent = new CustomEvent("addUser", {
    detail: {
      code,
      pib,
      mark,
      number,
      color,
    },
  });
  document.dispatchEvent(addUserEvent);
}
function ShowAddUser() {
  document.getElementById("add").style.display = "block";
  document.getElementById("edit").style.display = "none";
}

function EditUser() {
  const code = document.getElementsByName("code")[1].value;
  const pib = document.getElementsByName("pib")[1].value;
  const mark = document.getElementsByName("mark")[1].value;
  const number = document.getElementsByName("number")[1].value;
  const color = document.getElementsByName("color")[1].value;
  const id = document.getElementsByName("id").value;
  let addUserEvent = new CustomEvent("editUser", {
    detail: {
      id,
      code,
      pib,
      mark,
      number,
      color,
    },
  });
  document.dispatchEvent(addUserEvent);
}
function StartEditUser(id) {
  document.getElementById("edit").style.display = "block";
  document.getElementById("add").style.display = "none";

  let car = all.getById(id);

  document.getElementsByName("code")[1].value = car.code;
  document.getElementsByName("pib")[1].value = car.pib;
  document.getElementsByName("mark")[1].value = car.mark;
  document.getElementsByName("number")[1].value = car.number;
  document.getElementsByName("color")[1].value = car.color;
  document.getElementsByName("id").value = id;
}
let Car1 = new StringifyDAI("LSJA16E3XCG067514","Ткачук Микита Юрійович","Tesla","AE8181EX","black");
let Car2 = new StringifyDAI("JMZGJ423810008110","Руденко Григорій Андрійович","BMW","AC1533BE","white");
let Car3 = new StringifyDAI("VSMJYB22S00155897","Деркач Андрій Михайлович","Mercedes-Benz","BB4177CH","red");
let Car4 = new StringifyDAI("XTA210771V2560252","Гавриш Ангеліна Іванівна","Tesla","AE8151ME","grey");

let all = new CarsWithDOM();

all.addOne(Car1);
all.addOne(Car2);
all.addOne(Car3);
all.addOne(Car4);
document.getElementById("root").innerHTML = all.toHTML();
all.addEventListners();