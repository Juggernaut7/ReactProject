export const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload);
            return{
                ...state, 
                cartList: payload.products, 
                total: payload.total,
            }
        case "REMOVE_FROM_CART":
            return{
                ...state, 
                cartList: payload.products, 
                total: payload.total,
            }
        case "CLEAR_CART":
            return{
                ...state,
                cartList: payload.products,
                total: payload.total,
            }
            default:
                throw new Error(`No Matching "${type}" - action type`);
    }
};