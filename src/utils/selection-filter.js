export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Action",
        data: series.filter((item) => item.genre === "action"),
      },
      {
        title: "Adventure",
        data: series.filter((item) => item.genre === "adventure"),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genre === "children"),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "Action",
        data: films.filter((item) => item.genre === "action"),
      },
      {
        title: "Adventure",
        data: films.filter((item) => item.genre === "adventure"),
      },
      {
        title: "Children",
        data: films.filter((item) => item.genre === "children"),
      },
      {
        title: "Feel Good",
        data: films.filter((item) => item.genre === "feel-good"),
      },
    ],
  };
}
