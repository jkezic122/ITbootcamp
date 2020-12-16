// Написати функцију која за параметар прима број сати (0-24) и у зависности од доба дана исписује поруке: Добро јутро , Добар дан или Добро вече.


function dobaDana(vreme) {


    if (vreme >= 1 && vreme < 12) {
        console.log('Dobro jutro');
    }
    else if (vreme >= 12 && vreme < 19) {
        console.log('Dobar dan');
    }
    else if (vreme >= 19 && vreme <= 24) {
        console.log('Dobro vece');
    }
    else {
        console.log('Nije validan broj sati')
    }

}

dobaDana(20);