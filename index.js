function receivesAFunction(CallmeBack){
CallmeBack();
}
 function returnsANamedFunction(){
  return function named() {
    console.log("Hello world. I'm a named function")
  };
 }
function returnsAnAnonymousFunction(){
return function() {
  console.log("Hello world. I'm a anonymos function ")
}
}
