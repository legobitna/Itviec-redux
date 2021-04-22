import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Badge } from "react-bootstrap";
import moment from "moment";
const JobCard = ({ job }) => {
  let history = useHistory();
  const jobSelect = () => {
    history.push(`/job/${job.id}`);
  };
  if (job == null) {
    return <div>no data yet</div>;
  }
  return (
    <div className="job-content" onClick={() => jobSelect()}>
      <Row>
        <Col>
          <div className="jobcard-logo">
            <img src={job.img} />
          </div>
        </Col>
        <Col xs={8}>
          <div className="jobcard-descriptions">
            <h2 className="jobcard-title">{job.title}</h2>
            <div>$ {job.salary}</div>
            <div>
              <ul className="benefit-list">
                {job.benefits.map((benefit) => (
                  <li>{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              {job.tags.map((tag) => (
                <Badge variant="secondary" className="badge-style">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Col>
        <Col>
          <div className="date-location-box">
            {job.isHotjob ? (
              <div className="hotjob-label">Hot Job</div>
            ) : (
              <div></div>
            )}

            <div className="jobcard-location">
              <div>{job.city}</div>
              <div>District {job.district}</div>
            </div>
            <div className="job-time">{moment(job.time).fromNow()}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default JobCard;
