import {  useState } from "react";
import { Link } from "react-router";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="flex flex-row items-start justify-evenly w-screen bg-gradient-to-tr from-cyan-500 to-purple-500 p-4 absolute top-0">
            <Link to="/shop" className="text-3xl font-bold text-white font-sans">Wildpotatoes</Link>
            <button onClick={handleClick} className="text-white flex flex-col justify-center items-center border-white m-4">
                B
            </button>
            <input 
            type="text"
            placeholder="Find among Popapoes"
            onChange={(e => setInput(e.target.value))}
            value={input}
            className="bg-slate-300 hover:bg-white border rounded w-full h-10"
             />
             <Link to="/auth" >
             <div className="flex flex-col items-center justify-center hover:text-white transition-all m-4">
                <img src="../../public/favicon/Auth.ico" alt="Auth" />
                <p className="text-slate-500 hover:text-white">Auth</p>
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
                    }`}></span>*/