import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    profession: ''
  });

  const { name, age, location, profession } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/profiles', formData);
      console.log(res.data);
      alert('Profile Created');
      setFormData({ name: '', age: '', location: '', profession: '' });
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1>Create Profile</h1>
      <Input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
      <Input type="number" name="age" value={age} onChange={onChange} placeholder="Age" required />
      <Input type="text" name="location" value={location} onChange={onChange} placeholder="Location" required />
      <Input type="text" name="profession" value={profession} onChange={onChange} placeholder="Profession" required />
      <Button type="submit">Create Profile</Button>
    </Form>
  );
};

export default ProfileForm;
