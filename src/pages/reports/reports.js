import React from "react";

import Button from "../../components/button";

const ReportsPage = () => {
  const stats = [
    {
      value: 1000,
      name: "Total Value of Disbursement",
      range: [
        { name: "Policy", value: 400 },
        { name: "Claim", value: 800 },
      ],
    },
    {
      value: 2500,
      name: "Total Value of Disbursement",
      range: [
        { name: "Policy", value: 1100 },
        { name: "Claim", value: 1400 },
      ],
    },
    {
      value: 2500,
      name: "Total Value of Disbursement",
      range: [
        { name: "Policy", value: 1100 },
        { name: "Claim", value: 1400 },
      ],
    },
  ];

  const progressBarValue = (value) => {
    return (value / 2000) * 100;
  };

  return (
    <div className="reports_page">
      <div className="banner_container">
        <div className="content">
          <h6>20% Safe On Your First Account</h6>
          <div className="code_block">
            <p>NEWBIE20</p>
            <Button className="btn_text" text="Copy Code" />
          </div>
        </div>
      </div>

      <div className="stats_container">
        {stats?.map((stat, i) => (
          <div key={i} className="stat">
            <h4>
              {stat?.value}
              <span>$</span>
            </h4>
            <h5>{stat?.name}</h5>

            {stat?.range?.map((item, i) => (
              <div key={i} className="progress_bar_container">
                <h6>
                  {item?.name}
                  <p>
                    {item?.value}
                    <span>$</span>
                  </p>
                </h6>
                <div className="progress_bar">
                  <span
                    style={{
                      width: `${
                        progressBarValue(item?.value) > 100
                          ? 100
                          : progressBarValue(item?.value)
                      }%`,
                    }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
