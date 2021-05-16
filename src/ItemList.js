import React from 'react'
import './ItemList.css';
import { connect } from 'react-redux';
class  ItemList extends React.Component {
    constructor(){
        super();
        this.state={
        }
        this.onInputchange = this.onInputchange.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.addItem=this.addItem.bind(this);
    }

 deleteItem(id){
     this.props.deleteMyItem(id);
     alert("item deleted with id:"+id);
    }
addItem(event){
    event.preventDefault();
    this.props.addMyItem(this.state.name,this.state.description);
        alert("item "+this.state.name+" is added to store!!!");
    this.setState({
      name:"",
      description:""
    });
}
onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
    render(){
    return (
        <div className="container">
            <div className="container-flex">
               <div className="add-item">
                 <div className="item-heading">
                 <h2>Add Item</h2>
                 </div>
                 <form onSubmit={this.addItem}>
                 <div className="item-data">
                   <label>Item Name</label>
                   <input type="text" name="name" value={this.state.name} onChange={this.onInputchange} id="name" placeholder="Enter item name" required/>
                   <label>Item Description</label>
                   <textarea placeholder="Item Description" value={this.state.description} onChange={this.onInputchange} id="description" name="description" required></textarea>
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
                            {this.props.items && this.props.items.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                     <td><button onClick={()=>this.deleteItem(item.id)}>Delete</button></td>
                                    </tr>
                                )}

                            )}
                        </tbody>
                    </table>
                    </div>
               </div>
            </div>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        items:state,
    };
}
const add = (name,description) => ({ type: 'itemAdded',payload:{
         name:name,
         description:description
}});
const delete1 = (id) => ({ type: 'itemRemoved',payload:{
id:id
} });

const mapDispatchToProps =  (dispatch) => {
  return {
    addMyItem:(name,description) => dispatch(add(name,description)),
    deleteMyItem: (id)=> dispatch(delete1(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)