import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--dark-grey-800);
`;

export const Logo = styled.img`
    width: 98px;
    height: 96px;
    filter: invert(100%);
    margin-bottom: 48px;
`;

export const Input = styled.input`
    width: 340px;
    height: 56px;
    border-radius: 12px;
    background-color: var(--white);
    border: none;
    outline: none;
    padding: 16px 20px;

    font-size: 20px;
    line-height: 20px;
    margin-bottom: 19px;
`;

export const Button = styled.button`
    width: 340px;
    height: 56px;
    border-radius: 12px;
    background-color: var(--yellow);
    outline: none;
    border: none;
    padding: auto;
    cursor: pointer;

    font-weight: bold;
    font-size: 20px;

    transition: 0.1s;

    &:hover {
        filter: brightness(70%);
    }
`;