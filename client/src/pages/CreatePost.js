import ReactQuill from "react-quill";
import { useState } from "react";
import { Navigate } from "react-router-dom";


import "react-quill/dist/quill.snow.css";
export default function CreatePost() {
     const [title, setTitle] = useState('');
     const [summary, setSummary] = useState("");
     const [content, setContent] = useState("");
   const [files, setFiles] = useState("");
     const [redirect, setRedirect] = useState(false);

const modules={
    toolbar:[
        [{'header':[1,2,false]}],
        ['bold','italic','underline','strike','blackquote'],
        [{'list':'ordered'},{'list':'bullet'},'indent'],
        ['link','image'],
        ['clean']
    ]
}   

 async function createNewPost(ev) {
   const data = new FormData();
   data.set("title", title);
   data.set("summary", summary);
   data.set("content", content);
 data.set("file", files[0]);
 
   ev.preventDefault();
   const response = await fetch("http://localhost:4000/post", {
     method: "POST",
     body: data,
     credentials: "include",
   });
   if (response.ok) {
     setRedirect(true);
   }
 }

 if (redirect) {
   return <Navigate to={"/"} />;
 }


  return (
    <>
      <form onSubmit={createNewPost}>
        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="summary"
          placeholder={"Summary"}
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />

        <ReactQuill
          value={content}
          onChange={(newValue) => setContent(newValue)}
          modules={modules}
        />
        <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
        <button style={{ marginTop: "5px" }}>Create post</button>
      </form>
    </>
  );
}

