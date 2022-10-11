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
    <div class="container rows myWork">
      <div class="my-4">
        <img
          src={pourLosers}
          class="myWorkImages img-fluid card-header col"
        ></img>
        <ul class="list-group list-group-flush">
          <li class=" m-2">
            This was the first group project I worked on. A Jeopardy style quiz
            game where you get to answer as many questions in a row you can.
            Once you miss a question you are presented with a cocktail that you
            can make. It was a lot of fun figuring out how to use .css and
            bootstrap together.
          </li>
          <div class="container d-flex col justify-content-between">
            <li>
              <a
                class="btn btn-secondary btn-sm"
                href="https://dhealy83.github.io/pour-loser-game/"
                target="_blank"
                role="button"
              >
                Deployed application here
              </a>
            </li>
            <li>
              <a
                class="btn btn-secondary btn-sm"
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
      <div class="mt-4">
        <img src={fiveCK} class="myWorkImages img-fluid card-header col"></img>
        <ul class="list-group list-group-flush">
          <li class=" m-2">
            The second group project I got to work on is a cook book creator.
            You can add and delete recipes. In addition you get a random recipe
            everyday from a recipe api.
          </li>
          <div class="container d-flex col justify-content-between">
            <li>
              <a
                class="btn btn-secondary btn-sm"
                href="https://agile-shore-26692.herokuapp.com/"
                target="_blank"
                role="button"
              >
                Deployed application here
              </a>
            </li>
            <li>
              <a
                class="btn btn-secondary btn-sm"
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
      <div class="mt-4">
        <img src={jate} class="myWorkImages img-fluid card-header col"></img>
        <ul class="list-group list-group-flush">
          <li class=" m-2">
            This homework assignment was really tough but I worked though it and
            have a firm understanding of how to make a Progressive Web App.
          </li>
          <div class="container d-flex col justify-content-between">
            <li>
              <a
                class="btn btn-secondary btn-sm"
                href="https://pwa-enjoy.herokuapp.com/"
                target="_blank"
                role="button"
              >
                Deployed application here
              </a>
            </li>
            <li>
              <a
                class="btn btn-secondary btn-sm"
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
      <div class="mt-4">
        <img
          src={originalPortfolio}
          class="myWorkImages img-fluid card-header col"
        ></img>
        <ul class="list-group list-group-flush">
          <li class=" m-2">
            Well... this was my first portfolio ever. It left a lot of room for
            me to grow.
          </li>
          <div class="container d-flex col justify-content-between">
            <li>
              <a
                class="btn btn-secondary btn-sm"
                href="https://dhealy83.github.io/week-2-challenge/"
                target="_blank"
                role="button"
              >
                Deployed application here
              </a>
            </li>
            <li>
              <a
                class="btn btn-secondary btn-sm"
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
    </div>
  );
}

export default MyWork;
