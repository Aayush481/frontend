import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Input() {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]); // Store uploaded resume file
    setError(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf,.doc,.docx", // Restrict file types
  });

  const handleUpload = async () => {
    if (!file) {
      return setError("Please upload a resume file!");
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://homeless-writer-ringtone-count.trycloudflare.com/upload-pdf", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to process resume.");
      }

      const result = await response.json();
      console.log("API Response:", result);

      if (result.skills) {
        setSkills(result.skills);
      } else {
        setError("No skills detected in the resume.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setError("Error processing the resume. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-12 px-6">
      <div className="w-full max-w-xl mx-auto p-8 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-700 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Your Resume (.pdf/.doc/.docx)</h2>

        <img src="./src/public/dragAndDrop.svg" alt="Upload" className="w-full max-w-xs mx-auto mt-6 mb-6" />

        {/* Drag and Drop Box */}
        <div {...getRootProps()} className="border-2 border-dashed p-6 rounded-lg cursor-pointer bg-white">
          <input {...getInputProps()} />
          
          <p className="text-gray-600">Drag & drop your resume here, or click to upload</p>
        </div>

        {file && <p className="text-gray-700 mt-4">Uploaded: {file.name}</p>}

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <button
          className="bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900 text-white font-semibold px-6 py-3 rounded-lg mt-6 transition-all duration-300 hover:scale-105"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "Extracting Skills..." : "Get Insights"}
        </button>
      </div>

      {/* Display Extracted Skills */}
      {skills.length > 0 && (
        <div className="w-full max-w-xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Extracted Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}