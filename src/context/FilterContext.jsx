import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  const initialProductList = (products) => {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  };

  const bestSellerOnlyFilter = (products) => {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  };

  const inStockFilter = (products) => {
    return state.onlyInStore
      ? products.filter((product) => product.in_stock === true)
      : products;
  };

  const sort = (products) => {
    if (state.sortBy === "lowToHigh") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "highToLow") {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  };

  const ratings = (products) => {
    switch (state.ratings) {
      case "4STARABOVE":
        return products.filter((product) => product.rating >= 4);
      case "3STARABOVE":
        return products.filter((product) => product.rating >= 3);
      case "2STARABOVE":
        return products.filter((product) => product.rating >= 2);
      case "1STARABOVE":
        return products.filter((product) => product.rating >= 1);
      default:
        return products;
    }
  };

  const filteredProductList = ratings(
    sort(inStockFilter(bestSellerOnlyFilter(state.productList)))
  );

  const value = {
    state,
    dispatch,
    products: filteredProductList, // ✅ fixed variable name
    initialProductList, // ✅ fixed function name
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
