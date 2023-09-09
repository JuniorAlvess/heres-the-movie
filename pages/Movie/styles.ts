import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

interface StylesProps {
    backgroundImage?: string;
    direction?: string;
}

const Container = styled.main`
    width: 70vw;
    height: 60vh;

    display: flex;
    
    margin: 6rem auto;

    @media (max-width: 800px) {
        width: 90vw;
        height: auto;
        flex-direction: column;
    }

`;


export const Content = styled.section<StylesProps>`
    position: relative;
    width: 80%;

    display: flex;
    gap: 2rem;
    margin: 2rem auto;
    padding-top: .5rem;

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
            width: 320px !important;
            height: 320px !important;
            object-fit: scale-down;
        }

        &>div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const StyledImage = styled(Image)`
    object-fit: contain;
    border-radius: 1rem !important;
    /* border: 3px solid var(--background) !important; */
`;

export const Title = styled.h3`
    font-size: clamp(1.5rem, 2.3vw, 3.5rem);
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #fff;

    margin-top: 2rem;
`;

export const Description = styled.p`
    font-size: clamp(1rem, 1vw, 1.5rem);
    font-family: 'Roboto', sans-serif;
    color: var(--textColor);
    line-height: 1.5;
`;

export const ReleaseDate = styled.strong`
    font-size: clamp(.9rem, 1vw, 1.2rem);
    font-family: 'Roboto', sans-serif;
`;

export const Group = styled.div<StylesProps>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
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
    padding: clamp(.4rem, .4vw, .8rem);
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

export const Button = styled(StyledLink)`
    background-color: var(--button);
    font-size: clamp(.7rem, .9vw, 1.3rem);
    padding: .8rem 1.5rem;
    border-radius: 1rem / 2rem;
    border: 1px solid var(--button);
    outline: none;

    display: flex;
    align-items: center;
    gap: 1rem;

    margin-bottom: 2rem;

    &+& {
        border-radius: 50%;
        background-color: transparent;
        padding: clamp(.4rem, .4vw, .8rem);
    }

    &:hover {
        filter: drop-shadow(0 0 10px var(--button));
    }

    &+&:active {
        color: var(--button);
    }
`;

export const Overview = styled.p`
    width: clamp(22rem, 35vw, 50vw);

    font-size: clamp(1rem, 1.2vw, 1.3rem);
    font-weight: normal;
    font-family: 'Poppins', sans-serif;
    line-height: 1.23;
    text-align: justify;
`;

export const Cast = styled.aside`
    height: 100%;
    width: 20%;
    /* border: 1px solid var(--textColor); */

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 1rem;
    margin-left: 1rem;
    border-left: 1px solid var(--textColor);
    
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        background: transparent;
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: var(--button);
    }
`;

export const ImageProfile = styled.img`
    width: 50px;
    object-fit: contain;
    border-radius: 100%;
`;

export const CastName = styled.h4`
    font-size: clamp(1rem, 1.2vw, 1.3rem);
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`;

export const CastCharacter = styled.h5`
    font-size: clamp(.8rem, .8vw, .9rem);
    font-weight: normal;
    font-family: 'Poppins', sans-serif;

`;
export default Container;   