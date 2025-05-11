export const getProductList = async (searchTerm) => {
    const api = import.meta.env.VITE_APP_DB_SERVER;
  
    try {
      const response = await fetch(`${api}/products`);
      console.log("getProductList response:", response);
  
      if (!response.ok) {
        throw {
          message: response.statusText,
          status: response.status,
        };
      }
  
      const data = await response.json(); // ✅ Properly parse JSON response
      return data;
    } catch (error) {
      console.error("Error fetching product list:", error);
      throw error;
    }
  };
  
  export const getProduct = async (id) => {
    const api = import.meta.env.VITE_APP_DB_SERVER;
  
    try {
      const response = await fetch(`${api}/products/${id}`);
  
      if (!response.ok) {
        throw {
          message: response.statusText,
          status: response.status,
        };
      }
  
      const data = await response.json(); // ✅ Properly parse JSON response
      return data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  };
  
  export const getFeaturedList = async () => {
    const api = import.meta.env.VITE_APP_DB_SERVER;
  
    try {
      const response = await fetch(`${api}/featured_products`);
      console.log("getFeaturedList response:", response);
  
      if (!response.ok) {
        throw {
          message: response.statusText,
          status: response.status,
        };
      }
  
      const data = await response.json(); // ✅ Properly parse JSON response
      return data;
    } catch (error) {
      console.error("Error fetching featured list:", error);
      throw error;
    }
  };
  