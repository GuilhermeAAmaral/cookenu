import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {RecipeCardContainer, RecipeCardContent} from './styled'
import Button from '@material-ui/core/Button';

const RecipeCard = (props) => {

  return (
    <RecipeCardContainer>

      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={'props.title'}
          height={'150px'}
          image={props.image}
          title={props.title}
        />
        <RecipeCardContent>
          <Typography align={'center'}>
            {props.title.toUpperCase()}
          </Typography>
          <Button onClick={() =>props.onClickCard(props.recipe)}size="medium" color="primary">
          Acessar Receita
        </Button>
        </RecipeCardContent>

      </CardActionArea>

    </RecipeCardContainer>
  );
}

export default RecipeCard