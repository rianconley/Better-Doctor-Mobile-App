const INITIAL_STATE = {
    location: null
  };
const locationReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
      case "SET_LOCATION": {
        return {
            location: action.payload,
          };
      }
      default:
        return state;
    }
  };
  export default locationReducer;
