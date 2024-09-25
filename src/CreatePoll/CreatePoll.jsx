
//import { Link } from "react-router-dom";

import Name1 from "./component/name1";
import Name2 from "./component/name2";
import SharePollsSection from "./component/SharePollsSection";
const CreatePoll = () => {
  return (
    <div>
      <h1>Create a New Poll</h1>
      <Name1 />
      <Name2 />
      <SharePollsSection/>
      
    </div> 
  );
};

export default CreatePoll;
