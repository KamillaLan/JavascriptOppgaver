const name='Klara';
const age=18;
let hobbies = ['swimming', 'gaming'];

for (let i = 0; i < hobbies.length; i++) {
    switch (hobbies[i]) {
      case 'swimming':
        if (age>=18) {
          console.log(name + " is in adult swimming group");
        } else { 
          console.log(name + " is in children swimming group");
        }
        break;
        case 'dancing':
          if (age>=18) {
            console.log(name + " is in adult dancing group");
          } else { 
            console.log(name + " is in children dancing group");
          }
          break;
        case 'baking':
         if (age>=18) {
            console.log(name + " is in adult baking group");
         } else { 
            console.log(name + " is in children baking group");
         }
          break;
        case 'gaming':
         if (age>=18) {
            console.log(name + " is in adult gaming group");
        } else { 
            console.log(name + " is in children gaming group");
        }
         break;        
        default:
          console.log(hobbies[i] + " is not included. come see front desk.");
          break;
      }
    }
  

