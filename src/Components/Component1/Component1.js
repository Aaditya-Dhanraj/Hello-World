import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PageUiActions } from "../../Store/uiSlice";

const Component1 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const Number = useSelector((state) => state.ui.ComponentNumber);

  //   const handleInputChange = ({ target }) => {
  //     setData({
  //       ...data,
  //       [target.name]: target.value,
  //     });
  //     // console.log(data);
  //   };

  // const [data,setData] = useState([]);
  // axios
  // .get(`${BASE_URL_NODE}/clients`, {
  //   headers: {
  //     authorization: `Bearer ${getAuthToken()}`,
  //   },
  // }).then((res)=>{
  // })

  const onClickHandler = () => {
    dispatch(
      PageUiActions.changeName({
        Name: "Hello World",
      })
    );
    history.push("/component2");
  };
  return (
    <div>
      <h1>
        <h1>This is Component Number : {Number}</h1>
      </h1>
      <button onClick={onClickHandler}>Click me</button>
    </div>
  );
};

export default Component1;
