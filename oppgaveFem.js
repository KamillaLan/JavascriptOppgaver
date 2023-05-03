
// const og let er block scoped.

const logIn = true;


if ( logIn === true) {
    const message ='User logged in';
} else {

    var messageTwo ='user not logged in';
}

//console.log(message);
console.log(logIn);
console.log(messageTwo);


let number = 20;
 
const logNum = () => {
  let number = 100; 
  console.log(number);
};
 
logNum(); 
console.log(number); 


