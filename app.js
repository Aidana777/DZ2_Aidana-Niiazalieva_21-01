let traffic = prompt('Ввести Цвет');

if (traffic === 'красный') {
    alert('Стоп');
} else if (traffic === 'желтый') {
    alert("Подождите пожалуйста");
} else if (traffic === 'зелёный') {
    alert("Перейти дорогу");
} else {
    alert(" Кроме Выше перечисленых цветов Вы не можете Ввести другие цвета");
}

for (let i = 20; i >= 0; i--) {
    console.log(i);
}

// 1
let arr = ['10', '20', '30', '50', '235', '3000'];
for (let item of arr) {
    let items = item.toString()
    if (items[0] === '1' || items[0] === '2' || items[0] === '5') {
        console.log(item);

    }
}