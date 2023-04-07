const initialState = {
    // login: JSON.parse(localStorage.getItem('login')),
    login:false,
    payment: false,
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_LOGIN":
            return {
                ...state,
                login: action.payload
            }

        case "CLOSE_LOGIN":
            return {
                login: false
            }
        case "PAYMENT":{
            return {payment: action.payload}
        }
        default: return state
    }
}