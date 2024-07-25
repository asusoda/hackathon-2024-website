
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

const UploadImageInput = ({ onUpload } : any) => {
  const onDrop = useCallback((acceptedFiles : any) => {
    // Do something with the uploaded files
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`border-2 bg-transparent border-dashed rounded-xl p-4 ${
        isDragActive ? 'border-blue-500' : 'border-gray-300'
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-500">Drop the files here</p>
      ) : (
        <p className="text-gray-500 ">
          <FiUpload className="inline-block" /> Upload Image
        </p>
      )}
    </div>
  );
};

export default UploadImageInput;
