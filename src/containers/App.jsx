import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const BASE_URL = 'http://localhost:3000/data';

const dataFetcher = (url) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    getData(url)
      .then(initialState => setState(initialState));
  }, []);

  return state;
};

const App = () => {
  const initialState = dataFetcher(BASE_URL);
  return (
    <>
      <Header
        name={initialState.name}
        avatar={initialState.avatar}
      >
        <About
          profession={initialState.profession}
          address={initialState.address}
          email={initialState.email}
          website={initialState.website}
          phone={initialState.phone}
        />
      </Header>
      <Profile
        profile={initialState.Profile}
      />
      <Experience
        experience={initialState.experience}
      />
      <div className='Wrapper'>
        <Academic academic={initialState.Academic}/>
        <Skills skills={initialState.skills}/>
      </div>
      <div className='Wrapper'>
        <Interest interest={initialState.interest}/>
        <Languages languages={initialState.languages}/>
      </div>
    </>
  );
};

export default App;
