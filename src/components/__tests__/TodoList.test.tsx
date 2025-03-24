import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  it('renders the initial state with no tasks', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('0 of 0 tasks completed')).toBeInTheDocument();
  });

  it('adds a new task', () => {
    render(<TodoList />);
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);

    const inputField = screen.getByPlaceholderText('Enter task name');
    fireEvent.change(inputField, { target: { value: 'New Task' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  it('marks a task as completed', () => {
    render(<TodoList />);
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);

    const inputField = screen.getByPlaceholderText('Enter task name');
    fireEvent.change(inputField, { target: { value: 'New Task' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(screen.getByText('1 of 1 tasks completed')).toBeInTheDocument();
  });

  it('deletes a task', () => {
    render(<TodoList />);
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);

    const inputField = screen.getByPlaceholderText('Enter task name');
    fireEvent.change(inputField, { target: { value: 'New Task' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    const deleteIcon = screen.getByTestId('delete-icon'); // Use data-testid
    fireEvent.click(deleteIcon);

    expect(screen.queryByText('New Task')).not.toBeInTheDocument();
  });
});