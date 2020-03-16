const MENU_HEADER = document.getElementById('menu-header');
const CLIDER_PHONES = document.getElementById('blue-phones');
const SLIDER = document.getElementById('slider');
const CHEV1 = document.getElementById('chev-click1');
const CHEV2 = document.getElementById('chev-click2');
const IPHONE_VERT = document.getElementById('iphone-vertical');
const IPHONE_HORIZ = document.getElementById('iphone-horizontal');
const MENU_PORTFOLIO = document.getElementById('menu-portfolio');
const PORTFOLIO_IMG = document.getElementById('portfolio-img');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

let count = 0;
let count_iphone_vert = 0;
let count_iphone_horiz = 0;

MENU_HEADER.addEventListener('click', (event) => {
    MENU_HEADER.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    });

    let arrImg = [];
    for(let i = 1; i < 13; i++){
        arrImg.push("url('assets/portfolio-img-"+i+".png')");
    }

MENU_PORTFOLIO.addEventListener('click', (event) => {
    MENU_PORTFOLIO.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    arrImg.unshift(arrImg[arrImg.length-1]);
    arrImg.pop();
    PORTFOLIO_IMG.querySelectorAll('div').forEach((el, index) => {
        el.style.background = arrImg[index];
    });
    event.preventDefault();
    });

PORTFOLIO_IMG.addEventListener('click', (event) => {
    PORTFOLIO_IMG.querySelectorAll('div').forEach(el => el.classList.remove('border-img'));
    event.target.classList.add('border-img');
    });

CHEV1.addEventListener('click', (event) => {
    if(count == 0){
        CLIDER_PHONES.style.display = "block";
        SLIDER.style.background = "#86aff1";
        SLIDER.style.borderBottom = "6px solid #86aff1";
        count = 1;
    }else{
        CLIDER_PHONES.style.display = "none";
        SLIDER.style.background = "#f06c64";
        SLIDER.style.borderBottom = "6px solid #ea676b";
        count = 0;
    }
    });
CHEV2.addEventListener('click', (event) => {
    if(count == 0){
        CLIDER_PHONES.style.display = "block";
        SLIDER.style.background = "#86aff1";
        SLIDER.style.borderBottom = "6px solid #86aff1";
        count = 1;
    }else{
        CLIDER_PHONES.style.display = "none";
        SLIDER.style.background = "#f06c64";
        SLIDER.style.borderBottom = "6px solid #ea676b";
        count = 0;
    }
    });
IPHONE_VERT.addEventListener('click', (event) => {
    if(count_iphone_vert == 0){
        IPHONE_VERT.style.backgroundPositionX = "-240px";
        count_iphone_vert = 1;
    }else{
        IPHONE_VERT.style.backgroundPositionX = "0px";
        count_iphone_vert = 0;
    }
    });
IPHONE_HORIZ.addEventListener('click', (event) => {
        if(count_iphone_horiz == 0){
            IPHONE_HORIZ.style.backgroundPositionY = "-240px";
            count_iphone_horiz = 1;
        }else{
            IPHONE_HORIZ.style.backgroundPositionY = "0px";
            count_iphone_horiz = 0;
        }
    });
BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    const description = document.getElementById('description').value.toString();
    subject != '' ? document.getElementById('tema').innerText = 'Тема: ' + subject :
    document.getElementById('tema').innerText = 'Без темы';
    description != '' ? document.getElementById('desc').innerText = 'Описание: ' + description :
    document.getElementById('desc').innerText = 'Без описания';
    document.getElementById('message-block').classList.remove('hidden');
});
CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('tema').innerText = '';
    document.getElementById('desc').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});