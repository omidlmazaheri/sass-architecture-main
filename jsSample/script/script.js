let pic = document.getElementById("light");
let ton = document.getElementById('turnon');
let toff = document.getElementById('turnoff');
function turnon() {
    pic.src = "images/pic_bulbon.gif";
    ton.style.display = 'none';
}
function turnoff() {
    pic.src = "images/pic_bulboff.gif";
    ton.style.display = "block";
    toff.style.display = 'none';

}