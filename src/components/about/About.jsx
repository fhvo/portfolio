import React from 'react';

import './about.css';
const About = (props) => {
  const sub = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, veritatis?';
  const desc = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, inventore animi harum temporibus, laborum, quo totam commodi error aut tempora sed obcaecati eum asperiores nesciunt iste labore voluptatum ducimus quam esse. Vel dolores deserunt eius, aspernatur, iure enim sed obcaecati incidunt distinctio molestias quibusdam officia nam, a tempora optio aut!';
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={props.image} alt="team-member" className='a-img'/>
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Team</h1>
        <p className='a-sub'>{sub}</p>
        <p className='a-desc'>{desc}</p>
      </div>
    </div>
  )
}

export default About