import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } from "@google/generative-ai";

export default function Input() {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);  // Default to empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

//   let apiKey = "AIzaSyB_xHdhMAH8gadb-cnGvqRWNQS4ZFSoe0A";
// let aiName = "aayushi"; 

// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
// });
  // Handle file drop
  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setError(null);
  };

  // Configure Dropzone (Accept PDF & DOCX)
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf, .docx", // ✅ Accept both formats
  });

  // Upload Resume & Extract Skills
  const handleUpload = async () => {
    if (!file) {
      return setError("Please upload a resume (PDF or DOCX)!");
    }

    const formData = new FormData();
    formData.append("resume", file);

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData);
      if (response.data.skills.length > 0) {
        setSkills(response.data.skills);
      } else {
        setError("No relevant skills found. Try another resume.");
      }
    } catch (error) {
      setError("Error processing the resume. Please try again.");
    }

    setLoading(false);
  };

  // Retrieve Previously Extracted Skills
  const fetchResumeSkills = async () => {
    if (!file) {
      return setError("Please upload a resume first!");
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:5000/resume/${file.name}`);
      setSkills(response.data.skills);
    } catch (error) {
      setError("Unable to retrieve skills. Try uploading again.");
    }

    setLoading(false);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex md:justify-center items-center bg-blue-950 flex-col md:flex-row  pt-[1rem] pb-[3rem]  ">
    <div className="container  mx-auto mr-0 p-8 text-center w-[90%] md:w-[50%] border rounded-lg border-transparent bg-gradient-to-b from-blue-100 via-blue-400 to-blue-700 ">
      <h2 className="text-xl font-semibold mb-4 text-blue-950">Upload Your Resume (PDF or DOCX)</h2>

      {/* Drag & Drop File Upload */}
      <img src="/src/public/dragAndDrop.svg" alt="" className="w-[280px] md:w-[380px] mx-auto mb-[2rem]" />
      <div {...getRootProps()} className="border-2 border-dashed p-6 rounded-lg cursor-pointer bg-gray-100">
        <input {...getInputProps()} />
        
        <p>Drag & drop your resume here, or click to upload</p>
      </div>

      {file && <p className="mt-4 text-white">Uploaded: {file.name}</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
       </div>
       <div className="flex  md:flex-col justify-center items-center m-0 w-[50%] md:w-[30%] ">
        <div className="flex justify-center items-center pl-0 ml-0 p-[1rem] gap-[1.6rem]">
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md mt-6" onClick={handleUpload} disabled={loading}>
        {loading ? "Extracting Skills..." : "Get Insights"}
      </button>
      
      {/* Fetch Existing Resume Data */}
      <button className="bg-green-500 text-white px-6 py-3 rounded-md mt-6 ml-2" onClick={fetchResumeSkills} disabled={loading}>
        {loading ? "Fetching Data..." : "Retrieve Last Uploaded Resume"}
      </button>
      </div>
      {/* Display Extracted Skills */}
      {skills.length > 0 && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Extracted Skills</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-400 text-white px-3 py-1 rounded-lg text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}