import Bunch from "@/components/animation/bunch";
import HeroAnimation from "@/components/animation/hero";
import Opening from "@/components/animation/opening";
import TextGlow from "@/components/animation/text-glow";
import CustomButton from "@/components/UI/custom-button";
import ImageBlock from "@/components/UI/image-block";
import TextBlock from "@/components/UI/text-block";
import { font_accent } from "@/lib/fonts";
import { TEXT_ABOUT_1, TEXT_ABOUT_2, TEXT_ABOUT_3 } from "@/lib/texts";
import Image from "next/image";

export default function Home() {
  return (
    <main
      aria-label="Главная страница"
      className="w-full flex flex-col relative overflow-hidden"
    >
      {/* HERO-секция */}
      <section
        aria-label="Hero-секция, первый экран"
        className="w-full h-screen flex flex-col gap-5 lg:gap-10 x-spacing justify-center z-30 relative"
      >
        <HeroAnimation />
        <div>
          <TextGlow text={"Без шаблонов,"} />
          <TextGlow text={"без конструкторов"} />
        </div>
        <p
          className={`${font_accent.className} text-xl text-center sm:text-left`}
        >
          Оригинальные и недорогие сайты для малого бизнеса
        </p>
        <div className="w-full mb-40 lg:mb-0">
          <div className="w-full flex justify-center lg:justify-start">
            <CustomButton text="Оформить заявку" />
          </div>
        </div>
      </section>

      {/* кратко обо мне */}
      <section aria-label="секция about, о нас" className="section">
        <Opening text={"Что ещё за LENIVEЦ?"}/>
        <div className="flex flex-col gap-5">
          <TextBlock text={TEXT_ABOUT_1} />
          <TextBlock text={TEXT_ABOUT_2} />
          <TextBlock text={TEXT_ABOUT_3} />
        </div>
      </section>

      {/* <section className="section">
        <Bunch text={headline2} mainWords={[0, 3]} />
        <TextBlock text={text2} />
      </section> */}
    </main>
  );
}
