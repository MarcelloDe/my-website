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

// Projects data structure
//this is an array of objects that we are mapping over
//mapping means we are going to loop through the array and create a new element for each object in the array

const projects = [
  {
    id: 1,
    title: "City of Hamilton Data Analysis",
    description: "Data Science Capstone Project",
    image: "./hamilton.jpg",
    alt: "Data Science Capstone",
    href: "https://marcellode.github.io/mkdocs/projects/IBM%20Data%20Science%20Certification%20Capstone%20Project.html"
  },
  {
    id: 2,
    title: "IBM Data Visualization Capstone",
    description: "IBM Data Visualization Capstone",
    image: "./map.jpg",
    alt: "IBM Data Visualization Capstone",
    href: "https://marcellode.github.io/mkdocs/projects/Data%20Science%20Capstone%20Project.html"
  },
  {
    id: 3,
    title: "My Experience at Loblaw",
    description: "Co-Op Data Analyst / Data Engineering",
    image: "./loblaw.jpg",
    alt: "Loblaw Logo",
    href: "https://marcellode.github.io/mkdocs/projects/Loblaw.html"
  },
  {
    id: 4,
    title: "SQL Intro",
    description: "SQL Video Explanation and Examples",
    image: "./sqlphoto.jpg",
    alt: "sql",
    href: "https://marcellode.github.io/mkdocs/Subjects/Sql%20Intro.html"
  }
];

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
      <Container maxWidth="lg" disableGutters>
        <Box sx={{ mt: 10 }} className="flex flex-col items-center">
          {/* About Me Section */}

          <div id="about" className="text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">About Me</h2>

            <div className="flex flex-col md:flex-row items-center md:items-center md:justify-start justify-center gap-6">
              {/* Profile Image */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/profile.jpg"
                  alt="Marcello De Filippis"
                  width={160}
                  height={160}
                  className="rounded-full object-cover object-center"
                  style={{ objectPosition: 'center 20%' }}
                  priority
                />
              </div>

              <p className="text-lg text-gray-700 max-w-3xl md:max-w-4xl leading-relaxed text-left">
                Hi, I&apos;m Marcello, a Data Analyst and Software Developer who
                bridges the gap between technical execution and organizational
                strategy. While many analysts focus solely on interpreting data, I
                take it a step further by building the automated pipelines, data
                products, and applications that generate those insights in the first
                place. My technical expertise spans System Analysis and Design, SQL,
                Data Integrity, and Project Management, demonstrated through work at
                organizations like Geotab, Loblaw, and the Ontario Ministry of
                Agriculture. What sets me apart is my unique foundation in Human
                Rights, HR, and Business. This background enables me to understand
                stakeholder needs and organizational context, ensuring the technology I
                build solves genuine business problems. Having worked extensively in
                public and government sectors, I&apos;m particularly skilled at
                navigating compliance requirements and structured governance
                frameworks, making me a strong fit for Data Engineering, Solutions
                Consulting, and Technical Product Management roles.{" "}
              </p>
            </div>
            <div className="mt-6">
              <ConfettiButton />
            </div>
          </div>

          {/* Experience Section */}
          <div id="experience" className="text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Experience
            </h2>
            <div className="space-y-12">
              {/* Front-End Developer Intern */}
              <div>
                <h3 className="text-xl font-semibold">Front-End Developer Intern</h3>
                <p className="text-gray-600">Jan 2025 – Sept 2025 | Parva | Hamilton, ON</p>
                <ul className="list-disc pl-5 mt-2 text-left">
                  <li>
                    Gained hands-on experience building a CRM web application with React and Next.js,
                    focusing on responsive design and performance optimization.
                  </li>
                  <li>
                    Contributed to a drag-and-drop form builder with real-time previews and reusable
                    components that can be embedded into external websites.
                  </li>
                  <li>
                    Applied state management tools (Zustand, React Query) to support features like
                    multi-brand switching.
                  </li>
                  <li>
                    Collaborated with team members to improve code quality and workflow using TypeScript,
                    Jest, ESLint, Prettier, and Git in a professional development environment.
                  </li>
                </ul>
              </div>

              {/* Project Analyst Intern */}
              <div>
                <h3 className="text-xl font-semibold">Project Analyst Intern</h3>
                <p className="text-gray-600">Jan 2024 – Aug 2024 | Geotab | Oakville, ON</p>
                <ul className="list-disc pl-5 mt-2 text-left">
                  <li>
                    Collaborated on an initiative to migrate software for 6,000+ devices by developing
                    processes, maintaining detailed spreadsheets, coordinating with external partners,
                    and using Jira to log and resolve tickets.
                  </li>
                  <li>
                    Created a swim lane process map in Miro to clearly outline workflows, helping the team
                    better understand tasks and work more efficiently across different departments.
                  </li>
                  <li>
                    Conducted an analysis of missed revenue, identifying a delinquent client exploiting a
                    loophole. Elevated the issue to solidify the billing system, ensuring accurate revenue
                    capture and closing the identified loophole.
                  </li>
                </ul>
              </div>

              {/* Business & Customer Insights Analyst Co-Op */}
              <div>
                <h3 className="text-xl font-semibold">Business & Customer Insights Analyst Co-Op</h3>
                <p className="text-gray-600">Jan 2023 – Aug 2023 | Loblaw Companies Limited | Brampton, ON</p>
                <ul className="list-disc pl-5 mt-2 text-left">
                  <li>
                    Collaborated with cross-functional teams in an Agile environment, using Jira for task
                    management, sprint planning, and progress tracking. Participated in daily stand-ups and
                    sprint reviews to meet project goals.
                  </li>
                  <li>
                    Supported data warehousing initiatives using Google Cloud Platform as an analyst on the
                    data engineering team, conducting data profiling and source-to-target mapping analyses
                    to help build data pipelines.
                  </li>
                  <li>
                    Utilized Google BigQuery for data warehousing and data profiling, performing SQL queries
                    to ensure data accuracy and integrity as part of the data engineering process.
                  </li>
                </ul>
              </div>

              {/* Data Analyst Intern */}
              <div>
                <h3 className="text-xl font-semibold">Data Analyst Intern</h3>
                <p className="text-gray-600">May 2022 – Aug 2022 | Ontario Ministry of Agriculture, Food and Rural Affairs | Guelph, ON</p>
                <ul className="list-disc pl-5 mt-2 text-left">
                  <li>
                    Supported the Meat Plant Audit Program by using data on plant risk levels, compliance
                    history, and operational activities to develop data-driven tools to streamline inspection
                    schedules for slaughter plants.
                  </li>
                  <li>
                    Produced VBA Macros within Microsoft Excel to automate recurring processes within a
                    spreadsheet with over a thousand records, reducing time spent on manual tasks.
                  </li>
                  <li>
                    Formulated a swim-lane process map to identify inefficiencies, and documented and
                    optimized strategies.
                  </li>
                </ul>
              </div>

              {/* Head of Supportive Relations */}
              <div className="pb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Head of Supportive Relations
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Jun 2021 – Jan 2022 | McMaster University&apos;s &apos;Deltahacks&apos;
                  Hackathon | Hamilton, ON
                </p>
                <ul className="list-disc pl-5 mt-3 text-left space-y-2 text-gray-700">
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
                <p className="text-gray-600">Nov 2020 – Aug 2021 | McMaster University | Hamilton, ON</p>
                <ul className="list-disc pl-5 mt-2 text-left">
                  <li>
                    Analyzed course evaluation trends among 12 departments over a 6-year span using Excel
                    and created accompanying dashboards for each report to be accessed by multiple teams
                    across departments.
                  </li>
                  <li>
                    Cleaned and compiled data from a database to create an interactive and visualized
                    dashboard while ensuring data integrity and normalization.
                  </li>
                  <li>
                    Utilized weighted averages in analyzing historical course evaluation results that used
                    varying scales, enabling more accurate insights and comparisons.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div id="projects" className="text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="p-4 h-full flex flex-col">
                    <CardActionArea className="flex flex-col h-full">
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.image}
                        alt={project.alt}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent className="flex-1">
                        <Typography gutterBottom variant="h5" component="div">
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              ))}
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
                <li>Confident Data Skills</li>
                <li>201 Knockout Answers To Tough Interview Questions</li>
                <li>12 Rules Of Life</li>
                <li>The First 20 Hours</li>
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
