import { NextApiHandler } from "next";
import { Projects } from "../../../utils/PortfolioData";

//if Projects has a x.id that matches the query id then we return that data to that page using this handler
const Project: NextApiHandler = (req, res) => {
  const { id } = req.query;
  const projectData = Projects.find((x) => String(x.id) === String(id));

  if (projectData) {
    res.status(200).json(projectData);
  } else {
    res.status(404).end();
  }
};

export default Project;
