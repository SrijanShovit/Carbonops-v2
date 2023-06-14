import React from "react";
import TeamCard from "./TeamCard";
import profile from "../../public/images/homepage/profile.png";

const team = [
  {
    name: "Username",
    img: profile,
    id : 1
  },
  {
    name: "Username",
    img: profile,
    id : 2
  },
  {
    name: "Username",
    img: profile,
    id : 2
  },
  {
    name: "Username",
    img: profile,
    id : 4
  },
];

const Team = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold">Meet Our Team</h2>
      <div className="md:grid grid-cols-4 flex flex-col mx-[10vw] gap-10 md:mt-[5vh] justify-center items-center">
        {team?.map((item)=>{
            return(<TeamCard item = {item} key={item?.id}/>)
            
        })}
        <TeamCard/>
      </div>
    </div>
  );
};

export default Team;
