// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';
import './styles.css';

function ProjectCard({ title, desc, imgNode, repoURL, demoURL, tags }) {
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
          <a
            href={repoURL}
            aria-label="Github Repo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub className="icon" />
          </a>
          <a
            href={demoURL}
            aria-label="External Site"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsBoxArrowUpRight className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgNode: PropTypes.node.isRequired,
  repoURL: PropTypes.string.isRequired,
  demoURL: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ProjectCard.defaultProps = {
  tags: [],
};

export default ProjectCard;
