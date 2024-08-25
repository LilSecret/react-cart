import { TCartItem } from "../types";
import CartItem from "./CartItem";

function CartoonCart({
  cart,
  onAddInCart,
  onDeleteInCart,
}: {
  cart: TCartItem[];
  onAddInCart: (id: number) => void;
  onDeleteInCart: (id: number) => void;
}) {
  const getCartTotalPrice = () => {
    return cart.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.price * cartItem.quantity;
    }, 0);
  };

  const cartTotal = getCartTotalPrice();

  return (
    <main className="w-1/2 mx-auto py-3 px-6">
      <h2 className="text-center font-bold text-xl">Cart</h2>
      <ul>
        {cart.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              item={cartItem}
              onAddInCart={onAddInCart}
              onDeleteInCart={onDeleteInCart}
            />
          );
        })}
      </ul>
      <h3 className="text-xl text-center mt-5">Total: {cartTotal}</h3>
    </main>
  );
}

export default CartoonCart;
