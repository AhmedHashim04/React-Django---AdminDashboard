import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About This Project</h1>
        <p>React Dashboard with Django Backend Integration</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>🚀 Project Overview</h2>
          <p>
            This is a modern admin dashboard built with React and integrated with a Django REST API backend.
            It demonstrates full-stack development with clean separation of concerns between frontend and backend.
          </p>
        </section>

        <section className="about-section">
          <h2>💻 Technologies Used</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3>Frontend</h3>
              <ul>
                <li>React 18</li>
                <li>Vite</li>
                <li>React Router</li>
                <li>Axios</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>Backend</h3>
              <ul>
                <li>Django 5.2</li>
                <li>Django REST Framework</li>
                <li>Django CORS Headers</li>
                <li>SQLite Database</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>✨ Features</h2>
          <ul className="features-list">
            <li>Real-time dashboard metrics</li>
            <li>RESTful API integration</li>
            <li>Responsive design</li>
            <li>Interactive data visualization</li>
            <li>CRUD operations support</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>📚 Getting Started</h2>
          <div className="instructions">
            <div className="instruction-block">
              <h3>Backend Setup</h3>
              <pre>
{`cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py create_sample_data
python manage.py runserver`}
              </pre>
            </div>
            <div className="instruction-block">
              <h3>Frontend Setup</h3>
              <pre>
{`cd frontend
npm install
npm run dev`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
