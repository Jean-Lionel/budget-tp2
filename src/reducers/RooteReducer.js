let initReducer = {
    bugdets : []
}

const isEquals = (obj1,obj2) =>{
    const obj1Key = Object.keys(obj1)
    const obj2Key = Object.keys(obj2)

    if(obj1Key.length !== obj2Key.length)
        return false
    
    for(let key of obj2Key){
        if(obj2[key] !== obj1[key])
            return false
    }
    return true;
}

const RooteReducer = (state = initReducer, action) =>{

    if(action.type === 'ADD_ENTRE'){
        const bugde = action.bugde;
        
        const b = {
            sign : bugde.sign,
            description : bugde.description,
            val : bugde.val  
        }
       
        let bugdets = [...state.bugdets,b];

        localStorage.setItem("bugdets", JSON.stringify(bugdets));
        bugdets =JSON.parse(localStorage.getItem("bugdets"))

        return{
            ...state,
            bugdets
        }

    }

    if (action.type === 'DELETE_BUGDE'){
        const budge = action.budge;

        let bugdets = state.bugdets.filter(b => {
            return !isEquals(budge,b)
        })

        localStorage.setItem("bugdets", JSON.stringify(bugdets));
        bugdets = JSON.parse(localStorage.getItem("bugdets"))
        
        return{
            ...state,
            bugdets
        }

    }
    let bugdets = JSON.parse(localStorage.getItem("bugdets"))
    return{
        ...state,
        bugdets
    }
}

export default RooteReducer