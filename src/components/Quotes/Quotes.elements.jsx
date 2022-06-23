import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5rem;
  color: #eeeeee;
`
const Card = styled.div`
  width: 500px;
  height: 300px;
  font-size: 20px;
  border-radius: 15px;
  padding: 3rem;
  position: relative;
  background-color: #eeeeee;
`
const Character = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #313131;
`
const Anime = styled.h5`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: #606060;
` 
const Quote = styled.h5`
  margin: 0;
  margin-top: 20px;
  font-style: italic;
  font-size: 1.1rem;
  font-weight: 500;
  color: #505050;
  height: 140px;
  overflow: auto;
`
const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 2rem;
`
const Button = styled.button`
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

  &:active img{
    transform: translate(0, 2px);
  }

  &:hover img{
    transform: translate(0, -1px);
    transition: .3s;
  }

  img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`
const FavoriteButton = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  border: 2px solid;
  border-color: #dadada99;
  padding: 0.4rem;
  transition: .3s;

  &:hover{
    background-color: #e4e3e399;
  }

  img{
    width: 20px;
    margin-right: 5px;
  }
`

export { Title, Card, Character, Anime, Quote, ButtonWrapper, Button, FavoriteButton }