import "./Main.css";
import ProjectCard from "../ProjectCard/ProjectCard";

function Main({}) {
  const wtwrImages = Object.values(
    import.meta.glob("../../assets/WTWR/*.{jpg,jpeg,png}", { eager: true }),
  ).map((img) => img.default);

  const spotsImages = Object.values(
    import.meta.glob("../../assets/SPOTS/*.{jpg,jpeg,png}", { eager: true }),
  ).map((img) => img.default);

  const coffeeShopImages = Object.values(
    import.meta.glob("../../assets/CoffeeShop/*.{jpg,jpeg,png}", {
      eager: true,
    }),
  ).map((img) => img.default);

  const aboutGreciaImages = Object.values(
    import.meta.glob("../../assets/aboutGrecia/*.{jpg,jpeg,png}", {
      eager: true,
    }),
  ).map((img) => img.default);

  return (
    <main className="main">
      <div className="main__about" id="about">
        <h2 className="main__title">About Me</h2>
        <p className="main__text">
          Hello! I'm Grecia, a passionate web developer with a love for creating
          beautiful and functional websites. With a background in biology and a
          keen eye for details and following instructions. Thus helping me with
          my change into this new focus I enjoy bringing ideas to life through
          code. When I'm not coding, you can find me exploring new technologies,
          reading, writing stories, creating comic ideas with friends, watching
          anime or other shows,playing videogames, in nature, FYI the logo was
          one of my first ever dogs, Coco.
        </p>
      </div>
      <div className="main__projects" id="projects">
        <h2 className="main__title">Projects</h2>
        <div className="main__cards">
          <ProjectCard
            title="WTWR"
            description="For this project, I was tasked with making a weather website that would display the current weather and suggest an outfit based on the weather.
          It allows uses to add cards of their clothing items and then based on the weather it will suggest an outfit for the user.
          There is a toggle to change the temperature from Celsius to Fahrenheit, and user can modify their profile information. 
          The project was developed using React, Node.js, APIs, MongoDB Compass, Postman, HTML, CSS, JavaScript, and among other backend and front end tools. 
          Other smaller resources included the Web, DevTools and use of AI."
            images={wtwrImages}
            github="https://github.com/GGER17/se_project_react"
            demo="https://drive.google.com/file/d/13ptJttwrojUTfeiRl5H0tV85U2U81EKd/view?usp=drive_link"
          />
          <ProjectCard
            title="SPOTS"
            description="The project idea is to serve as the starter for a social platform. 
          Here one will be able to share images. Interact with other users post by liking an image. 
          As a social platform is meant to be used across multiple devices. 
          These devices having having the best experience for the user with the screen widths of 320px to 1440px. 
          So far the project was developed using HTML, CSS, and Figma. Other smaller resources included the Web, DevTools and use of AI."
            images={spotsImages}
            github="https://github.com/GGER17/se_project_spots"
            demo="https://drive.google.com/file/d/1ptmJqtwd_gNe-eh98qOFHExp54PzkRZL/view?usp=drive_link"
          />
          <ProjectCard
            title="Coffee Shop"
            description="The purpose of this project is to serve as a starter for a coffee shop website.
          The website will include a menu, an about us section, and a contact page. 
          So far the project was developed using HTML, CSS, and Figma. Other smaller resources included the Web, DevTools and use of AI."
            images={coffeeShopImages}
            github="https://github.com/GGER17/se_project_coffeeshop-ft"
            demo="https://drive.google.com/file/d/1071eh1KsHN2VSrMQj6SVJ2GwsCGw92nC/view?usp=drive_link"
          />
          <ProjectCard
            title="About Grecia"
            description="This project was the first project I ever did. 
          It was a simple project to get familiar with HTML and CSS. 
          The project is a simple one page website about me, it includes some of my hobbies, interests, and contact information. 
          It was developed using HTML and CSS. Other smaller resources included the Web, DevTools and use of AI."
            images={aboutGreciaImages}
            github="https://github.com/GGER17/Me_folder_1st_project"
            demo="https://drive.google.com/file/d/1Vq49cMLO6D57k9opW02nFSK36SySb8_E/view?usp=drive_link"
          />
        </div>
      </div>
      <div className="main__contact" id="contact">
        <h2 className="main__title">Contact</h2>
        <p className="main__text">
          Feel free to reach out to me via email at{" "}
          <a href="mailto:g3901@icloud.com">g3901@icloud.com</a>
        </p>
        <p className="main__text">
          You can also find me on{" "}
          <a href="https://github.com/GGER17" target="_blank">
            GitHub
          </a>
        </p>
        <p className="main__text">
          Or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/grecia-espinoza-software-engineer/"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </main>
  );
}

export default Main;
