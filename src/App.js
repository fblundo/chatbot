import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Calendar from './components/calendar';
import Email from './components/email';
import Linkedin from './components/linkedin';
import { ThemeProvider } from 'styled-components';
import './App.css';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#3466a7',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#ffffff',
  botFontColor: '#000',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
 {
   id: '1',
   message: 'Nice to meet you! I\'m Buddie, Federico\'s personal assistant.',
   trigger: '3',
   hideInput: true,
 },
 {
 id: '3',
 message: 'How may I help you?',
 hideInput: true,
 trigger : '4'
 },
 {
   id: '4',
   hideInput: true,
   options: [
     { value: 3, label: 'Connect me with Federico', trigger: '7' }, //some driver tree
     { value: 1, label: 'Schedule a call', trigger: '5' }, //calendly
     { value: 4, label: 'None of the above', trigger: '13' }, //send an email
   ],
 },
 {
 id: '5',
 hideInput: true,
 message: 'Federico manages his agenda through Calendly. Click here to view his availabilities and propose a slot to meet',
 trigger: '5.1'
 },
 {
     id: '5.1',
     component: <Calendar />,
     asMessage: true,
     end: true
 },
 {
 id: '7',
 hideInput: true,
 message: 'Why would you like to connect with Federico?',
 trigger: 9,
 },
 {
   id: '9',
   hideInput: true,
   options: [
     { value: 3, label: 'I\'d like to discuss an opportunity', trigger: '12' }, //some driver tree
     { value: 1, label: 'I am passionate about tech startups', trigger: '10' }, //send email
     { value: 2, label: 'I\'d like to learn more about Bain', trigger: '11' }, //send email
     { value: 4, label: 'None of the above', trigger: '13' }, //send an email
   ],
 },
 {
 id: '10',
 message: 'Federico loves tech startups like you. Feel free to connect with him on Linkedin and send him an email, especially if your topic is related to any of the following: digital product management, customer experience, digital strategy, machine learning',
 trigger: '10.1'
 },
 {
     id: '10.1',
     component: <Email />,
     asMessage: true,
     end: true
 },
 {
 id: '11',
 message: 'Federico is happy to help committed candidates. You can reach him at his personal email, making a quick intro about you and why you are considering to work in consulting.',
 trigger: '11.1'
 },
 {
     id: '11.1',
     component: <Email />,
     asMessage: true,
     end: true
 },
 {
 id: '12',
 message: 'Sure! Feel free to reach Federico through his Linkedin profile.',
 trigger: '12.1'
 },
 {
     id: '12.1',
     component: <Linkedin />,
     asMessage: true,
     end: true
 },
 {
 id: '13',
 message: 'I am sorry but I cannot be of any help. Please identify yourself.',
 trigger: 14
 },
 {
     id: '14',
     component: <Linkedin />,
     asMessage: true,
     end: true
 },

];

class App extends Component {
    constructor(props) {
      super(props)
    }

render() {
  return (



    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
   )
  }
}

export default App;
