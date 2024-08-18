import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled components
const Wall = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const Text = styled.p`
  margin: 5px 0;
  color: #666;
`;

const ProfileWall = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/profiles');
        const sortedProfiles = res.data.sort((a, b) => a.location.localeCompare(b.location));
        setProfiles(sortedProfiles);
      } catch (err) {
        console.error('Error fetching profiles:', err.response ? err.response.data : err.message);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <Wall>
      <h1>User Profiles</h1>
      {profiles.length > 0 ? (
        profiles.map(profile => (
          <Card key={profile._id}>
            <Title>{profile.name}</Title>
            <Text>Age: {profile.age}</Text>
            <Text>Location: {profile.location}</Text>
            <Text>Profession: {profile.profession}</Text>
          </Card>
        ))
      ) : (
        <p>No profiles found.</p>
      )}
    </Wall>
  );
};

export default ProfileWall;
