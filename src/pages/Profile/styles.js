import styled from "styled-components";

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
    background-color: var(--dark-grey-700);
`;

export const Avatar = styled.img`
    width: 115px;
    height: 115px;
    border-radius: 50%;
    border: 3px solid var(--white);

    position: fixed;
    top: 10%;
`;

export const Top = styled.div`
    width: 100%;
    height: 126px;

    display: flex;
    justify-content: space-between;
    color: var(--white);
    font-size: 17px;
    font-weight: bold;
    background-color: var(--dark-grey-800);

    padding: 20px 10px;
`;

export const Bottom = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Info = styled.div`
    margin-top: 100px;
    width: 100%;
    font-weight: bold;

    display: flex;
`;

export const Name = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 31px;
    margin: 8px 0;

    font-size: 26px;
`;

export const PersonalInfo = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Yellow = styled.div`
    width: 10px;
    height: 42px;
    border-radius: 0 10px 10px 0;
    background-color: var(--yellow);
    margin-right: 14px;
`;

export const Numbers = styled.div`
    width: 100%;
    height: 97px;

    display: flex;
    justify-content: space-around;

    background-color: var(--dark-grey-600);

    margin-top: 44px;
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

export const NumberInfo = styled.div`
    font-size: 40px;
`;

export const BioName = styled.div`
    display: flex;
    width: 100%;
    margin-top: 47px;
    font-weight: bold;
`;

export const Bio = styled.div`
    display: flex;
    flex-wrap: wrap;

    margin: 0 18px 0 25px;
    font-size: 18px;
`;

export const Left = styled.span`
    cursor: pointer;
`;