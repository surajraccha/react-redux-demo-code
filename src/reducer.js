let itemId = 4;
function reducer(state=[] ,action){
switch(action.type){
case "itemAdded":
                return  [
                ...state,
                {
                id:++itemId,
                name:action.payload.name,
                description:action.payload.description,
                }
                ];
                break;
case "itemRemoved":
                return state.filter(item=>item.id!== action.payload.id);
                break;
          default:
                return state;
}
}

export default reducer;