import React from 'react';
import ChatBot from 'react-simple-chatbot';
import './Header.css'; // Import your CSS file for custom styles

const Chatbot = () => {
  const steps = [
    {
      id: '1',
      message: 'Hello! How are you?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'What is your name?',
      trigger: '4',
    },
    {
      id: '4',
      user: true,
      trigger: '5',
    },
    {
      id: '5',
      message: 'Thank you for your name, {previousValue}!',
      trigger: '6',
    },
    {
      id: '6',
      message: 'Here are some options:',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: '#contact', label: 'Contact us', trigger: '7' },
        { value: '#gallery', label: 'Gallery', trigger: '8' },
        { value: '#about', label: 'About', trigger: '9' },
        { value: '#experience', label: 'Experience', trigger: '10' },
      ],
    },
    {
      id: '7',
      message: 'You chose Contact us.',
      end: true,
    },
    {
      id: '8',
      message: 'You chose Gallery.',
      end: true,
    },
    {
      id: '9',
      message: 'You chose About.',
      end: true,
    },
    {
      id: '10',
      message: 'You chose Experience.',
      end: true,
    },
  ];

  return (
    <ChatBot
      headerTitle="Ritesh Bot" // Set headerTitle to "Ritesh"
      steps={steps}
      floating={true}
    />
  );
};

export default Chatbot;
