//Author: Jaskirat
//Description: PROJECT-2

import { useEffect, useState } from "react";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";
import NavBar from "./NavBar";
import ProductForm from "./ProductForm";

export default function GroceriesAppContainer() {
  const [productQuantity, setProductQuantity] = useState();
  // products.map((product) => ({ id: product.id, quantity: 0 }))

  const [cartList, setCartList] = useState([]);
  const [productList, setProductList] = useState([]);
  // const [isEditing, setIsEditing] = useState(false);
  const [postResponse, setPostResponse] = useState("");
  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    image: "",
    price: "",
  });

  const initialProductQuantity = (prods) =>
    prods.map((prod) => {
      return { id: prod.id, quantity: 0 };
    });

  const handleProductsDB = async () => {
    try {
      await axios.get("http://127.0.0.1:3000/products").then((results) => {
        setProductList(results.data);
        setProductQuantity(initialProductQuantity(results.data));
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleProductsDB();
  }, [postResponse]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddQuantity = (productId, mode) => {
    if (mode === "cart") {
      const newCartList = cartList.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setCartList(newCartList);
      return;
    } else if (mode === "product") {
      const newProductQuantity = productQuantity.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setProductQuantity(newProductQuantity);
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // await handleUpdate(formData._id); 
        await setformData({
          productName: "",
          brand: "",
          image: "",
          price: "",
        });
        setIsEditing(false);
      } else {
        await axios
          .post("http://localhost:3000/add-product", formData)
          .then((response) => {
            setPostResponse(response.data.message);
          });
        setformData({ productName: "", brand: "", image: "", price: "" });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (productID) => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRemoveQuantity = (productId, mode) => {
    if (mode === "cart") {
      const newCartList = cartList.map((product) => {
        if (product.id === productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setCartList(newCartList);
      return;
    } else if (mode === "product") {
      const newProductQuantity = productQuantity.map((product) => {
        if (product.id === productId && product.quantity > 0) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setProductQuantity(newProductQuantity);
      return;
    }
  };

  const handleAddToCart = (productId) => {
    const product = products.find((product) => product.id === productId);
    const pQuantity = productQuantity.find(
      (product) => product.id === productId
    );
    const newCartList = [...cartList];
    const productInCart = newCartList.find(
      (product) => product.id === productId
    );
    if (productInCart) {
      productInCart.quantity += pQuantity.quantity;
    } else if (pQuantity.quantity === 0) {
      alert(`Please select quantity for ${product.productName}`);
    } else {
      newCartList.push({ ...product, quantity: pQuantity.quantity });
    }
    setCartList(newCartList);
  };

  const handleRemoveFromCart = (productId) => {
    const newCartList = cartList.filter((product) => product.id !== productId);
    setCartList(newCartList);
  };

  const handleClearCart = () => {
    setCartList([]);
  };

  return (
    <div>
      <NavBar quantity={cartList.length} />
      <div className="GroceriesApp-Container">
        <ProductForm
          //submit handler
          handleSubmit={handleSubmit}
          postResponse={postResponse}
          handleChange={handleChange}
          formData={formData}
        />
        <ProductsContainer
          products={productList}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddToCart={handleAddToCart}
          handleOnDelete={handleOnDelete}
          productQuantity={productQuantity}
         
        />
        <CartContainer
          cartList={cartList}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleClearCart={handleClearCart}
        />
      </div>
    </div>
  );
}