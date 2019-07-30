export const initialState = {
  user:[],
  registerUser: []
}

export const rootReducer = (state= initialState, action) => {
  console.log(action)
  switch(action.type) {
    case 'LOGIN_SUCCESS': 
      return { 
        ...state, 
        user: action.payload
       }
     case 'REGISTER_SUCCESS':
           return{
               ...state,
               registerUser: action.payload
           }
      default:
        return state;
    }
  }

  