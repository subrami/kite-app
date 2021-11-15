import React, { useRef, useState } from "react";
import {
    InputFile,
    DashboardContainer,
    Label,
    Description,
    SubmitBtn,
    Container,
    ImagePreviewContainer,
    ImagePreviewStyle,
} from "../styles";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { ImagePreview } from "./ImagePreview";

export const Dashboard = () => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [showBorder, setShowBorder] = useState(false);
    const [source, setSource] = useState("");
    const [file, setFile] = useState<File | null>();

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(e);
        setShowBorder(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(e);
        setShowBorder(false);
    };

    const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("Image drop being handled.");
        console.log(e);
        setShowBorder(false);
        const { files } = e.dataTransfer;
        const file = files.item(0);
        if (file) {
            setSource(URL.createObjectURL(file));
            console.log("File" + file);
            setFile(file);
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // return (event);
        inputFileRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("Image change being handled.");
        console.log(e);
        const { files } = e.target;
        if (files && files.length) {
            const file = files[0];
            setSource(URL.createObjectURL(file));
            console.log("File:" + file);
            setFile(file);
        }
    };

    return (
        <>
            <Container>
                <DashboardContainer
                    showBorder={showBorder}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleImageDrop}
                    onChange={handleImageChange}
                    onClick={handleClick}
                >
                    <div>
                        <Label
                            htmlFor='image'
                            children='Upload Image ❀'
                            onClick={(e) => e.preventDefault()}
                        />
                        <Description children='Lightweight drag and drop uploader. Click to upload.' />
                        <InputFile
                            id='file'
                            type='file'
                            accept='image/*'
                            ref={inputFileRef}
                        />
                    </div>
                    {source && <ImagePreview source={source} />}
                </DashboardContainer>
                {source && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <SubmitBtn>
                            <AiOutlineCloudUpload color='#D3D3D3' size='25px' />
                        </SubmitBtn>
                    </div>
                )}
            </Container>
        </>
    );
};
