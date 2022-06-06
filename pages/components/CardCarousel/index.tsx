import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

import Carousel from "react-multi-carousel";
import { IMovieCategory } from '../../../interfaces'

interface IProps {
    categories: IMovieCategory
}
const CardCarousel = (props: IProps) => {
    const router = useRouter();
    const urlImage = 'https://image.tmdb.org/t/p/w500'

    return (
        <div key={props.categories?.id} className={styles.movie} onClick={() => router.push('Movie')}>
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
                    <div>
                        <strong>{props.categories?.vote_average}</strong>
                        <svg height="100" width="100">
                            <circle cx="19" cy="18" r="20" strokeWidth="3" fill="red" />
                            <circle cx="19" cy="18" r="20"
                                strokeWidth="3" fill="red"
                                strokeDashoffset={`calc(125px - (125px * ${props.categories?.vote_average}) / 10)`}
                            />
                        </svg>
                    </div>
                </>
            )}
        </div>
    )
}

export default CardCarousel;