import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    
    padding: 40px 20px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    gap: 20px;
    
    img {
        margin-bottom: 20px;
        filter: drop-shadow(0 4px 12px rgba(31, 111, 235, 0.2));
        transition: transform 0.3s ease;
        
        &:hover {
            transform: scale(1.05);
        }
    }
    
    @media (max-width: 768px) {
        padding: 20px 16px;
    }
`