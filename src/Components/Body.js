import { Container, Row, Col } from "react-bootstrap";
import desktop from "../images/illustration-editor-desktop.svg";
import phones from "../images/illustration-phones.svg";
import laptop from "../images/illustration-laptop-desktop.svg"
import React from "react";


const Body = () => {
    return (
        <React.Fragment>
            <div className="design_future">
                <h4>
                    Designed for the future
                </h4>
            </div>
            
                <Row className="desktop_editor_row">
                    <Col xs={6} className="p-0">
                        <h5>Introducing an extensible editor</h5>
                        <p>
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                        </p>
                    </Col>
                    <Col xs={6}>
                        <img width={463} height={441} src={desktop} alt="vector desktop image" className="deskto p-0"/>
                    </Col>
                </Row>
                <Row className="phone_row mt-5">
                    <Col xs= {6} className="phone_col p-0">
                        <img src={phones} alt="vector phone image" className="phones p-0"/>
                    </Col>
                    <Col xs={6} className="p-5">
                        <h5> State of the Art Infrastructure</h5>
                        <p>
                            With reliability and speed in mind, worldwild data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                        </p>
                    </Col>
                </Row>
                <Row className="laptop_row ">
                    <Col xs={6} className="laptop_col p-0">
                        <img width={487} height={393} src={laptop} alt="vector laptop image" className="laptop" />
                    </Col>
                    <Col xs={6} className="p-5">
                        <Row>
                            <h5>Free,open,simple</h5>
                            <p>
                                Blogr is a free and open source application backed by a large community if helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media intergration, third-party commenting tools and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn
                            </p>
                        </Row>
                        <Row>
                            <h5>Powerful tooling</h5>
                            <p>
                                Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze but capable of producing even the most complicated sites.
                            </p>
                        </Row>
                    </Col>


                </Row>
           

        </React.Fragment>


    )
};

export default Body;