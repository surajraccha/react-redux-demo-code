import React,{useState} from 'react'
import './ItemList.css';
import { useSelector,useDispatch } from 'react-redux';

function  ItemListFun(){
        const items = useSelector(state=>state);
        const dispatch = useDispatch();
        const [name,setName] = useState('');
        const [description,setdescription] = useState('');

function deleteItem(id){
     dispatch(delete1(id));
     alert("item deleted with id:"+id);
  }

function addItem(event){
    event.preventDefault();
    dispatch(add(name,description));
    alert("item "+name+" is added to store!!!");
    setName('');
    setdescription('');
}

 const add = (name,description) => ({ type: 'itemAdded',payload:{
         name:name,
         description:description
}});
const delete1 = (id) => ({ type: 'itemRemoved',payload:{
id:id
} });

    return (
        <div className="container">
            <div className="container-flex">
               <div className="add-item">
                 <div className="item-heading">
                 <h2>Add Item</h2>
                 </div>
                 <form onSubmit={addItem}>
                 <div className="item-data">
                   <label>Item Name</label>
                   <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} id="name" placeholder="Enter item name" required/>
                   <label>Item Description</label>
                   <textarea placeholder="Item Description" value={description} onChange={(e)=>setdescription(e.target.value)} id="description" name="description" required></textarea>
                 </div>
                 <div className="item-button">
                 <input type="submit"/>
                 </div>
                 </form>
               </div>
               <div className="item-list">
                  <div  className="item-heading"> 
                  <h2>Item List</h2>
                  </div>
                  <div className="item-table">
                  <table>
                        <thead>
                        <tr>
                            <th>Item Id</th>
                            <th>Item Name</th>
                            <th>Item Description</th>
                            <th>Delete Item</th>
                        </tr>
                        </thead>
                        <tbody>
                            {items && items.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                     <td><button onClick={()=>deleteItem(item.id)}>Delete</button></td>
                                    </tr>
                                )}

                            )}
                        </tbody>
                    </table>
                    </div>
               </div>
            </div>
        </div>
    )
}


export default ItemListFun