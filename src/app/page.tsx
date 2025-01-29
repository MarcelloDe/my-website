import Link from "next/link";
import Image from "next/image";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
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
      </header>

      {/* Main Content */}
      <Container maxWidth="md">
        <Box sx={{ mt: 10 }} className="flex flex-col items-center">
          {/* About Me Section */}
          <div id="about" className="text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">About Me</h2>
            <p className="text-lg text-gray-700">
              I am a software developer with a passion for web development. I
              enjoy learning new technologies and building projects. This
              website showcases my work and notes.
            </p>
          </div>

          <div id="projects" className="text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Projects</h2>
            <p className="text-lg text-gray-700">
              I am a software developer with a passion for web development. I
              enjoy learning new technologies and building projects. This
              website showcases my work and notes.
            </p>
          </div>

          {/* Experience Cards */}
          <div
            id="experience"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8"
          >
            <Card className="p-4">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./site/assets/images/loblaw.jpg"
                  alt="Loblaw Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    My Experience at Loblaw
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Co-Op Data Analyst
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className="p-4">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./site/assets/images/geotab.jpg"
                  alt="Geotab Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    My Experience at Geotab
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Software Development Intern
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
            <Card className="p-4">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./site/assets/images/loblaw.jpg"
                  alt="Loblaw Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    My Experience at Loblaw
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Co-Op Data Analyst
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className="p-4">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./site/assets/images/geotab.jpg"
                  alt="Geotab Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    My Experience at Geotab
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Software Development Intern
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Box>

        <div id="education" className="text-center mt-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Education</h2>
          <p className="text-lg text-gray-700">
            I am a software developer with a passion for web development. I
            enjoy learning new technologies and building projects. This website
            showcases my work and notes.
          </p>
        </div>
      </Container>
    </>
  );
}
