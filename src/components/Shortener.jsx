import React, { useState, useEffect } from "react";
import shortmobile from "../assets/bg-shorten-mobile4.svg";
import shortdesktop from "../assets/bg-boost-desktop1.svg";

const backgroundImage = window.innerWidth >= 768 ? shortdesktop: shortmobile;

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Load saved URLs from localStorage
  useEffect(() => {
    const savedUrls = localStorage.getItem("shortenedUrls");
    if (savedUrls) {
      setHistory(JSON.parse(savedUrls));
    }
  }, []);

  const handleShortenUrl = async () => {
    if (!url) {
      setError("Please add a URL link!");
      return;
    }

    try {
      setError("");
      setLoading(true);
      
      console.log("Fetching API with URL:", url);

     
      const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
        url
      )}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", 
        },
      });

      
      console.log("Raw Response:", response);

      if (!response.ok) {
        throw new Error("Failed to fetch the shortened URL");
      }

      const data = await response.text(); 

      
      console.log("API Response:", data);

      if (data) {
        const newShortenedUrl = data;

        // Update state and save to localStorage
        const updatedHistory = [
          ...history,
          { original: url, shortened: newShortenedUrl },
        ];
        setShortenedUrl(newShortenedUrl);
        setHistory(updatedHistory);
        localStorage.setItem("shortenedUrls", JSON.stringify(updatedHistory));
      } else {
        setError("Failed to shorten the URL. Please try again.");
        console.error("API Error: No data returned");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyToClipboard = (urlToCopy, index) => {
    navigator.clipboard.writeText(urlToCopy);

   
    setHistory((prevHistory) =>
      prevHistory.map((item, i) =>
        i === index ? { ...item, copied: true } : { ...item, copied: false }
      )
    );

   
    setTimeout(() => {
      setHistory((prevHistory) =>
        prevHistory.map((item) => ({ ...item, copied: false }))
      );
    }, 1000);
  };

  return (
    <div className="bg-[#F0F1F6] px-4 md:px-20 lg:px-[130px] pt-5">
      {/* Input and Button Section with Background Image */}
      <div style={{ backgroundImage: `url(${backgroundImage})` }}
  className="bg-[#3A3053] bg-cover bg-center p-6 rounded-lg shadow-md max-w-full overflow-hidden md:py-10">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2BD1D0]  w-full"
          />
          <button
            onClick={handleShortenUrl}
            className="bg-[#2BD1D0] text-white px-10 py-3 text-lg font-bold rounded-lg hover:bg-[#9DE1E2] transition duration-300  w-full md:w-auto"
          >
            {loading ? "Shortening..." : "Shorten It!"}
          </button>
        </div>

        {/* Display error message */}
        {error && <p className="text-[var(--Red)] mt-4">{error}</p>}
      </div>

      {/* Display shortened URLs */}
      <ul className="mt-6 space-y-4">
        {history.map((item, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 shadow-md"
          >
            <span className="text-[#3E3D41] text-lg font-medium break-all border-b md:border-none pb-2 md:pb-0 w-full">
              {item.original}
            </span>
            <div className="flex flex-col md:flex-row items-left space-y-4 md:space-y-0 md:space-x-4 w-full">
              <a
                href={item.shortened}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--Cyan)] pt-3 md:ml-auto font-medium break-all"
              >
                {item.shortened}
              </a>
              <button
                onClick={() => handleCopyToClipboard(item.shortened, index)}
                className={`${
                  item.copied
                    ? "bg-[#3A3053] text-white"
                    : "bg-[var(--Cyan)] text-white"
                } px-8 py-3 rounded-lg hover:opacity-90 transition duration-300 md:ml-auto text-xl font-bold hover:bg-[var(--VeryDarkViolet)] cursor-pointer`}
              >
                {item.copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shortener;

