import React from 'react';
import Image from 'next/image';
// import styles from './styles.module.scss';
import Container, { Header, Content } from './styles';

const Movie = () => {
    return (
        <Container>
            <Header>
            </Header>

            <Content>
                <div>
                    {/* <Image
                        src={miranha}
                        alt="Movie Image"
                        objectFit="cover"
                    /> */}
                    
                </div>
            </Content>

        </Container>
    )
}

export default Movie;