const array = [
    {
        username:'jack',
        full_name:  'jack barbaro'
    },
    {
        username:'jack',
        full_name:  'jack barbaro'
    },
    {
        username:'jack',
        full_name:  'jack barbaro'
    },
    {
        username:'jack',
        full_name:  'jack barbaro'
    },
    {
        username:'jack',
        full_name:  'jack barbaro'
    },
]
// console.log(array[0].username, array[0].full_name)
// console.log(array[1].username, array[1].full_name)
// console.log(array[2].username, array[2].full_name)
// console.log(array[3].username, array[3].full_name)
// console.log(array[4].username, array[4].full_name)

// for(let i=0; i < array.length; i++){
//     console.log(array[i])
//     if(i === 2){
//         break
//     }//индексы
//
// }
//

// for(let user of array){
//     console.log(user) // элементы
// }

// const obj = {
//     key1:'b1',
//     key2:'b2',
//     key3:'b3',
//     key4:'b4',
//     key5:'b5',
//     key6:'b6',
//     key7:'b7',
// }
//
// for(let key in obj){
//     console.log(obj[key])
// }

// let i = 0;
//
// while(i < 5){
//     console.log("Hello")
// }

const users = [
    {
        username: 'jack',
        salary: 500
    },
    {
        username: 'john',
        salary: 5000
    },
    {
        username: 'Beka',
        salary: 10000
    }
]

const filteredUsers = users.filter(user => user.salary > 500)
console.log(filteredUsers)
// for(let user of users){
//     if(user.salary > 500){
//         console.log(user)
//     }
// }