const MENU_HEADER = document.getElementById('menu-header');
const CLIDER_PHONES = document.getElementById('blue-phones');
const CHEV1 = document.getElementById('chev-click1');
const CHEV2 = document.getElementById('chev-click2');
const IPHONE_VERT = document.getElementById('iphone-vertical');
const IPHONE_HORIZ = document.getElementById('iphone-horizontal');

let count = 0;
let count_iphone_vert = 0;
let count_iphone_horiz = 0;

MENU_HEADER.addEventListener('click', (event) => {
MENU_HEADER.querySelectorAll('a').forEach(el => el.classList.remove('active'));
event.target.classList.add('active');
});

CHEV1.addEventListener('click', (event) => {
    if(count == 0){
        CLIDER_PHONES.style.display = "block";
        count = 1;
    }else{
        CLIDER_PHONES.style.display = "none";
        count = 0;
    }
    });
CHEV2.addEventListener('click', (event) => {
    if(count == 0){
        CLIDER_PHONES.style.display = "block";
        count = 1;
    }else{
        CLIDER_PHONES.style.display = "none";
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
