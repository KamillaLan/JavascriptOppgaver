const name='Sofie';
const age=16;
let logIn = true;

if (age < 18) {
    console.log (name +' is in group one');
}
else if (age > 18){
    console.log(name + ' is in group two');
}
else {
    console.log(name + ' is in group three');
}

const late = age >= 18 ? name + " is over 18" : name + " is under 18";
console.log(late);


if (name === "Klara") {
    console.log('hei Klara')
} else {
    console.log('Hello')
}



if ( logIn && name === 'Klara' ) {
    console.log(" velkommen tilbake Klara");
} else { 
    console.log('please make an account or log in');
}



