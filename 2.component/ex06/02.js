import fs from 'fs';


let state={
    order : JSON.parse( fs.readFileSync('./json/data.json','utf-8'))
}


let updateOrder1 = state.order; 
updateOrder1.receive='부산시 해운대구 우동....';
console.log(state.order,updateOrder1, state.order===updateOrder1);

console.log("=================================")

let state2={
    order : JSON.parse( fs.readFileSync('./json/data.json','utf-8'))
}

let updateOrder2 = Object.assign({},state.order,{
    receive: '부산시 해운대구 우동....'
}) 
console.log(state2.order,updateOrder2, state2.order===updateOrder2);



