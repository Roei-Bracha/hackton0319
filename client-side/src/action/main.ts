

export function changeUserName(userName : string){
    return {
        type:"CHANGE_USER_NAME",
        userId:userName
    }
}