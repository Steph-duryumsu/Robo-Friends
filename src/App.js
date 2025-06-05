import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll  from './Scroll';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  // API call for robots
  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setRobots(users);
      } catch (error) {
        console.error('Error fetching robots:', error);
      }
    };
    fetchRobots();
  }, []);

  //The event.target.value gives the current value the user types in the inputbox , and the setSearchfield updates the searchfield state with whatever the user types
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  //This code takes the full list of robots from the api and filters only the robots whose name includeswhat the user typed in the searchfield. The.toLowerCse makes the searchbox not case-sensitive
  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <div className="tc">
      <h1>Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />

      {/* This line  <CardList robots= {filteredRobots} />  renders the cardlist and the ui automatically updates to show the filtered list in realtime*/}
      <Scroll>
        <CardList robots= {filteredRobots} /> 
      </Scroll>
    </div>
  );
};

export default App;