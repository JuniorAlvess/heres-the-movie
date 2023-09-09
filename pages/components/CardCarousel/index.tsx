import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

import Carousel from "react-multi-carousel";
import VoteAverage from '../VoteAverage';
import { IMovieCategory } from '../../../interfaces'
import { format } from 'path';

interface IProps {
    categories: IMovieCategory
    format?: string
}
const CardCarousel = (props: IProps) => {
    const router = useRouter();
    const urlImage = 'https://image.tmdb.org/t/p/w500'

    return (
        <div key={props.categories?.id} className={styles.movie} onClick={() => router.push(`${props?.format || 'Movie'}/${[props.categories?.id]}`)}>
            {props.categories?.poster_path && (
                <>
                    <Image
                        src={`${urlImage}${props.categories?.poster_path}`}
                        alt={props.categories?.title}
                        width={200}
                        height={300}
                        objectFit="cover"
                        draggable={false}
                    />
                    <VoteAverage vote_average={props.categories?.vote_average} />
                </>
            )}
        </div>
    )
}

export default CardCarousel;