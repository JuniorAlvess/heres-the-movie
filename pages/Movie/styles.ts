import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

interface StylesProps {
    backgroundImage: string;
}

const Container = styled.main`
    scroll-margin-top: 150px;
    width: 70vw;
    
    margin: 6rem auto;

    @media (max-width: 800px) {
        width: 90vw;
    }

`;


export const Content = styled.section<StylesProps>`
    position: relative;
    width: 90%;

    display: flex;
    gap: 2rem;
    margin-top: 2rem;

    &::before {    
      content: "";
      background-image: url(${(props) => props.backgroundImage});
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.40;
      filter: blur(10px);
      z-index: -1;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;

        img {
            width: 220px !important;
            height: 320px !important;
            object-fit: scale-down;
        }
    }
`;

export const StyledImage = styled(Image)`
    object-fit: contain;
    border-radius: 1rem !important;
    /* border: 3px solid var(--background) !important; */
`;

export const Title = styled.h3`
    font-size: clamp(2rem, 2.6vw, 3.5rem);
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #fff;
`;

export const Group = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    gap: 1rem;
`;

export const StyledLink = styled.a`
        color: var(--textColor);
        font-size: clamp(.8rem, .8vw, .9rem);
        font-weight: bold;  
        font-family: 'Poppins', sans-serif;

        margin: 1rem 0;
        padding: .4rem .6rem ;
        border-radius: 1rem;
        border: 1px solid var(--textColor);
        
        cursor: pointer;
        transition: border .3s ease-in-out, filter .3s ease-in-out;
        text-decoration: none;


        &:hover {
            border: 1px solid var(--button);
            filter: brightness(.7);  
        }
`;

export const HomePage = styled(StyledLink)`
    background-color: var(--button);
    font-size: clamp(.8rem, 1vw, 1.5rem);
    padding: .8rem 1.5rem;
    border-radius: 1rem / 2rem;
    border: 1px solid var(--button);
    outline: none;

    display: flex;
    align-items: center;
    gap: 1rem;

    margin-bottom: 2rem;

    &:hover {
        filter: drop-shadow(0 0 10px var(--button));
    }
`;

export const Overview = styled.p`
    width: clamp(20rem, 35vw, 50vw);

    font-size: clamp(1rem, 1.2vw, 1.3rem);
    font-weight: normal;
    font-family: 'Poppins', sans-serif;
    line-height: 1.23;
`;
export default Container;   