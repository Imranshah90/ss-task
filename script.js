// hotspot buttons
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');

// hotspot contents selector
const hotSpotBgImage = document.querySelector('.hero__bg-hotspot')
const hotSpotText = document.querySelector('.text-box').children;
const hotSpotH2 = document.querySelector('.text-box').children[0];
const hotSpotParagraph = document.querySelector('.text-box').children[1];

// hotspot button 1
function hotSpotOne() {
    hotSpotBgImage.style.backgroundImage = "url(images/bg-1.jpg)"
    hotSpotH2.textContent = 'WEAVED UPPER';
    hotSpotParagraph.textContent = `A new Flyknit weave technology with an elevated fit and feel featuring a lighter and smoother experience that molds to your foot.`;
    $(document).ready(function($) {
        var alterClass = function() {
            var ww = document.body.clientWidth;
            if (ww < 415) {
                $('.highlighted').removeClass('remove');
                $(".hero__bg-hotspot").css("background-image", "unset");



            } else if (ww >= 416) {
                $('.highlighted').addClass('remove');
                $(".hero__bg-hotspot").css("background-image", "");

            };
        };
        $(window).resize(function() {
            alterClass();
        });
        //Fire it when the page first loads:
        alterClass();
    });

}
btn1.addEventListener('click', hotSpotOne);

// hotspot button 2
function hotSpotTwo() {
    hotSpotH2.textContent = 'QUICKER THAN A ROCKET ';
    hotSpotParagraph.textContent = `Okay, so maybe it's not quicker than a rocket. React gives you that instant go you need to do mile after mile, run after run.`;
    $(document).ready(function($) {
        var alterClass = function() {
            var ww = document.body.clientWidth;
            if (ww < 415) {
                $('.highlighted').removeClass('remove');
                $(".hero__bg-hotspot").css("background-image", "unset");


            } else if (ww >= 416) {
                $('.highlighted').addClass('remove');
                $(".hero__bg-hotspot").css("background-image", "url(images/bg-2.jpg)");

            };
        };
        $(window).resize(function() {
            alterClass();
        });
        //Fire it when the page first loads:
        alterClass();
    });

}

btn2.addEventListener('click', hotSpotTwo);

// hotspot button 3
function hotSpotThree() {
    hotSpotH2.textContent = 'SOOOO SQUISHY ';
    hotSpotParagraph.textContent = `React is soft and squishy, yet responsive and stable. It gives you the cushioning you need to hit mile after mile.`;
    $(document).ready(function($) {
        var alterClass = function() {
            var ww = document.body.clientWidth;
            if (ww < 415) {
                $('.highlighted').removeClass('remove');
                $(".hero__bg-hotspot").css("background-image", "unset");

            } else if (ww >= 416) {
                $('.highlighted').addClass('remove');
                $(".hero__bg-hotspot").css("background-image", "url(images/bg-3.jpg)");

            };
        };
        $(window).resize(function() {
            alterClass();
        });
        //Fire it when the page first loads:
        alterClass();
    });

}
btn3.addEventListener('click', hotSpotThree);
// hotspot button 4
function hotSpotFour() {
    hotSpotH2.textContent = 'JUST LIKE A KANGAROO ';
    hotSpotParagraph.textContent = `Ridiculously responsive. Nike React foam bounces the energy of your stride right back at you, and keeps bouncing right back at you even after hundreds of miles.`;
    $(document).ready(function($) {
        var alterClass = function() {
            var ww = document.body.clientWidth;
            if (ww < 415) {
                $('.highlighted').removeClass('remove');
                $(".hero__bg-hotspot").css("background-image", "unset");

            } else if (ww >= 416) {
                $('.highlighted').addClass('remove');
                $(".hero__bg-hotspot").css("background-image", "url(images/bg-4.jpg)");

            };
        };
        $(window).resize(function() {
            alterClass();
        });
        //Fire it when the page first loads:
        alterClass();
    });

}
btn4.addEventListener('click', hotSpotFour);



// jQuery deduct screen size and removes/adds hotspot highlighted word

$(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 415) {
            $('.highlighted').removeClass('remove');
            $('.hero__bg-hotspot').css('background-image', "unset");
        } else if (ww >= 416) {
            $('.highlighted').addClass('remove');
            $('.hero__bg-hotspot').css('background-image', "");
        };
    };
    $(window).resize(function() {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});


let Buttons = document.querySelectorAll("button");

for (let button of Buttons) {
    button.addEventListener('click', (e) => {
        const et = e.target;
        console.log(et);


        const highlightedWords = document.querySelectorAll("h3");
        console.log(highlightedWords);

        for (let highlightedWord of highlightedWords) {

            if (highlightedWord.getAttribute('data-number') === button.getAttribute('data-number')) {
                highlightedWord.style.color = "#6bff77";

            } else {
                highlightedWord.style.color = "Black";
            }
        }
    });
}