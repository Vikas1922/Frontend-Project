import { useState } from "react";

function RandomStringGenerator() {
  const [randomString, setRandomString] = useState("");

  const generateRandomString = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setRandomString(result);
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Random String Generator</h2>
      <button onClick={generateRandomString} className="bg-green-500 text-white px-4 py-2 rounded">Generate</button>
      <p className="mt-4 text-lg font-semibold">{randomString}</p>
    </div>
  );
}

export default RandomStringGenerator;
