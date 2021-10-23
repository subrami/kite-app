import React, { useRef, useState } from 'react';
import {MainDashboard, Root, InputFile, Label, Description} from './styles/index';


function App() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [showBorder, setShowBorder] = useState(false);

  const handleDragOver = (e : React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e)
    setShowBorder(true);
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
    setShowBorder(false);
  }
  return ( <Root flex={true}
  alignItems="center"
  justifyContent="center">
    <Label>

      <MainDashboard
      onClick={(e) => {
        console.log(inputFileRef);
        inputFileRef.current?.click();
      }}
      showBorder={showBorder}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
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
      </MainDashboard>
    </Label>
    </Root>
  );

}

export default App;