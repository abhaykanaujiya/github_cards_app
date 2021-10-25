import React, { Component } from 'react';
import "./Card.css";
export default class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className='git-hub-profile'>
        <img src={profile.avatar_url} alt='imgage' />
        <div className='info'>
          <div className='name'>{profile.name}</div>
          <div className='company'>{profile.company}</div>
        </div>
      </div>
    );
  }
}
