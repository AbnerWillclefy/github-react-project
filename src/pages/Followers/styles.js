import styled from 'styled-components'

export const Loading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-grey-800);
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;

    background-color: var(--dark-grey-700);

    padding: 65px 0 80px 0;
`;

export const Top = styled.div`
    width: 375px;
    height: 68px;

    font-weight: bold;
    font-size: 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0px;

    background-color: var(--dark-grey-800);
`;