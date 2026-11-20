import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>StudySpace</h1>

        <nav>
          <a href="#home">Басты бет</a>
          <a href="#about">Біз туралы</a>
          <a href="#courses">Курстар</a>
          <a href="#contact">Байланыс</a>
        </nav>
      </header>

      {/* Main */}
      <section className="hero" id="home">
        <h2>Білім алудың жаңа жолы!</h2>
        <p>
          StudySpace оқу орталығымен бірге
          болашағыңды бүгіннен баста.
        </p>
        <a href="#courses" className="btn">
          Курстарды көру
        </a>
      </section>

      {/* About */}
      <section className="about" id="about">
        <h2>Біз туралы</h2>
        <p>
          StudySpace – заманауи білім беру орталығы.
          Біз оқушыларға бағдарламалау және IT
          саласында сапалы білім ұсынамыз.
        </p>
      </section>

      {/* Courses */}
      <section className="courses" id="courses">
        <h2>Біздің курстар</h2>

        <div className="cards">
          <div className="card">
            <h3>HTML & CSS</h3>
            <p>Веб-сайт жасаудың негіздерін үйрен.</p>
          </div>

          <div className="card">
            <h3>JavaScript</h3>
            <p>Бағдарламалау дағдыларыңды дамыт.</p>
          </div>

          <div className="card">
            <h3>React</h3>
            <p>Заманауи веб-қосымшалар жаса.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2>Байланыс</h2>
        <p>Email: studyspace@gmail.com</p>
        <p>Автор: Томирис</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 StudySpace. Барлық құқықтар қорғалған.</p>
      </footer>
    </div>
  );
}

export default App;