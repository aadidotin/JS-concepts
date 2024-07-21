const click_1 = document.getElementById('click_1');
const click_2 = document.getElementById('click_2');

const ok = document.getElementById('ok');
const notok = document.getElementById('notok');

const worker  = new Worker('worker.js');
click_1.addEventListener('click', () => {
    worket.postMessage('');

    worker.onMessage = (e) => {
        ok.innerHTML = e.data;
    }
})

click_2.addEventListener('click', () => {
    notok.innerHTML = "This is second Click";
})
