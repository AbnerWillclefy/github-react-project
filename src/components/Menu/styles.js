import styled from 'styled-components'

export const Menu = styled.div`
    width: 375px;
    height: 80px;

    background-color: var(--white);

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position: fixed;
    bottom: 0px;

    border-radius: 10px 10px 0 0;
`;

export const Option = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    cursor: pointer;

    color: var(--dark-grey-800);
    filter: invert(60%);
    transition: 0.1s;

    &:active{
        filter: invert(0%);
    }
`;