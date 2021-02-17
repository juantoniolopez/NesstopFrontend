import { useHistory } from "react-router-dom";

export default function CompanyThumbnail(props) {
  const history = useHistory();
  return (
    <article
      onClick={() => {
        history.push(`detail/${props.company.id}`);
      }}
    >
      <img src={props.company.Photo} />
      <h3>{props.company.Name}</h3>
    </article>
  );
}
