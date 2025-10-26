"use client"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart } from "../redux/slices/cartSlice";
import { clearCart } from "../redux/slices/cartSlice";
import { use } from "react";
export default function CartPage() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Your Cart</h1>
            <div>

        
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                        <h2>{item.title}</h2>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>))}
            </div>)}
        </div>
        <button onClick={()=>dispatch}>clear cart</button>
        </div>
    )
}