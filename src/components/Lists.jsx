import React from 'react';

function Lists(){

    const cars = ["BMW" ,"Ferrari", "Audi","Toyota","Honda",];

    return(
        <div>
            {
            cars.map((car) =>{
                return(
                    <h2>{car}</h2>
                )
            })
        }
        </div>
    );
}

export default Lists;