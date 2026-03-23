/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PHONE?: string
  readonly VITE_EMAIL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
