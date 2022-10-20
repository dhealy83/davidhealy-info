import React from "react";
import pourLosers from "../assets/myWork/pourLosers.png";
import fiveCK from "../assets/myWork/fiveCK.png";
import jate from "../assets/myWork/jate.png";
import originalPortfolio from "../assets/myWork/originalPortfolio.png";
import passwordGen from "../assets/myWork/passwordGen.png";
import regexExplanation from "../assets/myWork/regexExplanation.png";
import socialMediaApi from "../assets/myWork/socialMediaApi.png";
import weatherDashboard from "../assets/myWork/weatherDashboard.png";

function MyWork() {
  return (
    <div className="container rows myWork">
      <div className="my-4">
        <img
          src={pourLosers}
          className="myWorkImages img-fluid card-header col"
        ></img>
        <ul className="list-group list-group-flush">
          <li className=" m-2">
            This was the first group project I worked on. A Jeopardy style quiz
            game where you get to answer as many questions in a row you can.
            Once you miss a question you are presented with a cocktail that you
            can make. It was a lot of fun figuring out how to use .css and
            bootstrap together.
          </li>
          <div className="container d-flex col justify-content-between">
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://dhealy83.github.io/pour-loser-game/"
                target="_blank"
                role="button"
              >
                Deployed application here
              </a>
            </li>
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://github.com/dhealy83/pour-loser-game"
                target="_blank"
                role="button"
              >
                Check out the repo here
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="mt-4">
        <img
          src={fiveCK}
          className="myWorkImages img-fluid card-header col"
        ></img>
        <ul className="list-group list-group-flush">
          <li className=" m-2">
            The second group project I got to work on is a cook book creator.
            You can add and delete recipes. In addition you get a random recipe
            everyday from a recipe api.
          </li>
          <div className="container d-flex col justify-content-between">
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://agile-shore-26692.herokuapp.com/"
                target="_blank"
                role="button"
              >
                Deployed application here
              </a>
            </li>
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://github.com/dhealy83/5-cooks-kitchen"
                target="_blank"
                role="button"
              >
                Check out the repo here
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="mt-4">
        <img
          src={jate}
          className="myWorkImages img-fluid card-header col"
        ></img>
        <ul className="list-group list-group-flush">
          <li className=" m-2">
            This homework assignment was really tough but I worked though it and
            have a firm understanding of how to make a Progressive Web App.
          </li>
          <div className="container d-flex col justify-content-between">
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://pwa-enjoy.herokuapp.com/"
                target="_blank"
                role="button"
              >
                Deployed application here
              </a>
            </li>
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://github.com/dhealy83/progressive-web-app"
                target="_blank"
                role="button"
              >
                Check out the repo here
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="mt-4">
        <img
          src={originalPortfolio}
          className="myWorkImages img-fluid card-header col"
        ></img>
        <ul className="list-group list-group-flush">
          <li className=" m-2">
            Well... this was my first portfolio ever. It left a lot of room for
            me to grow.
          </li>
          <div className="container d-flex col justify-content-between">
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://dhealy83.github.io/week-2-challenge/"
                target="_blank"
                role="button"
              >
                Deployed application here
              </a>
            </li>
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://github.com/dhealy83/week-2-challenge"
                target="_blank"
                role="button"
              >
                Check out the repo here
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="mt-4">
        <img
          src={regexExplanation}
          className="myWorkImages img-fluid card-header col"
        ></img>
        <ul className="list-group list-group-flush">
          <li className=" m-2">
            As much as I didn't enjoy this assignment I did really like the end
            result. I learned a lot about regex and a great deal about creating
            a great readme.md. Best to open this file with vscode to see its
            functionality.
          </li>
          <div className="container d-flex col justify-content-between">
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://gist.github.com/dhealy83"
                target="_blank"
                role="button"
              >
                Check out the gist here
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="mt-4">
        <img
          src={passwordGen}
          className="myWorkImages img-fluid card-header col"
        ></img>
        <ul className="list-group list-group-flush">
          <li className=" m-2">
            One of the first assignments I finished. This was my real first dive
            into algorithms. It was a lot of fun.
          </li>
          <div className="container d-flex col justify-content-between">
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://dhealy83.github.io/Challenge-3/"
                target="_blank"
                role="button"
              >
                Deployed application here
              </a>
            </li>
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://github.com/dhealy83/Challenge-3"
                target="_blank"
                role="button"
              >
                Check out the repo here
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="mt-4">
        <img
          src={weatherDashboard}
          className="myWorkImages img-fluid card-header col"
        ></img>
        <ul className="list-group list-group-flush">
          <li className=" m-2">
            APIs can gbe really tough. Especially at the beginning of this
            className. this one help me iron out my ability to use local storage
            and APIs
          </li>
          <div className="container d-flex col justify-content-between">
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://dhealy83.github.io/weather-dashboard/"
                target="_blank"
                role="button"
              >
                Deployed application here
              </a>
            </li>
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://github.com/dhealy83/weather-dashboard"
                target="_blank"
                role="button"
              >
                Check out the repo here
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="mt-4">
        <img
          src={socialMediaApi}
          className="myWorkImages img-fluid card-header col"
        ></img>
        <ul className="list-group list-group-flush">
          <li className=" m-2">
            This was a great project to help me understand the inner working of
            social media apps like Facebook. This one was a big help for growing
            my database knowledge.
          </li>
          <div className="container d-flex col justify-content-between">
            <li>
              <a
                className="btn btn-secondary btn-sm"
                href="https://github.com/dhealy83/social-network-api"
                target="_blank"
                role="button"
              >
                Check out the repo here
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default MyWork;
