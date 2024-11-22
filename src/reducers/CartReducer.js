
const initialState = {
  cartData: []
}

function cartReducer(state, action) {

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...state.cartData, action.payload]
      }
    case "REMOVE_FROM_CART":
      const stateAfterDelete = state.cartData.filter((data) => data !== action.payload);
      return {
        cartData: [...stateAfterDelete]
      }
    default:
      return state
  }
}

export { initialState, cartReducer };