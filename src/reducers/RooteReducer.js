let initReducer = {
    bugdets : []
}

const RooteReducer = (state = initReducer, action) =>{

    if(action.type === 'ADD_ENTRE'){
        const bugde = action.bugde;
        
        const b = {
            sign : bugde.sign,
            description : bugde.description,
            val : bugde.val  
        }
       
        const bugdets = [...state.bugdets,b]
        return{
            ...state,
            bugdets
        }

    }
    return state;
}

export default RooteReducer