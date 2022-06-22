import { Title, Card, Character, Anime, Quote, ButtonWrapper, Button, FavoriteButton } from './Quotes.elements';
import diceIcon from "../../images/dice.png";
import starIcon from "../../images/star.png";

export default function Quotes({ loading, quotes, fetchQuotes, addToFavorites, setPage }) {
  return (
    <>
      <Title>
        Anime Quotes Generator
      </Title>
      <Card>
        {loading ? <p>Loading...</p> : (
          <>
            <Character>{quotes.character}</Character>
            <Anime>{quotes.anime}</Anime>
            <Quote>"{quotes.quote}"</Quote>
          </>
        )}
        <ButtonWrapper>
          <Button onClick={fetchQuotes} disabled={loading}>
            <img src={diceIcon} />
            <span>Generate New</span>
          </Button>
          <Button onClick={() => setPage(1)} textColor="grey" bgColor="white">
            <span>View Favorites</span>
          </Button>
        </ButtonWrapper>
        <FavoriteButton onClick={addToFavorites}>
          <img src={starIcon} />
          Add to Favorites
        </FavoriteButton>
      </Card>
      
    </>
  );
}