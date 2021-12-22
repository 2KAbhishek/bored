import React from 'react';
import axios from 'axios';
import './Bored.css';
import Header from '../header/Header';
import Activity from '../activity/Activity';

const baseURL = `https://www.boredapi.com/api/activity`;

const Bored = () => {
  const [activity, setActivity] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
        .get(baseURL)
        .then((response) => {
          console.log(response.data);
          setActivity(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <div className='Bored'>
      <Header title='Bored?' />
      {loading ? <h2>Loading...</h2> : <Activity activity={activity} />}
    </div>
  );
};

export default Bored;
