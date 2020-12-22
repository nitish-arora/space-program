import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./launchItem.css";

const LaunchItem = ({ item }) => {
  return (
    <div className="item-container">
      <div className="image-container">
        <LazyLoadImage
          src={item.img}
          alt={item.mission_name}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="item-header">
        {item.mission_name} #{item.flight_number}
      </div>
      <div className="description-container">
        <div className="description-tile mission-ids">
          <span className="label">Mission Ids:</span>
          <span className="value">
            <ul>
              {item.mission_id.map((id) => (
                <li key={id}>{id}</li>
              ))}
            </ul>
          </span>
        </div>
        <div className="description-tile">
          <span className="label">Launch Year:</span>
          <span className="value">{item.launch_year}</span>
        </div>
        <div className="description-tile">
          <span className="label">Successful Launch:</span>
          <span className="value">{item.launch_success.toString()}</span>
        </div>
        <div className="description-tile">
          <span className="label">Successful Landing:</span>
          <span className="value">{item.landing_success || "-"}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LaunchItem);
