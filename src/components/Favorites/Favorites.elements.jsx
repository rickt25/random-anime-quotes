import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5rem;
  color: #eeeeee;
`
const Card = styled.div`
  width: 500px;
  height: 570px;
  font-size: 20px;
  border-radius: 15px;
  padding: 3rem;
  position: relative;
  background-color: #eeeeee;
`
const QuotesWrapper = styled.div`
  height: 480px;
  overflow-y: scroll;
  padding: 0 1rem;
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #eeeeee;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5f5f5f70; 
    border-radius: 20px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`

const Quotes = styled.div`
  border: 2px solid lightgrey;
  border-radius: 8px;
  padding: 1rem;
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;
`
const Author = styled.h2`
  margin: 0;
  font-size: 25px;
`

const Anime = styled.h4`
  margin: 0;
  font-size: 16px;
  color: grey;
`
const Quote = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 15px;
  font-style: italic;
  color: grey;
`

const Button = styled.button`
  position: absolute;
  bottom: 2rem;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: 0.8px solid;
  border-color: #979797;
  border-radius: 5px;
  color: ${props => props.textColor || "#eeeeee"};
  background-color: ${props => props.bgColor || "#3b6487"};
  display: flex;
  align-items: center;
  margin-right: 10px;

  &:hover{
    color: #e86b78;
    transition: .3s;
  }
`

export { Title, Card, QuotesWrapper, Quotes, Author, Anime, Quote, Button }