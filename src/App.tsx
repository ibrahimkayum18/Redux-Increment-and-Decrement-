import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  let dividedNumber: number = 0;

  if (count) {
    dividedNumber = Math.floor(count / 5) * 5;
  }

  const signGroups = [];
  for (let i = 0; i < dividedNumber; i += 5) {
    signGroups.push(
      <span key={i} className="pr-5">
        {"|".repeat(Math.min(5, dividedNumber - i))}
      </span>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center gap-5 h-screen">
        <div className="flex justify-center items-center gap-5 p-10 border-2 border-black">
          <button
            onClick={() => dispatch(increment(1))}
            className="px-8 py-3 rounded-md bg-green-700 text-white"
          >
            Increment
          </button>
          <h1 className="text-4xl mx-8">{count}</h1>
          <button
            onClick={() => dispatch(decrement(1))}
            className="px-8 py-3 rounded-md bg-red-700 text-white"
          >
            Decrement
          </button>
        </div>
        <div>{signGroups}</div>
      </div>
    </>
  );
}

export default App;
