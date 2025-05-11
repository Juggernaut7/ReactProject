export const filterReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "PRODUCT_LIST":
        return { ...state, productList: payload.products };
  
      case "SORT_BY":
        return { ...state, sortBy: payload };
  
      case "RATINGS":
        return { ...state, ratings: payload.ratings };
  
      case "BEST_SELLER_ONLY":
        return { ...state, bestSellerOnly: payload.bestSellerOnly };
  
      case "ONLY_IN_STOCK":
        return { ...state, onlyInStore: payload.onlyInStore }; // ✅ also fix typo: `onlyInStock` → `onlyInStore`
  
      case "CLEAR_FILTERS":
        return {
          ...state,
          sortBy: null,
          ratings: null,
          bestSellerOnly: false,
          onlyInStore: false, // ✅ same typo fix
        };
  
      default:
        throw new Error(`No Matching "${type}" - action type`);
    }
  };
  