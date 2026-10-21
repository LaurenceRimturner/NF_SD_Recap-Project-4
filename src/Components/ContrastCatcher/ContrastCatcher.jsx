import useSWR from "swr";
import "./ContrastCatcher.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ContrastChecker({ hexColor, contrastText }) {
  const { data, error, isLoading } = useSWR(
    `https://webaim.org/resources/contrastchecker/?fcolor=${contrastText.replace("#", "")}&bcolor=${hexColor.replace("#", "")}&api`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;

  if (isLoading) return <div>loading...</div>;

  console.log(data);
  return (
    <div
      className={`contrastDiv ${
        data.ratio >= 4.5
          ? "contrast--success"
          : data.ratio >= 3
            ? "contrast--warning"
            : "contrast--danger"
      }`}
    >
      {" "}
      {data.ratio >= 4.5 ? "YES" : data.ratio >= 3 ? "KINDA" : "NOPE"}
    </div>
  );
}
