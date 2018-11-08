var signs = ["Aquarius","Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"]
var messages = ["You may want to readjust some of your attitudes in the next couple of weeks.", "Now is a time when you need to settle down, and seek comfort " +
"in the pleasure of your home.", "Try to reestablish contact with some former friends and maybe even repair some severed bonds.", "Look to intensify your love life," +
"and you might find that it improves your overall emotional well-being.", "Now is a time to consolidate things in your life, and this current period may be one of incoming" +
"money or profit.", "You will carry confidence, clarity, and positive influence wherever you go.", "Try to get rid yourself of the people in your life that are holding you back," +
" and try to focus on celebrating your differences instead of blending in with the crowd.", "You need to think big! You've worked hard lately and now is the" +
"time to evaluate your power.", "You ought to try to put more effort into mingling with others and get involved with a cause that's bigger than you are.", "You are" +
"currently looking for space, whether it be physical or intellectual. Think about taking a trip to get away from the crowds and clear your head.", "The reckless and enterprising" +
"you has finally returned! Try to get back to your spontaneous self.", "At this time, music will be the key to pleasure and sensuality, so allow music to fill your senses!"]

var image = ["image/aquarius.png", "image/pisces.png", "image/aries.jpg", "image/taurus.jpeg", "image/gemini.jpeg", "image/cancer.jpg",
    "image/leo.jpg", "image/virgo.jpg", "image/libra.jpg", "image/scorpio.jpgg", "image/sagittarius.jpg", "image/capricorn.jpg"]

function runFunction(){
    var name = document.getElementById("name").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var sign = determineSign(day, month);

    console.log(day);
    console.log(month);
    console.log(name);
    console.log(sign);

    document.getElementById("sign").innerHTML = signs[sign]
    document.getElementById("message").innerHTML = messages[sign]
    document.getElementById("signImage").src = image[sign]
    document.innerHTML("Hello " + name + "! " + "Your sign is " + sign + ", " + "and your horoscope is " + messages)
}

function determineSign(day, month){
    if(month==1 && day >= 20 || month ==2 && day <= 18){
        return 0;
    }
    if(month==2 && day >= 19 || month==3 && day <= 20){
        return 1;
    }
    if(month==3 && day >= 21 || month==4 && day <= 19){
        return 2;
    }
    if(month==4 && day >= 20 || month==5 && day <= 20){
        return 3;
    }
    if(month==5 && day >=21 || month==6 && day <= 20){
        return 4;
    }
    if(month==6 && day >=21 || month==7 && day <= 22){
        return 5;
    }
    if(month==7 && day >=23 || month==8 && day <= 22){
        return 6;
    }
    if(month==8 && day >= 23 || month==9 && day <=22){
        return 7;
    }
    if(month==9 && day >= 23 || month==10 && day <= 22){
        return 8;
    }
    if(month==10 && day >= 23 || month==11 && day <=21){
        return 9;
    }
    if(month==11 && day >=22 || month==12 && day <=21){
        return 10;
    }
    if(month==12 && day >=22 || month==1 && day <= 19){
        return 11;
    }

}