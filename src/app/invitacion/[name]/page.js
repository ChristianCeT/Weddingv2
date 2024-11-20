import { unstable_cache } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import CountDownComponent from "../../components/CountDown";
import Image from "next/image";
import { GalleryImage } from "@/app/components/GalleryImage";

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
        <div className="relative h-screen overflow-hidden ">
          <Image
            src={"/images/fondo.webp"}
            fill
            alt="fondo-image"
            priority
          ></Image>
          <Image
            className="absolute left-[-96px] rotate-12"
            src={"/images/pink-flower.png"}
            width={300}
            height={300}
            alt="pink-flower-image"
          ></Image>
          <Image
            className="absolute left-[-96px] rotate-12"
            src={"/images/stain.png"}
            width={400}
            height={300}
            alt="stain-image"
          ></Image>
          <Image
            className="absolute right-0 top-[-80] rotate-[-92deg] z-20"
            src={"/images/stain.png"}
            width={400}
            height={300}
            alt="stain-image"
          ></Image>
          <div
            className="h-full w-full flex flex-col 
          justify-center items-center absolute px-8"
          >
            <Image
              className=""
              src={"/images/rings.png"}
              width={100}
              height={100}
              alt="ring-image"
            ></Image>
            <h1 className="pb-10 text-[2.8rem] font-dancingScript font-bold">
              Estás invitada: {guess.name}
            </h1>

            <div className="relative w-[400px] flex justify-center">
              <Image
                className="relative z-20"
                src={"/images/couple.png"}
                width={280}
                height={280}
                alt="couple-image"
              ></Image>
              <Image
                className="opacity-[0.16] absolute z-10"
                src={"/images/fondo-circle.png"}
                fill
                alt="circle-image"
              ></Image>
            </div>

            <div className="text-center">
              <p className="text-4xl font-nametitle italic font-semibold">
                Tedoro & Nicida
              </p>
              <CountDownComponent />
            </div>
          </div>
          <Image
            className="absolute right-0 bottom-[-40] rotate-[-40deg] z-20"
            src={"/images/pink-flowers2.png"}
            width={200}
            height={300}
            alt="stain-image"
          ></Image>
          <Image
            className="absolute right-0 bottom-[-180] rotate-12 z-20"
            src={"/images/stain.png"}
            width={400}
            height={300}
            alt="stain-image"
          ></Image>
          <Image
            className="absolute left-0 bottom-[-160] rotate-[120deg] z-20"
            src={"/images/stain.png"}
            width={400}
            height={300}
            alt="stain-image"
          ></Image>
        </div>
      </section>

      <section>
        <div className="relative h-screen">
          <Image
            src={"/images/fondo.webp"}
            fill
            alt="fondo-image"
            priority
          ></Image>
          <div className="absolute">
            <GalleryImage></GalleryImage>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvitacionPage;
