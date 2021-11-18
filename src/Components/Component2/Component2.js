import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { PageUiActions } from "../../Store/uiSlice";

const Component2 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const Heading = useSelector((state) => state.ui.Name);

  const onClickHandler = () => {
    dispatch(
      PageUiActions.changeComponentNumber({
        ComponentNumber: 2,
      })
    );
    history.push("/component1");
  };

  return (
    <div>
      <h1>This is Heading : {Heading}</h1>
      <button onClick={onClickHandler}>Click me</button>
    </div>
  );
};

export default Component2;
