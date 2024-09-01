import { VelocityScroll } from "@/components/ui/highlight";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Experience a sleek and intuitive design that makes exploring our website a breeze. Dive into our offerings with ease and enjoy a smooth, visually captivating journey."
      default_velocity={1}
      className="font-display text-center text-xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-2xl md:leading-[3rem]"
    />
  );
}
