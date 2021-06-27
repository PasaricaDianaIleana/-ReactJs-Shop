import { API_ROUTE } from "../config/api";
import Category from "../Models/category";
import Product from '../Models/product'
const ApiClient = {
  get: (url, headers = {}) => {
    return ApiClient.makeRequest(`${API_ROUTE}/${url}`, "GET", {}, headers);
  },
  post:(url,data)=>{
 return ApiClient.makeRequest(`${API_ROUTE}/${url}`,"POST",data)
  },
  delete:(url,id,headers = {})=>{
    return ApiClient.makeRequest(`${API_ROUTE}/${url}`,"DELETE",id,headers)
  },
  put:(url,id,data)=>{
return ApiClient.makeRequest(`${API_ROUTE}/${url}`,"PUT",id,data)
  },
  makeRequest: async (url, type, params = {}, headers = {}) => {
    try {
      type = type.toUpperCase();
     
      let request = {
    
        method: type,
          headers:headers
      }
      if (type === "POST" || type === "PUT") {

        request.headers={"content-Type": "application/json;charset=UTF-8"}
        request.body = JSON.stringify(params);
        
      }
      
      const result = await fetch(url, request);
      return await result.json();
    } catch (error) {
      throw error.message;
    }
  },
};

const ProductCategories = {
  all: async () => {
    const { categories } = await ApiClient.get("category");

    return categories.map((c) => new Category(c.categoryId, c.name,c.description));
  },
  postMethod:async (params) =>{
      return  await ApiClient.post("category",params);
  },
  deleteCategory:async(id)=>{
    return await ApiClient.delete(`category/${id}`);
  },
  updateCategory:async(id,params)=>{
    return await ApiClient.put(`category/${id}`,params)
  },
  getCategoryById:async(id)=>{
    return await ApiClient.get(`category/${id}`)
  }
};
const Products={
  getAll:async()=>{
    const { products } = await ApiClient.get("product");

    return products.map((p) => new Product(p.productId,p.name,p.description,p.price,p.basePrice,p.image,p.categoryId));
  },
  getProductById:async(id)=>{
return await ApiClient.get(`product/${id}`);
  },
  getProductsByCategory:async(id)=>{
    const { products } = await ApiClient.get(`product/ByCategory/${id}`);
   return products.map((p) => new Product(p.productId,p.name,p.description,p.price,p.basePrice,p.image,p.categoryId));
  },
  editProduct:async(id,data)=>{
    return await ApiClient.put(`product/${id}`,data);
  },
  postImage:async (params,id)=>{
    return await  ApiClient.post(`product/image/${id}`,params);
  },
  deleteProduct:async (id)=>{
    return await ApiClient.delete(`product/${id}`);
  }
}
const ApiHelper = {
  ProductCategories,
  Products
};
export default ApiHelper;
