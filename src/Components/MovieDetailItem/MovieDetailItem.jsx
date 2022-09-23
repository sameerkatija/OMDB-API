import "./MovieDetailItem.css";
const MovieDetailItem = ({ name, value }) => (
  <>
    <p>
      <span className="span-underline">{name}:</span> {value}
    </p>
  </>
);
export default MovieDetailItem;
