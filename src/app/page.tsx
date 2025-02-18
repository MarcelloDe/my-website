import Link from "next/link";
// import Image from "next/image";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
// import "site/assets/images/loblaw.jpg";
import Image from "next/image";
import ConfettiButton from "./components/ConfettiButton";

export default function Home() {
  return (
    <>
      {/* Sticky Navbar */}
      {/* <header className="sticky top-0 z-10 bg-white shadow-md">
        <nav className="flex items-center justify-between p-4">
          <div className="text-xl font-bold">My Portfolio</div>
          <div className="flex space-x-4">
            <Link href="#about">
              <div className="text-lg text-blue-600">About Me</div>
            </Link>
            <Link href="#projects">
              <div className="text-lg text-blue-600">Projects</div>
            </Link>
            <Link href="#experience">
              <div className="text-lg text-blue-600">Experience</div>
            </Link>
            <Link href="#education">
              <div className="text-lg text-blue-600">Education</div>
            </Link>
          </div>
        </nav>
      </header> */}

      {/* Main Content */}
      <Container maxWidth="md">
        <Box sx={{ mt: 10 }} className="flex flex-col items-center">
          {/* About Me Section */}

          <div id="about" className="text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">About Me</h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Placeholder for Profile Image */}
              <div className="w-30 h-30 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">
                <Image
                  src="/profile.jpg"
                  alt="Marcello De Filippis"
                  width={130} // Set appropriate dimensions
                  height={40}
                  className="rounded-full"
                />
              </div>

              <p className="text-lg text-gray-700 max-w-md">
                Hi, I&apos;m Marcello, I am a Software Developer living
                Hamilton, Ontario, Canada. I have experience in front-end and
                back-end development, including Javascript, .NET, Java, PHP, and
                SQL. Previously, I worked as a Data Analyst at organizations
                such as Geotab, Loblaw, the Ontario Ministry of Agriculture, and
                McMaster University, where I developed dashboards, automated
                processes, and analyzed large datasets. I hold a post-graduate
                Certificate in Data Science, degree in Human Rights, and a
                Certificate in Human Resource Management.{" "}
              </p>
              <br />
            </div>
            <ConfettiButton />
          </div>

          {/* Experience Section */}
          <div id="experience" className="text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Experience
            </h2>
            <div className="space-y-12">
              {/* Project Analyst */}
              <div>
                <h3 className="text-xl font-semibold">
                  Project Analyst (Internship)
                </h3>
                <p className="text-gray-600">
                  Jan 2024 – August 2024 | Geotab | Oakville, ON
                </p>
                <ul className="list-disc pl-5 mt-2 text-left">
                  <li>
                    Collaborated on a software migration project for 6,000+
                    devices, developing processes, maintaining spreadsheets,
                    coordinating with partners, and using Jira for ticket
                    management.
                  </li>
                  <li>
                    Created a swim lane process map in Miro to streamline
                    workflows across departments, improving task efficiency.
                  </li>
                  <li>
                    Analyzed missed revenue and identified a delinquent client,
                    raising the urgency of a billing system improvement
                    initiative to close the loophole and ensure accurate revenue
                    capture.
                  </li>
                </ul>
              </div>

              {/* Business & Customer Insights Analyst */}
              <div>
                <h3 className="text-xl font-semibold">
                  Business & Customer Insights Analyst (Co-op)
                </h3>
                <p className="text-gray-600">
                  Jan 2023 – Aug 2023 | Loblaw Companies Limited | Brampton, ON
                </p>
                <ul className="list-disc pl-5 mt-2 text-left">
                  <li>
                    Assisted with building and maintaining a data warehouse
                    using Google Cloud Platform, conducting data profiling and
                    source-to-target mapping analyses.
                  </li>
                  <li>
                    Collaborated with cross-functional teams in an Agile
                    environment, participating in sprints and using Jira for
                    task management.
                  </li>
                  <li>
                    Documented landing, ingestion, curation, and publication
                    logic in Confluence, ensuring clear guidelines for data
                    engineers.
                  </li>
                </ul>
              </div>

              {/* Data Analyst */}
              <div>
                <h3 className="text-xl font-semibold">
                  Data Analyst (Internship)
                </h3>
                <p className="text-gray-600">
                  May 2022 – Aug 2022 | Ontario Ministry of Agriculture, Food
                  and Rural Affairs | Guelph, ON
                </p>
                <ul className="list-disc pl-5 mt-2 text-left">
                  <li>
                    Supported the Meat Plant Audit Program by developing
                    data-driven tools to optimize inspection schedules based on
                    risk levels and compliance history.
                  </li>
                  <li>
                    Created VBA Macros in Excel to automate manual processes,
                    improving efficiency in handling large datasets.
                  </li>
                  <li>
                    Developed a swim-lane process map to identify inefficiencies
                    and documented strategies for process optimization.
                  </li>
                </ul>
              </div>

              {/* Head of Supportive Relations */}
              <div>
                <h3 className="text-xl font-semibold">
                  Head of Supportive Relations
                </h3>
                <p className="text-gray-600">
                  Jun 2021 – Jan 2022 | McMaster University&apos;s ‘Deltahacks’
                  Hackathon | Hamilton, ON
                </p>
                <ul className="list-disc pl-5 mt-2 text-left">
                  <li>
                    Led a team of three executives in recruiting mentors,
                    judges, workshop hosts, and challenge hosts for a coding
                    competition with 600+ participants.
                  </li>
                  <li>
                    Streamlined team workflows using Google tools, including
                    calendars and email templates, and created a task delegation
                    spreadsheet to track progress.
                  </li>
                  <li>
                    Successfully onboarded 30 mentors, 50 judges, 6 challenge
                    hosts, and 10 workshop hosts.
                  </li>
                </ul>
              </div>

              {/* Data Analyst */}
              <div>
                <h3 className="text-xl font-semibold">Data Analyst</h3>
                <p className="text-gray-600">
                  Nov 2020 – Aug 2021 | McMaster University | Hamilton, ON
                </p>
                <ul className="list-disc pl-5 mt-2 text-left">
                  <li>
                    Analyzed 6 years of course evaluation data for 12
                    departments, creating dashboards that provided insights
                    across multiple teams.
                  </li>
                  <li>
                    Cleaned and compiled data to build an interactive dashboard,
                    ensuring data integrity and normalization.
                  </li>
                  <li>
                    Utilized weighted averages for more accurate insights from
                    historical course evaluation data with varying scales.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects Section */}

          <div id="projects" className="text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
              <Link
                href="https://marcellode.github.io/mkdocs/projects/project1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-4">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      // image="./site/assets/images/loblaw.jpg"
                      // image={loblaw}
                      src="./hamilton.jpg"
                      alt="Data Science Capstone"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        City of Hamilton Data Analysis
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Data Science Capstone Project
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>

              <Link
                href="https://marcellode.github.io/mkdocs/projects/project1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-4">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./map.jpg"
                      alt="IBM Data Visualization Capstone"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        IBM Data Visualization Capstone
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        IBM Data Visualization Capstone
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
              <Link
                href="https://marcellode.github.io/mkdocs/projects/project1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-4">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image=" ./loblaw.jpg"
                      alt="Loblaw Logo"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        My Experience at Loblaw
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Co-Op Data Analyst
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>

              <Link
                href="https://marcellode.github.io/mkdocs/projects/project1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-4">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="1"
                      image="./slot.jpg"
                      alt="slot machine"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Slot Machine game made with Java{" "}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Slot Machine game made with Java
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </div>

          {/* Experience Section */}
          <div id="education" className="text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Education</h2>
            <div className="space-y-6">
              {/* Software Development Mohawk */}
              <div>
                <h3 className="text-lg font-semibold">
                  Software Development (Diploma)
                </h3>
                <p className="text-gray-700 text-left">Mohawk College</p>
                <p className="text-sm text-gray-600 text-left">
                  <strong>Relevant courses:</strong> Data Structures and
                  Algorithms, Client-Side Web Programming, Server-Side Web
                  Programming, Project Management, Cloud Computing, Database
                  Theory, Programming in Java, .NET.
                </p>
              </div>

              {/* Data Science */}
              <div>
                <h3 className="text-lg font-semibold">
                  Data Science (Post-Graduate Certificate)
                </h3>
                <p className="text-gray-700 text-left ">Sheridan College</p>
                <p className="text-sm text-gray-600 text-left">
                  <strong>Relevant courses:</strong> Advanced Statistics,
                  Business Problem Analysis and Data Modelling, Big Data Tools,
                  Machine Learning, Applied Capstone Project.
                </p>
              </div>

              {/* Human Rights and Equity Studies */}
              <div>
                <h3 className="text-lg font-semibold">
                  Human Rights and Equity Studies (Honours, B.A)
                </h3>
                <p className="text-gray-700 text-left">York University</p>
                <p className="text-sm text-gray-600 text-left">
                  <strong>Relevant courses:</strong> Research Methods, Human
                  Rights and the Canadian Charter, Public Law, Social Policy,
                  Honours Thesis (on mental health within the social economy).
                </p>
              </div>

              {/* Human Resources Management */}
              <div>
                <h3 className="text-lg font-semibold">
                  Human Resources Management (Certificate)
                </h3>
                <p className="text-gray-700 text-left">York University</p>
                <p className="text-sm text-gray-600 text-left">
                  <strong>Relevant courses:</strong> Accounting, Compensation,
                  Administration, Recruitment and Selection, Training and
                  Development, Occupational Health and Safety.
                </p>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          {/* Py at the end of this gives padding below the button */}
          <div id="notes" className="text-center mt-8 py-10">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Notes</h2>
            {/* <p className="text-lg text-gray-700"></p> */}
            <p>
              Click the link below to be taken to where I keep all of my notes.
              Topics include:{" "}
            </p>

            <ul className="list-disc pl-5 mt-2 text-left">
              <strong>
                {" "}
                <li>Software Development</li>
              </strong>
              {/* sub indented list below */}
              <ul className="list-disc pl-5 mt-2 text-left">
                <li>Java</li>
                <li>.NET</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>SQL</li>
              </ul>
              <strong>
                <li>Data Science</li>
              </strong>
              <ul className="list-disc pl-5 mt-2 text-left">
                <li>Statistics</li>
                <li>Machine Learning</li>
                <li>Big Data Tools</li>
                <li>Business Problem Analysis</li>
              </ul>
              <strong>
                {" "}
                <li>Book Summaries</li>{" "}
              </strong>
              <ul className="list-disc pl-5 mt-2 text-left">
                <li>Atomic Habits</li>
                <li>Deep Work</li>
                <li>How to Win Friends and Influence People</li>
                <li>Thinking, Fast and Slow</li>
              </ul>
            </ul>

            <br />
            <Link
              href="https://marcellode.github.io/mkdocs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-lg text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                My Notes
              </div>
            </Link>
          </div>
        </Box>
      </Container>
    </>
  );
}
