import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const URLShortener = () => {
  const [inputURL, setInputURL] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [copiedUrls, setCopiedUrls] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Retrieve stored links from local storage
    const storedLinks = JSON.parse(localStorage.getItem("shortenedUrls"));
    if (storedLinks) setShortenedUrls(storedLinks);
  }, []);

  useEffect(() => {
    //   Store links in local storage whenever the list changes
    localStorage.setItem("shortenedUrls", JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  const handleShorten = async (e) => {
    e.preventDefault();
    if (!inputURL) {
      setError("Please add a link");
      return;
    }

    // {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: `url=${encodeURIComponent(inputURL)}`,
    //   }

    try {
      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `url=${encodeURIComponent(inputURL)}`,
      });
      const data = await response.json();

      if (data.result_url) {
        setShortenedUrls([
          ...shortenedUrls,
          { originalUrl: inputURL, shortUrl: data.result_url },
        ]);
        setInputURL(""); // clear input field
        setError(""); // Clear any existing errors
      }
    } catch (error) {
      toast.error("Failed to shorten the URL. Please try again.");
      setError("Failed to shorten the URL. Please try again.");
    }
  };

  const copyToClipboard = async (shortURL) => {
    await navigator.clipboard.writeText(shortURL); // Copies the URL to the user's clipboard
    setCopiedUrls((current) => [...current, shortURL]); // Adds the copied URL to the `copiedUrls` array without modifying the original array.
    setTimeout(() => {
      setCopiedUrls((current) => current.filter((url) => url !== shortURL));
    }, 2000);
    toast.success("Copied to clipboard!");
    // alert()
  };

  return (
    <div className="my-6 w-full max-w-[800px] mx-auto font-primary md:px-0 px-6">
      {/* URLShortener */}
      <div className="w-full p-12 bg-DarkViolet rounded-md md:bg-[url(src/assets/images/bg-shorten-desktop.svg)] bg-[url(src/assets/images/bg-shorten-mobile.svg)] bg-cover bg-center bg-no-repeat">
        <form onSubmit={handleShorten} className="w-full flex gap-1 flex-col">
          <div className="w-full flex gap-6 md:flex-row flex-col">
            <input
              type="text"
              value={inputURL}
              onChange={(e) => setInputURL(e.target.value)}
              placeholder="Shorten a link here..."
              className={`md:w-3/4 w-full rounded-md px-6 md:py-0 py-3 outline-none ${
                error ? " border-red-500 border-[2px]" : ""
              }`}
            />
            <button
              type="submit"
              className="md:py-2 py-3 px-4 rounded-md bg-cyan-500 text-white font-medium cursor-pointer "
            >
              Shorten it!
            </button>
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
        </form>
      </div>
      {/* Shortened Links */}
      <div className="my-6">
        <ul className="flex flex-col items-center w-full">
          {shortenedUrls.map((link, index) => (
            <li
              key={index}
              className="flex justify-between items-center my-2 shadow-lg p-2 rounded-md bg-white w-full"
            >
              <div>{link.originalUrl}</div>
              <div>
                <span>{link.shortUrl}</span>
                <button onClick={() => copyToClipboard(link.shortURL)}>
                  {copiedUrls.includes(link.shortUrl) ? "Copied!" : "Copy"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default URLShortener;
