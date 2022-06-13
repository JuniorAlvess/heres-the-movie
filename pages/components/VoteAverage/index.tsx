import React from 'react'

import styles from './styles.module.scss'

type IProps = {
    vote_average: number;
}

function VoteAverage(props: IProps) {
    return (
        <div className={styles.voteAverage}>
            <strong>{props.vote_average}</strong>
            <svg height="100" width="100">
                <circle cx="19" cy="18" r="20" strokeWidth="3" fill="red" />
                <circle cx="19" cy="18" r="20"
                    strokeWidth="3" fill="red"
                    strokeDashoffset={`calc(125px - (125px * ${props.vote_average}) / 10)`}
                />
            </svg>
        </div>
    )
}

export default VoteAverage;