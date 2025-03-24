import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Task from '../Task';

describe('Task Component', () => {
  const mockTask = 'Test Task';
  const mockOnCompletion = jest.fn();
  const mockOnDelete = jest.fn();
  const mockOnUpdate = jest.fn();

  it('renders the task text', () => {
    render(
      <Task
        task={mockTask}
        onCompletion={mockOnCompletion}
        onDelete={mockOnDelete}
        onUpdate={mockOnUpdate}
      />
    );
    expect(screen.getByText(mockTask)).toBeInTheDocument();
  });

  it('toggles task completion on checkbox click', () => {
    render(
      <Task
        task={mockTask}
        onCompletion={mockOnCompletion}
        onDelete={mockOnDelete}
        onUpdate={mockOnUpdate}
      />
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnCompletion).toHaveBeenCalledWith(true);
  });

  it('enters edit mode on edit icon click', () => {
    render(
      <Task
        task={mockTask}
        onCompletion={mockOnCompletion}
        onDelete={mockOnDelete}
        onUpdate={mockOnUpdate}
      />
    );
    const editIcon = screen.getByTestId('edit-icon');
    fireEvent.click(editIcon);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('deletes the task on delete icon click', () => {
    render(
      <Task
        task={mockTask}
        onCompletion={mockOnCompletion}
        onDelete={mockOnDelete}
        onUpdate={mockOnUpdate}
      />
    );
    const deleteIcon = screen.getByTestId('delete-icon');
    fireEvent.click(deleteIcon);
    expect(mockOnDelete).toHaveBeenCalled();
  });
});