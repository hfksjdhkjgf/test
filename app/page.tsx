import Link from "next/link";

export default function Home() {
  return (
 <div>

  
  <h1 className="text-center text-5xl text-slate-500 font-bold">Strona</h1>
     <div className="flex  text-5xl flex-row gap-10 text-center flex-center">
      <p className="text-emerald-100">1</p>
      <p className="text-green-600">2</p>
    </div>
    {/*---------------------------------------------*/}
          <div className="justify-center flex flex-col items-center mb-10">
              <img src="/R.png" alt="drzewo" width={256} height={256}/>
              <p>drzewo</p>
          </div> 


           {/*---------------------------------------------*/}
           <Link href={"/strona"}>
           <div className="justify-center flex flex-col items-center bg-green-200 p-4">
              <img src="/R.png" alt="drzewo" width={256} height={256}/>
              <p>drzewo</p>
          </div> 

           </Link>
           <Link href={"/lala"}>
           <div className="justify-center flex flex-col items-center bg-rose-200 p-4">
              <img src="/R.png" alt="drzewo" width={256} height={256}/>
              <p>drzewo</p>
          </div> 
           </Link>
          
</div>
  );
}
