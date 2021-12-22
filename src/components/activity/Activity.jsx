import React from 'react';
import Button from '../button/Button';
import PropTypes from 'prop-types';

const Activity = ({activity}) => {
  return (
    <div>
      <h2>{activity.activity}</h2>
      <h3>{activity.type}</h3>
      {activity.link && (
        <Button text='Get Started' link={activity.link.toString()} />
      )}
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default Activity;
