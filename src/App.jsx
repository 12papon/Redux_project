import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counters/counterSlice";

function App() {
  const counters = useSelector((state) => state.counters);
  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);
  const dispatch = useDispatch();
  console.log(counters);
  const handleIncriment = (counterId) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };
  return (
    <>
      <div className="text-center mt-3 space-y-2">
        <h1>Simple Counter application</h1>
        <h3 className="p-2 text-2xl text-cyan-900">
          {" "}
          Total counte: {totalCount}
        </h3>
        {counters.map((v) => {
          console.log(v);
          return (
            <h3 key={v.id} className="p-2 text-2xl text-cyan-900">
              {" "}
              value: {v.value}
            </h3>
          );
        })}
        <div className="space-x-2">
          <button className="border-2 rounded-2xl p-2">Increment</button>
          <button className="border-2 rounded-2xl p-2">Dicrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
