import { useEffect, useState } from "react";
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

  useEffect(() => {
    fetchData();
  }, [1]);

  // const [data,setData] = useState([]);
  //   const fetchData = async () => {
  //     const res = await axios.get("https://randomuser.me/api/?results=10");
  //     try {
  //       console.log(res.data.results);
  //       setData(res.data.results);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

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
