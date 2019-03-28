export interface mainReducerState {
    userId:string |null
}

const mainReducerDefultState : mainReducerState = {
    userId:"harry"
}

export default (state = mainReducerDefultState , action:any) :mainReducerState=>{
    switch(action.type){
        case 'CHANGE_USER_NAME':
            return{
                ...state,
                userId:action.userId
            }
        default:
            return state
    }
}

