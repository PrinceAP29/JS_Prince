// Immediately Invoked Function Expressions (IIFE)

 (function cahi() {
    // named iife
    console.log(`DB CONNECTED`);
  //                                 globel scope me pollution hoti hai kabhi kabhi so ham log usse hatane  ke liye iife ka use karte hai
 }) ();
//              we can not use two iffe directly we have use ; at the end of calling
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ('prince')
 