import React from "react";
import "./BoxLeft.css";
import { PiPizzaBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { TbBatteryAutomotive } from "react-icons/tb";
export const BoxLeft = () => {
  return (
    <div className="boxleft-container">
      <div className="boxleft-sub1">
        <div className="boxleft-content">
          <div className="icon">
            <PiPizzaBold />
          </div>
          <div className="prod-name-time">
            <div className="prod-name">Samosa</div>
            <div className="time">March 20, 2024</div>
          </div>
        </div>
        <div className="boxright-content">
          <ul className="items-list">
            <li>$150</li>
            <li>
              <RxCross2 />
            </li>
            <li>
              <MdEdit />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="boxleft-sub1">
        <div className="boxleft-content">
          <div className="icon">
            <FaGift />
          </div>
          <div className="prod-name-time">
            <div className="prod-name">Movie</div>
            <div className="time">March 20, 2024</div>
          </div>
        </div>
        <div className="boxright-content">
          <ul className="items-list">
            <li>$150</li>
            <li>
              <RxCross2 />
            </li>
            <li>
              <MdEdit />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="boxleft-sub1">
        <div className="boxleft-content">
          <div className="icon">
            <TbBatteryAutomotive />
          </div>
          <div className="prod-name-time">
            <div className="prod-name">Auto</div>
            <div className="time">March 20, 2024</div>
          </div>
        </div>
        <div className="boxright-content">
          <ul className="items-list">
            <li>$150</li>
            <li>
              <RxCross2 />
            </li>
            <li>
              <MdEdit />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
