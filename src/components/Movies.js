import React, { Fragment } from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHeader from '../styled/StyledHeader';
import StyledHeaderTitle from '../styled/StyledHeaderTitle';
import StyledHorizontalScroll from '../styled/StyledHorizontalScroll';
import Movie from './Movie';
import { movies } from '../staticData';
import StyledFooter from '../styled/StyledFooter';
import StyledLargeBtn from '../styled/StyledLargeBtn';

const Movies = () => {
  return (
    <Fragment>
      <StyledHeader>
        <FontAwesomeIcon icon="bars" text="help" />
        <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
        <FontAwesomeIcon icon="search" />
      </StyledHeader>
      <StyledHorizontalScroll>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            poster={movie.image}
            duration={movie.duration}
            year={movie.year}
            name={movie.name}
          />
        ))}
      </StyledHorizontalScroll>
      <StyledFooter>
          <StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
      </StyledFooter>
    </Fragment>
  );
};

export default Movies;
