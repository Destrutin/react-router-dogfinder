import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewColorForm from './NewColorForm';

test('submits new color form without crashing', () => {
  const addColorMock = jest.fn();

  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <NewColorForm addColor={addColorMock} />
    </MemoryRouter>
  );

  const colorNameInput = getByPlaceholderText('Color Name');
  fireEvent.change(colorNameInput, { target: { value: 'Purple' } });

  const colorPickerInput = document.querySelector('input[type="color"]');
  fireEvent.change(colorPickerInput, { target: { value: '#800080' } });

  const addButton = getByText('Add this color');
  fireEvent.click(addButton);
});
