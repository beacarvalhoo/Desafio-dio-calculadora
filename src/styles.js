import styled from 'styled-components';

export const  Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #D2B4DE;
    

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div `
    width: 50%;
    border: ridge 10px #8E44AD ;
    border-radius: 5px;
    background-color: #D2B4DE ;

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`