import React from "react";
import Xarrow from "react-xarrows";
import "./Timeline.css";

const Timeline = () => {
  return (
    <>
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
        <div class="vl" id="xarrowLine"></div>
        <div className="timeline_col2">
          <img
            id="xarrowImg"
            src="http://www.southernoakkennels.com/wp-content/uploads/2015/06/southernoak_slider_4.jpg"
          />
        </div>
      </div>

      <div className="timeline_row">
        <div className="timeline_col2">
          <img
            id="xarrowImg2"
            src="http://www.southernoakkennels.com/wp-content/uploads/2015/06/southernoak_slider_4.jpg"
          />
        </div>
        <div className="timeline_col1">
          <div className="timeline_box" id="xarrowBox2">
            <h2>What we do</h2>
            <p>
              <i>Some text about &nbsp;</i>
              <u>our mission.</u>
            </p>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default Timeline;
