import styled from 'styled-components';

export const Container = styled.div`
`;

export const EmailBox = styled.div`
    display: flex;
    flex-direction: row;
    width: max-content;
    align-items: center;
    border: 1px solid blue;
    padding: 2px 10px;
    border-radius: 5px;
    margin-block: 8px;
`;

export const EmailText = styled.p`
    color: blue;
    font-size: small;
`;

export const ButtonDelete = styled.button`
    background-color: transparent;
    border: none;
    justify-content: center;
    align-items: center;
    margin-left: 6px;
    cursor: pointer;
`;

export const Image = styled.img`
    margin-top: 3px;
`;
