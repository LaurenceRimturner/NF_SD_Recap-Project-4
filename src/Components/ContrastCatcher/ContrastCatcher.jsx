import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ContrastChecker({ hexColor, contrastText }) {
  const { data, error, isLoading } = useSWR(
    `https://webaim.org/resources/contrastchecker/?fcolor=${contrastText}.replace("", "#")&bcolor=${hexColor}.replace("", "#")`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;

  if (isLoading) return <div>loading...</div>;

  return <div>hello {data.name}!</div>;
}
