import React from "react";

const Roadmap = ({ plan }) => {
  return (
    <main>
      {plan.map((e, ind) => {
        return (
          <div key={ind} className="flex flex-col gap-3 my-2">
            <h2 className="text-[var(--text-color)] sm:text-xl font-semibold">
              Day {e.day}
            </h2>
            <h2 className="text-[var(--text-color)] sm:text-xl font-semibold">
              {e.title}
            </h2>

            <div className="flex flex-col gap-1">
              <h2 className="text-[var(--text-color)] sm:text-xl font-semibold">
                Topics to fucus
              </h2>
              <div className="text-[var(--text-color)] sm:text-lg">
                {e.focus}
              </div>
            </div>

            <div>
              <h2 className="text-[var(--text-color)] sm:text-xl font-semibold">
                Tasks
              </h2>
              <ul>
                {e.tasks.map((e, ind) => {
                  return (
                    <li key={ind} className="text-[var(--text-color)] text-sm sm:text-lg">
                      <span className="font-semibold">{ind + 1}:</span> {e}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-full border-2 border-[var(--border-color)] shadow-lg"></div>
          </div>
        );
      })}
    </main>
  );
};

export default Roadmap;
