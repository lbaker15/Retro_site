const elements = document.querySelector('.imgHolder').getElementsByTagName('img');
const array = Array.from(elements)
let number = 0;
let timer = false;

window.addEventListener('mousemove', (e) => {
    if (e.clientX % 13 === 0 | e.clientY % 10 === 0) {
        if (number === 5) {
            number = 1;
        } else {
            number++
        }
        changeImage(number)
    }
})

const changeImage = (number) => {
    const img = array[number]
    array.map(x => {
        x.style.display = "none";
        x.style.zIndex = 0;
    })
    img.style.display = "block";
    img.style.zIndex = 100;
}