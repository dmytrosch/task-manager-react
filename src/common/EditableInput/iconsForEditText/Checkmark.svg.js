import React from "react";
import style from './svg.module.css'

export default function Checkmark() {
  return (
    <svg
      className={style.svgSave}
      enableBackground="new 0 0 24 24"
      height="20px"
      width="20px"
      version="1.1"
      viewBox="0 0 24 24"
      xml="preserve"
      space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <style type="text/css"></style>
      <g id="icon">
        <path d="M23.084,0.223L8.127,22.713l-7.272-7.32c-0.193-0.195-0.51-0.197-0.707-0.002c-0.195,0.194-0.197,0.511-0.002,0.707   l7.704,7.755C7.943,23.947,8.071,24,8.204,24c0.017,0,0.032-0.001,0.049-0.002c0.149-0.015,0.284-0.096,0.367-0.221l15.296-23   c0.153-0.23,0.091-0.541-0.139-0.693C23.547-0.067,23.236-0.007,23.084,0.223z" />
      </g>
    </svg>
  );
}
