import Bunch from "@/components/animation/bunch";
import HeroAnimation from "@/components/animation/hero";
import Opening from "@/components/animation/opening";
import Transformation from "@/components/animation/transformation";
import CustomButton from "@/components/UI/custom-button";
import ImageBlock from "@/components/UI/image-block";
import TextBlock from "@/components/UI/text-block";
import {
  headline0,
  headline1,
  headline2,
  headline3,
  headline4,
  headline5,
  headline6,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
} from "@/lib/texts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col relative overflow-hidden">
      <section className="w-full h-screen flex flex-col gap-5 lg:gap-10 x-spacing justify-center z-30 relative">
        <HeroAnimation />
        <div>
          <Transformation text={"Без шаблонов,"} />
          <Transformation text={"без конструкторов"} />
        </div>
        <p className={`text-xl text-center sm:text-left`}>
          Оригинальные и недорогие сайты для малого бизнеса
        </p>
        <div className="w-full mb-20 lg:mb-0">
          <div className="w-full flex justify-center lg:justify-start">
            <CustomButton text="Оформить заявку" />
          </div>
        </div>
      </section>

      <section className="section">
        <Opening text={headline1} mainWords={[3]} />
        <TextBlock text={text1} />
      </section>

      <section className="section">
        <Bunch text={headline2} mainWords={[0, 3]} />
        <TextBlock text={text2} />
      </section>
    </main>
  );
}
