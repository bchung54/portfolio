// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';
import './styles.css';

function ProjectCard({ title, desc, imgNode, tags }) {
  return (
    <div className="project">
      {imgNode}
      <hr />
      <div className="project-content">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="tag-list">
          {tags.map((tag) => {
            return (
              <div className="tag" key={tag}>
                {tag}
              </div>
            );
          })}
        </div>
        <div className="externals">
          <BsGithub className="icon" />
          <BsBoxArrowUpRight className="icon" />
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgNode: PropTypes.node.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ProjectCard.defaultProps = {
  tags: [],
};

export default ProjectCard;
