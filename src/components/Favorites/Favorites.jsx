import { Title, Card, Quotes, Author, Anime, QuotesWrapper, Quote, Button, DeleteButton } from './Favorites.elements';
import deleteIcon from '../../images/delete.png';
import React from 'react';

export default function Favorites({ setPage, deleteFavorite, quotes }) {
  return (
    <>
      <Title>
        Favorite Quotes
      </Title>
      <Card>
        <QuotesWrapper>
          {quotes ? quotes.map((quotes, index) => (
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
