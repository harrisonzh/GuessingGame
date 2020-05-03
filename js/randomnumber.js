var randomnumber;
var userinputLog = [];
var tries = 0;

function restart() {
    window.location.reload();
}

function init() {
    randomnumber = Math.floor(Math.random() * 100 +1);
    console.log(randomnumber);
}

function coldorhot() {
    var userinput = document.getElementById('inputBox').value;
    
    tries++;
    document.getElementById('tries').innerHTML = tries;
    if (tries > 10) {
        document.getElementById('response').innerHTML = "Are you ever going to get this?";
    }
    
    if (userinput > 100) {
        document.getElementById('warning').innerHTML ='Warning: Please enter a number from 1 to 100!';
    } else if (userinput < 1) {
        document.getElementById('warning').innerHTML ='Warning: Please enter a number from 1 to 100!';
    } else {
        document.getElementById('warning').innerHTML ='Keep guessing!';
    }
    
    if (userinput - randomnumber > 0) {
        if (userinput - randomnumber > 5) {
            document.getElementById('textoutput').innerHTML ='Too cold!';
            document.getElementById('Girl').src='img/Girl_With_a_Pearl_Earring_sad.png';
            document.getElementById('Girl').alt='Girl With a Pearl Earring Sad Face';
        } else if (userinput - randomnumber < 6) {
            document.getElementById('textoutput').innerHTML ='Too hot!';
            document.getElementById('Girl').src='img/Girl_With_a_Pearl_Earring_sad.png';
            document.getElementById('Girl').alt='Girl With a Pearl Earring Sad Face';
        }
    } else if (userinput - randomnumber < 0) {
        if (userinput - randomnumber < -5) {
            document.getElementById('textoutput').innerHTML ='Too cold!';
            document.getElementById('Girl').src='img/Girl_With_a_Pearl_Earring_sad.png';
            document.getElementById('Girl').alt='Girl With a Pearl Earring Sad Face';
        } else if (userinput - randomnumber > -6) {
            document.getElementById('textoutput').innerHTML ='Too hot!';
            document.getElementById('Girl').src='img/Girl_With_a_Pearl_Earring_sad.png';
            document.getElementById('Girl').alt='Girl With a Pearl Earring Sad Face';
        }
    } else {
        document.getElementById('textoutput').innerHTML ='Correct!';
        document.getElementById('Girl').src='img/Girl_With_a_Pearl_Earring_happy.png';
        document.getElementById('Girl').alt='Girl With a Pearl Earring Happy Face';
        document.getElementById('warning').innerHTML ='Congratulations!';
        document.getElementById('response').innerHTML = "Hard work pays off！";
    }
}