import React, { Component } from "react";
import "./Contact.css";
import TitleAlt from "../Re-usable/Title/TitleAlt";
import Title from "../Re-usable/Title/Title";
import ImageList from "../Re-usable/ImageList/ImageList";
import ContactForm from "../Re-usable/ContactForm/ContactForm";


export default class Contact extends Component {
  static defaultProps = {
    listDataOne: [
      {
        name: "253-449-6710",
        img: "/phone.png",
        height: "150px"
      },
      {
        name: "Aaron.A.Macken@gmail.com",
        img: "/email.png",
        height: "150px"
      },
      {
        name: "linkedin.com/in/aaronmacken/",
        img: "/linkedin.png",
        height: "150px"
      }
    ]
  }
  render() {
    const {listDataOne} = this.props;
    return (
      <div>
          <TitleAlt text="Contact Me"/>
          <div style={{marginTop: "4rem"}}></div>

          <section className="contactInfo">
            <ImageList listData={listDataOne} click/>
          </section>
          
          <section className="contactForm">
            <Title text="Drop Me A Line"/> 
          <ContactForm />
          </section>
          
      </div>
    );
  }
}
