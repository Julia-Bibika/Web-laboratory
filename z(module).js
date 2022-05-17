/*Використовуючи js, HTML та СSS створити:
a. Об’єкт для зберігання даних про музикальний альбом (Id,
виконавець, назва, URL-обгортки, список пісень, рік випуску,
кількість прослуховувань).
b. На основі об’єкту альбому створити новий об’єкт, який перевизначає
метод toString()
c. Об’єкт для зберігання даних про колекцію альбомів, цей об’єкт
повинен містити конструктор та метод впорядкування альбомів за
спаданням кількості прослуховувань.
d. Відобразити впорядковані альбоми на сторінці.*/
class Albom {
    constructor(id, author, title, url, songs, year_date, listenings) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.url = url;
        this.songs = songs;
        this.year_date = year_date;
        this.listenings = listenings;
    }
}
class StringifyAlbom extends Albom {
    ToString(){
        return `
        id:${this.id},
        title:${this.title},
        author: ${this.author},
        songs:${this.songs},
        url: ${this.url},
        `;
      }
}
class AlbomCollection {
    constructor(alboms = []) {
        this.alboms =alboms;
    }
    addOne(elem) {
        this.alboms.push(elem);
    }
    getById(someId) {
        return this.alboms.find((elem) => elem.id == someId);
    }
    sortArray(){
        return this.alboms.sort((elem1,elem2) => elem1.listenings > elem2.listenings);
    }
    getInfo(someId) {
        return this.getById(someId).ToString();
      }
}
class AlbomCollectionHtml extends AlbomCollection {
    constructor(items) {
        super(items);
    }

    albomToHTML(elem) {
        return `  
        <div class="albom">
        <h2> ${elem.title} </h2>
        <img src="${elem.url}" alt="">
        <div class="description">
            <p> Автор: ${elem.author}</p>
            <p>	${elem.songs}</p>
            <p>Опубліковано ${elem.year_date} року </p>
            <p> ${elem.listenings} listenings </p>
        </div>
    </div>`;
    }
}
let Albom1 = new Albom(
    1,
    "Вакарчук",
    "Океан Ельзи",
    "https://upload.wikimedia.org/wikipedia/uk/thumb/0/06/%D0%91%D0%B5%D0%B7_%D0%BC%D0%B5%D0%B6_%28%D0%9E._%D0%95.%29.jpg/250px-%D0%91%D0%B5%D0%B7_%D0%BC%D0%B5%D0%B6_%28%D0%9E._%D0%95.%29.jpgаїна",
    "«Віддай мені (свою любов)»,«Не йди»,«Джерело»,«Сонце»",
    2019,
    42000000
);
let all = new AlbomCollection();
all.addOne(Albom1);