// components/FileUploads/FileUploads.js
import React, { useState } from 'react';
import './FileUploads.css';

const FileUploads = ({ taskId, files, uploadFile }) => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (file) {
      uploadFile(file);
      setFile(null); // Clear the file input after upload
    }
  };

  return (
    <div className="file-uploads">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
      <div className="uploaded-files">
        {files.map((file, index) => (
          <div key={index} className="file">{file.name}</div>
        ))}
      </div>
    </div>
  );
};

export default FileUploads; // Ensure this line is present to export the component
