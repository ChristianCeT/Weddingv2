import { unstable_cache } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import CountDownComponent from "../../components/CountDown";
import Image from "next/image";

import { DateHour } from "@/app/components/DateHour";
import { GalleryImageMine } from "@/app/components/GalleryImageMine";
import MapMarry2 from "@/app/components/MapMarry2";

const getGuesses = unstable_cache(
  async () => {
    const supabase = createClient(
      "https://blqbaycbzkkcsibjxqic.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJscWJheWNiemtrY3NpYmp4cWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4NjY1MDksImV4cCI6MjA0NzQ0MjUwOX0.sQYRwTOZmPWeF2_VFfWQb7pIKzkZAbcTvoHLo1q4azE"
    );

    const { data: guess, error } = await supabase.from("guess").select("*");

    if (error) return;

    return guess;
  },
  [],
  {
    revalidate: 2000,
  }
);

const InvitacionPage = async ({ params }) => {
  const guesses = await getGuesses();
  const { name } = await params;

  const guess = guesses.find((gb) => gb.name === name);

  if (!guess) return <div>Invitación no encontrada</div>;

  return (
    <div>
      <section>
        <div className="relative h-screen overflow-hidden">
          <Image
            src={"/images/fondo.webp"}
            fill
            alt="fondo-image"
            priority
          ></Image>
          <div
            className="absolute lg:left-[-96px] left-[-60px] rotate-12
          h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]
          "
          >
            <Image
              src={"/images/pink-flower.webp"}
              fill
              alt="pink-flower-image"
            ></Image>
          </div>

          <div className="absolute md:left-[-96px] md:block hidden rotate-12">
            <Image
              src={"/images/stain.webp"}
              width={400}
              height={300}
              alt="stain-image"
            ></Image>
          </div>

          <div className="absolute right-[-180px] top-[-80px] rotate-[-92deg] md:opacity-100 opacity-65 z-20">
            <Image
              src={"/images/stain.webp"}
              width={400}
              height={300}
              alt="stain-image"
            ></Image>
          </div>

          <div className="h-full w-full flex flex-col justify-center items-center absolute px-8">
            <Image
              src={"/images/rings.webp"}
              width={100}
              height={100}
              alt="ring-image"
            ></Image>
            <h1 className="text-[2.3rem] font-dancingScript font-bold">
              Para: {guess.name}
            </h1>
            <h1 className="lg:text-[2.8rem] text-3xl font-dancingScript font-bold text-center tracking-tighter leading-[3rem]">
              ¡Estás invitado a mi boda!
            </h1>

            <div className="relative w-[400px] flex justify-center">
              <div className="relative z-20 lg:w-[280px] lg:h-[280px] w-[240px] h-[240px]">
                <Image
                  src={"/images/couple.webp"}
                  fill
                  alt="couple-image"
                ></Image>
              </div>
              <div className="opacity-[0.16] absolute z-10 lg:w-[280px] lg:h-[280px] w-[300px] h-[300px]">
                <Image
                  src={"/images/fondo-circle.webp"}
                  fill
                  alt="circle-image"
                ></Image>
              </div>
            </div>

            <div className="text-center">
              <p className="lg:text-4xl text-3xl font-nametitle italic font-semibold">
                Tedoro & Nicida
              </p>
              <DateHour></DateHour>
              <CountDownComponent />
            </div>
          </div>

          <div
            className="absolute right-[-10px] lg:bottom-[-40px] lg:rotate-[-40deg] rotate-[-20deg]
            bottom-[-20px]
          lg:h-[400px] lg:w-[200px] z-20 w-[80px] h-[180px]
          "
          >
            <Image
              src={"/images/pink-flowers2.webp"}
              fill
              alt="pink-flowers2"
            ></Image>
          </div>
          <Image
            className="absolute right-0 bottom-[-160px] md:block hidden rotate-12 z-20"
            src={"/images/stain.webp"}
            width={400}
            height={300}
            alt="stain-image"
          ></Image>
          <Image
            className="absolute  bottom-[-160px] left-0  md:opacity-100 opacity-40 rotate-[120deg] z-20"
            src={"/images/stain.webp"}
            width={400}
            height={300}
            alt="stain-image"
          ></Image>
        </div>
      </section>

      <section>
        <div className="relative lg:h-screen h-[120vh] w-[100vw - 2rem]">
          <Image
            src={"/images/fondo.webp"}
            fill
            alt="fondo-image"
            priority
          ></Image>

          <div className="absolute w-full lg:h-full lg:px-40 px-4">
            <GalleryImageMine></GalleryImageMine>
          </div>
        </div>
      </section>

      <section>
        <div className="relative lg:h-screen h-[120vh] w-[100vw - 2rem]">
          <Image
            src={"/images/fondo.webp"}
            fill
            alt="fondo-image"
            priority
          ></Image>

          <div className="absolute w-full h-full lg:px-28 lg:pb-40 px-4">
            {/* <MapMarry></MapMarry> */}
            <MapMarry2></MapMarry2>
          </div>
        </div>
      </section>

      <footer>
        <div className="text-center h-[30px]">By Christian 😊</div>
      </footer>
    </div>
  );
};

export default InvitacionPage;
