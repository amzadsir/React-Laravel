import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class AboutMe extends Component {
    render() {
        return (
            <Container className="mt-5">
                <div>
                    <h3 className='text-2xl font-bold'>Who I Am</h3>
                    <hr />

                    <p>
                        I am a highly talented, experienced, professional, and cooperative software engineer, with over four years in the programming and web development industry. I offer a wide range of quality IT services, including web development, mobile app development, and UI design. Additionally, I am passionate about teaching and create video tutorials to share my knowledge. My comprehensive skill set makes me a complete software developer, available for hiring on your projects.
                    </p>
                </div>
                <br />

                <div>
                    <h3 className='text-2xl font-bold'>My Mission</h3>
                    <hr />

                    <p>
                        My mission is to develop unique ideas and high-quality software that secures top rankings in the marketplace and captures the hearts and systems of people. I strive to develop robust, secure, dynamic, and responsive software for all platforms, including computers, tablets, and mobile phones. I am committed to providing top-notch customer service, tailoring our products to meet customer demands and current technology trends, and planning advanced techniques for optimization. My goal is to enhance user experience and ensure customer satisfaction with flexible software that transcends linguistic and regional limitations. I aim to create software that truly resonates with users' hearts and souls.
                    </p>
                </div>
                <br />

                <div>
                    <h3 className='text-2xl font-bold'>My Vision</h3>
                    <hr />

                    <p>
                        My vision is to establish our firm as the premier software firm worldwide, securing the top position among software providers in both the local and international markets. I aim to brand our country as a leading software provider, create employment opportunities for youth in both the software and corporate sectors, provide superior software solutions globally, and nurture a new generation of highly skilled software engineers.
                    </p>
                </div>
            </Container>
        );
    }
}
