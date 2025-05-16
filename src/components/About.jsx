import React from 'react';
import Button from './Button';

function About() {
    return (
        <div>
        <div className="row">
            <div className="col-6">
                <h6>WHO WE ARE</h6>
                <h2><b>Unleashing Potential with Creative Strategy</b></h2>
                <p>
                    We are a team of passionate individuals dedicated to helping businesses reach their full potential through innovative and creative strategies. Our mission is to empower our clients with the tools and knowledge they need to succeed in today's fast-paced digital landscape.
                </p>
                <p>
                    With years of experience in the industry, we have a proven track record of delivering results for our clients. We believe in a collaborative approach, working closely with our clients to understand their unique needs and challenges.</p>
                    <Button title="Read more"/>
                    
                </div>
                <div className='col-6'>
                    <img src="https://bootstrapmade.com/content/demo/Invent/assets/img/about/about-portrait-1.webp" alt="" className="img-fluid w-50 w-md-25 mb-5 p-3"/>
                    <img src="https://bootstrapmade.com/content/demo/Invent/assets/img/about/about-8.webp" alt=""
                     className="img-fluid w-50 w-md-25 mb-5 p-3" style={{ marginTop: "-160px" }}  />
                     <img src="https://bootstrapmade.com/content/demo/Invent/assets/img/about/about-12.webp" alt=""
                     className="img-fluid w-50 w-md-25 mb-5 p-3" style={{ marginLeft: "273px", marginTop:"-210px" }}  />
                </div>
            </div>
        </div>
    );
}
export default About;