/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_REACT_APP_BACKWEB: string;
    readonly VITE_REACT_APP_SOCKET: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  