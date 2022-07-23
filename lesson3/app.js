// function sayHello(){
//     console.log("hello")
// }
//
// sayHello();
//
// function getFullName( user, age, user2) {
//     if(age < 18){
//         console.log( user2.first_name, user.last_name + " " + "CLOSE")
//     } else {
//         console.log(user2.first_name, user.last_name + " " + "Open")
//     }
// }
//
// const Beka = {
//     first_name: "Beka",
//     last_name: "Aydarov"
// }
//
// const T = {
//     first_name: 'T',
//     last_name: "K"
// }
//
//
// getFullName(Beka, 19, T )

// const anonym = function () {
//     console.log("text")
// }
//
// anonym();


//
// function twoMass(arr1, arr2) {
//     if(arr1.length > arr2.length){
//         alert("arr1 > arr2")
//     }else if(arr1.length < arr2.length){
//         alert("arr1 < arr2")
//     } else {
//         alert("===")
//     }
// }
//
// const arr1 = [1212, 32423, 4234]
// const arr2 = [23432, 234, 23, 432, 23432, 234]
//
// twoMass(arr1, arr2)
//

function tr() {
    let line = "*"
    while(line.length < 7){
        console.log(line)
        line = line + '*'
    }

}
tr()