import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface TaskProps {
  task: string;
  onCompletion: (isChecked: boolean) => void;
  onDelete: () => void;
  onUpdate: (updatedTask: string) => void;
}

const Task: React.FC<TaskProps> = ({
  task,
  onCompletion,
  onDelete,
  onUpdate,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>(task);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCompletion(!isChecked);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(editedTask);
    setIsEditing(false);
  };

  return (
    <div className="todo-task">
      <label className="todo-task-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="todo-task-checkbox"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="todo-edit-input"
          />
        ) : (
          <span className="todo-task-text">{task}</span>
        )}
      </label>
      <div className="todo-task-actions">
        {isEditing ? (
          <button className="todo-save-edit" onClick={handleSave}>
            Save
          </button>
        ) : (
          <FontAwesomeIcon
            icon={faEdit}
            className="todo-edit-icon"
            onClick={handleEdit}
            data-testid="edit-icon" 
          />
        )}
        <FontAwesomeIcon
          icon={faTrash}
          className="todo-delete-icon"
          onClick={onDelete}
          data-testid="delete-icon" 
        />
      </div>
    </div>
  );
};

export default Task;
