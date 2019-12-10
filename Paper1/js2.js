var products = [
    "Printer",
    "Tablet",
    "Router",
    "Hyperdrive",
    "Ubuntu 18.04 on a USB stick",
    "Battleship (sunk)",
    "Fork (with bent tines)",
    'Fork (bomb):\n\tbash -c ":(){ :|:& };:"',
    '</a><script>while (true) { alert(1); }</script><a href="https://xkcd.com/327/">:)'
];
products.sort();
console.log(products.join('\n'));
console.log(' --- ');
console.log(products.length);
// run this with nodejs