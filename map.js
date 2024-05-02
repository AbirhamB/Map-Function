const list=[1,2,4,6,7,8,9]

let Ln=list.map((e)=>{
    return e*e
})

console.log(Ln)

const Names=['abay','teddy','habte']

name=Names.map((e)=>{
    return e[0].toUpperCase() + e.slice(1);

})

console.log(name)

const array=['Hey there!','I do love learning react','i want to become a clever MERN deveoper!']


let New_array=array.map((e)=>{
    return `<p>${e}</P>`
})
console.log(New_array)

