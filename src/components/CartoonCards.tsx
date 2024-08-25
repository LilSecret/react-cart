import { useEffect, useState } from "react";
import DUMMY_ITEMS from "../data";
import { TCartoon } from "../types";
import CartoonCard from "./CartoonCard";

function CartoonCards({ onAddInCart }: { onAddInCart: (id: number) => void }) {
  const [cartoons, setCartoons] = useState<TCartoon[]>([]);
  useEffect(() => {
    setCartoons(DUMMY_ITEMS);
  }, []);

  return (
    <header className="w-3/4 mx-auto py-4 px-8">
      <ul className="flex gap-2 list-none justify-center">
        {cartoons.map((cartoon) => (
          <CartoonCard
            onAddInCart={onAddInCart}
            key={cartoon.id}
            cartoon={cartoon}
          />
        ))}
      </ul>
    </header>
  );
}

export default CartoonCards;
