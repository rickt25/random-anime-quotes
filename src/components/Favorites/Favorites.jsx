import { Title, Card, Quotes, Author, Anime, QuotesWrapper, Quote, Button } from './Favorites.elements';
import dropdownIcon from '../../images/dropdown.png';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import React from 'react';

export default function Favorites({ setPage }) {
  const [localQuotes, setLocalQuotes] = useLocalStorage("quotes", []);
  console.log(localQuotes);

  return (
    <>
      <Title>
        Favorite Quotes
      </Title>
      <Card>
        <QuotesWrapper>
          {localQuotes.map((quotes, index) => (
            <Quotes>
                <React.Fragment key={index}>
                  <Author>{quotes.character}</Author>
                  <Anime>{quotes.anime}</Anime>
                  <Quote>"{quotes.quote}"</Quote>
                </React.Fragment>
            </Quotes>
          ))}
        </QuotesWrapper>

        <Button onClick={() => setPage(0)} textColor="grey" bgColor="white">
          <span>Back</span>
        </Button>
      </Card>
    </>
  );  
};
