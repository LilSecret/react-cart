import CartoonCards from "./components/CartoonCards";
import { TCartItem, TCartoon } from "./types";
import CartoonCart from "./components/CartoonCart";
import DUMMY_ITEMS from "./data";
import { useLocalStorage } from "./hooks/useLS";

export const LS_CART = "cart-items";

export default function App() {
  const { state: cart, setState: setCart } = useLocalStorage(LS_CART, []);

  const handleAddCartoonInCart = (id: number) => {
    const itemInCart = cart.find((item: TCartItem) => item.id === id);
    const otherItems = cart.filter((item: TCartItem) => item.id !== id);
    const updatedCartItems: TCartItem[] = [...otherItems];

    if (itemInCart) {
      itemInCart.quantity += 1;
      updatedCartItems.push(itemInCart);
    } else {
      const cartoon = DUMMY_ITEMS.find(
        (cartoon) => cartoon.id === id
      ) as TCartoon;

      const cartCartoonItem = {
        id,
        name: cartoon.name,
        quantity: 1,
        price: cartoon.price,
      };
      updatedCartItems.push(cartCartoonItem);
    }

    setCart(updatedCartItems);
    localStorage.setItem(LS_CART, JSON.stringify(updatedCartItems));
  };

  const handleRemoveCartoonInCart = (id: number) => {
    const itemInCart = cart.find(
      (item: TCartItem) => item.id === id
    ) as TCartItem;
    const otherItems = cart.filter((item: TCartItem) => item.id !== id);
    const updatedCartItems = [...otherItems];

    itemInCart.quantity -= 1;
    if (itemInCart.quantity !== 0) {
      updatedCartItems.push(itemInCart);
    }

    localStorage.setItem(LS_CART, JSON.stringify(updatedCartItems));
    setCart(updatedCartItems);
  };

  return (
    <>
      <CartoonCards onAddInCart={handleAddCartoonInCart} />
      <CartoonCart
        cart={cart}
        onAddInCart={handleAddCartoonInCart}
        onDeleteInCart={handleRemoveCartoonInCart}
      />
    </>
  );
}
