const Page = () => {
    return (
    <div>
        <h1>page</h1>
        {/*---------------------------------------------*/}
    <div className="flex flex-row text-5xl gap-4">
        <p className="text-rose-900">a</p>
        <p className="text-fuchsia-600">B</p>
      </div>
      {/*---------------------------------------------*/}
      <div className="flex flex-col items-center">
        <img src="/icons/logo.png"width={128}height={128} alt=""/>
        <p className="text-sky-500 text-3xl font-semibold">
            logo 

        </p>
      </div>
      {/*---------------------------------------------*/}
    </div>


    );
  };
  
  export default Page;