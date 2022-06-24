import { Favorites } from '../components';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function FavoritesPage({ setPage }) {
  const [localQuotes, setLocalQuotes] = useLocalStorage("quotes", []);

  function deleteFavorite(deleteQuote){
    let currentQuotes = localQuotes;
    currentQuotes = currentQuotes.filter(test => test.quote !== deleteQuote);
    setLocalQuotes(currentQuotes);
  }

  return (
    <Favorites 
      setPage={setPage} 
      quotes={localQuotes}
      deleteFavorite={deleteFavorite} />
  );
};
