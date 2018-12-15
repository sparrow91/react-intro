const ce = React.createElement;
const MySecondComponent = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};
const MyFirstComponent = function() {
  return ce(
    "div",
    null,
    ce(MySecondComponent, { title: "Game of thrones", color: "peru" }),
    ce(MySecondComponent, { title: "Game of thrones", color: "peru" }),
    ce(MySecondComponent, { title: "Game of thrones", color: "peru" }),
    ce(MySecondComponent, { title: "Game of thrones", color: "peru" })
  );
};
ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));
