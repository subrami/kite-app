import React, { useRef, useState, MouseEvent } from 'react';
import {Dashboard, Root, InputFile, Label, Description, Preview} from './styles/index';


function App() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [showBorder, setShowBorder] = useState(false);
  const [source, setSource] = useState('');
  const [file, setFile] = useState<File | null>();

  const handleDragOver = (e : React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
    setShowBorder(true);
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
    setShowBorder(false);

  }

  const handleImageDrop = (e:React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation;
    e.preventDefault();
    console.log("Image drop being handled.")
    console.log(e);
    setShowBorder(false);
    const { files } = e.dataTransfer;
    const file = files.item(0)
    if (file) {
      setSource(URL.createObjectURL(file));
      setFile(file);
    }
  }
  
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    // return (event);
  }

  return (
  <Root flex={true}
  alignItems="center"
  justifyContent="center"
  flexDirection="column">
    <Dashboard
    showBorder={showBorder}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleImageDrop}
    onClick={handleClick}
    >
      <Label
        htmlFor="image"
        children="Upload Image"
        onClick={(e) => e.preventDefault()}
      />
      <Description children="Lightweight drag and drop uploader."/>'
      <InputFile id="file"
        type="file"
        accept="image/*"
        ref={inputFileRef}
      />
    </Dashboard>
    <Preview src={source}>

    </Preview>
    </Root>
  );

}

export default App;