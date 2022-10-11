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
    <div class="container rows bg-transparent">
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
          <li>
            <a class="btn btn-secondary btn-sm" href="" role="button">
              Check out the repository here!
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img src={fiveCK} class="myWorkImages img-fluid card-header col"></img>
        <ul class="list-group list-group-flush">
          <li class=" m-2">
            The second group project I got to work on is a cook book creator.
            You can add and delete recipes. In addition you get a random recipe
            everyday from a recipe api.
          </li>
          <li>
            <button type="button" class="btn btn-secondary btn-sm">
              Check out the repository here!
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyWork;
