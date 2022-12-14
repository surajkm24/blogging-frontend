/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_BACKENDBASEURL: String;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
