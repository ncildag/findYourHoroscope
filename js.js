/** 

$(document).ready(function () {
    $("button").click(function () {

        

    });
});

*/



function myFunction() {

    let day = document.getElementById("date").value;
    let month = document.getElementById("month").value;

    if ((day>31)|| (month>12)) {
        alert("Please write your birthdate again!!!")
        
    }

    if ((day >= 21 && month == 01) || (day <= 19 && month == 02)) {
        $("p").html("Your Horoscope is <b>Aquarius</b>");
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Aquarius";
    }

    if ((day >= 20 && month == 02) || (day <= 20 && month == 03)) {
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Pisces";
    }

    if ((day >= 21 && month == 03) || (day <= 20 && month == 04)) {
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Aries";
    }

    if ((day >= 21 && month == 04) || (day <= 21 && month == 05)) {
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Taurus";
    }

    if ((day >= 22 && month == 05) || (day <= 21 && month == 06)) {
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Gemini";
    }

    if ((day >= 22 && month == 06) || (day <= 22 && month == 07)) {
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Cancer";
    }

    if ((day >= 23 && month == 07) || (day <= 23 && month == 08)) {
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Leo";
    }

    if ((day >= 24 && month == 08) || (day <= 23 && month == 09)) {
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Virgo";
    }

    if ((day >= 24 && month == 09) || (day <= 23 && month == 10)) {
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Libra";
    }
    if ((day >= 24 && month == 10) || (day <= 22 && month == 11)) {
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Scorpio";
    }

    if ((day >= 23 && month == 11) || (day <= 21 && month == 12)) {
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Sagitarius";
    }

    if ((day >= 22 && month == 12) || (day <= 20 && month == 01)) {
        document.getElementById("paragraph").innerHTML = "Your Horoscope is Capricorn";
    }

  }


/** 
let day = 12;
let month = 07;
*/