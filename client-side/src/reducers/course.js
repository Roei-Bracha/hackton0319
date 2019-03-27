const mainReducerDefultState  = {
    courses :null
}

export default (state = mainReducerDefultState , action) =>{
    switch(action.type){
        case 'COURSES_INIT':
            return {
                ...state,
                courses : action.courses
            }
        default:
            return state
    }
}