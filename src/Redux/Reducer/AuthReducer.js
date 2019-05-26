const initialState = {
    isAuth:false,
    profile:{}
}


const AuthReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'Login':
            return {
                ...state,
                isAuth:true
            };
        case 'Logout':
            return {
                ...state,
                isAuth:false,
                profile:{}
            };
        case 'AddUser':
            return{
                ...state,
                profile:action.profile
            }
        default:
            return state;
    }
}
export default AuthReducer