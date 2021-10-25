import React, { Component } from 'react';

export default class Card extends Component {
  render() {
		const profile =this.props;
    return (
      <div className='git-hub-profile' style={{margin:"1rem"}}>
        <img src={profile.avatar_url} alt="imgage" />
        <div className='info' style={{display:"inline-block",margin:10}}>
        <div className='name' style={{fontSize:"125%"}}>{profile.name}</div>
        <div className='company'>{profile.company}</div>
				</div>
      </div>
    );
  }
}
