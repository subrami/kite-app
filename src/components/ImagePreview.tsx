import React, { useRef, useState } from "react";
import { CloseIcon, ImagePreviewStyle, Overlay } from "../styles";
import { AiOutlineClose } from "react-icons/ai";

export type ImagePreviewProps = {
    source: string; // | ''
};

export const ImagePreview = ({ source }: ImagePreviewProps) => {
    const [visible, setVisible] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setVisible(true);
    };

    const handleIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setVisible(false);
    };

    const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target == overlayRef.current) {
            e.stopPropagation();
            setVisible(false);
        }
    };
    return (
        <>
            <ImagePreviewStyle
                url={source}
                style={{ margin: "10px 0" }}
                onClick={handleClick}
            />
            {visible && (
                <Overlay ref={overlayRef} onClick={onOverlayClick}>
                    <img src={source} alt='image_preview' />
                    <CloseIcon onClick={handleIconClick}>
                        <AiOutlineClose size='25px' />
                    </CloseIcon>
                </Overlay>
            )}
        </>
    );
};
