const About = () => {
  return (
    <main className="bg-neutral-900 min-h-screen mt-[-5px] selection:bg-neutral-500">
      <section className="text-neutral-100 container mx-auto max-w-6xl">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-3 font-mono">
              <h1 className="text-3xl font-mono">About</h1>
              <p className="tracking-tight  ">
                From{" "}
                <span className="text-sky-500 ">Investment Management</span>,{" "}
                <span className="text-sky-500 ">Accounting and Finance</span> to{" "}
                <span className="text-emerald-500  underline">
                  Software Developement.
                </span>
              </p>
              <p className=" tracking-tight">
                Through out my career I learnt money is made based on the{" "}
                <span className="text-yellow-400 underline ">
                  Movement of Information.
                </span>{" "}
              </p>
              <p className=" tracking-tight">
                I offer coding and programming services for:
              </p>
              <ul className="list-inside pl-6 list-disc ">
                <li>Web Development</li>
                <li>Data Analytics</li>
                <li>Automation</li>
              </ul>
              <p className="">
                Its board but I{" "}
                <span className="text-fuchsia-500">Genuinely</span> enjoy the
                process of programming from structuring and developing the
                logical thinking of the appilication.
              </p>
            </div>
            <div className="place-content-center place-items-center">
              <p className="text-[180px] font-mono text-center">🤵</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto max-w-6xl">
        <hr />
      </div>

      <section className="py-6">
        <div className="container max-w-6xl mx-auto text-neutral-100 space-y-3 font-mono">
          <h2 className="text-neutral-50 text-xl">Journey</h2>
          <p>
            It started off in 2016. Where as I was stock and forex trader in
            Malaysia, much of my time was carried out with repetative task with
            excell spread sheets.
          </p>
          <p>
            On profitable trades I was happy to have invested the time I did. It
            was the bad trades that made me re-evaluate my life choices. I found
            myself connered and unable to move or do anything and decided to
            learn
            <span className="font-bold text-xl"> HTML and CSS.</span>
          </p>
          <p>
            At the time, I thought that was programming and was going to
            automate my task. Giving me more free time.
          </p>
          <p>
            I feel in love with it and decided to work as an accountant part
            time to have more free time in learning software development. Since
            than, I haven't looked back.
          </p>
          <p>P.S. I still invest but one a semi-annual basis now.</p>
        </div>
      </section>
      <div className="container mx-auto max-w-6xl">
        <hr />
      </div>
      <section className="py-6">
        <div className="container max-w-6xl mx-auto text-neutral-50">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="font-mono text-xl">Pricing</h2>
              <div className="max-w-md border-b-2 border-spacing-3 border-dashed border-neutral-400"></div>
              <div className="max-w-md flex items-center justify-between">
                <h4 className="font-mono">Web-Development</h4>
                <p className="font-mono">RM 650/hr</p>
              </div>
              <div className="max-w-md">
                <h4 className="font-mono">Analytics</h4>
                <div className="pl-6">
                  <div className="flex items-center justify-between">
                    <p className="font-mono">Insight Gathering</p>
                    <p className="font-mono">RM 300/hr</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-mono">Predictive Models</p>
                    <p className="font-mono">RM 800/hr</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-mono">Machine Learning</p>
                    <p className="font-mono">RM 560/hr</p>
                  </div>
                </div>
              </div>
              <div className="max-w-md">
                <h4>Automation</h4>
                <div className="pl-6">
                  <div className="flex items-center justify-between">
                    <p className="font-mono">
                      Bots (Telegram, Slack and Discord)
                    </p>
                    <p className="font-mono">RM 500/hr</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-mono">Report Autogenerating</p>
                    <p className="font-mono">RM 300/hr</p>
                  </div>
                </div>
              </div>
              <div className="max-w-md border-b-2 border-spacing-3 border-dashed border-neutral-400"></div>
              <p className="max-w-md font-mono">
                <span className="text-xl font-medium">NOTE: </span>
                Prices are for labour. Other expense are billed seperately.
              </p>
            </div>
            <div>I Would like a gif Here</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
