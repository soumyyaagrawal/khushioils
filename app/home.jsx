import Navbar from '@/components/navbar';

export default function Home() {
  return (
    
    <>
    <div className="flex min-h-screen items-end justify-start bg-[url('/bg.svg')] bg-cover"><Navbar />
        
      {/* New Wrapper Div for the text block */}
      <div className="flex flex-col mb-36 ml-10 text-white"> 
        
        {/* Removed relative, mb-40, left-10 */}
        <h1 className="text-6xl font-semibold " style={{fontFamily: 'var(--font-geist)'}}>
          From Nature's Best to Your Table
        </h1>
        
        {/* Changed span to h3 for semantic meaning, removed relative, mb-32 */}
        <h3 className="text-2xl font-semibold mt-4" style={{fontFamily: 'var(--font-geist)'}}>
          Purity, Nutrition, and Taste!
        </h3>

        <h3 className="text-xl mt-2 mt-4 max-w-xl" style={{fontFamily: 'var(--font-geist)'}}>
         Unlocking creativity transforms farming. Explore techniques to enhance productivity and connect with the land.
        </h3>

        <div className="flex ">
            <button className="mt-6 rounded-full bg-[#D0F348] px-6 py-3 text-lg font-semibold text-gray-900 align-middle">
                Explore Products <img src="/button.svg" className="inline-block ml-2 hover:animate-pulse hover:rotate-320"/>
            </button>
            <button className="mt-6 ml-4 rounded-full bg-white px-6 py-3 text-lg font-semibold text-black">
                Our Story
            </button>

        </div>
        
      </div>
    </div>
    </>
  );
}