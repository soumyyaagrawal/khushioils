import Navbar from '@/components/navbar';
import InfiniteScroll from '@/components/infinitescroll';
import Button from '@/components/ButtonLink';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div
        className="
         
          flex min-h-[90vh] items-center justify-center 
          bg-[url('/bg.webp')] bg-cover bg-center px-4 text-center

      
          md:justify-start md:items-center md:text-left md:px-6

         
          lg:flex lg:min-h-screen lg:items-end lg:justify-start
          lg:bg-[url('/bg.webp')] lg:bg-cover lg:pb-0 lg:mb-0 lg:bg-left
        "
      >

        <div
          className="
            /* ---------- MOBILE ---------- */
            flex flex-col text-white items-center text-center max-w-sm

            /* ---------- TABLET ---------- */
            md:items-start md:text-left md:max-w-md md:ml-6 md:mb-20

            /* ---------- DESKTOP (your code) ---------- */
            lg:flex lg:max-w-6xl lg:flex-col lg:mb-36 lg:ml-10 lg:text-white lg:text-left
          "
        >

          {/* HEADING */}
          <h1
            className="
              /* mobile */
              text-4xl font-semibold leading-tight

              /* tablet */
              md:text-5xl

              /* desktop (your code) */
              lg:text-6xl lg:font-semibold
            "
            style={{ fontFamily: 'var(--font-geist)' }}
          >
            From Nature's Best to Your Table
          </h1>

          {/* SUBTEXT 1 */}
          <h3
            className="
              /* mobile */
              text-xl font-semibold mt-4

              /* tablet */
              md:text-2xl

              /* desktop (your code) */
              lg:text-2xl lg:font-semibold lg:mt-4
            "
            style={{ fontFamily: 'var(--font-geist)' }}
          >
            Purity, Nutrition, and Taste!
          </h3>

          {/* SUBTEXT 2 */}
          <h3
            className="
              /* mobile */
              text-base mt-3 leading-relaxed max-w-xs

              /* tablet */
              md:text-lg md:max-w-md md:mt-4

              /* desktop (your code) */
              lg:text-xl lg:max-w-xl lg:mt-4
            "
            style={{ fontFamily: 'var(--font-geist)' }}
          >
            Unlocking creativity transforms farming. Explore techniques to enhance productivity and connect with the land.
          </h3>

          {/* BUTTONS */}
          <div
            className="
              /* mobile */
              flex flex-col items-center gap-3 mt-6

              /* tablet */
              md:flex-row md:items-center md:gap-4 md:mt-6

              /* desktop (your code) */
              lg:flex lg:flex-row lg:items-start lg:gap-0
            "
          >
            <Button />

            <Link href="/Aboutus">
              <button
                className="
                  /* mobile */
                  w-full max-w-[200px] py-2 text-base rounded-full border border-white px-4 
                  bg-white text-black font-semibold hover:bg-transparent hover:text-white transition

                  /* tablet */
                  md:w-auto md:max-w-none md:py-2 md:px-6 md:text-lg

                  /* desktop (your code) */
                  lg:mt-6 lg:h-15 lg:ml-4 lg:rounded-full lg:bg-white 
                  lg:px-6 lg:py-1 lg:text-lg lg:font-semibold lg:text-black
                  lg:hover:bg-transparent lg:hover:text-white lg:border lg:border-white
                "
              >
                Our Story
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
