import React from "react";
import "./Widget.css";
import WidgetContent from "./WidgetContent";

function Widget() {
  return (
    <div className="widget">
      <div className="widget__header"></div>
      <div className="widget__contents">
        <WidgetContent />
      </div>
    </div>
  );
}

export default Widget;
