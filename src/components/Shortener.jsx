import { useState, useEffect } from "react";
import shortmobile from "../assets/bg-shorten-mobile4.svg";
import shortdesktop from "../assets/bg-boost-desktop1.svg";


 const Shortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const savedUrls = localStorage.getItem("shortenedUrls");
    if (savedUrls) {
      setHistory(JSON.parse(savedUrls));
    }
  }, []);

  const handleShortenUrl = async () => {
    const cleanedUrl = url.trim();
    if (!cleanedUrl) {
      setError("Please add a URL link!");
      return;
    }

    try {
      setError("");
      setLoading(true);
     
      const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
        url
      )}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", 
        },
      });

      
     if (!response.ok) {
        throw new Error("Failed to fetch the shortened URL");
      }

      const data = await response.text(); 

      
       if (data) {
        const newShortenedUrl = data;

        
        const updatedHistory = [
          ...history,
          { original: url, shortened: newShortenedUrl },
        ];
        setShortenedUrl(newShortenedUrl);
        setHistory(updatedHistory);
        localStorage.setItem("shortenedUrls", JSON.stringify(updatedHistory));
      } else {
        setError("Failed to shorten the URL. Please try again.");
        
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleClearHistory = () => {
    setHistory([]); 
    localStorage.removeItem("shortenedUrls"); 
  };

  const handleCopyToClipboard = (urlToCopy, index) => {
    navigator.clipboard.writeText(urlToCopy);

    
    setHistory((prevHistory) =>
      prevHistory.map((item, i) =>
        i === index ? { ...item, copied: true } : { ...item, copied: false }
      )
    );

    
    
  };

  return (
    <>
    <section className='max-width'>
       <div
    className="relative  shortener w-full h-80 md:h-64 bg-cover bg-center rounded-lg overflow-hidden"
    style={{
      backgroundImage: `url(${window.innerWidth >= 768 ? shortdesktop : shortmobile})`,
    }}
  >
    <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center w-full md:space-x-4">
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2BD1D0] w-full"
        />
        <button
          onClick={handleShortenUrl}
          className="bg-[var(--Cyan)] text-white px-10 py-6 text-lg font-bold rounded-lg hover:bg-[#9DE1E2] transition duration-300 w-full md:w-auto mt-4 md:mt-0"
        >
          {loading ? "Shortening..." : "Shorten It!"}
        </button>
        
      </div>
       {error && <p className="text-[var(--Red)] mt-4">{error}</p>}
    </div>
    
  </div>
          
      {/* Display shortened URLs */}
      {history.length > 0 && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            
            </div>
            <ul className="space-y-4 ">
            {history.map((item, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg flex flex-col py-3 md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 shadow-md"
              >
                <span className="text-[#3E3D41] text-lg  font-medium break-all border-b md:border-none pb-2 md:pb-0 w-full">
                  {item.original}
                </span>
                <div className="flex flex-col md:flex-row items-left space-y-4 md:space-y-0 md:space-x-4 w-full">
                  <a
                    href={item.shortened}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2BD1D0] font-bold break-all "
                  >
                    {item.shortened}
                  </a>
             
              <button
                    onClick={() => handleCopyToClipboard(item.shortened, index)}
                    className={`${
                      item.copied
                        ? "bg-[#3A3053] text-white"
                        : "bg-[#2BD1D0] text-white"
                    } px-8 py-3 rounded-lg hover:opacity-90 transition  duration-300 md:ml-auto text-xl cursor-pointer font-bold hover:bg-[var(VeryDarkViolet)]`}
                  >
                    {item.copied ? "Copied!" : "Copy"}
                  </button>
                  
                </div>
                
              </li>
              
           ))}
          </ul>

          <h2 className="text-lg font-bold text-gray-700"></h2>
            <button
              onClick={handleClearHistory}
              className="bg-[var(--Cyan)] text-white px-4 py-2 my-6 rounded-lg hover:bg-[var(--VeryDarkViolet)] cursor-pointer transition duration-300 text-sm md:text-base"
            >
              Clear History
            </button>
        </div>
         )}
    </section>
    </>
  )
}

export default Shortener





