import logo from "../assets/logo.svg"
import ring from "../assets/ring.svg"
import moon from "../assets/icons/moon.svg"
import sun from "../assets/icons/sun.svg"
import shoppingCart from "../assets/shopping-cart.svg"
import CartDetails from "./CartDetails"
import { useContext, useState } from "react"
import { BookContext, ThemeContext } from "../context"
export default function Header() {
    const { state, dispatch } = useContext(BookContext)
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    const [showCart, setShowCart] = useState(false);
    const handleShowCart = () => {
        setShowCart(true)
    }
    console.log('from header', state);


    return (
        <header>
            {
                showCart && <CartDetails onClose={() => setShowCart(false)} />
            }
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={logo} width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={() => setDarkMode(!darkMode)}>
                            <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative" href="#" onClick={handleShowCart}>
                            <img src={shoppingCart} width="24" height="24" alt="" />
                            <p className="absolute bg-primary size-8 flex justify-center items-center rounded-full text-slate-600 font-semibold -top-5 left-6"> {state.cartData.length}</p>

                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )

}