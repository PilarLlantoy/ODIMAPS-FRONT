import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import FileUploadIcon from "@mui/icons-material/FileUpload";

const allowedExtensions = ["csv", "plain"];
const Input = styled("input")({
  display: "none",
});

const FileInput = (props) => {
  const handleFileChange = (e) => {
    // Check if user has entered the file

    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      const fileExtension = inputFile.type.split("/")[1];

      if (!allowedExtensions.includes(fileExtension)) {
        console.log("The user did not enter a valid file");
        return;
      }

      // Sending file to parent component
      props.onFileSelect(inputFile);
    }
  };

  return (
    <label htmlFor="contained-button-file">
      <Input
        onChange={handleFileChange}
        id="contained-button-file"
        type="file"
      />
      <Button
        size="medium"
        variant="contained"
        component="span"
        startIcon={<FileUploadIcon />}
      >
        {props.children}
      </Button>
    </label>
  );
};

export default FileInput;
