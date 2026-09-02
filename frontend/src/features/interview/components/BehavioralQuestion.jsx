import React from 'react'

const BehavioralQuestion = ({questions}) => {
  return (
    <main>
      {questions.map((e, ind) => {
        return (
          <div key={ind} className="flex flex-col gap-3 my-2">
            <div className="text-[var(--text-color)]">
              <h2 className="sm:text-xl uppercase font-semibold">Question {ind + 1}:</h2>
              <p className="text-sm sm:text-lg">{e.question}</p>
            </div>

            <div className="intention text-[var(--text-color)]">
              <h2 className="sm:text-xl uppercase font-semibold">Intention:</h2>
              <p className="text-sm sm:text-base text-[var(--text-color)]">
                {e.intention}
              </p>
            </div>

            <div className="intention text-[var(--text-color)]">
              <h2 className="sm:text-xl uppercase font-semibold">Answer:</h2>
              <p className="text-sm sm:text-base text-[var(--text-color)]">{e.answer}</p>
            </div>

            <div className="w-full border-2 border-[var(--border-color)] shadow-lg"></div>
          </div>
        );
      })}
    </main>
  )
}

export default BehavioralQuestion