import Button from "../components/button/button";

const Jaja = () => {
    return (
      <div>
        <div className="flex flex-row gap-10 items-center ml-5 justify-center">
        <h1 className="text-3xl text-amber-600">drzewo</h1> 
        <p>krzak</p>
        <img src="/icons/logo.png" alt="" />
      </div>
      <div className="flex justify-center items-center">
      <Button/>

      </div>

      </div>
    );
  };
  
  export default Jaja;