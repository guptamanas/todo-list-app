import React, { useState } from "react";
import Task from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  const [newTask, setNewTask] = useState<string>("");
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false);

  const addTask = () => {
    setIsAddingTask(true); 
  };

  const saveTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]); 
      setNewTask(""); 
      setIsAddingTask(false); 
    }
  };

  const handleTaskCompletion = (isChecked: boolean) => {
    setCompletedTasks((prev) => (isChecked ? prev + 1 : prev - 1));
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    if (completedTasks > updatedTasks.length) {
      setCompletedTasks(updatedTasks.length);
    }
  };

  const updateTask = (index: number, updatedTask: string) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const allTasksCompleted = tasks.length > 0 && completedTasks === tasks.length;

  return (
    <div className="todo-app">
      <div className="todo-card">
        <h1 className="todo-title">Todo List</h1>
        {!isAddingTask ? (
          <button className="todo-add-button" onClick={addTask}>
            +
          </button>
        ) : (
          <div className="todo-input-container">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter task name"
              className="todo-input"
            />
            <button className="todo-save-button" onClick={saveTask}>
              Save
            </button>
          </div>
        )}
        <div className="todo-tasks">
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              onCompletion={handleTaskCompletion}
              onDelete={() => deleteTask(index)}
              onUpdate={(updatedTask) => updateTask(index, updatedTask)}
            />
          ))}
        </div>
        {allTasksCompleted && (
          <div className="todo-all-done">
            <FontAwesomeIcon icon={faCheckCircle} className="todo-done-icon" />
            <span>All tasks done!</span>
          </div>
        )}
        <div className="todo-completed">
          {completedTasks} of {tasks.length} tasks completed
        </div>
      </div>
    </div>
  );
};

export default TodoList;
