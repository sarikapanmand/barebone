import React from "react";
import './App.css';
import Side from "./Components/Side";

const App = () => {

  const cardsData = [
    {
      content: "$ 400,000",
      value: "Total budget you own",
      color: "white",
    },
    {
      content: "$ 500,000",
      value: "Spend month-to-date",
      color: "#aacbf5",
    },
    {
      content: "$ 600,000",
      value: "Forecasted till-month-end",
      color: "#ccffcc",
    },
  ];
  

  return (
    <div className="App">
      <Side />
      <div className="main-content">
        <div className="title">
          <div className="greet">Hi, Jinni Moss</div>
          <div className="last-scan">Last scan on March 20'th 2023 11:30 P.M IST</div>
        </div>
        <div className="cards">
          {cardsData.map((c, idx) => (
            <div className="card" style={{ backgroundColor: c.color }} key={idx}>
              <h3>{c.content}</h3>
              <h3>{c.value}</h3>
            </div>
          ))}
        </div>

        <div className="box">
          <h3>Buckets you own</h3>
          <table>
            <thead>
              <tr>
                <th className="name-heading" colSpan="2">Name</th>
                <th>Budget</th>
                <th>Spent</th>
                <th>Forecast</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="color-blue" colSpan="2">Acme Corp</td>
                <td>$500</td>
                <td>$300</td>
                <td>$200</td>
              </tr>
              <tr>
                <td className="color-blue" colSpan="2">Raman INC</td>
                <td>$800</td>
                <td>$600</td>
                <td>$200</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="box">
          <h3>Approvals assigned to you</h3>
          <table>
            <thead>
              <tr>
                <th className="name-heading" colSpan="1">Name</th>
                <th>Current Budget</th>
                <th>Requested budget</th>
                <th>Requested by</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="color-blue" colSpan="1">Acme Corp</td>
                <td>$500</td>
                <td>$300</td>
                <td className="color-blue">Joe heilfiger</td>
                <td className="buttons">
                  <button>Approve</button>
                  <button>Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="box">
          <h3>Buckets you are a member of</h3>
          <table>
            <thead>
               <tr>
                <th className="name-heading" colSpan="2">Name</th>
                <th>Budget</th>
                <th>Spent</th>
                <th>Forecast</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="color-blue" colSpan="2">Longate</td>
                <td>$500</td>
                <td>$300</td>
                <td>$200</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default App;
