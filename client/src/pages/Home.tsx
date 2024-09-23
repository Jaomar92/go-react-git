import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const Home = () => {
  return (
    <main className="bg-neutral-900 min-h-screen mt-[-5px]">
      <section>
        <div className="container mx-auto py-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h1 className="text-3xl font-mono text-neutral-200">
                Hi, I'm Jeff 🐵
              </h1>
              <p className="font-mono text-neutral-100 text-lg">
                I'm a developer from Malaysia with over 4 years of working
                experience in coding and programming.
              </p>
              <Button
                variant={"link"}
                className="text-neutral-100 text-lg text-left p-0"
              >
                Learn More in About
              </Button>
              <hr />
              <h3 className="text-2xl text-neutral-200 font-mono">
                How can I help you?
              </h3>
              <div className="flex items-stretch  gap-3 text-neutral-200 font-semibold">
                <div className="flex-1 text-center bg-red-600 rounded place-content-center p-1">
                  Web-Dev
                </div>
                <div className="flex-1 text-center bg-emerald-600 rounded place-content-center p-1">
                  Programing
                </div>
                <div className="flex-1 text-center bg-sky-600 rounded place-content-center p-1">
                  Coding
                </div>
                <div className="flex-1 text-center bg-purple-600 rounded p-1 place-content-center">
                  Data Science
                </div>
                <div className="flex-1 text-center bg-orange-600 rounded place-content-center p-1">
                  Bot's
                </div>
              </div>
            </div>
            <div className="ml-3">
              <div className="bg-neutral-800 p-3 rounded-xl text-neutral-200 font-mono text-lg space-y-3">
                <p>👨‍💻 Experienced Full-Stack Developer</p>
                {/* <p>🔭 Currently working a healthcare management system</p> */}
                <p>🗺️ Working from Jakarta Indonesia 🇮🇩</p>
                <p>🌟 Available for New Opportunities</p>
                <p>📚 Lifelong learner</p>
              </div>
              <div className="mt-3 bg-neutral-800 h-[160px] rounded-xl place-content-center place-items-center">
                <p className="text-center text-neutral-100 font-mono text-3xl ">
                  Should be my Socials connect
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto max-w-6xl">
        <hr />
      </div>
      <section className="container mx-auto max-w-6xl pt-8 space-y-3">
        <h2 className="text-3xl font-mono text-neutral-100">My latest Works</h2>
        <p className="text-neutral-100 py-3 font-mono">
          Works are modified to exclude client information
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-100 place-content-center ">
          <div className="p-3 border-2 border-dashed border-neutral-400 rounded-xl">
            <div className="h-[250px] flex flex-col">
              <p>Image Here</p>
              <p>Portfolio</p>
              <p>Full Stack</p>
            </div>
          </div>

          <div className="p-3 border-2 border-dashed border-neutral-400 rounded-xl">
            <div className="h-[250px] flex flex-col">
              <p>Image Here</p>
              <p>Forex 3</p>
              <p>Redesign Landing Page Front End</p>
            </div>
          </div>
          <div className="p-3 border-2 border-dashed border-neutral-400 rounded-xl">
            <div className="h-[250px] flex flex-col">
              <p>Image Here</p>
              <p>Forex 2</p>
              <p>Landing Page Front End</p>
            </div>
          </div>
        </div>
        <Link to="/portfolio">
          <Button
            variant={"link"}
            className="text-neutral-100 text-lg font-extralight p-0"
          >
            See more
          </Button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
