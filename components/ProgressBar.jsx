import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Timelineitem from './Timelineitem'
import './Processsection.css'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Processsection = () => {
  const timelineData = [
    {
    //   step: ".",
      number: 1978,
      heading: "Established in Excellence",
      image: "/estabishment.jpg",
      description: "Bhagwati Industry begins as a family-run business, founded on principles of purity and quality."
    },
    {
    //   step: ".",
      number: 1987,
      heading: "First Manufacturing Unit",
      image: "/manufacturing unit.jpg",
      description: "Started rice manufacturing & processing in Raipur, marking the beginning of large-scale operations."
    },
    {
    //   step: ".",
      number: "1998",
      heading: "Export Milestone",
      image: "/export.jpg",
      description: "Began international rice exports via containers & bulk, bringing Indian quality to the world."
    },
    {
    //   step: ".",
      number: 2002,
      heading: "Takeover & Expansion",
      image: "/Expansion.jpg",
      description: "Acquired PD Rice Udyog, significantly expanding our production capacity and market reach."
    },
    {
    //   step: ".",
      number: 2018,
      heading: "Market Leader",
      image: "/BhagwatiLogo.svg",
      description: "Became the biggest non-basmati rice player after acquiring Dainik Bhaskar's mill, redefining industry standards."
    },
     {
    //   step: ".",
      number: 2024,
      heading: "Today – Global Reach",
      image: "/Global.jpg",
      description: "Set new efficiency standards with Solvent Extraction & Refinery Plants, embracing sustainable innovation and expanding our global footprint with premium quality products."
    }
  ];

  useGSAP(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".process-timeline",
          start: "top 80%",
          end: "top 75%",
          scrub: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
        }
      });

    
      if (window.innerWidth >= 1024) {
        timeline.from(".timeline-progress-bar", {
          opacity: 0,
          height: "0%",
      });

      timelineData.forEach((item) => {
        gsap.from(`.ti-${item.number}`, {
          opacity: 0.4,
          duration: 0.1,
          scrollTrigger: {
            trigger: `.timeline-trigger-${item.number}`,
            start: "top 80%",
            end: "bottom 10%",
            scrub: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
          }
        });
      });
    }
  }, []);

  return (
    <section className="process-section" id="process">
      <div className="processsectionheading"><h2>OUR LEGACY</h2></div>
        <div className="process-timeline">
            <div className="timeline-progress">
                <div className="timeline-progress-bar"></div>
            </div>

            {timelineData.map((item, index) => (
                <Timelineitem 
                    key={index}
                    // step={item.step}
                    number={item.number}
                    heading={item.heading}
                    image={item.image}
                    description={item.description}
                />
            ))}
        </div>
    </section>
  )
}

export default Processsection