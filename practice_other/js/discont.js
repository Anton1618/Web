var price = 28.99;
var discount = 10;
var total = price - (price * (discount / 100));
if (total > 25) {
    freeShipping();
}

var count = 10;
while (count > 0) {
    juggle();
    count = count -1;
}

var dog = {name: "Rover", weight: 35};

if (dog.weight > 30) {
    alert("WOOF WOOF");
} else {
    alert("woof woof");
}

var circleRadius = 20;
var circleArea = Math.PI * (circleRadius * circleRadius);
