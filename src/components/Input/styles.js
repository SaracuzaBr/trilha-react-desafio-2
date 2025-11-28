import styled from "styled-components";

export const InputContainer = styled.div`
    border: 2px solid #30363d;
    border-radius: 8px;
    
    height: 48px;
    width: 80%;
    max-width: 400px;
    
    margin: 20px;
    padding: 0 16px;
    
    display: flex;
    align-items: center;
    
    background-color: #0d1117;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    
    &:focus-within {
        border-color: #1f6feb;
        box-shadow: 0 0 0 3px rgba(31, 111, 235, 0.1), 0 2px 8px rgba(31, 111, 235, 0.2);
    }

    input {
        background: transparent;
        border: 0;
        width: 100%;
        height: 48px;
        padding: 0 8px;
        color: #c9d1d9;
        font-size: 16px;
        outline: none;
        
        &::placeholder {
            color: #6e7681;
        }
        
        &:focus {
            color: #ffffff;
        }
    }
`