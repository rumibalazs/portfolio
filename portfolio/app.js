function Mathiasz() 
{
    window.open("https://mathiasz.hu", "_blank");
}

window.onscroll = function () {
    gorget();
}

function gorget() {
    let b1 = document.getElementById("vgomb");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        b1.style.display = "block";
    }
    else {
        b1.style.display = "none";
    }
}

function visszaFel() {
    document.body.scrollTop = 0; //safari
    document.documentElement.scrollTop = 0; //opera chrome internet explorer firefox
}