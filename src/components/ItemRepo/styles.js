import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    max-width: 600px;
    
    padding: 24px;
    margin: 16px 0;
    
    background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
    border: 1px solid #30363d;
    border-radius: 12px;
    
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    
    &:hover {
        border-color: #1f6feb;
        box-shadow: 0 8px 24px rgba(31, 111, 235, 0.15);
        transform: translateY(-2px);
    }

    h3 {
        font-size: 24px;
        color: #58a6ff;
        margin: 0 0 8px 0;
        font-weight: 600;
        letter-spacing: 0.3px;
    }

    p {
        font-size: 14px;
        color: #8b949e;
        margin: 0 0 16px 0;
        font-weight: 500;
    }

    a {
        display: inline-block;
        margin-right: 16px;
        margin-top: 12px;
        padding: 8px 16px;
        border-radius: 6px;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        transition: all 0.2s ease;
        
        &:not(.remover) {
            background-color: #1f6feb;
            color: #ffffff;
            
            &:hover {
                background-color: #388bfd;
                box-shadow: 0 4px 12px rgba(31, 111, 235, 0.3);
            }
        }
        
        &.remover {
            background-color: #da3633;
            color: #ffffff;
            cursor: pointer;
            
            &:hover {
                background-color: #f85149;
                box-shadow: 0 4px 12px rgba(248, 81, 73, 0.3);
            }
        }
    }

    hr {
        border: none;
        border-top: 1px solid #30363d;
        margin: 16px 0;
    }
`