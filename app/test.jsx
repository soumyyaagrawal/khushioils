import AnimatedWave from "@/components/AnimatedWaves";
export default function TestWave() {
  return (
    <div className="h-screen bg-white relative">
      <AnimatedWave color="#FF6A6A" progress={0} />
      <h1 className="relative z-20 text-4xl text-center mt-32">Testing Wave</h1>
    </div>
  );
}
