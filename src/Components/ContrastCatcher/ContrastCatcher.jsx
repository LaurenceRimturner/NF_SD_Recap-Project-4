import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ContrastChecker({ hexColor, contrastText }) {
  const { data, error, isLoading } = useSWR(
    `https://webaim.org/resources/contrastchecker/?fcolor=${contrastText.replace("#", "")}&bcolor=${hexColor.replace("#", "")}&api`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;

  if (isLoading) return <div>loading...</div>;
  console.log(data);
  return <div>Overall Contrast Score: {data.ratio}!</div>;
  // Yup(21 - 7 - Grün) (KINDA 7 - 3 - orange) (NOPE 3 - 1 - rot) dynmaische Farbänderung
}
