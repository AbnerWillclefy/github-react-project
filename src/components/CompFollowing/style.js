import styled from 'styled-components'

export const CompFollowing = styled.div`
    width: 100%;
    
    padding: 20.5px 0;

    display: flex;
    align-items: center;

    border-bottom: 1px solid var(--light-grey-400);
`;

export const Yellow = styled.div`
    width: 10px;
    height: 42px;
    border-radius: 0 10px 10px 0;
    background-color: var(--yellow);
    margin-right: 15px;
`;

export const Avatar = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;

    border: 2px solid var(--light-grey-300);

    margin-right: 32px;
`;

export const Name = styled.span`
    font-size: 16px;
    font-weight: bold;
`;