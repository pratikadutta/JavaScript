//for
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

let myArray = ["flash","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//break and continue

for (let index = 1; index < 20; index++) {
    console.log(index);
    if (index==5) {
        console.log('Detected 5');
        break;
    }
}
for (let index = 1; index < 20; index++) {
    console.log(index);
    if (index==5) {
        console.log('Detected 5');
        continue;
    }
}