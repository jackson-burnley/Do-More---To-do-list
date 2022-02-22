import React from "react";
import trash from "./img/trash.svg";
import check from "./img/check.svg";

const Tasks = ({ tasks, setTasks, count, setCount }) => {
  // let [count, setCount] = React.useState(0);

  function trashClick(e) {
    console.log(e.target.parentNode.parentNode);
    const parentTask = e.target.parentNode.parentNode;
    parentTask.outerHTML = "";
  }
  function checkClick(e) {
    const parentTask = e.target.parentNode.parentNode;
    parentTask.outerHTML = "";
  }

  // React.useEffect(() => {
  //   if (count === 0) {
  //     // alert(1);
  //     return null;
  //   } else if (count === 1) {
  //     alert(`Você completou ${count} tarefa hoje, parabéns!`);
  //   } else {
  //     alert(`Você completou ${count} tarefas hoje, parabéns!`);
  //   }
  // }, [count]);

  return (
    <div className="Tasks">
      <p>{tasks}</p>

      <div className="tasks-icons">
        <img className="trash" src={trash} alt="Lixo" onClick={trashClick} />
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
