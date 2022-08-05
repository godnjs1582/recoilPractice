import React, {useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function Edit() {
    const [editorState, setEditorState ]=useState(EditorState.createEmpty());
    const onEditorStateChange=(editorState)=>{
        setEditorState(editorState);
    }
  return (
    <Editor
        editorState={editorState}
        placeholder="내용을 입력해주세요"
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        toolbar={{
            list:{inDropdown:true},
            textAlign:{inDropdown:true},
            link:{inDropdown:true},
            history:{inDropdown:false},
        }}
        onEditorStateChange={onEditorStateChange}
    />
  )
}

export default Edit;