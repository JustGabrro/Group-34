let cookies = 0;
let gold = 0;
let cookiesPerClick = 1;
let goldPerClick = 1;
let fingerCost = 50;
let minesCost = 100;
let doubleCookiesCost = 200;

const cookieButton = document.getElementById('cookie-button');
const cookieCountElement = document.getElementById('cookie-count');
const goldCountElement = document.getElementById('gold-count');

const buyFingerButton = document.getElementById('buy-finger');
const fingerCostElement = document.getElementById('finger-cost');
const buyMinesButton = document.getElementById('buy-mines');
const minesCostElement = document.getElementById('mines-cost');
const buyDoubleCookiesButton = document.getElementById('buy-double-cookies');
const doubleCookiesCostElement = document.getElementById('double-cookies-cost');

cookieButton.addEventListener('click', () => {
    cookies += cookiesPerClick;
    gold += goldPerClick;
    updateUI();
});

buyFingerButton.addEventListener('click', () => {
    if (gold >= fingerCost) {
        gold -= fingerCost;
        cookiesPerClick++;
        fingerCost *= 2;
        updateUI();
    }
});

buyMinesButton.addEventListener('click', () => {
    if (cookies >= minesCost) {
        cookies -= minesCost;
        goldPerClick++;
        minesCost *= 2;
        updateUI();
    }
});

buyDoubleCookiesButton.addEventListener('click', () => {
    if (gold >= doubleCookiesCost) {
        gold -= doubleCookiesCost;
        cookiesPerClick *= 2;
        doubleCookiesCost *= 2;
        updateUI();
    }
});

function updateUI() {
    cookieCountElement.textContent = cookies;
    goldCountElement.textContent = gold;

    fingerCostElement.textContent = fingerCost;
    minesCostElement.textContent = minesCost;
    doubleCookiesCostElement.textContent = doubleCookiesCost;

    buyFingerButton.disabled = gold < fingerCost;
    buyMinesButton.disabled = cookies < minesCost;
    buyDoubleCookiesButton.disabled = gold < doubleCookiesCost;
}

updateUI();
