'use client';

import React, { useEffect, useRef } from 'react';
import {Button } from '@mui/material';
import EditorJS from '@editorjs/editorjs';
import Checklist from '@editorjs/checklist';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import Link from '@editorjs/link';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import SimpleImage from '@editorjs/simple-image';

import './editor.scss'

export const Editor = () => {
  const editorRef = useRef<EditorJS | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: divRef.current ? divRef.current.id : 'textEditor',
        hideToolbar: false,
        placeholder: 'Напишите что-нибудь',
        tools: {
          checklist: Checklist,
          code: Code,
          delimiter: Delimiter,
          embed: Embed,
          header: Header,
          image: Image,
          inlineCode: InlineCode,
          link: Link,
          list: List,
          paragraph: Paragraph,
          quote: Quote,
        },
      });
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex justify-start flex-col min-h-screen">
      <div
        id="textEditor"
        className="font-[400] text-[20px] pb-6 flex-grow"
        ref={divRef}
        style={{ paddingBottom: 20 }}
      ></div>
      <div className="flex justify-end pb-5 pr-5 ">
        <Button variant="contained" color="primary">
          Опубликовать
        </Button>
      </div>
    </div>
  );
};

