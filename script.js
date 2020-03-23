const MENU_HEADER = document.getElementById('menu-header');
const SLIDER_PHONES = document.getElementById('block-phones');
const SLIDER = document.getElementById('slider');
const CHEV1 = document.getElementById('chev-click1');
const CHEV2 = document.getElementById('chev-click2');
const IPHONE_VERT = document.getElementById('iphone-vertical');
const IPHONE_HORIZ = document.getElementById('iphone-horizontal');
const MENU_PORTFOLIO = document.getElementById('menu-portfolio');
const PORTFOLIO_IMG = document.getElementById('portfolio-img');
const CLOSE_BUTTON = document.getElementById('close-btn');
const FORM = document.getElementById('form');
const RESP_MENU_VISIB = document.getElementById('resp-menu-visible');
const RESP_MENU_HIDDEN = document.getElementById('resp-menu-hidden');
const MENU_HEADER_HIDDEN = document.getElementById('menu-header-hidden');
const MENU_ABSOLUTE = document.getElementById('menu-absolute');


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
        SLIDER.style.background = "#648BF0";
        SLIDER.style.borderBottom = "6px solid #648BF0";
        SLIDER.style.transition = "2s";
        SLIDER_PHONES.innerHTML = `<img src='assets/blue-phone.png' alt="vert-phone">`;
        SLIDER_PHONES.classList.add('blue');
        count = 1;
    }else{
        SLIDER.style.background = "#f06c64";
        SLIDER.style.borderBottom = "6px solid #f06c64";
        SLIDER.style.transition = "2s";
        count = 0;
        SLIDER_PHONES.classList.remove('blue');
        SLIDER_PHONES.innerHTML = `<div class="phone-vert" id="iphone-vertical">
        <img src='assets/iPhone-Vertical.png' alt="vert-phone">
    </div>
    <div class="phone-horiz" id="iphone-horizontal">
        <img src='assets/iPhone-Horizontal.png' alt="horiz-phone">
    </div>`
    }
    });
CHEV2.addEventListener('click', (event) => {
    if(count == 0){
        SLIDER.style.background = "#648BF0";
        SLIDER.style.borderBottom = "6px solid #648BF0";
        SLIDER.style.transition = "2s";
        SLIDER_PHONES.innerHTML = `<img src='assets/blue-phone.png' alt="vert-phone">`;
        SLIDER_PHONES.classList.add('blue');
        count = 1;
    }else{
        SLIDER.style.background = "#f06c64";
        SLIDER.style.borderBottom = "6px solid #f06c64";
        SLIDER.style.transition = "2s";
        count = 0;
        SLIDER_PHONES.classList.remove('blue');
        SLIDER_PHONES.innerHTML = `<div class="phone-vert" id="iphone-vertical">
        <img src='assets/iPhone-Vertical.png' alt="vert-phone">
    </div>
    <div class="phone-horiz" id="iphone-horizontal">
        <img src='assets/iPhone-Horizontal.png' alt="horiz-phone">
    </div>`
    }
    });
IPHONE_VERT.addEventListener('click', (event) => {
    if(count_iphone_vert == 0){
        IPHONE_VERT.innerHTML = `<img src='assets/iPhone-Vertical-off.png' alt="vert-phone">`;
        count_iphone_vert = 1;
    }else{
        IPHONE_VERT.innerHTML = `<img src='assets/iPhone-Vertical.png' alt="vert-phone">`;
        count_iphone_vert = 0;
    }
    });
IPHONE_HORIZ.addEventListener('click', (event) => {
        if(count_iphone_horiz == 0){
            IPHONE_HORIZ.innerHTML = `<img src='assets/iPhone-Horizontal-off.png' alt="vert-phone">`;
            count_iphone_horiz = 1;
        }else{
            IPHONE_HORIZ.innerHTML = `<img src='assets/iPhone-Horizontal.png' alt="vert-phone">`;
            count_iphone_horiz = 0;
        }
    });
FORM.addEventListener('submit', () => {
    const subject = document.getElementById('subject').value.toString();
    const description = document.getElementById('description').value.toString();
    subject != '' ? document.getElementById('tema').innerText = 'Тема: ' + subject :
    document.getElementById('tema').innerText = 'Без темы';
    description != '' ? document.getElementById('desc').innerText = 'Описание: ' + description :
    document.getElementById('desc').innerText = 'Без описания';
    document.getElementById('message-block').classList.remove('hidden');
    event.preventDefault();
});
CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('message-block').classList.add('hidden');
    FORM.reset();
});
RESP_MENU_VISIB.addEventListener('click', (event) => {
    MENU_ABSOLUTE.style.display = "block";
    });
RESP_MENU_HIDDEN.addEventListener('click', (event) => {
    MENU_ABSOLUTE.style.display = "none";
    });
MENU_HEADER_HIDDEN.addEventListener('click', (event) => {
    MENU_HEADER_HIDDEN.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    MENU_ABSOLUTE.style.display = "none";
    });
   
document.addEventListener('scroll', onScroll);
function onScroll(event){

    // if(window.scrollY > 95){
    //     document.querySelector('header').classList.add('small');
    // }

    const SECTIONS = document.querySelectorAll('section');
    const CUR_POS = window.scrollY;
    if(CUR_POS < 695){
        MENU_HEADER.querySelectorAll('a')[0].style.color = "#f06c64";
    }else{
        MENU_HEADER.querySelectorAll('a')[0].style.color = "white";
    }

    SECTIONS.forEach((el) => {
        if(el.offsetTop <= CUR_POS && (el.offsetTop + el.offsetHeight) > CUR_POS){
            MENU_HEADER.querySelectorAll('a').forEach((a) => {
                a.classList.remove('active');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                }
            })
        }
    })
};


