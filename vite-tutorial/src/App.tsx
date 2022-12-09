import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import { setObjectData } from "./redux/slices/object";
import type { Object } from "./redux/slices/object";
import NftApp from "./NftApp";
import type { ReactElement } from "react";

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const object = useSelector((state: { key: Object }) => state?.key);

  const onEventClick = (): void => {
    dispatch(
      setObjectData({
        Fname: "Object Fname",
        Lname: "Object Lname",
        Email: "Object Email",
        valid: true,
      })
    );
    console.log(object);
  };

  const [count, setCount] = useState(0);
  console.log(object);
  return <NftApp></NftApp>;
};

export default App;
