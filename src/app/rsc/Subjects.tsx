import { FC } from "react";
import { SubjectsList } from "../components/SubjectsList";
import { unstable_cache } from "next/cache";

const query = unstable_cache(async () =>
  (await fetch("http://localhost:3000/api/subjects")).json()
);

export const Subjects: FC<{}> = async () => {
  const { subjects } = await query();

  return (
    <div>
      <SubjectsList subjects={subjects} />
    </div>
  );
};
