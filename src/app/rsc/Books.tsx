import { FC } from "react";
import { BooksList } from "../components/BooksList";
import { BookEdit } from "./BookEdit";
import { unstable_cache } from "next/cache";

const query = unstable_cache(
  async (search: string) =>
    (await fetch(`http://localhost:3000/api/books?search=${search}`)).json(),
  ["books-component"], // A unique cache identifier
  { tags: ["books-query"] }, // Tags to invalidate the cache
);

export const Books: FC<{ search: string }> = async ({ search }) => {
  const { books } = await query(search);

  return (
    <div>
      <BooksList books={books} BookEdit={BookEdit} />
    </div>
  );
};
