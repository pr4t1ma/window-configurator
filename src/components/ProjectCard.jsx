import { Link } from "react-router-dom";

const ProjectCard = ({ img, text }) => {
  return (
    <Link to="/catalog">
      <div>
        <div>
          <img src={img} alt="" />
        </div>
        <h3>{text}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
