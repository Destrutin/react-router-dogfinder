import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter, Routes, Route} from 'react-router-dom';
import ColorDetails from './ColorDetails';

test('renders color details without crashing', () => {
  const colors = [
    {name: 'Red', value: '#FF0000'},
    {name: 'Blue', value: '#0000FF'},
    {name: 'Green', value: '#00FF00'},
  ];
  
  render(
    <MemoryRouter initialEntries={['/colors/Red']}>
      <Routes>
        <Route path="/colors/:color" element={<ColorDetails colors={colors}/>}/>
      </Routes>
    </MemoryRouter>
  );
});
