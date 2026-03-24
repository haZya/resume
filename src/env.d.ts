/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_PHONE?: string;
  readonly VITE_EMAIL?: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
