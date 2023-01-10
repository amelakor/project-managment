import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="align-items-center d-flex justify-content-between">
            <h5 className="card-title">{project.name}</h5>
            <p className="badge badge-primary">{project.status}</p>
            <a href={`/projects/${project.id}`} className="btn btn-light">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
