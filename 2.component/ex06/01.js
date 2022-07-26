

import fs from 'fs'; 


fs.readFile('./json/data.json','utf-8',(err,data)=>{

    console.log(data); 



})

console.log("1");



const data2 = fs.readFileSync('./json/data.json','utf-8'); 

console.log(typeof(data2));
console.log(typeof(JSON.parse(data2))); 


const data3 = JSON.parse( fs.readFileSync('./json/data.json','utf-8'));
console.log(data3.no); 


let state={ 
    data4 : JSON.parse( fs.readFileSync('./json/data.json','utf-8'))
}


const updateOrderProducts1 = state.order.products;
updateOrderProducts1.push({ 

    no: "p002-001",
    name: "팬츠 스트라이프",
    price: 2000,
    amount: 1
})

console.log(state.order.products, updateOrderProducts, state.order.products === updateOrderProducts);

console.log("========================================="); 

let state2={
    order : JSON.parse( fs.readFileSync('./json/data.json','utf-8'))
}

const updateOrderProducts2 = state.order.products.concat({ 
    no: "p002-001",
    name: "팬츠 스트라이프",
    price: 2000,
    amount: 1
});


const updateOrderProducts3 = [...state.order.products,{
    no: "p002-001",
    name: "팬츠 스트라이프",
    price: 2000,
    amount: 1 
} 
];




