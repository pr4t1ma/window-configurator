const ProjectCard = ({ img, text }) => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <h3>{text}</h3>
    </div>
  );
};

export default ProjectCard;
