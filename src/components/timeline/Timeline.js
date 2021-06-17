import React from "react";
import Xarrow from "react-xarrows";
import { Link } from "react-router-dom";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline_container">
      <div className="timeline_row">
        <div className="timeline_col1">
          <div className="timeline_box" id="xarrowBox">
            <h2>What we do</h2>
            <p>
              <i>Some text about &nbsp;</i>
              <u>our mission.</u>
            </p>
          </div>
        </div>
        <div className="vl" id="xarrowLine"></div>
        <div className="timeline_col2">
          <img
            id="xarrowImg"
            src="http://www.vitanet.de/f/108495s490x276c0x37_490x200/tiere/7230_is_Hund_Zecken_1000_16zu9.jpg"
          />
        </div>
      </div>

      <div className="timeline_row">
        <div className="timeline_col2">
          <img
            id="xarrowImg2"
            src={process.env.PUBLIC_URL + "/uploads/application.jpg"}
          />
        </div>
        <div className="timeline_col1">
          <div className="timeline_box" id="xarrowBox2">
            <h2>Application</h2>
            <p>
              <i>Veteran application for program is &nbsp;</i>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <u>available here.</u>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="xarrows">
        <Xarrow
          lineColor="rgb(94, 102, 110)"
          headSize={0}
          strokeWidth={2}
          path="grid"
          startAnchor="right"
          endAnchor="bottom"
          start="xarrowBox"
          end="xarrowLine"
        />
        <Xarrow
          lineColor="rgb(94, 102, 110)"
          headSize={0}
          startAnchor="bottom"
          strokeWidth={2}
          path="grid"
          start="xarrowLine"
          end="xarrowImg"
        />
        <Xarrow
          lineColor="rgb(94, 102, 110)"
          headSize={0}
          strokeWidth={2}
          path="grid"
          startAnchor="left"
          endAnchor="bottom"
          start="xarrowBox2"
          end="xarrowLine"
        />
        <Xarrow
          lineColor="rgb(94, 102, 110)"
          headSize={0}
          startAnchor="bottom"
          strokeWidth={2}
          path="grid"
          start="xarrowLine"
          end="xarrowImg2"
        />
      </div>
    </div>
  );
};

export default Timeline;
