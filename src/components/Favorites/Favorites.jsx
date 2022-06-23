import { Title, Card, Quotes, Author, Anime, QuotesWrapper, Quote, Button, DeleteButton } from './Favorites.elements';
import deleteIcon from '../../images/delete.png';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import React from 'react';

export default function Favorites({ setPage }) {
  const [localQuotes, setLocalQuotes] = useLocalStorage("quotes", []);

  function deleteFavorite(deleteQuote){
    let currentQuotes = localQuotes;
    console.log(currentQuotes.filter(test => test.quote !== deleteQuote));
    currentQuotes = currentQuotes.filter(test => test.quote !== deleteQuote);
    console.log(currentQuotes);
    setLocalQuotes(currentQuotes);
  }

  return (
    <>
      <Title>
        Favorite Quotes
      </Title>
      <Card>
        <QuotesWrapper>
          {localQuotes.length ? localQuotes.map((quotes, index) => (
            <Quotes key={index}>
              <Author>{quotes.character}</Author>
              <Anime>{quotes.anime}</Anime>
              <Quote>"{quotes.quote}"</Quote>
              <DeleteButton onClick={() => deleteFavorite(quotes.quote)}>
                <img src={deleteIcon} />
              </DeleteButton>
            </Quotes>
          )) : 
          <p>No Favorites yet</p>}
        </QuotesWrapper>

        <Button onClick={() => setPage(0)} textColor="grey" bgColor="white">
          <span>Back</span>
        </Button>
      </Card>
    </>
  );  
};
