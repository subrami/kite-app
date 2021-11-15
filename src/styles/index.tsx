import styled, { css } from "styled-components";
import { fadeIn } from "./keyframes";

export const Container = styled.div`
    wdith: 800px;
`;

export const DashboardContainer = styled.div<DashboardProps>`
    cursor: pointer;
    width: 700px;
    margin: 0 auto;
    background-color: #11111d;
    box-sizing: border-box;
    padding: 25px;
    border-radius: 5px;
    ${({ showBorder }) =>
        showBorder &&
        css`
            border: 1px solid #f79ed2;
        `}
    background:
        linear-gradient(270deg, #1A2346, transparent 100%),
        linear-gradient(20deg, #1A2346, transparent 100%) bottom;
    background-size: 100% 2px;
    background-repeat: no-repeat;
    -webkit-box-shadow: -4px 17px 22px -5px rgba(0, 0, 0, 0.47);
    box-shadow: -4px 17px 22px -5px rgba(0, 0, 0, 0.47);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Overlay = styled.div`
    cursor: auto;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000d1;
    top: 0;
    left: 0;
    animation: ${fadeIn} 0.5s;
`;

export type ImagePreviewProps = {
    url: string;
};
export const ImagePreviewStyle = styled.div<Partial<ImagePreviewProps>>`
    width: 175px;
    height: 125px;
    border-radius: 15px;
    margin: 10px 0;
    ${({ url }) => css`
        background: url(${url});
    `}
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    animation: ${fadeIn} 1s;
`;

export const ImagePreviewContainer = styled.img`
    width: 200px;
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
};

export const Root = styled.div<Partial<PageProps>>`
    height: 100%;
    width: 100%;
    ${({ flex }) =>
        flex &&
        css`
            display: flex;
        `}
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    flex-direction: ${({ flexDirection }) => flexDirection};
`;

export const InputFile = styled.input`
    ${({ type }) =>
        type === "file" &&
        css`
            display: None;
        `}
`;

export const Label = styled.label`
    font-size: 20px;
`;

export const Description = styled.p`
    font-family: "Source Sans Pro", sans-serif;
    color: #a770ef;
`;

export const SubmitBtn = styled.button`
    width: 8vw;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 10px;
    font-family: "DM Sans";
    border-radius: 35px;
    background: #04060e;
    cursor: pointer;
    transition: 300ms background-color ease-in-out;
    animation: ${fadeIn} 0.5s;

    :hover {
        background-color: #0c142d;
    }
`;

export const CloseIcon = styled.div`
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    color: #808080;
    :hover {
        color: #ffffff;
    }
`;
