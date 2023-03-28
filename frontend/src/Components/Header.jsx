import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import img from './artic.png'


function Header() {
  // const [data, setData] = useState("");
  const email = localStorage.getItem("email");
  console.log("email", email);
  // setData(email);
  // const getData = async (email) => {
  //   console.log("in getData");
    
  //   if (email) {
  //     console.log("email", email);
  //     setData(email);
      //   axios.get("http://localhost:5000/getUserDetails").then((res) => {
      //   console.log("data response", res);
      //   setData(res.data.response[0].firstname);
      // });
    // } else {
    //   console.log("in else part");
    //   setData("");
    // }
  // };

  // useEffect(() => {
  //   getData(email);
  // }, [email]);

  return (
    <div>
      <div className="navigator_bar">
        <div className="logo">
        <Link to="/"><img src={img} alt="img1" /></Link>      
        </div>
        <p
          style={{
            float: "left",
            margin: "14px 0px 0px 10px",
            fontSize: "14px",
            fontWeight: "500",
            color:"white"
          }}
        >
          | { email?( `${email}`):("")}
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/alldata">Alldata</Link>
          </li>
        </ul>
      </div>

      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Header;
