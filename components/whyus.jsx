import CountUp from "@/components/CountUp.jsx";
import GlassDiv from "@/components/glassdiv";
import WaveDivider from "@/components/wavedivider.jsx";

export default function Whyus() {
  return (
    <div>
      <WaveDivider />

      <section
        id="green"
        className="
          w-full min-h-screen bg-gradient-to-br from-green-800 to-green-100 relative
          px-4 py-10
          lg:px-0 lg:py-0 lg:h-[100vh]
        "
      >
        {/* HEADLINE */}
        <h1
          className="
            text-white text-center text-3xl font-semibold mb-8
            lg:text-left lg:text-6xl lg:p-4 lg:ml-126 
          "
        >
          What Sets Us Apart
        </h1>

        {/* --------- ROW 1 (DESKTOP), STACK (MOBILE) --------- */}
        <div
          className="
            flex flex-col gap-6
            lg:flex-row lg:justify-center lg:gap-4 lg:mt-2 lg:ml-0
          "
        >
          {/* CARD 1 — WHITE */}
          <div
            className="
              relative w-full p-6 bg-gray-200 rounded-4xl shadow-sm font-semibold
              lg:w-100 lg:h-84 lg:p-8 lg:mt-4 lg:hover:shadow-2xl lg:overflow-hidden
            "
          >
            <div className="relative z-10 text-gray-900">
              <span className="text-3xl font-bold lg:text-4xl">
                <CountUp to={1000} />+
              </span>
              <br />
              <span className="text-lg font-bold lg:text-xl">
                Certified Quality Standards
              </span>

              <p className="mt-4 text-sm font-semibold lg:text-base">
                FSSAI certified and ISO compliant processing ensures every bottle
                meets the highest quality benchmarks.
              </p>

              <ul className="list-disc list-inside text-sm font-semibold mt-3">
                <li>FSSAI Approved.</li>
                <li>ISO 22000 Certified.</li>
                <li>GMP Compliant.</li>
              </ul>
            </div>

            {/* IMAGE */}
            <img
              src="/Apart/drop.png"
              className="
                absolute bottom-3 right-0 h-[120px] opacity-70 blur-[5px]
                lg:h-[200px] lg:scale-150 lg:translate-x-1/4 lg:translate-y-1/4 lg:bottom-6 lg:right-4 lg:overflow-hidden
              "
            />
          </div>

          {/* COLUMN 2 (DESKTOP STACK) */}
          <div className="flex flex-col gap-6 lg:items-center">

            {/* CARD 2 — LIME */}
            <div
              className="
                relative w-full p-6 bg-[#D0F348] rounded-4xl shadow-sm font-bold
                lg:w-100 lg:h-32 lg:p-8 lg:mt-4 lg:hover:shadow-2xl
              "
            >
              <div className="relative z-10 text-gray-900">
                <span className="text-xl font-bold lg:text-2xl">
                  <CountUp to={1000} />+ Farmers
                </span>
                <br />
                <span className="text-2xl font-bold lg:text-3xl">
                  Farm to Family
                </span>
              </div>

              <img
                src="/Apart/crop.png"
                className="
                  absolute bottom-2 right-4 h-[60px] opacity-70 blur-[1.5px]
                  lg:bottom-10 lg:right-10 lg:h-[80px] lg:scale-150 lg:translate-x-1/4 lg:translate-y-1/4
                "
              />
            </div>

            {/* CARD 3 — BLACK */}
            <div
              className="
                w-full p-6 bg-gray-900 rounded-4xl shadow-sm text-white font-semibold
                lg:w-100 lg:h-48 lg:p-8 lg:m-4 lg:hover:shadow-2xl lg:mt-0 lg:mb-0
              "
            >
              <span className="text-3xl font-bold lg:text-4xl">
                <CountUp to={500} />+
              </span>
              <br />
              <span className="text-lg font-bold">Industrial Recognition</span>

              <ul className="list-disc list-inside text-sm mt-2">
                <li>Excellence Awards.</li>
                <li>Innovative Leaded.</li>
                <li>Industry Pioneer.</li>
              </ul>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6 lg:items-center">

            {/* ORANGE TEST CARD */}
            <div
              className="
                w-full p-6 bg-[url('/Apart/oildrop.png')] bg-cover rounded-4xl shadow-sm text-black font-semibold
                bg-[position:left_40px_center]
                lg:w-100 lg:h-48 lg:p-8 lg:mt-4 lg:bg-[position:left_108px_center] lg:hover:shadow-2xl lg:mb-0
              "
            >
              <span className="text-3xl font-bold lg:text-4xl">
                <CountUp to={15} />+
              </span>{" "}
              Tests
              <br />
              <span className="text-lg font-bold">Rigorous Quality Checks</span>

              <ul className="list-disc list-inside text-sm mt-2">
                <li>Purity Analysis.</li>
                <li>Nutritional Testing.</li>
                <li>Quality Control.</li>
              </ul>
            </div>

            {/* LEGACY CARD */}
            <div
              className="
                relative w-full p-6 bg-[#D0F348] rounded-4xl shadow-sm font-bold
                lg:w-100 lg:h-32 lg:p-8 lg:mt-0 lg:hover:shadow-2xl
              "
            >
              <span className="text-xl font-bold lg:text-2xl">
                <CountUp to={40} />+ Years of Legacy
              </span>
              <br />
              <span className="text-lg font-bold">
                Trusted by Millions of Families
              </span>
            </div>
          </div>
        </div>

        {/* --------- FINAL BIG GREEN CARD --------- */}
        <div
          className="
            w-full p-6 rounded-4xl shadow-sm bg-[#1D5B37] text-white mt-6
            lg:w-318 lg:h-44 lg:p-8 lg:ml-51 lg:mt-8 lg:hover:shadow-2xl
          "
        >
          <span className="text-2xl font-bold lg:text-4xl">Zero Wastage</span>
          <br />
          <span className="text-lg font-bold">Sustainable Practice</span>

          {/* MOBILE GLASSDIV STACK */}
          <div className="flex flex-wrap gap-3 mt-4 lg:hidden">
            <GlassDiv  bottom="bottom-20" right="right-17">Solar Panel</GlassDiv>
              <GlassDiv bottom="bottom-30" right="right-20">Smart Energy</GlassDiv>
          </div>

          {/* DESKTOP EXACT POSITIONS */}
          <div className="hidden lg:block">
            <GlassDiv bottom="bottom-25" right="right-67">Solar Panel</GlassDiv>
            <GlassDiv bottom="bottom-25" right="right-107">Biofuel Burner</GlassDiv>
            <GlassDiv bottom="bottom-38" right="right-88">Waste Composting</GlassDiv>
            <GlassDiv bottom="bottom-38" right="right-59">EV</GlassDiv>
            <GlassDiv bottom="bottom-50" right="right-69">Smart Energy</GlassDiv>
          </div>

          <ul className="list-disc list-inside text-sm mt-2">
            <li>Eco-Friendly.</li>
            <li>Carbon Neutral.</li>
            <li>Green Energy.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
