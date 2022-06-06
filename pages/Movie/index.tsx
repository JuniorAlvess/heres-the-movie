import React from 'react';
import Image from 'next/image';
// import styles from './styles.module.scss';
import miranha from '../assets/spider-man.webp'
import { Container, Header, Content } from './styles';

const Movie = () => {
    return (
        <Container>
            <Header backgroundImage="https://cdn.ome.lt/x7sJkQjYw4ylioB5nDwbxYB4szk=/1200x630/smart/extras/conteudos/spider-man_DomH0Hx.png">
            </Header>

            <Content>
                <div>
                    <Image
                        src={miranha}
                        alt="Movie Image"
                        objectFit="cover"
                    />
                    
                </div>
            </Content>

        </Container>
    )
}

export default Movie;