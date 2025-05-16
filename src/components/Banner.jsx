import React from "react";
import Button from "./Button";

function Banner(){
    return (
        <div >
           <div className="row">
                <div className="col-6">
                    <div className="text">
                        <h2>
                            Accelerating business growth through innovative technology
                        </h2>
                        <p>
                            We are a leading technology company that specializes in providing innovative solutions to help businesses grow and succeed in the digital age.
                            </p>
                            <Button title="Discover more" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="imagebox">
                        <img src="https://bootstrapmade.com/content/demo/Invent/assets/img/illustration/illustration-16.webp"alt="" className="img-fluid" />
                    </div>
                </div>
           </div>
        </div>
    );
}
export default Banner;