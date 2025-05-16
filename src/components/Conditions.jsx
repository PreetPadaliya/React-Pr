import React from "react";

function MissedGoal(){
    return (
      <h1>
        MissedGoal!
      </h1>
    );
}

function MadeGoal(){
    return (
      <h1>
        MadeGoal!
      </h1>
    );
}

function Conditions(props){

        const isGoal = true;
        if(isGoal){
            return <MadeGoal />;
        }
        else{
            return <MissedGoal />;
        }
}
export default Conditions;