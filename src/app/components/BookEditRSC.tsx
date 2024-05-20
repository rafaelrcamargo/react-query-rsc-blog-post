"use client";

import { FC, useRef } from "react";
import { saveBook } from "../serverActions";
import { BookEditProps } from "./types";

export const BookEdit: FC<BookEditProps> = (props) => {
  const { book } = props;
  const titleRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex gap-2">
      <input className="border p-1" ref={titleRef} defaultValue={book.title} />
      <button onClick={() => saveBook(book.id, titleRef.current!.value)}>Save</button>
    </div>
  );
};
