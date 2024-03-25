/**
 * Closure Example 
 * **/

// Example 1: Parent and Child Function(s)
let a = 1;
const parentFunction = () => {
    let b = 2;
    console.log(a);
    console.log(b);

    return () => {
        console.log(a += 3);
        console.log(b += 4);
    }
}
const result = parentFunction(); // When we are calling parentFunction it is only executing the action defined in it 

result();   // But when we are calling its child function then it is able to utilize all the variables global and parentFunction has
result();   // Multiple time calling this same function will update the initial value
