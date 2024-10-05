
export default function Home() {
  return (
  <main className="bg-gray-100  sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100  h-screen flex items-center justify-center p-5 ">
    <div className="bg-white shadow-lg p-5 rounded-2xl w-full max-w-screen-sm  flex flex-col gap-4 ">
     {["Honey Jung", "Moon Joe", "Andy Bean", "Yourself"].map((person, index)=> 
     <div key={index} className="flex  items-center gap-5">
      <div className="size-7 bg-blue-400 rounded-full " />
      <span className="text-lg font-medium">{person}</span>
      <div className="size-6 rounded-full bg-red-500 text-white flex items-center justify-center relative">
        <span className="z-10">{index}</span>
        <div className="size-6 rounded-full bg-red-500 absolute animate-ping" />
      </div>
     </div>
    )}
    </div>
  </main>
  );
}
