// pages/index.tsx
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import client from "../../lib/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: "breed" });

  console.log({ res });

  return {
    props: {
      breeds: res.items,
    },
    revalidate: 60,
  };
};

const Breeds = ({ breeds }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div>
    <h1>Dog Breeds</h1>
    <ul>
      {breeds.map((breed: any) => (
        <BreedCard key={breed.sys.id}>
          <Link href={`/breeds/${breed.fields.slug}`}>
            <h2>{breed.fields.name}</h2>
          </Link>
          <p>{breed.fields.origin}</p>
          <p>{breed.fields.lifespan}</p>
          <p>Friendliness: {breed.fields.friendliness}</p>
          <p>Shedding: {breed.fields.shedding}</p>
          <div>
            {documentToReactComponents(breed.fields.story, {
              renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
              },
            })}
          </div>
        </BreedCard>
      ))}
    </ul>
  </div>
);

export default Breeds;
