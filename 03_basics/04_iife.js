//Immediately Invoked Function Experssions (IIFE)

(function chai() {
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Pratika");
