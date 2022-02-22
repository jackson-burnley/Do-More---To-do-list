import React from "react";
import "./App.css";
import { Header } from "./Header.js";
import Tasks from "./Tasks";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [pending, setPending] = React.useState(0);

  function handleClick() {
    const inputValor = input;

    if (inputValor === "") return;
    console.log(inputValor);

    setInput("");
    setTasks([...tasks, inputValor]);
  }

  React.useEffect(() => {
    document.title = "(" + pending + ") tarefas pendentes";
    if (pending === 0) {
      document.title = "Do More - To do list";
    }
  }, [pending]);

  React.useEffect(() => {
    document.title = "Do More - To do list";
  }, []);

  React.useEffect(() => {
    if (count === 0) {
      // alert(1);
      return null;
    } else if (count === 1) {
      alert(`Você completou ${count} tarefa hoje, parabéns!`);
      setPending(pending - 1);
    } else {
      alert(`Você completou ${count} tarefas hoje, parabéns!`);
      setPending(pending - 1);
    }
  }, [count]);

  return (
    <div className="App">
      <Header></Header>
      <h1>make sure you're being productive</h1>
      <div className="todo-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="texto"
          placeholder="Write your task"
        />
        <input
          type="button"
          value="Add a Task"
          onClick={(e) => {
            if (input !== "") {
              setPending(pending + 1);
            }
            handleClick(e);
          }}
        />
      </div>

      <div className="task-container">
        {tasks.map((task, index) => (
          <Tasks
            key={index}
            tasks={task}
            count={count}
            setCount={setCount}
            pending={pending}
            setPending={setPending}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
