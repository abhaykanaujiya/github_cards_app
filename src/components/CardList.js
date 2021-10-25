import React from 'react';
import Card from './Card';

export default function CardList(props) {
  return (
    <div>
      {props.profiles.map((profiles) => (
        <Card {...profiles} />
      ))}
    </div>
  );
}
