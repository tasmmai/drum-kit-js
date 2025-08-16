//DETECTING BUTTON PRESS

document.querySelectorAll("button").forEach(e => {
    e.addEventListener("click", function () {
        var btnInnerHTML = this.innerHTML;

        switch (btnInnerHTML) {
            case "w":

                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();

                break;
            case "a":

                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();

                break;
            case "s":

                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();

                break;
            case "d":

                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();

                break;
            case "j":

                var crash = new Audio('sounds/crash.mp3');
                crash.play();

                break;
            case "k":

                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            case "l":

                var snare = new Audio('sounds/snare.mp3');
                snare.play();

                break;

            default:
                alert("Press only (w a s d j k l) to work.")
                break;
        }
        

        btnAnimation(btnInnerHTML);

    });
});



//DETECTING KEYBOARD PRESS

//adding event listner to entire document instead of individual buttons
document.addEventListener("keydown", function (e) {


    switch (e.key) {
        case "w":

            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

            break;
        case "a":

            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();

            break;
        case "s":

            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();

            break;
        case "d":

            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();

            break;
        case "j":

            var crash = new Audio('sounds/crash.mp3');
            crash.play();

            break;
        case "k":

            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":

            var snare = new Audio('sounds/snare.mp3');
            snare.play();

            break;

        default:
            alert("Press only (w a s d j k l) to work.")
            break;
    }

    btnAnimation(e.key);

});

function btnAnimation(currentKey) {
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100)
}