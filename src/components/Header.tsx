import { useState } from "react";
import { Link } from "react-router";
import { useFilterDispatch } from "./contex/shopContext";
import type { Product } from "../types/types";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Header({cart}: {cart: Product[]}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const dispatch = useFilterDispatch();
    return (
        <div className="flex flex-row items-start justify-evenly w-screen bg-gradient-to-tr from-cyan-500 to-purple-500 p-4 top-0 fixed z-10">
            <Link to="/shop" className="text-3xl font-bold text-white font-sans">Wildpotatoes</Link>
            <button onClick={handleClick} className="text-white flex flex-col justify-center items-center border-white m-4">
                <MenuIcon />
            </button>
            <input
                type="text"
                placeholder="Find among Popapoes"
                onChange={(e) => dispatch({ type: "SET_QUERY", payload: e.target.value })}
                className="bg-slate-300 hover:bg-white border rounded w-full h-10"
            />
            <Link to="/auth" >
                <div className="flex flex-col items-center justify-center hover:text-white transition-all m-4">
                    <PersonOutlineIcon />
                    <p className="text-slate-300 hover:text-white">Auth</p>
                </div>
            </Link>
            <Link to="/cart" >
                <div className="flex flex-col items-center justify-center hover:text-white transition-all m-4">
                    <ShoppingCartIcon />
                    <p className="text-slate-300 hover:text-white">Cart ({cart.length})</p>
                </div>
            </Link>
        </div>
    );
}

/**<span className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}></span>
                <span className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                        'opacity-0' : 'opacity-100'
                    }`}></span>
                <span className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}></span>
                    <img src="../../public/favicon/Auth.ico" alt="Auth" />
                    <img src="../../public/favicon/Cart.ico" alt="Cart" />*/