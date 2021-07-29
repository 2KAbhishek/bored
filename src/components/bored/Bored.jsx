import React from 'react';
import axios from 'axios';
import './Bored.css';
import Header from '../header/Header';
import Button from '../button/Button';

const baseURL = `https://www.boredapi.com/api/activity`;

const Bored = () => {
  const [activity, setActivity] = React.useState('');

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setActivity(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="Bored">
      <Header title='Bored?'/>
      <h2>{activity.activity}</h2>
      <h3>{activity.type}</h3>
      {activity.link.length > 0 ?
      (<Button text='Get Started!' link={activity.link.toString()}/>) : null
      }
    </div>
  );
};

export default Bored;
