import { FC } from "react";
import { TagsList } from "../components/TagsList";
import { unstable_cache } from "next/cache";

const query = unstable_cache(async () =>
  (await fetch("http://localhost:3000/api/tags")).json()
);

export const Tags: FC<{}> = async () => {
  const { tags } = await query();

  return (
    <div>
      <TagsList tags={tags} />
    </div>
  );
};
