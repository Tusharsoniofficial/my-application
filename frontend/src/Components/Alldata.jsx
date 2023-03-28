import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

function Alldata() {
  // const [email, setemail] = useState("");
  const [msg, setMsg] = useState("");
  const [data, setdata] = useState([]);
  const [Active, setActive] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  
  //-----------------------------------------------------------getting all users data API
  const handleSubmit = (e) => {
    axios.get("http://localhost:5000/getUserDetails").then((res) => {
      
      setdata(res.data.response);
      console.log("backend response", res);
    });
  };
  //----------------------------------------------------deleting specific user data by clicking API
  const userDelete = (email, firstname) => {
    if (window.confirm(`are you sure you want to delete ${firstname}`)) {
      axios
        .post("http://localhost:5000/userDelete", { email })
        .then((res) => {
          if (res.data.status === 1) {
           
            setTimeout(() => {
              // setMsg(res.data.message);
              console.log(res);
            }, 1500);
          } else {
            // setMsg(res.data.message);
            console.log(res);
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  };
  //----------------------------------------------------------get specific user data API
  const getdata = (email) => {
    axios
      .post("http://localhost:5000/getUserDetailsbyemail", { email })
      .then((res) => {
        if (res.data.status === 1) {
          setdata(res.data.message);
          console.log("backend response", res);
          alert(res.data.message);
        } else {
          setdata(res.data.message);
          console.log("backend response", res);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  //---------------------------------------------------update data
  
  const editdata = async (email, firstname, lastname, contact) => {
    setActive(true);
    setEmail(email);
    setFirstname(firstname);
    setLastname(lastname);
    setContact(contact);
  };

  const updatedata = (e) => {
    setFirstname(e.target.value);
    setLastname(e.target.value);
    setEmail(e.target.value);
    setContact(e.target.value);

    axios
      .post("http://localhost:5000/newuserUpdate", {
        firstname,
        lastname,
        email,
        contact,
      })
      .then(async (res) => {
        if (res.data.status === 1) {
          console.log("backend response", res);
          setMsg(res.data.message);
          setActive(false);
          await handleSubmit();
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  // useEffect(() => {
  //   console.log("calling handlesubmit before rendering component");
  //   handleSubmit();
  // }, []);
  return (
    <div className="maindiv" style={{marginBottom:"75px"}}>
      <h2>"click me" To Show All Users Data From DB</h2>
      <button onClick={handleSubmit}>click me</button>
      <button style={{ marginLeft: "50px" }}>
        <Link to="/deleteuser">delete user</Link>
      </button>
      <br />
     
      <br />
      <table border={1} className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  onClick={() => userDelete(item.email, item.firstname)}
                >
                  <DeleteFilled style={{ fontSize: "18px", color: "black" }} />
                </button>
{/* ----------------------------------starts update button redirect to another page----------------   */}
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    marginLeft: "20px",
                  }}
                  onClick={() => getdata(item.email)}
                >
                  <Link to="/Updatedata">
                    update
                  </Link>
                </button>
{/* ----------------------------------ends update button redirect to another page----------------   */}

                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    marginLeft: "20px",
                  }}
                  onClick={() => {
                    editdata(
                      item.email,
                      item.firstname,
                      item.lastname,
                      item.contact,
                      item.password
                    );
                  }}
                >
                  <EditFilled style={{ fontSize: "18px", color: "black" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {Active ? (
        <div style={{marginBottom:"100px"}}>
          <h1>update details</h1>
          <label>firstname</label>
          <input
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />
          <br />
          <label>lastname</label>
          <input
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
          <br />
          <label>email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label>contact</label>
          <input
            type="text"
            onChange={(e) => setContact(e.target.value)}
            value={contact}
          />
          <br />
          <button onClick={(e) => updatedata(e)}>update</button>
        </div>
      ) : (
        ""
      )}

        {/* {data.map((item, index) =>{return <p key={index}>{item.firstname}{item.lastname}</p>})} */}
      {msg}
    </div>
  );
}
export default Alldata;
