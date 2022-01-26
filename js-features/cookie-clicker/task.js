const clicker_counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.onclick = function changeSizes() {
     clicker_counter.textContent = +clicker_counter.textContent + 1;
     if (clicker_counter.textContent % 2) {
        cookie.width = 250;
     } else 
     cookie.width = 200;
};
