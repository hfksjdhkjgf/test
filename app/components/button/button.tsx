"use client"
import toast from "react-hot-toast";
const Button = () => {


const bajaja = () => {
  toast.success("zakonczone suakcensemk")
} 



    return (
      <div className="bg-sky-300 p-8 rounded-xl mb-5 hover:scale-105 text-white font-bold items-center">
        <button onClick={bajaja}>klik</button>
      </div>
    );
  };
  
  export default Button;