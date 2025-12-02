import Hero from "@/components/hero";
import Intro from "@/components/intro";
import OtherProducts from "@/components/Otherproducts";
import HorizontalScrolling from "@/components/HorizontalScrollingWrapper";
import Whyus from "@/components/whyus";
import Testimonials from "@/components/testimonials";





import InfiniteScroll from '@/components/infinitescroll';

export default function Home() {
  return (
    
    <>
  <Hero />
  <InfiniteScroll />
  <Intro />
  <HorizontalScrolling />
  <OtherProducts />
  <Whyus />
  <Testimonials />
    </>
  );
}