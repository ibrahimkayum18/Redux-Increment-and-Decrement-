// import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  console.log(count);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex justify-center items-center gap-5 h-screen">
        <button
          onClick={() => dispatch(increment(5))}
          className="px-8 py-3 rounded-md bg-green-700 text-white"
        >
          Increment
        </button>
        <h1 className="text-4xl mx-8">{count}</h1>
        <button
          onClick={() => dispatch(decrement(5))}
          className="px-8 py-3 rounded-md bg-red-700 text-white"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
