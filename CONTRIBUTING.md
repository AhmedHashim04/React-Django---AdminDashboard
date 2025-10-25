# Contributing to React-Django Admin Dashboard

Thank you for your interest in contributing to this project! This is a learning project, and contributions are welcome.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/React-Django---AdminDashboard.git`
3. Run the setup script: `./setup.sh`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Setup

### Backend Development

The Django backend is in the `backend/` directory.

```bash
cd backend
source venv/bin/activate  # Activate virtual environment
python manage.py runserver
```

### Frontend Development

The React frontend is in the `frontend/` directory.

```bash
cd frontend
npm run dev
```

## Making Changes

### Backend Changes

1. Models: Update `backend/api/models.py`
2. Views: Update `backend/api/views.py`
3. Serializers: Update `backend/api/serializers.py`
4. URLs: Update `backend/api/urls.py`
5. Run migrations: `python manage.py makemigrations && python manage.py migrate`

### Frontend Changes

1. Components: Add to `frontend/src/components/`
2. Pages: Add to `frontend/src/pages/`
3. API calls: Update `frontend/src/services/api.js`
4. Routing: Update `frontend/src/App.jsx`

## Code Style

### Python (Backend)
- Follow PEP 8 style guide
- Use meaningful variable names
- Add docstrings to functions and classes

### JavaScript/React (Frontend)
- Use functional components with hooks
- Follow React best practices
- Use meaningful component and variable names
- Keep components small and focused

## Testing

### Backend Tests
```bash
cd backend
python manage.py test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## Submitting Changes

1. Ensure your code follows the style guidelines
2. Test your changes thoroughly
3. Commit your changes with a descriptive message
4. Push to your fork
5. Create a Pull Request

## Feature Ideas

Here are some ideas for contributions:

- [ ] Add user authentication
- [ ] Add data visualization charts
- [ ] Add dark mode
- [ ] Add more dashboard metrics
- [ ] Add export functionality (CSV, PDF)
- [ ] Add real-time updates with WebSockets
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Improve mobile responsiveness
- [ ] Add search and filter functionality

## Questions?

Feel free to open an issue for any questions or discussions!

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).
