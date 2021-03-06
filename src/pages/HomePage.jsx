import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Quotes } from "../components";

const API_URL = "https://animechan.vercel.app/api/random";

export default function HomePage({ setPage }) {
  const [quotes, setQuotes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [localQuotes, setLocalQuotes] = useLocalStorage("quotes", []);

  useEffect(() => {
    fetchQuotes();
  }, []);

  async function fetchQuotes() {
    setLoading(true);
    try{
      const response = await fetch(API_URL);
      const quotes = await response.json();
      setError(false);
      setQuotes(quotes);
      setLoading(false);
    }catch(error){
      setError(true);
    }
  }

  function addToFavorites() {
    if(!localQuotes.some(quote => quote.quote === quotes.quote)){
      let currentQuotes = localQuotes;
      currentQuotes.push(quotes);
      setLocalQuotes(currentQuotes);
    }
  }

  return (
    <>
      <Quotes
        loading={loading}
        quotes={quotes}
        fetchQuotes={fetchQuotes}
        addToFavorites={addToFavorites}
        setPage={setPage}
        error={error}
      />
    </>
  );
}
