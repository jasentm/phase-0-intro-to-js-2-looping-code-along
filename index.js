// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
    const messages =[]
    for (let i = 0; i < names.length; i++) {
        debugger;
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    }
    return(messages);
}
writeCards(names, "surprise");

function countDown(n) {
    while (n >= 0) {
        console.log(n--)
    }
}
countDown(10);