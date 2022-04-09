let height = parseInt(prompt("Введіть висоту ромба",""));
document.write('<pre>');
for( var i = 1;i<=height; i++){
    for (var j = 1; j < height-i;j++){
        document.write('&nbsp;');
    }
    for( var k = 1; k <= 2*i - 1;k++){
        document.write("^");
    }
    document.write('<br>');
}
document.write('</pre>');