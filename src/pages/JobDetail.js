import React, { useState, useEffect } from "react";
import { Badge, Button, Row, Col, Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { jobAction } from "../redux/actions/jobAction";

const JobDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job.selectedJob);

  useEffect(() => {
    console.log("id", id);
    dispatch(jobAction.getSingleJob(id));
  }, []);

  if (job == null) {
    return <div>loading</div>;
  }
  return (
    <div>
      <div className="navigation">
        <Container>
          <img
            className="logo-itviec"
            alt="itviec"
            src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"
          />
        </Container>
      </div>
      <Container className="middle">
        <div className="white-container">
          {/* <div style={{ textAlign: "right" }}>
            <Link to={`/edit/${job.id}`} style={{ marginRight: "10px" }}>
              Edit
            </Link>
            <a href="#">Delete</a>
          </div> */}
          <Row>
            <Col>
              <img src={job.img} />
            </Col>
            <Col xs={10}>
              <h2>{job.title}</h2>
              <div>
                {job.tags.map((tag) => (
                  <Badge variant="secondary" className="badge-style">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div style={{ paddingTop: "10px", color: "grey" }}>
                {/* <FontAwesomeIcon
                  icon={faDollarSign}
                  style={{ marginRight: "10px" }}
                />{" "} */}
                {job.salary}
              </div>
              <div style={{ color: "grey" }}>
                {/* <FontAwesomeIcon
                  icon={faMapMarker}
                  style={{ marginRight: "10px" }}
                />{" "} */}
                {job.city} District {job.district}
              </div>
              <div style={{ color: "blue" }}>
                {/* <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ marginRight: "10px" }}
                /> */}
                {moment(job.time).fromNow()}
              </div>
              <div style={{ paddingTop: "20px" }}>
                <h2>Benefit</h2>
                <ul className="benefit-list" style={{ fontSize: "18px" }}>
                  {job.benefits.map((benefit) => (
                    <li>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <h2>Description</h2>
                <div>{job.description}</div>
              </div>
              <Button
                variant="danger"
                style={{ width: "100%", marginTop: "30px", fontSize: "18px" }}
              >
                Apply Now
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default JobDetail;
