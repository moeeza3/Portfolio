import React, { useState, useEffect } from "react";
import projects from "@component/pages/api/projects";
import { Tab, Tabs } from "react-bootstrap";
const Portfolio = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    setProject(projects);
  }, []);
  const categories = Array.from(
    new Set(project.map((p) => p.category && p.category.name))
  );
  console.log("categories: " + categories);
  const [activeTab, setActiveTab] = useState("All");

  const handleTabSelect = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="portfolio">
        <div className="portfolio-container container-md container-fluid">
          <div className="portfolio-header">
            <h1 className="display-4 text-center">My Portfolio</h1>
          </div>
          <div className="portfolio-detail">
            <Tabs
              justify
              id="portfolio-tabs"
              activeKey={activeTab}
              onSelect={handleTabSelect}
              variant="pills"
              className="tabs"
            >
              <Tab eventKey="All" title="All">
                {/* Render all projects */}
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-auto g-4">
                  {project.map((p) => (
                    <div key={p.title} className="col card-container">
                      <div className="card">
                        <div className="img-container">
                          <img
                            src={p.imgsrc}
                            className="card-img-top portfolio-img"
                            alt={p.title}
                          />
                        </div>

                        <div className="card-body px-0">
                          <h5 className="card-title mx-0">{p.title}</h5>
                          <a
                            href={p.livedemo}
                            target="_blank"
                            rel="noreferrer"
                            className="nav-link card-text fs-6 live-link"
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* end */}
                </div>
              </Tab>
              {categories.map((category) => (
                <Tab key={category} eventKey={category} title={category}>
                  {/* Render projects in this category */}
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
                    {project
                      .filter((p) => p.category && p.category.name === category)
                      .map((p) => (
                        <div key={p.title} className="col card-container">
                          <div className="card">
                            <div className="img-container">
                              <img
                                src={p.imgsrc}
                                className="card-img-top portfolio-img"
                                alt={p.title}
                              />
                            </div>
                            <div className="card-body px-0">
                              <h5 className="card-title mx-0">{p.title}</h5>
                              <a
                                href={p.livedemo}
                                target="_blank"
                                rel="noreferrer"
                                className="nav-link card-text fs-6 live-link"
                              >
                                Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    {/* end */}
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
