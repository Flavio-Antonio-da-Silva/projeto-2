// Caminho: src/components/Header.jsx
import { useContext } from 'react'
import bgHeader from '../assets/hotdog-5.jpg'
import { CartContext } from '../context/CartContext'

export default function Header() {
  const { cartItems } = useContext(CartContext)

return (
<div 
className= "bg-cover bg-no-repeat bg-center w-full py-8 px-8 p-8  pb-8 " style={{ backgroundImage: `url(${bgHeader})` }}>
    <header className=" text-black  gap-4 flex flex-col justify-center items-center py-8 px-8 p-8  pb-8 shadow-md">
        <h1 className="text-3xl    text-red-700 px-2 font-extrabold bg-amber-300 rounded-full">Hot Dog Gourmet</h1>
       
        <div className="bg-green-500 text-white rounded-4xl font-bold"><p className="px-2"> Seg. à Dom. 20h às 01h </p></div>

         <a
        href="https://wa.me/5521977496651"
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute right-4 top-1 py-2  
          bg-green-400
          text-green-500 p-3 rounded-xl shadow
          hover:scale-105 transition-transform
        "
        aria-label="Whatsapp"
      >
        <i className="fa-brands fa-whatsapp text-lg text-white"></i>
      </a>
        
    </header>
</div>
)
}
