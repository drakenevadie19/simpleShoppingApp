import { useDispatch, useSelector } from 'react-redux';     
import cartSlice from '../data/cartSlice';
import productList from '../data/productList.json'
import '../styles/cart.css'

const Cart = () => {
  // Get cart data using useSelector and dispatch the remove from cart actions 
  // Get all products in cart's id
  const {cartProductIds} = useSelector((state) => state.cart);
  // Get 
  const cartProductData = productList.products.filter((product) => cartProductIds.includes(product.id));

  // Destruct cartSlice to get methods addToCart and removeFromCart 
  const {removeFromCart, clearTheCart} = cartSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="cart">
      { cartProductData.length >0 && (<div className="cart-product">
        <h3 className="header">Items in cart</h3>
        {cartProductData.map((product) => (
          <div key={product.id} className="row">
            <img className="item-image" src={product.imageUrl} alt="product" />

            <div className="item-info">
              <h4>{product.name}</h4>
              <p className="text-truncate">{product.detail}</p>
              <button className="btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>
                <i className="bi bi-trash-fill" /> Remove Item
              </button>
            </div>
          </div>
        ))}

        <footer className="text-center" onClick={() => dispatch(clearTheCart())}>
          <button className="btn btn-primary">CHECKOUT</button>
        </footer>
      </div>)}

      { cartProductData <1 && (<div className="text-center empty-cart">
        <i className="bi bi-cart3" />
        <p>Your cart is empty.</p>
        <p>You have not added any item to your cart.</p>
      </div>)}
    </div>
  )
}

export default Cart
