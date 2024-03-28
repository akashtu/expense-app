import React from "react";
import "./Pagination.css";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
export const Pagination = () => {
  return (
    <div className="pagination-component">
      <div>
        <BiLeftArrowAlt />
      </div>
      <div>1</div>
      <div>
        <BiRightArrowAlt />
      </div>
    </div>
  );
};
