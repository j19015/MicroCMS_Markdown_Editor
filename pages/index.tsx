// pages/index.tsx

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useFieldExtension } from "microcms-field-extension-react";
import "@uiw/react-md-editor/markdown-editor.css";
import styles from "../styles/Home.module.css";

// Markdown Editor for ReactはSSRで利用できないためdynamic importで読み込む必要がある
const MDEditor = dynamic(import("@uiw/react-md-editor"), {
 ssr: false,
 loading: () => <div>initializing...</div>,
});

// 利用しているmicroCMSのURLを設定
const origin = process.env.NEXT_PUBLIC_ORIGIN;

const IndexPage = () => {
 const [markdown, setMarkdown] = useState<string | undefined>();
 // microCMSのフィールド拡張を利用するためのhook
 const { data, sendMessage } = useFieldExtension("", {
  origin,
  height: 540,
 });

 useEffect(() => {
  if (!markdown) {
   setMarkdown(data);
  }
 }, [data, markdown]);

 return (
  <div data-color-mode="light" className={styles.container}>
   <MDEditor
    value={markdown}
    onChange={(value) => {
     setMarkdown(value);
     sendMessage({
      data: value,
     });
    }}
    height={540}
    textareaProps={{
     placeholder: "Please enter Markdown text",
    }}
   />
  </div>
 );
};

export default IndexPage;