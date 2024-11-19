import { unstable_cache } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import CountDownComponent from "../../components/CountDown";
import Image from "next/image";

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
        <div className="relative h-screen">
          <Image
            src={"/images/fondo.webp"}
            fill
            alt="fondo-image"
            priority
          ></Image>
          <div className="h-full w-full flex justify-center items-center absolute px-8">
            <div className="text-center">
              <p className="text-4xl font-nametitle italic font-semibold">
                Estás invitado {guess.name}
              </p>
              <CountDownComponent />
            </div>
          </div>
        </div>
      </section>
      <section>
        {/*  <div className="relative h-screen">
          <Image
            src={"/images/fondo.webp"}
            fill
            alt="fondo-image"
            priority
          ></Image>
        </div> */}
      </section>
    </div>
  );
};

export default InvitacionPage;
