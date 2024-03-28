// DogDetails.test.js
import {render} from '@testing-library/react';
import {MemoryRouter, Routes, Route} from 'react-router-dom';
import DogDetails from './DogDetails';

const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: "whiskey.jpg",
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: "duke.jpg",
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: "perry.jpg",
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  }
];

test('renders DogDetails component', () => {
  render(
    <MemoryRouter initialEntries={['/dogs/Whiskey']}>
      <Routes>
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />}/>
      </Routes>
    </MemoryRouter>
  );
});
