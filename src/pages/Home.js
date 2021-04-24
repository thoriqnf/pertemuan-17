import { computeHeadingLevel } from "@testing-library/dom";
import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("button di click dengan function tambahan");
  };

  const handleButtonName = () => {
    console.log("tes");
    setName("Skilvul");
  };

  // const handleClickLink = (event) => {
  //   event.preventDefault();
  //   console.log("tes link");
  // };

  console.log(name);
  return (
    <div>
      <div>ini adalah halaman HOME</div>
      <div>
        <p>Username</p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() =>
            alert(
              `Halo ${name} Register anda berhasil dengan password ${password}`
            )
          }
        >
          Register
        </button>
      </div>

      {/* contoh 1 */}
      {/* <div>
        <button onClick={() => console.log("buttom di click")}>
          Tes Button
        </button>
        <button onClick={handleClick}>Tes Button 2</button>
      </div>
      {/* contoh 2 */}
      {/* <div>{name}</div>
      <div>
        <button onClick={handleButtonName}>Ganti nama</button>
      </div> */}
      {/* contoh 3 */}
      {/* <div>
        <button onClick={() => setCount(count + 1)}>
          Button sudah di klik {count}
        </button>
      </div>
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          event.preventDefault();
          console.log("tes inline");
        }}
      >
        Link
      </a>{" "} */}
    </div>
  );
};

export default Home;
