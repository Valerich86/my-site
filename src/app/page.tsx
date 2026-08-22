import Bunch from "@/components/animation/bunch";
import HeroAnimation from "@/components/animation/hero";
import Opening from "@/components/animation/opening";
import ImageBlock from "@/components/UI/image-block";
import TextBlock from "@/components/UI/text-block";
import {
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

      {/* <section className="w-full min-h-screen flex flex-col x-spacing items-center justify-center">
        <Bunch text={""} mainWords={[0, 3]} />
      </section> */}

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
