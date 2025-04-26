import aboutImg from "../assets/images/about/about2.png";

function Aboutme() {
  return (
    <div className="about-container">
      <img className="about-image" src={aboutImg} alt="personal photo" />

      <div className="rectangle1"></div>
      <div className="rectangle2"></div>

      <section>
        <h2>About Me</h2>
        <p>

Yogacharya Ravinder is a passionate yoga teacher dedicated to spreading the ancient wisdom of yoga through the traditional Guru-Shishya Parampara. With a strong foundation in yoga and martial arts, he inspires holistic well-being and inner transformation through his teachings.
        </p>
      </section>
    </div>
  );
}

export default Aboutme;
