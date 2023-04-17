import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import IconCloudUpload from "@mui/icons-material/CloudUpload";

function DropZone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 10,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles([
        files,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  useEffect(() => {
    console.log("files : ", files);
  }, [files]);

  const thumbs = files.map((file) => (
    <Thumb key={file.name}>
      <ThumbInner>
        <Img
          src={file.preview}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </ThumbInner>
    </Thumb>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <Container>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="dragbox" style={{ color: "white" }}>
              <IconCloudUpload />
              <div>이미지 파일을 드래그하여 놓습니다!!</div>
            </div>
          ) : (
            <div className="dragbox">
              <IconCloudUpload />
              <div>이미지 파일을 드래그하여 놓습니다</div>
            </div>
          )}
        </div>

        {console.log("thumbs: ", thumbs)}
        {console.log("files: ", files)}
      </Container>
      <ThumbsContainer>{thumbs}</ThumbsContainer>
    </>
  );
}

const Container = styled.div`
  width: 300px;
  height: 150px;
  background-color: #222;
  border: 1px dashed #999;
  border-radius: 4px;
  text-align: center;

  .dragbox {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #999;

    svg {
      margin-bottom: 10px;
    }
  }
`;

const ThumbsContainer = styled.div`
  margin-top: 16px;
`;

const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export default DropZone;
