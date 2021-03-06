import React, { useState } from "react";
import "./styles.css";
import githubLogo from "../public/img/icons8-github (1).svg";
import LinkedinLogo from "../public/img/icons8-linkedin-64.png";
import twitterLogo from "../public/img/icons8-twitter-50.png";
export default function App() {
  const emoji = {
    "ð": "Grinning Face",
    "ð": "Winking Face",
    "ð": "Slightly Smiling Face",
    "ð": "Upside-Down Face",
    "ðĪ": "Money-Mouth Face",
    "ð": "Neutral Face",
    "ð": "Grinning Face with Sweat",
    "ðĪĢ": "Rolling on the Floor Laughing",
    "ð": "Face with Tears of Joy",
    "ð": "Grinning Face with Smiling Eyes",
    "ðĨ°": "Smiling Face with Hearts",
    "ð": "Smiling Face with Heart-Eyes",
    "ð": "Face Blowing a Kiss",
    "ð": "Face Savoring Food",
    "ðķ": "Face Without Mouth",
    "ðŠ": "Sleepy Face",
    "ðŽ": "Grimacing Face",
    "ð": "Smirking Face",
    "ð": "Pensive Face",
    "ð": "Expressionless Face",
    "ðĪ": "Zipper-Mouth Face",
    "ðĪ­": "Face with Hand Over Mouth",
    "ð": "Face Savoring Food",
    "ð": "Face with Tongue",
    "ð": "Winking Face with Tongue",
    "ðĪŠ": "Zany Face",
    "ð": "Squinting Face with Tongue"
  };

  const arrEmoji = Object.keys(emoji);

  const [items, setItems] = useState("");
  function newFunc(event) {
    var userInput = event.target.value;
    let ansToQue = emoji[userInput];
    setItems(ansToQue);
    if (ansToQue === undefined) {
      ansToQue = "Sorry, We don't have it in our database";
      setItems(ansToQue);
    }
  }
  function newFunc2(retro) {
    var newVal = emoji[retro];
    setItems(newVal);
  }
  return (
    <div className="App">
      <nav>
        <h1>Emoji Fun!!</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">More projects</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
        </ul>
      </nav>
      <h2>Put your emoji down</h2>
      <input onChange={newFunc} placeholder={"Enter your emoji here"} />
      <br />
      <br /> <h2>{items}</h2>
      <section>
        {" "}
        <h4>We have this emojis available click on them</h4>
        {arrEmoji.map(function (retro) {
          return (
            <span
              onClick={() => newFunc2(retro)}
              key={retro}
              style={{ fontSize: "2rem", cursor: "pointer" }}
            >
              {retro}
            </span>
          );
        })}
      </section>
      <footer>
        <label>
          <h2>Connect with me on my socials ð</h2>
        </label>
        <ul>
          <li>
            <a href="https://github.com/psychoactiv">
              <img src={githubLogo} alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/speghettiScript?t=Um97FEQuUauZ871X5T8Zag&s=08">
              <img src={twitterLogo} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pritam-majumdar-31a229183">
              <img src={LinkedinLogo} alt="LinkedIn" />
            </a>
          </li>
        </ul>
        <h3>Made with âĪïļ</h3>
      </footer>
    </div>
  );
}
