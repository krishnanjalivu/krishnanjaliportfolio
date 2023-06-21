import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/movienexus.png'
import olximage from '../../Assets/lensfly.png'
import netfliximage from '../../Assets/sportsceleb.webp'
import gridlinesbuilders from '../../Assets/lumpycows.jpg'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="MovieNexus"
                description="Collection of All Movies you can Select them in our Watchlist for Storage we are using default browser
                Cookies and Local Storage."
                ghLink="https://github.com/khushiojha/movienexus"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="LensFly"
                description="E-commerce Web for Rental service for photographers looking to rent camera and drones"
                ghLink="https://github.com/khushiojha/lensfly"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Sports Celebrity Image Classification Model"
                description="image classification by using Machine learning models and website by using HTML/CSS/JS"
                ghLink="https://github.com/ML-Avengers/Image-Classification"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Lumpy Cattle Skin Disease Report Generator"
                description="Built deep learning model with TensorFlow and Keras for cattle skin classification and web UI using
                Python-Django."
                ghLink="https://github.com/khushiojha/lumpycattle"
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist