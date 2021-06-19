import styled from 'styled-components'

export const Repo = styled.div`
    width: 100%;
    height: 150px;
    margin-top: 20px;
    padding-bottom: 35px;

    border-bottom: 1px solid var(--light-grey-400);
`;

export const Yellow = styled.div`
    width: 10px;
    height: 42px;
    border-radius: 0 10px 10px 0;
    background-color: var(--yellow);
    margin-right: 18px;
`;

export const Name = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 42px;

    font-weight: bold;
`;

export const Description = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 289px;
    margin-left: 28px;
`;

export const BottomInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    width: 289px;

    margin: 14px 23px 0 30px;
`;

export const Starred = styled.div`
    display: flex;
    align-items: center;
    height: 16px;
    gap: 6px;

    font-size: 15px;
`;