import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions/index";

const App = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.Counter);
  return (
    <div>
      <h1>Increment/Decrement counter</h1>
      <h4>Using react and redux</h4>

      <div className="value_container">
        <a
          title="increment"
          className="minus"
          onClick={() => dispatch(decrement(5))}
        >
          <span>-</span>
        </a>
        <input type="number" value={myState} className="input_field" />
        <a
          title="increment"
          className="plus"
          onClick={() => dispatch(increment(5))}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
};

export default App;
