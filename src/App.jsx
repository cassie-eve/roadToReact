import * as React from 'react';

const App = () => {
  console.log('Rendering App...');
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>RoadToReact</h1>

      <Search onSearch={handleSearch}/>

      <hr />

      <List list={searchedStories}/>
    </div>
  );
}

const List = (props) => {
  console.log('Rendering List...');
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item}/>
      ))}
    </ul>
  );
}

const Item = (props) => {
  console.log('Rendering Item...');
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
}

const Search = (props) => {
  console.log('Rendering Search...');

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={props.onSearch}/>
    </div>
  );
}

export default App;