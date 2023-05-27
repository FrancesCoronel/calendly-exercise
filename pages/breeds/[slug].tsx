// pages/breeds/[slug].tsx
import { InferGetStaticPropsType, GetStaticPaths } from "next";
import client from "../../lib/contentfulClient";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "dogBreed" });

  const paths = res.items.map((item: any) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { items } = await client.getEntries({
    content_type: "breed",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { breed: items[0] },
    revalidate: 60,
  };
};

const BreedDetail = ({
  breed,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div>
    <h1>{breed.fields.name}</h1>
    <p>{breed.fields.description}</p>
    <p>Shedding: {breed.fields.shedding}</p>
  </div>
);

export default BreedDetail;
