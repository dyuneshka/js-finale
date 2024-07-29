let emails = ['mail1@mail.ru', 'mail2@mail.ru', 'mail3@mail.ru', 'mail4@mail.ru', 'mail5@mail.ru', 'mail6@mail.ru', 'mail7@mail.ru', 'mail8@mail.ru', 'mail9@mail.ru',
 'nonmail1@mail.ru', 'nonmail2@mail.ru', 'nonmail3@mail.ru', 'nonmail4@mail.ru', 'nonmail5@mail.ru', 'nonmail6@mail.ru', 'nonmail7@mail.ru'];
 
let blacklist = ['nonmail1@mail.ru', 'nonmail2@mail.ru', 'nonmail3@mail.ru', 'nonmail4@mail.ru', 'nonmail5@mail.ru', 'nonmail6@mail.ru', 'nonmail7@mail.ru'];
 
function filteremail(emails, blacklist){
    
    let whitelist = [];

    for(let cleanemail of emails){
        if(!blacklist.includes(cleanemail)){
            whitelist.push(cleanemail)
        }
    }

    return whitelist;

}

    console.log(filteremail(emails, blacklist));

//2-ое задание

function skidki(Totalprice, Amount, Promokod){
    let finaleprice = Totalprice;

    if(Promokod === 'ДАРИМ300'){
        finaleprice = Math.max(0, finalCost - 300);
    }

    if(Amount > 10){
        finaleprice *= 0.95;
    }

    if(finaleprice > 50000){
        const difference = finaleprice - 50000;
        difference *= 0.2;
        finaleprice -= difference;
    }

    if (Promokod === 'СКИДКА15' && finaleprice > 20000){
        finaleprice *= 0.85;
    }

    return finaleprice;
}

console.log(skidki(7800, 12, null));