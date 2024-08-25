import { TCartoon } from "../types";

function CartoonCard({
  cartoon,
  onAddInCart,
}: {
  cartoon: TCartoon;
  onAddInCart: (id: number) => void;
}) {
  const { name, thumbnail, price, id } = cartoon;

  return (
    <li className="w-1/6 text-center border-2 border-stone-300 rounded-lg py-1 px-1">
      <img
        className="rounded-md w-full aspect-square"
        src={thumbnail}
        alt="cartoon thumbnail"
      />
      <h3 className="cartoon-name text-emerald-700 font-bold text-lg">
        {name}
      </h3>
      <p className="text-stone-800">Price: ${price}</p>
      <button
        onClick={() => onAddInCart(id)}
        className="mx-auto w-full py-2 rounded-lg px-2 bg-emerald-400 hover:bg-emerald-700 hover:text-stone-200"
      >
        Add
      </button>
    </li>
  );
}

export default CartoonCard;
