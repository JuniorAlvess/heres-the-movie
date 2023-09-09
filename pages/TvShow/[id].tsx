import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import Image from 'next/image';

import axios from 'axios';
// import styles from './styles.module.scss';
import Container, {
    Content,
    StyledImage,
    Group,
    Title,
    Description,
    ReleaseDate,
    StyledLink,
    Overview,
    Button,
    Cast,
    ImageProfile,
    CastName,
    CastCharacter,
} from './styles';
import { IMovieProps, ICast, IPropsCast } from '../../interfaces';

import { FaRegPlayCircle } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { BsShareFill } from 'react-icons/bs';
import { TbArrowsRandom } from 'react-icons/tb';
import { BiPlayCircle } from 'react-icons/bi';
import VoteAverage from '../components/VoteAverage';


/**
 * TODO: 
 * Add button to favorite, share and sort, trailer (done!)
 * create a component cast 
 * create a component similar
 * 
 */


const TvShow = () => {
    const [movieData, setMovieData] = useState<IMovieProps>();
    const [castData, setCastData] = useState<ICast[]>([]);
    const router = useRouter();
    const { id } = router.query;


    useEffect(() => {
        async function getMovie() {

            const responseMultiples = {
                dataCast: await axios.get<IPropsCast>(`${process.env.API_URL}/tv/${id}/credits?api_key=${process.env.API_KEY}`),
                movie: await axios.get<IMovieProps>(`${process.env.API_URL}/tv/${id}?api_key=${process.env.API_KEY}`)
            }
            setMovieData(responseMultiples.movie.data);
            setCastData(responseMultiples.dataCast.data.cast);
        }
        getMovie();
    }, [id]);




    return (
        <Container>

            <Content backgroundImage={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`}>
                {movieData?.backdrop_path && (
                    <>
                        <Group direction='column'>
                            <StyledImage
                                src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
                                alt={`Image of ${movieData?.title} movie`}
                                width={350}
                                height={500}
                                draggable={false}
                            />
                            <VoteAverage vote_average={movieData?.vote_average} />
                        </Group>
                        <div>
                            <Title>{movieData?.title}</Title>
                            <Description>{movieData?.tagline}</Description>
                            <ReleaseDate>{movieData?.release_date} - {movieData?.runtime} min</ReleaseDate>
                            <Group>
                                {movieData.genres.map(genre => {
                                    return <StyledLink href="#" key={genre.id}>{genre.name}</StyledLink>
                                })}
                            </Group>
                            <Group>
                                <Button href={`${movieData?.homepage}`} target="_blank"><FaRegPlayCircle size={30} /> Watch</Button>
                                <Button title="Watch trailer"><BiPlayCircle size={25} ></BiPlayCircle></Button>
                                <Button href="#" title="Favorite" ><MdFavorite size={25} /></Button>
                                <Button href="#" title="Share" ><BsShareFill size={25} /></Button>
                                <Button href="#" title="Random" ><TbArrowsRandom size={25} /></Button>
                            </Group>
                            <Overview>{movieData?.overview}</Overview>
                        </div>
                    </>
                )}
            </Content>
            <Cast>
                {/* <Title>Cast</Title> */}
                {castData?.map(cast => {
                    return (
                        cast.profile_path && (
                            <>
                                <Group key={cast.id}>
                                    <ImageProfile src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={`Image of ${cast.name}`} />
                                    <div>
                                        <CastName>{cast.name}</CastName>
                                        <CastCharacter>{cast.character}</CastCharacter>
                                    </div>
                                </Group>
                            </>
                        )
                    )
                })}
            </Cast>

            
        </Container>
    )
}

export default TvShow;