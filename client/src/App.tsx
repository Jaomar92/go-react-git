function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 space-y-6">
        <div className="p-5 border-2 border-slate-500 border-dashed rounded-2xl">
          <h1 className="text-3xl text-neutral-50 font-bold p-12 bg-orange-500 rounded-xl">
            This Is Jeffrey Creating a Blogging CMS 🔥 🚀
          </h1>
        </div>
        <div className="flex items-start justify-center gap-6 border-2 border-slate-500 border-dashed rounded-2xl p-5">
          <div className="bg-lime-500 p-12 rounded-xl space-y-3 text-stone-100 w-1/2">
            <h2 className="text-2xl font-medium">
              What is the purpose of this website?
            </h2>
            <ul className="text-xl font-mono list-decimal list-inside space-y-3 leading-snug">
              <li>I would like people to hire me as a developer</li>
              <li>
                I would like to have a store front selling:-
                <ul className="pl-12 list-inside list-disc">
                  <li>Courses</li>
                  <li>Templates</li>
                  <li>UI components</li>
                </ul>
              </li>
              <li>I'd like to have project tutorials</li>
              <li>I'd like to have tech product reviews</li>
            </ul>
          </div>

          <div className="bg-purple-500 w-1/2 p-12 rounded-xl text-slate-100 space-y-4">
            <h2 className="text-2xl font-medium">Considerations</h2>
            <ul className="text-xl list-decimal list-inside font-mono">
              <li>
                Should I just have many different websites?
                <br />
                <span className="pl-6">
                  - No I dont have much content as is
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
