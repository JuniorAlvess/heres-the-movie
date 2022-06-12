import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import Image from 'next/image';

import axios from 'axios';
// import styles from './styles.module.scss';
import Container, { Content, StyledImage ,Group, Title, StyledLink, Overview, HomePage } from './styles';

import { IMovieProps } from '../../interfaces';
import { FaRegPlayCircle } from 'react-icons/fa';

const Movie = () => {
    const [movieData, setMovieData] = useState<IMovieProps>();
    const router = useRouter();
    const { id } = router.query;


    useEffect(() => {
        async function getMovie() {
            const response = await axios.get<IMovieProps>(`${process.env.API_URL}/movie/${id}?api_key=${process.env.API_KEY}`);
            setMovieData(response.data);
        }
        getMovie();
    }, [id]);

    return (
        <Container>
            {/* <Header backgroundImage={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`}>
            </Header> */}

            <Content backgroundImage={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`}>
                {movieData?.backdrop_path && (
                    <>
                        <StyledImage
                            src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
                            alt={`Image of ${movieData?.title} movie`}
                            width={350}
                            height={500}
                            draggable={false}
                        />
                        <div>
                            <Title>{movieData?.title}</Title>
                            <Group>
                                {movieData.genres.map(genre => {
                                    return <StyledLink href="#" key={genre.id}>{genre.name}</StyledLink>
                                })}
                            </Group>
                            <Group> 
                                <HomePage href={`${movieData?.homepage}`} target="_blank"><FaRegPlayCircle size={30} /> Watch</HomePage>
                            </Group>
                            <Overview>{movieData?.overview}</Overview>
                        </div>
                    </>
                )}
            </Content>

        </Container>
    )
}

export default Movie;