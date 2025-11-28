import styled from "styled-components";

export const ButtonContainer = styled.button`
    background: linear-gradient(135deg, #1f6feb 0%, #388bfd 100%);
    border: none;
    border-radius: 8px;
    
    height: 48px;
    width: 80%;
    max-width: 400px;
    
    margin: 20px;
    padding: 0 24px;
    
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.5px;
    
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(31, 111, 235, 0.3);
    
    &:hover {
        background: linear-gradient(135deg, #388bfd 0%, #1f6feb 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(31, 111, 235, 0.4);
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(31, 111, 235, 0.3);
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`