import React, { useEffect, useRef, useState } from 'react';
import { Editor, OnMount } from '@monaco-editor/react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';
import * as monaco from 'monaco-editor';
import './styles.css';

interface CodeEditorProps {
  roomId: string;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ roomId, language }) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [output, setOutput] = useState<string>('');
  const ydocRef = useRef<Y.Doc | null>(null);
  const providerRef = useRef<WebsocketProvider | null>(null);

  useEffect(() => {
    const ydoc = new Y.Doc();
    const encodedRoomId = encodeURIComponent(roomId);
    const provider = new WebsocketProvider(
      'ws://localhost:5173',
      encodedRoomId,
      ydoc
    );
    ydocRef.current = ydoc;
    providerRef.current = provider;

    return () => {
      provider.disconnect();
      ydoc.destroy();
    };
  }, [roomId]);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
    const model = editor.getModel();
    if (model && ydocRef.current && providerRef.current) {
      const yText = ydocRef.current.getText('monaco');
      new MonacoBinding(
        yText,
        model,
        new Set([editor]),
        providerRef.current.awareness
      );

      editor.updateOptions({
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'Fira Code, monospace',
      });
    }
  };

  const runCode = async () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      try {
        const response = await fetch('/compile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ language, code }),
        });
        const result = await response.json();
        setOutput(result.output);
      } catch (err) {
        setOutput(String(err));
      }
    }
  };

  return (
    <div>
      <div className="compiling">
        <div className='com_item1'>
          <Editor
            height="50vh"
            width="50vh"
            defaultLanguage={language}
            theme="vs-dark"
            options={{ selectOnLineNumbers: true, automaticLayout: true }}
            onMount={handleEditorDidMount}/>
        </div>
        <div className='com_item2'>
          <button className="compiling_box" onClick={runCode}>
            compiling
          </button>
        </div>
        <div className='com_item3'>
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
