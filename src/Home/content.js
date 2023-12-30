import React from "react";
import "./Content.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useState } from "react";
import AOS from 'aos'

const content = () => {
  
    AOS.init();
    
    
  return (
    <div className="content">
      <p className="Header">
        choose a plan that's just right for you !<p />
      </p>
      <div className="monthly-div">
      <button className="monthly-btn" >Monthly</button>
      <button className="Annually-btn">Annually</button>
      </div>

      <div className="all">
        <section className="pricing py-5">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-prices">Basic</h4>
                    <h5 className="card-title text-muted text-uppercase text-center">
                      $89.99/mo
                    </h5>
                    <h5 className="card-price ">
                      $9.99<span className="period">/mo</span>
                    </h5>
                    <button className="button1">
                      Get started{" "}
                      <img
                        className="imgarrow"
                        src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                        alt=""
                      />{" "}
                    </button>
                    <br />
                    <br />
                    <p style={{ border: "1px solid" }}></p>
                    <br />
                    <ul className="fa-ul">
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        <strong>what you'll get:</strong>
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Up to 25 Users
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Upto 25gb Storage
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Email Support
                      </p>

                      <p className="CardDtlss">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        EXPLORE FEATURES
                      </p>
                    </ul>
                    <div className="d-grid"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing py-5">
          <div className="container" data-aos="fade-right">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-prices">Standard</h4>
                    <h5 className="card-title text-muted text-uppercase text-center">
                      $189.99/mo
                    </h5>
                    <h5 className="card-price ">
                      $99.99<span className="period">/mo</span>
                    </h5>
                    <button className="button2">
                      Get started{" "}
                      <img
                        className="imgarrow"
                        src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                        alt=""
                      />{" "}
                    </button>
                    <br />
                    <br />
                    <p style={{ border: "1px solid" }}></p>
                    <br />
                    <ul className="fa-ul">
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        <strong>what you'll get</strong>
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Up to 50 Users
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Upto 60gb Storage
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Email+chat Support
                      </p>

                      <p className="CardDtlss">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        EXPLORE FEATURES
                      </p>
                    </ul>
                    <div className="d-grid"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing py-5">
          <div className="container" data-aos="fade-left" data-aos-duration="1000">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-prices">Premium</h4>
                    <h5 className="card-title text-muted text-uppercase text-center">
                      $389.99/mo
                    </h5>
                    <h5 className="card-price ">
                      $19.99<span className="period">/mo</span>
                    </h5>
                    <button className="button3">
                      Get started{" "}
                      <img
                        className="imgarrow"
                        src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                        alt=""
                      />{" "}
                    </button>
                    <br />
                    <br />
                    <p style={{ border: "1px solid" }}></p>
                    <br />
                    <ul className="fa-ul">
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        <strong>what you'll get</strong>
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Up to 75 Users
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Upto 1000gb Storage
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Email+Chat+whatsupp Support
                      </p>

                      <p className="CardDtlss">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        EXPLORE FEATURES
                      </p>
                    </ul>
                    <div className="d-grid"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing py-5">
          <div className="container" data-aos="fade-up" data-aos-duration="1200">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-prices">Basic</h4>
                    <h5 className="card-title text-muted text-uppercase text-center">
                      $89.99/mo
                    </h5>
                    <h5 className="card-price ">
                      $9.99<span className="period">/mo</span>
                    </h5>
                    <button className="button1">
                      Get started{" "}
                      <img
                        className="imgarrow"
                        src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                        alt=""
                      />{" "}
                    </button>
                    <br />
                    <br />
                    <p style={{ border: "1px solid" }}></p>
                    <br />
                    <ul className="fa-ul">
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        <strong>what you'll get:</strong>
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Up to 25 Users
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Upto 25gb Storage
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Email Support
                      </p>

                      <p className="CardDtlss">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        EXPLORE FEATURES
                      </p>
                    </ul>
                    <div className="d-grid"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing py-5">
          <div className="container" data-aos="flip-right" data-aos-duration="1400">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-prices">Standard</h4>
                    <h5 className="card-title text-muted text-uppercase text-center">
                      $189.99/mo
                    </h5>
                    <h5 className="card-price ">
                      $99.99<span className="period">/mo</span>
                    </h5>
                    <button className="button2">
                      Get started{" "}
                      <img
                        className="imgarrow"
                        src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                        alt=""
                      />{" "}
                    </button>
                    <br />
                    <br />
                    <p style={{ border: "1px solid" }}></p>
                    <br />
                    <ul className="fa-ul">
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        <strong>what you'll get</strong>
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Up to 50 Users
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Upto 60gb Storage
                      </p>
                      <p className="cardDtls">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Email+chat Support
                      </p>

                      <p className="CardDtlss">
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        EXPLORE FEATURES
                      </p>
                    </ul>
                    <div className="d-grid"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div  className="footerCard">
        <div className="Card-2" data-aos="fade-up"
         data-aos-duration="2000">
          <Card style={{ width: " 50%" }}>
            <Card.Body>
              <Button className="btn1"> free Forver</Button>
              <Card.Text className="text1">
                <h5 className="card-priceing ">Free Starter</h5>
                The quickest andeasiest way to try Protocolswith basic
                functionalities
              </Card.Text>
              <button className="button4">
                Get started{" "}
                <img
                  className="imgarrow"
                  src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                  alt=""
                />{" "}
              </button>
            </Card.Body>
          </Card>
          <br />
          <div>
            <Card>
              <Card.Body>
                <Card.Text>
                  <ul className="fa-ul">
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <strong>what you'll get:</strong>
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Up to 8 Users
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Upto 3gb Storage
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Email Support
                    </p>

                    <p className="cardDtls">
                      {/* BAsics of DOcuments ,Task Flow,<br/>Voting,Accounting,Banking,Notes,<br/>Invester,Director and  Team  Managment  included */}
                    </p>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="Card-2" data-aos="fade-up"
        data-aos-duration="2000">
          <Card style={{ width: " 50%" }}>
            <Card.Body>
              <Button className="btn2"> free Forver</Button>
              <Card.Text className="text1">
                <h5 className="card-priceing ">Free Starter</h5>
                The quickest andeasiest way to try Protocolswith basic
                functionalities
              </Card.Text>
              <button className="button5">
                Get started{" "}
                <img
                  className="imgarrow"
                  src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                  alt=""
                />{" "}
              </button>
            </Card.Body>
          </Card>
          <br />
          <div>
            <Card>
              <Card.Body>
                <Card.Text>
                  <ul className="fa-ul">
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <strong>what you'll get:</strong>
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Up to 8 Users
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Upto 3gb Storage
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Email Support
                    </p>

                    <p className="cardDtls">
                      {/* BAsics of DOcuments ,Task Flow,<br/>Voting,Accounting,Banking,Notes,<br/>Invester,Director and  Team  Managment  included */}
                    </p>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>



      <div  className="footerCard">
        <div className="Card-2" data-aos="fade-right" 
     data-aos-duration="2200">
          <Card style={{ width: " 50%" }}>
            <Card.Body>
              <Button className="btn1"> free Forver</Button>
              <Card.Text className="text1">
                <h5 className="card-priceing ">Free Starter</h5>
                The quickest andeasiest way to try Protocolswith basic
                functionalities
              </Card.Text>
              <button className="button4">
                Get started{" "}
                <img
                  className="imgarrow"
                  src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                  alt=""
                />{" "}
              </button>
            </Card.Body>
          </Card>
          <br />
          <div>
            <Card>
              <Card.Body>
                <Card.Text>
                  <ul className="fa-ul">
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <strong>what you'll get:</strong>
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Up to 8 Users
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Upto 3gb Storage
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Email Support
                    </p>

                    <p className="cardDtls">
                      {/* BAsics of DOcuments ,Task Flow,<br/>Voting,Accounting,Banking,Notes,<br/>Invester,Director and  Team  Managment  included */}
                    </p>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="Card-2" data-aos="fade-left"
     data-aos-duration="2200">
          <Card style={{ width: " 50%" }}>
            <Card.Body>
              <Button className="btn2"> free Forver</Button>
              <Card.Text className="text1">
                <h5 className="card-priceing ">Free Starter</h5>
                The quickest andeasiest way to try Protocolswith basic
                functionalities
              </Card.Text>
              <button className="button5">
                Get started{" "}
                <img
                  className="imgarrow"
                  src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                  alt=""
                />{" "}
              </button>
            </Card.Body>
          </Card>
          <br />
          <div>
            <Card>
              <Card.Body>
                <Card.Text>
                  <ul className="fa-ul">
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <strong>what you'll get:</strong>
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Up to 8 Users
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Upto 3gb Storage
                    </p>
                    <p className="cardDtls">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Email Support
                    </p>

                    <p className="cardDtls">
                      {/* BAsics of DOcuments ,Task Flow,<br/>Voting,Accounting,Banking,Notes,<br/>Invester,Director and  Team  Managment  included */}
                    </p>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default content;
