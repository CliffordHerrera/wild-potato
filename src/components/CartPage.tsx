import type { Product } from "../types/types";

type CartPageProps = {
  cart: Product[];
  removeFromCart: (index: number) => void;
};

export default function CartPage({cart, removeFromCart}: CartPageProps) {
    return (
        <div className="flex flex-col items-center absolute top-36">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (<div className="flex flex-col items-end w-full justify-evenly space-y-4">
                {cart.map((product, index) => (
                    <div key={index} className="border p-4 rounded w-full shadow flex justify-between">
                        <div>
                        <h2 className="text-xl">{product.title}</h2>
                        <img src={product.image} alt={product.title} className="h-32 mx-2 object-contain"/>
                        <p>${product.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(index)}
                                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}