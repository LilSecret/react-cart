import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TCartItem } from "../types";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function CartItem({
  item,
  onAddInCart,
  onDeleteInCart,
}: {
  item: TCartItem;
  onAddInCart: (id: number) => void;
  onDeleteInCart: (id: number) => void;
}) {
  const { name, quantity, price } = item;

  const buttonClass =
    "w-8 px-2 py-0 rounded-xl bg-emerald-500 text-lg text-stone-700 hover:text-emerald-500 hover:bg-emerald-100";

  return (
    <li className="flex justify-between gap-3 bg-stone-200 py-2 px-3 align-middle">
      <h3 className="cartoon-name text-stone-700 font-bold text-lg">{name}</h3>
      <p className="text-stone-700 font-bold">x{quantity}</p>
      <p className="text-bold text-stone-800">{price * quantity}$</p>
      <div className="flex gap-5">
        <button className={buttonClass} onClick={() => onDeleteInCart(item.id)}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button className={buttonClass} onClick={() => onAddInCart(item.id)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </li>
  );
}

export default CartItem;
