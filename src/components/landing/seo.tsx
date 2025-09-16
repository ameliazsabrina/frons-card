import ScrollVelocity from "@/components/ui/scrollvelocity";

export default function SEO() {
  return (
    <div className="pt-8">
      <div className="bg-neutral-100 py-16 overflow-hidden">
        <ScrollVelocity
          texts={["Connect Seamlessly Now"]}
          className="text-xl font-semibold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]"
        />
      </div>
    </div>
  );
}
