
let Table = (rows, colums) => { 
   var table = document.createElement("table");
   for(var i = 0; i < rows; i++){
       var tr = document.createElement("tr");
       for(var j = 0;j < colums;j++){
            var td = document.createElement("td");
            td.style.border = "3px solid black";
            td.innerText = "Стовпець";
            tr.appendChild(td);
       }
       table.appendChild(tr);
       table.style.border = "5px solid black";
   }
   return table 
};
document.body.appendChild(Table(3, 5));