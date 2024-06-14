import React, { useEffect, useRef, useState } from 'react';
import { Editor, OnMount } from '@monaco-editor/react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';
import * as monaco from 'monaco-editor';

interface CodeEditorProps {
  roomId: string;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ roomId, language }) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const ydocRef = useRef<Y.Doc | null>(null);
  const providerRef = useRef<WebsocketProvider | null>(null);
  const yTextRef = useRef<Y.Text | null>(null);
  const [output, setOutput] = useState<string>('');

  useEffect(() => {
    // Yjs 문서 생성
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider('ws://localhost:5173', roomId, ydoc);
    const yText = ydoc.getText('monaco');
    
    ydocRef.current = ydoc;
    providerRef.current = provider;
    yTextRef.current = yText;

    return () => {
      provider.destroy();
      ydoc.destroy();
    };
  }, [roomId]);

  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current;
      const model = editor.getModel();

      if (model && yTextRef.current && providerRef.current) {
        new MonacoBinding(yTextRef.current, model, new Set([editor]), providerRef.current.awareness);
      }

      // TypeScript 및 JavaScript의 기본 설정을 조정하여 자동 완성 기능 활성화
      monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
      monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ESNext,
        allowNonTsExtensions: true,
        noLib: true,
      });

      monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ESNext,
        allowNonTsExtensions: true,
        noLib: true,
      });

      monaco.languages.typescript.javascriptDefaults.addExtraLib(`
        declare var console: {
          log(msg: any): void;
        };
      `);

      // 언어 변경 적용
      if (model) {
        monaco.editor.setModelLanguage(model, language);
      }
    }
  }, [language]);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
    
    // 초기 설정 적용
    const model = editor.getModel();
    if (model) {
      monaco.editor.setModelLanguage(model, language);

      if (yTextRef.current && providerRef.current) {
        new MonacoBinding(yTextRef.current, model, new Set([editor]), providerRef.current.awareness);
      }
    }
  };

  const runCode = () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      try {
        // 콘솔 출력 캡처
        let capturedOutput = '';
        const originalConsoleLog = console.log;
        console.log = (msg) => {
          capturedOutput += msg + '\n';
          originalConsoleLog(msg);
        };

        // eslint-disable-next-line no-new-func
        new Function(code)();
        setOutput(capturedOutput);

        // 콘솔 로그 원상 복구
        console.log = originalConsoleLog;
      } catch (err) {
        setOutput(String(err));
      }
    }
  };

  return (
    <div>
      <button onClick={runCode}>Run Code</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// Write your code here"
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
          automaticLayout: true,
        }}
        onMount={handleEditorDidMount}
      />
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;



// import React, { useEffect, useRef } from 'react';
// import { Editor, OnMount } from '@monaco-editor/react';
// import * as Y from 'yjs';
// import { WebsocketProvider } from 'y-websocket';
// import { MonacoBinding } from 'y-monaco';
// import * as monaco from 'monaco-editor';

// interface CodeEditorProps {
//   roomId: string;
//   language: string;
// }

// const CodeEditor: React.FC<CodeEditorProps> = ({ roomId, language }) => {
//   const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
//   const ydocRef = useRef<Y.Doc | null>(null);
//   const providerRef = useRef<WebsocketProvider | null>(null);
//   const yTextRef = useRef<Y.Text | null>(null);

//   useEffect(() => {
//     // Yjs 문서 생성
//     const ydoc = new Y.Doc();
//     const provider = new WebsocketProvider('ws://localhost:5173', roomId, ydoc);
//     const yText = ydoc.getText('monaco');
    
//     ydocRef.current = ydoc;
//     providerRef.current = provider;
//     yTextRef.current = yText;

//     return () => {
//       provider.destroy();
//       ydoc.destroy();
//     };
//   }, [roomId]);

//   useEffect(() => {
//     if (editorRef.current) {
//       const editor = editorRef.current;
//       const model = editor.getModel();

//       if (model && yTextRef.current && providerRef.current) {
//         new MonacoBinding(yTextRef.current, model, new Set([editor]), providerRef.current.awareness);
//       }

//       // TypeScript 및 JavaScript의 기본 설정을 조정하여 자동 완성 기능 활성화
//       monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
//       monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

//       monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
//         target: monaco.languages.typescript.ScriptTarget.ESNext,
//         allowNonTsExtensions: true,
//         noLib: true,
//       });

//       monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
//         target: monaco.languages.typescript.ScriptTarget.ESNext,
//         allowNonTsExtensions: true,
//         noLib: true,
//       });

//       monaco.languages.typescript.javascriptDefaults.addExtraLib(`
//         declare var console: {
//           log(msg: any): void;
//         };
//       `);

//       // 언어 변경 적용
//       if (model) {
//         monaco.editor.setModelLanguage(model, language);
//       }
//     }
//   }, [language]);

//   const handleEditorDidMount: OnMount = (editor) => {
//     editorRef.current = editor;
    
//     // 초기 설정 적용
//     const model = editor.getModel();
//     if (model) {
//       monaco.editor.setModelLanguage(model, language);

//       if (yTextRef.current && providerRef.current) {
//         new MonacoBinding(yTextRef.current, model, new Set([editor]), providerRef.current.awareness);
//       }
//     }
//   };

//   return (
//     <Editor
//       height="90vh"
//       defaultLanguage="javascript"
//       defaultValue="// Write your code here"
//       theme="vs-dark"
//       options={{
//         selectOnLineNumbers: true,
//         automaticLayout: true,
//       }}
//       onMount={handleEditorDidMount}
//     />
//   );
// };

// export default CodeEditor;
