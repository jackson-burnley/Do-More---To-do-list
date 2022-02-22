import React from "react";
import trash from "./img/trash.svg";
import check from "./img/check.svg";

const Tasks = ({ tasks, setTasks, count, setCount, pending, setPending }) => {
  function trashClick(e) {
    console.log(e.target.parentNode.parentNode);
    const parentTask = e.target.parentNode.parentNode;
    parentTask.outerHTML = "";
  }
  function checkClick(e) {
    const parentTask = e.target.parentNode.parentNode;
    parentTask.outerHTML = "";
  }

  return (
    <div className="Tasks">
      <p>{tasks}</p>

      <div className="tasks-icons">
        <img
          className="trash"
          src={trash}
          alt="Lixo"
          onClick={(e) => {
            setPending(pending - 1);
            trashClick(e);
          }}
        />
        <img
          className="check"
          src={check}
          alt="Check"
          onClick={(e) => {
            setCount(count + 1);
            checkClick(e);
          }}
        />
      </div>
    </div>
  );
};

export default Tasks;
