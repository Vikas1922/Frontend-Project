import { useState } from "react";

function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) {
      setTranslated("Please enter some text.");
      return;
    }

    setLoading(true);
    setTranslated(""); // Clear previous translation

    const url = "https://google-translator9.p.rapidapi.com/v2"; // API Endpoint
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": "4cbc1a0f1emsh9167c9c11174857p1917f9jsn8f47d7342fc2", // Replace with your real API key
        "x-rapidapi-host": "google-translator9.p.rapidapi.com",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        q: text, // Use user input
        source: "en", // Source language (English)
        target: "hi", // Target language (Change if needed)
        format: "text"
      })
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Fix: Check the correct response structure
      if (data && data.data && data.data.translations && data.data.translations.length > 0) {
        setTranslated(data.data.translations[0].translatedText);
      } else {
        throw new Error("Invalid API response format.");
      }
    } catch (error) {
      console.error("Translation Error:", error);
      setTranslated("Translation failed. Please check your API key and try again.");
    }

    setLoading(false);
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Text Translator</h2>
      <textarea
        className="border p-2 w-full mb-4"
        rows="4"
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleTranslate} className="bg-blue-500 text-white px-4 py-2 rounded">
        {loading ? "Translating..." : "Translate"}
      </button>
      {translated && <p className="mt-4 text-lg font-semibold">Translation: {translated}</p>}
    </div>
  );
}

export default Translator;
