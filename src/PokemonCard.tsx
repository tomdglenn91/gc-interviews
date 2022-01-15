import { useCallback } from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 8px;
  width: 400px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #eee;
  padding: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;

const CardAvatar = styled.div<{ url: string }>`
  background: ${(props: any) => css`url(${props.url})`};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 16px;
`;

const CardTitleContainer = styled.div``;
const CardTitle = styled.div`
  font-size: 2rem;
`;

const CardSubTitle = styled.div`
  font-size: 1.5rem;
  color: #999;
`;

const CardContent = styled.div`
  padding: 32px;
`;

const CardActions = styled.div`
  display: flex;
`;

const Button = styled.button`
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  background-color: #9662c7;
  color: white;
  border: none;
  margin: 0 8px;
`;

export const PokemonCard = ({ pokemon, berry, Actions }: any) => {
  const feed = useCallback(() => {
    alert(`${pokemon.name} eats your ${berry}!`);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardAvatar url={`https://picsum.photos/25?${pokemon.name}`} />
        <CardTitleContainer>
          <CardTitle>{pokemon.name}</CardTitle>
          <CardSubTitle>Some subtitle!</CardSubTitle>
        </CardTitleContainer>
      </CardHeader>

      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque tempora minus
        sapiente illo illum laboriosam quo ullam ratione quaerat! Cumque non vero iusto fugiat sint
        fuga sapiente eaque nulla.
      </CardContent>

      <CardActions>
        {Actions ? (
          <Actions />
        ) : (
          <>
            <Button>Cancel</Button>
            <Button onClick={feed}>Feed</Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

const SuperActions = () => (
  <>
    <Button>Cancel</Button>
    <Button>Train</Button>
    <Button>Release</Button>
  </>
);

export const CapturedPokemonCard = (props: any) => (
  <PokemonCard {...props} Actions={SuperActions} />
);
