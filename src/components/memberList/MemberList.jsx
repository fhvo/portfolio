import React from "react";

import Member from "../member/Member";
import { members } from "../../data";

import "./memberList.css";

const MemberList = (props) => {
  const sub =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a!";
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur adipisci quibusdam commodi culpa deserunt?";

  return (
    <div id={props.id} className="ml">
      <div className="ml-texts">
        <h1 className="ml-title">Members</h1>
        <p className="ml-sub">{sub}</p>
        <p className="ml-desc">{desc}</p>
      </div>
      <div className="ml-list">
        {members.map((item) => (
          <Member key={item.id} image={item.image} link={item.link} />
        ))}
      </div>
    </div>
  );
};
export default MemberList;
