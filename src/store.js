import {createStore} from 'redux';
import reducer from './reducer';
let initialState=[
      { 
         id:1,
         name:'item1',
         description:'item1 with id 1'
      },
      { 
         id:2,
         name:'item2',
         description:'item2 with id 2'
      },{ 
         id:3,
         name:'item3',
         description:'item3 with id 3'
      },{ 
         id:4,
         name:'item4',
         description:'item4 with id 4'
      }
];

const store= createStore(reducer,initialState);

store.subscribe(()=>{
   console.log("store",store);
   console.log("store state",store.getState());
});
export default store;
