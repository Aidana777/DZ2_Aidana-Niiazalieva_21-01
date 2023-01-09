let traffic = prompt('Ввести Цвет');

if (traffic === 'красный') {
    alert('Стоп');
} else if (traffic === 'желтый') {
    alert("Подождите пожалуйста");
} else if (traffic === 'зелёный') {
    alert("Можете идти");
} else {
    alert(" Кроме Выше перечисленых цветов Вы не можете Ввести другие цвета");
}
for (let i=20; i >= 0; i--){
    console.log(i);
}
