import React from "react";
import LaunchItem from "./launchItem";

import "./launchList.css";

const LaunchList = ({ launchItems }) => {
  return (
    <div className="launch-list-container">
      {launchItems.map((item) => (
        <LaunchItem key={item.flight_number} item={item} />
      ))}
    </div>
  );
};

export default LaunchList;
