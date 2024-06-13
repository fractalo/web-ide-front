import React from 'react'
import { Editor, OnMount } from '@monaco-editor/react'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { MonacoBinding } from 'y-monaco'
import * as monaco from 'monaco-editor'

interface codeEditorProps {
  roomId: string;
}

const codeEditor: React.FC<codeEditorProps> = ({ roomId }) => {
  //Yjs 문서 생성
  const ydoc = new Y.Doc();
  //WebSoketProvider 를 이용해 Yjs 문서와 서버연결
  const provider = new WebsocketProvider('ws://localhost:5173', roomId, ydoc);
  //yjs의 Text타입을 생성하여 코드 편집 내용 동기화 준비
  const yText = ydoc.getText('monaco');

  // Monaco Editor 설정
  const options: monaco.editor.IStandaloneDiffEditorConstructionOptions = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    theme: 'vs-dark',
  }

  //에디터가 마운트 되었을 때 호출되는 함수
  const handleEditorDidMount: OnMount = (editor) => {
    const model = editor.getModel()
    if (model) {
      new MonacoBinding(yText, model, new Set([editor]), provider.awareness)
    }
  }

  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      theme="vs-dark"
      options={options}
      onMount={handleEditorDidMount}
    />
  )
}

export default codeEditor;
