import React from "react";
import Xarrow from "react-xarrows";
import "./Timeline.css";

const Timeline = () => {
  return (
    <>
      <div className="timeline_row1">
        <div className="timeline_col1">
          <div className="timeline_box" id="xarrowBox">
            <h1>Dogs</h1>
            <p>Some text about picture</p>
          </div>
        </div>
        <div class="vl" id="xarrowLine"></div>
        <div className="timeline_col2">
          <img
            id="xarrowImg"
            src="https://static.thebark.com/sites/default/files/content/article/full/service-dogs-support-ptsd.jpg"
          />
        </div>
      </div>
      <div className="timeline_row1">
        <div className="timeline_col1">
          <div className="timeline_box" id="xarrowBox">
            <h1>Dogs</h1>
            <p>Some text about picture</p>
          </div>
        </div>
        <div class="vl" id="xarrowLine"></div>
        <div className="timeline_col2">
          <img
            id="xarrowImg"
            src="https://static.thebark.com/sites/default/files/content/article/full/service-dogs-support-ptsd.jpg"
          />
        </div>
      </div>
      <Xarrow
        lineColor="rgb(37, 117, 192)"
        headSize={0}
        strokeWidth={5}
        path="grid"
        start="xarrowBox"
        end="xarrowLine"
      />
      <Xarrow
        lineColor="rgb(37, 117, 192)"
        headSize={0}
        startAnchor="right"
        strokeWidth={5}
        path="grid"
        start="xarrowLine"
        end="xarrowImg"
      />
    </>
  );
};

export default Timeline;
