const initialState = {
    isAuth:false,
    profile:[]
}


const AuthReducer = (state=initialState, action) => {
    debugger;
    switch (action.type) {
        case 'Login':
            return {
                isAuth:true
            };
        case 'Logout':
            return {
                isAuth:false
            };
        case 'AddUser':
            return{
                profile:action.profile
            }
        default:
            return state;
    }
}
export default AuthReducer