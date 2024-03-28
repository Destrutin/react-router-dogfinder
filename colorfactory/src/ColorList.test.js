import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import ColorList from './ColorList';

test('renders color list without crashing', () => {
  const colors = [
    {name: 'Red', value: '#FF0000'},
    {name: 'Blue', value: '#0000FF'},
    {name: 'Green', value: '#00FF00'},
  ];
  
  render(
    <MemoryRouter>
      <ColorList colors={colors} />
    </MemoryRouter>
  );
});
