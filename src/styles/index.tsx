import styled, { css } from 'styled-components';

export const Dashboard = styled.div<DashboardProps>`
    width: 700px;
    background-color: #1a0a44;
    box-sizing: border-box;
    padding: 25px;
    cursor: pointer;
    // border-radius: 10px; what it do?
    ${({ showBorder }) => showBorder && css `
        border: 1px solid #f79ed2;
    `}
`;

export const Preview = styled.img`
`;

export type DashboardProps = {
    showBorder?: boolean;
};  

export type PageProps = {
    flex: boolean;
    alignItems: string;
    justifyContent: string;
    flexGrow: string;
    flexDirection: string;
}

export const Root = styled.div<Partial<PageProps>>`
    height: 100%;
    width: 100%;
    ${({ flex }) => flex && css`display:flex;`}
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    flex-direction: ${({ flexDirection }) => flexDirection};
`;

export const InputFile = styled.input`
    ${({ type }) => type === 'file' &&
    css`
        display: None;
    ` } 
`

export const Label = styled.label`
    font-size: 20px;
`

export const Description = styled.p`
    color: violet;
`