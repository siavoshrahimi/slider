const initialState = {
    isAuth:false,
}


const AuthReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'Login':
            return {
                isAuth:true
            };
        case 'Logout':
            return {
                isAuth:false
            };
        default:
            return state;
    }
}
export default AuthReducer