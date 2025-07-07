import React from "react";

function App() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "40px auto",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    padding: "40px 32px",
    fontFamily: "'Segoe UI', Arial, sans-serif",
  };
  const headerStyle = {
    color: "#2a5298",
    fontSize: "2.5rem",
    marginBottom: "0.5em",
  };
  const subHeaderStyle = {
    color: "#1e3c72",
    fontSize: "1.5rem",
    marginTop: "2em",
  };
  const problemStyle = {
    background: "#e3ecfa",
    borderLeft: "6px solid #2a5298",
    padding: "18px 24px",
    borderRadius: "8px",
    marginBottom: "2em",
    fontSize: "1.1rem",
  };
  const challengesListStyle = {
    listStyle: "none",
    padding: 0,
  };
  const challengeItemStyle = {
    background: "#f7fafc",
    marginBottom: "12px",
    padding: "14px 18px",
    borderRadius: "6px",
    boxShadow: "0 1px 4px rgba(44,62,80,0.04)",
    display: "flex",
    alignItems: "flex-start",
    fontSize: "1.05rem",
  };
  const checkStyle = {
    color: "#2a5298",
    marginRight: "12px",
    fontSize: "1.2em",
    marginTop: "2px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Enterprise Financial Operations Insights</h1>
      <div style={problemStyle}>
        <strong>Problem Statement:</strong>
        <br />
        Enterprise financial operations lack transparency and accessibility, preventing employees at all levels from making informed, data-driven decisions. Critical financial insights remain locked in complex systems, creating barriers to effective budget management and strategic planning. The current state forces stakeholders to rely on periodic reports and manual data requests, leading to outdated information and reactive decision-making rather than proactive financial management. This opacity not only hampers individual productivity but also creates organizational risks through delayed responses to financial trends, budget overruns, and compliance issues that could have been prevented with timely access to relevant financial data.
      </div>
      <h2 style={subHeaderStyle}>Key Challenges</h2>
      <ul style={challengesListStyle}>
        <li style={challengeItemStyle}>
          <span style={checkStyle}>✔</span>
          Data Silos: Financial information scattered across multiple systems with no unified view
        </li>
        <li style={challengeItemStyle}>
          <span style={checkStyle}>✔</span>
          Inadequate Role-Based Permissions: Absence of sophisticated access control to ensure sensitive financial information is shared appropriately across different organizational levels and approval hierarchies
        </li>
        <li style={challengeItemStyle}>
          <span style={checkStyle}>✔</span>
          Manual Reporting: Time-consuming manual processes to generate financial reports and analysis
        </li>
        <li style={challengeItemStyle}>
          <span style={checkStyle}>✔</span>
          Delayed Decision-Making: Lack of real-time financial insights leads to reactive rather than proactive management
        </li>
        <li style={challengeItemStyle}>
          <span style={checkStyle}>✔</span>
          Compliance Risks: Insufficient audit trails and monitoring capabilities for financial data access and modifications
        </li>
        <li style={challengeItemStyle}>
          <span style={checkStyle}>✔</span>
          Security Vulnerabilities: Missing multi-factor authentication and robust security measures to protect confidential financial data and sensitive operational information
        </li>
      </ul>
    </div>
  );
}

export default App;