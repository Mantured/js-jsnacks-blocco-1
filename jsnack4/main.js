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



const guest = prompt('nome invitato').toLowerCase().trim();

let isInvited = false;

for (let i = 0; i < guestes.length; i++) {
    if (guestes[i].toLowerCase() === guest)
        isInvited = true;
}

console.log(isInvited);

if (isInvited) {
    console.log('sei invitato');
} else {
    console.log('stai fuori');
}
