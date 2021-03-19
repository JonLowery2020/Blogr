import {Container, Row, Col } from "react-bootstrap";
import {ReactComponent as Editor} from "../assets/images/illustration-editor-desktop.svg";
import {ReactComponent as Phones} from "../assets/images/illustration-phones.svg";
import {ReactComponent as Laptop} from "../assets/images/illustration-laptop-desktop.svg"
import React from "react";


const Body = () => {
    return (
        <React.Fragment>
            <div className="Justify-content-center">
                <h2>
                    Designed for the future
                </h2>
            </div>
            <div className="pl-5">
                <Row>
                    <Col xs={6}>
                        <Row>
                            <h5>Introducing an exstensible editor</h5>
                            <p>Blogr features and exceedingly intuitive interface that lets you focus on one thing:creating content.The editor supports multiple blogs and allows easy manipulations of embeds such as images, video and markdown. Exstensibily with plugins and themes provide easy ways to add functionality or change the look of a blog.</p>
                        </Row>
                        <Row>
                            <h5>Robust content management</h5>
                            <p>Flexible content managment enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. with this functionality, you'e in full control.</p>
                        </Row>
                    </Col>
                    <Col xs={6}  >
                        <Editor/>
                    </Col>
                </Row>
            </div>
            <div className="p-3">
                <Row className="sota">
                    <Col xs={6}>
                        <Phones/>

                    </Col>
                    <Col xs={6} >
                        <h3>Stat of the Art Infrastructure</h3>
                        <p> With reliability and speed in mind, worldwide data centers provide the backbone for the ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>                   
                    </Col>
                </Row>
            </div>
            <div className= "pr-5">
                <Row>
                    <Col xs={6}>
                        <Laptop/>                   
                    </Col>
                    <Col>
                        <Row>
                            <h5>Free, open, simple</h5>
                            <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google ANalytics. The architecture is clean and is relatively easy to learn.</p>
                        </Row>
                        <Row>
                            <h5>Powerful tooling </h5>
                            <p>Batteries included. We built a simple and straightforward CLI tool that makes customazation and deployment a breeze, but capable of producing even the most complicated sites.</p>
                        </Row>
                    </Col>
                </Row>
            </div>
        </React.Fragment>


    )
};

export default Body;