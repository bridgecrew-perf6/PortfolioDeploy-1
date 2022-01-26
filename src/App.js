import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div class="flex-container">
        <div class="devPic">
          <img src="./shivam.jpg" alt="devPic" /><br/>
          <button>
            <a
              href="https://drive.google.com/file/d/1hA60rJKUEL_26LWwAciaeQagNl3KYuQy/view?usp=sharing"
            >Download Resume</a
            >
          </button>
          {/* <!-- <h1>Hello</h1> --> */}
        </div>
        <div class="info-container">
          <div class="devName">
            <h1>Shivam Pandey</h1>
            <p>Software Engineer at Sopra Steria</p>
          </div>
          <div class="devEdu">
            <h1>Education</h1><br/>
              <ul>
                <li>Bachelor of Computer Aplication 2020</li>
                <li>Intermediate(Math) 2016</li>
                <li>High School(Science) 2014</li>
              </ul>
          </div>
          <div class="devAchiev">
            <h1>Achievement</h1><br/>
              <ul>
                <li>HackerRank 4 star</li>
                <li>Codechef</li>
                <li>HackerEarth</li>
              </ul>
          </div>
          <div class="devSkill">
            <h1>Skill</h1><br/>
              <div class="skill-card">
                <div class="card">
                  <p>Python</p>
                </div>
                <div class="card">
                  <p>C++</p>
                </div>
                <div class="card">
                  <p>Basic Java</p>
                </div>
                <div class="card">
                  <p>HTML/CSS</p>
                </div>
                <div class="card">
                  <p>Django</p>
                </div>
              </div>
          </div>
          <div class="devProject">
            <h1>Project</h1><br/>
              <div class="project-card">
                <div class="card">
                  <p>System Management System Desktop Aplication</p>
                  <p>Tech: Python, Tkinter</p>
                </div>
                <div class="card">
                  <p>Todo App</p>
                  <p>Tech: Python, React Js, FastAPI</p>
                </div>
                <div class="card">
                  <p>E-commerce WebApp</p>
                  <p>Tech: Python, Django, MySQL, Bootstrap</p>
                </div>
                <div class="card">
                  <p>Paymentform HTML page</p>
                  <p>Tech: HTML</p>
                </div>
              </div>
          </div>
          <div class="devHobbies">
            <h1>Hobbies</h1><br/>
              <div class="hobbies-card">
                <div class="card">
                  <p>E-Sport</p>
                </div>
                <div class="card">
                  <p>Playing Carrom</p>
                </div>
                <div class="card">
                  <p>Outdoor Games</p>
                </div>
                <div class="card">
                  <p>Travelling</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <a href="www.facebook.com">facebook</a>
        <a href="www.instagram.com">Instagram</a>
        <p>Contact: +91 9119880800</p>
      </div>

    </>
  );
}

export default App;
