import React from "react";
import axios from "axios";

export default function Favourite() {
  const [Watch, setWatch] = React.useState([]);
  let UserId = localStorage.getItem("Watch");
  React.useEffect(() => {
    axios
      .get("https://655273ad5c69a779032a0b90.mockapi.io/Signup")
      .then(response => {
        console.log(response.data);
        setWatch([response.data[UserId].Read]);
      });
  }, [UserId]);

  return (
    <>
      <div>
        {Watch.map((item, i) => (
          <div key={i}>
            <img src={item.imeg} alt="" />
          </div>
        ))}
        {/* <img src={Watch.imeg} alt="" /> */}
      </div>
    </>
  );
}
