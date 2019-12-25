var item = 1;


if (item>9) {
    item=item+5;
}
else if (item>7) {
    item=item+3;
}
else if (item>5) {
    item=item+1;
}
else if (item<5) {
    item=item;
}
else if (item<0 || typeof item!=='Number') {
    item='Invalid input!';
}

console.log(item);