const guestes = [
    'Nick Carraway',
    'Manuel Gerolin',
    'Jay Gatsby',
    'Daisy Buchanan',
    'Jordan Baker',
    'Trimalcione',
    'Myrtle Wilson',
    'Viola Selvatica',
    'Mayer Wolfsheim',
    'Tom Buchanan',
];
console.log(guestes);

document.querySelector('button').addEventListener(`click`, function () {
    const guest = document.querySelector('input');

    let isInvited = false;

    for (let i = 0; i < guestes.length; i++) {
        if (guestes[i].toLowerCase() === (guest.value).toLowerCase().trim())
            isInvited = true;
    }

    console.log(isInvited);

    if (isInvited) {
        document.getElementById('message').innerHTML=`${(guest.value).toLowerCase().trim()} sei atuorizzato ad entrare, mantieni la distanza di 1m dagli altri ospiti ed indossa la mascherina. Divertiti!`
        console.log('sei invitato');
    } else {
        document.getElementById('message').innerHTML=`${(guest.value).toLowerCase().trim()} Non sei autorizzato ad entrare, prego seguire i genitli signori in nero, ti porteranno all'uscita!`
        console.log('stai fuori');
    }
    guest.value = "";
})