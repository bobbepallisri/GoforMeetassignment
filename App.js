// frontend/src/App.js
import React from 'react';
import ProfileForm from './components/ProfileForm';
import ProfileWall from './components/ProfileWall';

const App = () => {
  return (
    <div>
      <h1>Create a Profile</h1>
      <ProfileForm />
      <h1>Profile Wall</h1>
      <ProfileWall />
    </div>
  );
};

export default App;
