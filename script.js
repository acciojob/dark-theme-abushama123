//your code here

const main = document.getElementById("app");
const button = document.getElementById("swap");
const swapTheme = () => {
    if(main.classList.contains("day")){
        main.classList.remove("day");
        main.classList.add("night");
        button.classList.remove("button_day");
        button.classList.add("button_night");
    }
    else{
        main.classList.add("day");
        main.classList.remove("night");
        button.classList.add("button_day");
        button.classList.remove("button_night");
    }
}

button.addEventListener("click", swapTheme);

