const elements = document.querySelector('.imgHolder').getElementsByTagName('img');
const array = Array.from(elements)
let number = 0;
let timer = false;

window.addEventListener('mousemove', (e) => {
    if (timer === false) {
        if (number === 5) {
            number = 1;
        } else {
            number++
        }
        changeImage(number)
        timer = true;
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
    setTimeout(() => {
        timer = false
    }, 300)
}