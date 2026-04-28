import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counters/counterSlice";
import Navbar from "./Component/Layout/Navbar/Navbar";

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
      <Navbar />
    </>
  );
}

export default App;
