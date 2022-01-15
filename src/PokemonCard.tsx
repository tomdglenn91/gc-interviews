import styled, { css } from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  display: inline-flex;
  flex-direction: column;
  width: auto;
  box-shadow: 0 2px 1px -1px #0003, 0 1px 1px #00000024, 0 1px 3px #0000001f;
  transition: 0.3s;
  margin: 8px;
  width: 400px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fff;
  padding: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 16px;
`;

const CardAvatar = styled.div<{ url: string }>`
  background: ${(props: any) => css`url(${props.url})`};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const CardTitleContainer = styled.div`
  text-align: center;
`;
const CardTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
  color: #9662c7;
`;

const CardSubTitle = styled.div`
  font-size: 1.5rem;
  color: #999;
`;

const CardContent = styled.div`
  padding: 32px;
  line-height: 1.5rem;
`;

const CardActions = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
`;

const Button = styled.button`
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  background-color: #9662c7;
  color: white;
  border: none;
  margin: 0 8px;
`;

export const PokemonCard = ({ pokemon }: any) => {
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
        <Button>Cancel</Button>
        <Button>Catch</Button>
      </CardActions>
    </Card>
  );
};
