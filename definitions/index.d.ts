declare module 'html-to-docx-buffer' {
  export default function htmlToDocx(
    htmlString: string,
    headerHTMLString?: string | undefined,
    documentOptions?: DocumentOptions = {},
    footerHTMLString?: string | undefined
  ): Promise<Buffer | Blob>;
}

interface DocumentOptions {
  orientation?: 'portrait' | 'landscape';
  margins?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    header?: number;
    footer?: number;
    gutter?: number;
  };
  title?: string;
  subject?: string;
  creator?: string;
  keywords?: string[];
  description?: string;
  lastModifiedBy?: string;
  revision?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  headerType?: 'default' | 'first' | 'even';
  header?: boolean;
  footerType?: 'default' | 'first' | 'even';
  footer?: boolean;
  font?: string;
  fontSize?: number;
  complexScriptFontSize?: number;
  table?: {
    row?: {
      cantSplit?: boolean;
    };
  };
  pageNumber?: boolean;
}
