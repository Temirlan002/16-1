//es5 and es6

// console.log(a)
// const a = 10;
//
// console.log(b)
// let b = "hello";
//
// console.log(c)
// var c = 5;


//string expression - интерполяция строк

const first_name = "jack";
const last_name = "barbaro";

console.log("Full Name" + ' ' + first_name + ' ' + last_name)

console.log(`Full Name: ${first_name} ${last_name}`)

const getFullName = (user) => {
    // return "First Name: " + user.first_name + "\n" + "Last Name: " + user.last_name
    return `First Name: ${user.first_name}\nLast Name: ${user.last_name}`
}

const user = {
    first_name: 'Atay',
    last_name: 'Bekturov'
}

console.log(getFullName(user))

//spread operator

const mass = [1,2,3,4,5]
const mass2 = [...mass]
//
// for(let i = 0; i < mass.length; i++){
//     mass2.push(mass[i])
// }
console.log(mass2)

const obj = {
    username: "beks",
    age: 18,
    last_name: "Bekmamatov",
    full_name: 'Beks Bekmamatov'
}
const obj2 = {...obj}
console.log(obj2)

//деструктуризация

// const obj4 = {
//     mass5: [
//         {
//             jska: 'val'
//         }
//     ]
// }
//
// const {mass5} = obj4;
//
// console.log(mass5)


const props2 = {
    onSubmit: () => {
        console.log("submit")
    },
    data: [
        {
            key: 'value'
        },
        {
            key: 'value'
        },
        {
            key: 'value'
        }
    ]
}

const {data, onSubmit} = props2;
console.log(data)
onSubmit()

