import React from "react";
import "./App.css";

// var arrow = "<";
function App() {
  const info = {
    name: "Alan joe",
    id: 243754,
    Appointment: `9:00 hrs (16-12-2021)`,
    mail: "gfuygfgs@google.com",
    mobile: 48884458,
  };
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <div className="header">
        <div className="heading">
          <p>
            <strong>{info.name}</strong>
          </p>
          <p>{info.id}</p>
        </div>
        <button>print</button>
      </div>
      <div className="personal">
        <p>
          <strong>Appointment: </strong>
          {info.Appointment}
        </p>
        <p>
          <strong>Email: </strong>
          {info.mail}
        </p>
        <p>
          <strong>Phone: </strong>
          {info.mobile}
        </p>
      </div>
      <div className="order">
        <table>
          <thead>
            <tr>
              <th>status</th>
              <th>door</th>
              <th>time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <li>In progress</li>
              </td>
              <td>mark</td>
              <td>10:30 hrs (18-12-2021)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="list">
        <input type="checkbox" />
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="photo" />
        <div>
          <h3>Lorem,ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, minima?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
