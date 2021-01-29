const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
let rgbLight = "";
btn.addEventListener('click', function (){;
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    rgbLight ==='dark' ?
    h1.style.color = '#cae7eb' : h1.style.color  = 'black'
    h1.innerText = newColor
});
const makeRandColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    rgbLight = isBright(r,g,b);
    console.log(rgbLight)
    return `rgb(${r}, ${g}, ${b})`;
}

function rgbNum(str) {
    const inputStr = str;
    let rgbNumStr = '';
    for (let index in inputStr) {
        if (parseInt(inputStr[index])) {
            rgbNumStr += inputStr[index];
        }
    }
    return parseInt(rgbNumStr);
}

const isBright = (r,g,b) =>{
let hsp = Math.sqrt(
    0.299 * (r*r) +
    0.587 * (g*g) +
    0.144 * (b*b)
);
if(hsp > 127.5){return 'light'}
else{ return 'dark'}
}



