//Author: Jaskirat
//Description: PROJECT-2

//This form will help user for adding products in database

export default function ProductForm({

  //id that is the name of the product
  //formdata that is brand,image and price

  productName,
  brand,
  image,
  price,

 handleOnSubmit,
  handleOnChange,

  //   handleRemoveFromCart,
  //   handleAddQuantity,
  //   handleRemoveQuantity,

}) {
  return (
    <div>
      <form onSubmit={handleOnSubmit}> 
        <label htmlFor=""></label>
        <input
          type="text"
          name="productName"
          id="productName"
          value={productName}
          onChange={handleOnChange}
          placeholder="Enter Product Name"
          required 
        />
         <br/> 

         <label htmlFor="brand"></label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={brand}
          onChange={handleOnChange}
          placeholder="Enter brand Name"
          required 
        />
         <br/>
   
      <label htmlFor="image"></label>
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={handleOnChange}
          placeholder="Image Link"
          required 
        />
       <br/> 

        <label htmlFor="price"></label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={handleOnChange}
          placeholder="Enter Price"
          required 
        />
        <br/> 
       <button type = "Submit">Submit</button>
      </form>
    </div>
  );
}
