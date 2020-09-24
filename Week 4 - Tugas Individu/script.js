const input1 = document.getElementById('bil1');
const input2 = document.getElementById('bil2');
const hasil = document.getElementById('hasil');
const btn_tmbh = document.getElementById('btn-tmbh');
const btn_krg = document.getElementById('btn-krg');
const btn_kali = document.getElementById('btn-kali');
const btn_bagi = document.getElementById('btn-bagi');
const btn_clear = document.getElementById('btn-clear');

btn_tmbh.addEventListener('click', function () {
    let num1 = bil1.value;
    let num2 = bil2.value;
    hasil.value = Number(num1) + Number(num2);
});

btn_krg.addEventListener('click', function () {
    let num1 = bil1.value;
    let num2 = bil2.value;
    hasil.value = Number(num1) - Number(num2);
});

btn_kali.addEventListener('click', function () {
    let num1 = bil1.value;
    let num2 = bil2.value;
    hasil.value = Number(num1) * Number(num2);
});

btn_bagi.addEventListener('click', function () {
    let num1 = bil1.value;
    let num2 = bil2.value;
    hasil.value = Number(num1) / Number(num2);
});

btn_clear.addEventListener('click', () => {
    bil1.value = '';
    bil2.value = '';
    hasil.value = '';

});