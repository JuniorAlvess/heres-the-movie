import styled from 'styled-components';

interface StylesProps {
    backgroundImage?: string;
}

const Container = styled.main`
    scroll-margin-top: 150px;
    height: 80vh;
    width: 70vw;
    
    margin: 6rem auto;

    @media (max-width: 800px) {
        width: 90vw;
    }

`;

export const Header = styled.header<StylesProps>`
    display: flex;
    justify-content: center;
    background-image: url(${(props) => props.backgroundImage});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;


    height: 50vh;
    border-radius: 2rem;

    @media (max-width: 800px) {
        height: 30vh;
    }
`;

export const Content = styled.section`
    border: 1px solid #fff;
    width: 90%;
    
    /* margin: -10rem auto 0; */
    img {
        transform: translateY(-10rem);
        border-radius: 1rem;
        border: 3px solid var(--background) !important;
        z-index: 99999999999 !important;
    }

    @media (max-width: 800px) {
        margin: -5rem auto 0;
    }
`;

export default Container;