import fs from 'fs';
import update from 'react-addons-update';

let state={
    order : JSON.parse( fs.readFileSync('./json/data.json','utf-8'))
}

// const newObject = update(objectInState, { [WHERE] : { [WHAT]: updateValue } });
const updateOrder = update(stata.order,{

    receive:{
        $set: '부산시 해운대구 우동...' 
    }, 

    payment:{
        method:{
            $set:'Mobile'

        }
    }, 

    products:{

        0:{

            amount : {
                
                $set: 100 
            }
        },

        $push:[{
                "no": "p002-001",
                "name": "팬츠 스트라이프",
                "price": 2000,
                "amount": 1
            }] 
    } 
});

console.log(
    state.order,
    updateOrder,
    state.order === updateOrder 
) 


 
