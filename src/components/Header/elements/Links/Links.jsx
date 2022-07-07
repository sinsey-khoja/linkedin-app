import React from "react";
import Link from "../../molecules/Link";
import "./Links.scss";
import {
  RssIcon,
  UsersIcon,
  CaseIcon,
  MessageIcon,
  BellIcon,
} from "../../../../assets/svg";

const Links = () => {
  const linksData = [
    {
      id: 1,
      icon: <RssIcon color="blue" />,
      text: "feed",
    },
    {
      id: 2,
      icon: <UsersIcon />,
      text: "Network",
    },
    {
      id: 3,
      icon: <CaseIcon />,
      text: "jobs",
    },
    {
      id: 4,
      icon: <MessageIcon />,
      text: "chat",
    },
    {
      id: 5,
      icon: <BellIcon />,
      text: "notices",
    },
  ];

  return (
    
    <ul className="links-ul">
      <div className="chiziq"></div>
      {linksData.map(({ id, icon, text }) => (
        <Link key={id} icon={icon} text={text} />
      ))}
      
      <div className="chiziq"></div>
    </ul>
  );
};

export default Links;
