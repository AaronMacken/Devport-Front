import React, { Component } from "react";
import Jumbo from "../Re-usable/Jumbo/Jumbo";
import Title from "../Re-usable/Title/Title";
import TitleAlt from "../Re-usable/Title/TitleAlt";
import SubTitle from "../Re-usable/SubTitle/SubTitle";
import ImageList from "../Re-usable/ImageList/ImageList";
import ContentContainer from "../Re-usable/ContentContainer/ContentContainer";
import OrangeButton from "../Re-usable/Buttons/OrangeButton/OrangeButton";
import PurpleButton from "../Re-usable/Buttons/PurpleButton/PurpleButton";
import Notification from "../Re-usable/Notification/Notification";
import { Link } from "react-router-dom";

import "./Landing.css";

export default class Landing extends Component {
  static defaultProps = {
    leftColHeader: {
      head: "Full stack web stuff",
      body: `Mostly done with the following technologies`
    },
    rightColHeader: {
      head: "From front to back",
      body: `Here is a quick snapshot of my development process`
    },
    frontEndContent: {
      head: "Front-end",
      body: [
        `I enjoy using React on the front end as it makes for fast applications with components I can re-use across many projects.
        My experience does not end here however, as I am also very comfortable creating web
          pages using regular HTML, CSS and JavaScript.`,
        `I am able to create re-create designs with CSS / SASS, but
          also enjoy the ease of use from third party CSS frameworks,
          like Bootstrap or Material UI. I am not a designer, but I do have some fundamental knowledge 
          of the design principals that go into creating a good looking web page. (I do my best to make these pages look good!)`,
        `I typically use Axios to make AJAX requests to API end-points,
          but I also have used the fetch and jQuery libraries as well.`
      ]
    },
    backEndContent: {
      head: "Back-end",
      body: [
        ` For my back-end applications, I am running Node JS with the Express
          framework and NPM as the package manger. For my database, I am
          currently using a NoSQL database, Mongo DB, with Mongoose as
          the package to connect the database to the server. While Mongo
          DB is my go to database for development purposes, I still have
          experience using MySQL.`,
        `With this back-end stack, I am able to handle routing,
          implement user auth, and create RESTful API's that send back
          JSON to execute C.R.U.D. operations.`,
        `I also have experience implementing third party API's that tie
          in with my own appliacations. In other words, I'm comfortable
          reading through docs!`
      ]
    },
    listDataOne: [
      {
        title: "React",
        img: "/react.svg",
        height: "150px"
      },
      {
        title: "Redux",
        img: "/redux.png",
        height: "150px"
      }
    ],
    listDataTwo: [
      {
        title: "Node",
        img: "/node.jpg",
        height: "150px"
      },
      {
        title: "Mongo DB",
        img: "/mongo.png",
        height: "150px"
      }
    ]
  };

  render() {
    const {
      leftColHeader,
      rightColHeader,
      frontEndContent,
      backEndContent,
      listDataOne,
      listDataTwo
    } = this.props;

    return (
      <div>
        {/* ------------------ HEADER BEGINS ----------------- */}
        <Jumbo
          title={"Aaron Macken"}
          subTitle={"Web Developer Portfolio"}
          btnText={"Click Here To See Projects"}
        />
        {/* ------------------ HEADER ENDS ----------------- */}

        <main>
          {/* ------------------ CONTENT COLUMNS BEGIN ----------------- */}
          <div className="col-wrapper">
            <div className="col-1-of-2">
              <div className="title-subTitle-wrapper">
                <Title text={"About Me"}></Title>
                <SubTitle head={leftColHeader.head} body={leftColHeader.body} />
                <div className="landingMarginTop"></div>
              </div>

              <ImageList listData={listDataOne} />
              <div className="marginDiv"></div>
              <ImageList listData={listDataTwo} />
              <div className="rowWrapper">
                <Link to="/Contact">
                  <OrangeButton big text={"Contact"} className="linkButton" />
                </Link>
                <div className="landingMarginLeft"></div>
                <Link to="/Projects">
                  <PurpleButton
                    big
                    text={"See Projects"}
                    className="linkButton"
                  />
                </Link>
              </div>
            </div>

            <div className="col-1-of-2">
              <div className="title-subTitle-wrapper">
                <div className="landingMarginTopMed"></div>
                <TitleAlt text={"Development"}></TitleAlt>
                <SubTitle
                  head={rightColHeader.head}
                  body={rightColHeader.body}
                />
                <div className="landingMarginTopSmall"></div>
              </div>

              <ContentContainer content={frontEndContent} />
              <ContentContainer content={backEndContent} />
            </div>
          </div>
          {/* ------------------ CONTENT COLUMNS END ----------------- */}
        </main>
        <Notification />
      </div>
    );
  }
}
