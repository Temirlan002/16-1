const a = "aasdfasd"; // STRING str


// console.log(a)

let c = 32; // number

const bool = true; // boolean
const bool2 = false;

const obj = { // object
    key: 'value',
    username: 'Aybek',
    data: {
        first_name: 'Aybek',
        last_name: 'Molodec'
    }
}

// console.log(obj.data.last_name)

const arr = ["Aydana", true, false, 25] // array

console.log(arr[2]);

const arr2 = [
    {
        key: 'value'
    },
    {
        key: 'value2'
    },
    {
        key: 'value3'
    }
]
// console.log(arr2[1].key)

// const name = prompt("Как вас зовут?")
// console.log("Hello " + name)

// const age = alert("у вас ошибка")

// const first_number = prompt("Первое число?")
// const last_number = prompt("Второе число?")

// if(first_number > last_number){
//     console.log(first_number + ">" + last_number)
// } else if(first_number < last_number){
//     console.log(first_number + "<" + last_number)
// } else {
//     console.log(first_number + "=" + last_number)
// }

const age = prompt("Сколько вам лет?")

if(age < 18){
    console.log("вам нельзя входить")
} else if (age > 18 ){
    console.log("вам можно входить")
} else {
    console.log("поживи еще годик")
}

