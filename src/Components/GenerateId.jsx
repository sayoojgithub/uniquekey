import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { MdContentCopy } from "react-icons/md"

const GenerateId = () => {

    const [ id, setId] = useState("")

    const copyIcon = <MdContentCopy/>

    const generateUniqueId =()=>{
        const timestamp = Date.now().toString(36);
        const randomString1 = Math.random().toString(36).substring(2, 10); 
        const randomString2 = Math.random().toString(36).substring(2, 10); 
        const randomString3 = Math.random().toString(36).substring(2, 10); 
        const randomString4 = Math.random().toString(36).substring(2, 10);
        
        setId(`${timestamp}-${randomString1}-${randomString2}-${randomString3}-${randomString4}`)
    }

    const textRef = useRef(null);

  const handleCopy = () => {
    if (textRef.current) {
      textRef.current.select();
      navigator.clipboard.writeText(textRef.current.value);
      toast.success("Link copied successfully")
    }
  };

  return (
    <>
    <div className="flex flex-row justify-center items-center border rounded-lg shadow-xl border-black p-4 m-4">
        <textarea
        placeholder="You can copy the uniqueId from here."
          ref={textRef}
          readOnly
          value={id}
          className="flex-grow resize-none border-none outline-none"
        />
        <button
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCopy}
        >
          {copyIcon}
        </button>
      </div>
      <div className="mt-5">
          <button
          onClick={generateUniqueId}
            className="w-full bg-orange-700 hover:bg-orange-600 text-white text-lg leading-7 rounded-lg px-4 py-3"
          >
            Generate Now
          </button>
        </div>
    </>
  )
}

export default GenerateId