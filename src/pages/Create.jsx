import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from './redux/pasteSlice';
import toast from 'react-hot-toast';
import './home.css';

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParam] = useSearchParams();
  const pasteId = searchParam.get("pasteId");
  const allPastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((paste) => paste.id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    if (!title.trim()) {
      toast.error("Please add a title first");
      return;
    } else if (!value.trim()) {
      toast.error("Please add content first");
      return;
    }

    const paste = {
      title: title.trim(),
      content: value.trim(),
      id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPaste(paste));
      setTitle('');
      setValue('');
      navigate('/pastes');
    } else {
      dispatch(addToPaste(paste));
      setTitle('');
      setValue('');
    }
  }

  // Split the text into lines for line numbering
  const lines = value.split("\n");

  return (
    <div className='flex justify-center items-center w-[50vw] flex-col gap-4 mt-[4rem]'>
      
      <button className='rounded-lg border bg p-2 text-[20px]' onClick={createPaste}>
        {pasteId ? "Update My Paste" : "Create My Paste"}
      </button>

      <input
        type="text"
        placeholder='Enter title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full p-3 rounded-lg bg-transparent text-[23px] border border-t-8'
      />

      <div className='editor-container'>
        {/* Line Numbers */}
        <div className="line-numbers">
          {lines.map((_, index) => (
            <div key={index} className="line-number">
              {index + 1}
            </div>
          ))}
         
        </div>

        {/* Textarea */}
        <textarea
          className="code-textarea"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Content Here"
        />
      </div>
    </div>
  );
};

export default Create;