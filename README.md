# React-Django Admin Dashboard

My first React Project - A modern admin dashboard built with React frontend and Django backend.

## 🚀 Project Overview

This project demonstrates full-stack development with a clean separation between frontend and backend:
- **Frontend**: React 18 with Vite, React Router, and Axios
- **Backend**: Django 5.2 with Django REST Framework and CORS support

## 📋 Features

- ✅ Real-time dashboard metrics
- ✅ RESTful API integration
- ✅ Responsive design
- ✅ Interactive data visualization
- ✅ CRUD operations for metrics
- ✅ Clean and modern UI

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite (Build tool)
- React Router DOM
- Axios (HTTP client)
- CSS3

### Backend
- Django 5.2
- Django REST Framework
- Django CORS Headers
- SQLite Database

## 📦 Installation & Setup

### Prerequisites
- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (optional but recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py migrate
```

5. Create sample data:
```bash
python manage.py create_sample_data
```

6. Start the Django development server:
```bash
python manage.py runserver
```

The backend API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 🔌 API Endpoints

### Health Check
- `GET /api/health/` - Check API status

### Dashboard
- `GET /api/overview/` - Get dashboard overview with statistics

### Metrics
- `GET /api/metrics/` - List all metrics
- `POST /api/metrics/` - Create a new metric
- `GET /api/metrics/{id}/` - Get a specific metric
- `PUT /api/metrics/{id}/` - Update a metric
- `DELETE /api/metrics/{id}/` - Delete a metric

## 📱 Pages

- **Dashboard** (`/`) - Overview with key metrics and statistics
- **Metrics** (`/metrics`) - Complete list of all metrics
- **About** (`/about`) - Project information and documentation

## 🎨 Project Structure

```
React-Django---AdminDashboard/
├── backend/                 # Django backend
│   ├── api/                # API app
│   │   ├── models.py       # Database models
│   │   ├── serializers.py  # DRF serializers
│   │   ├── views.py        # API views
│   │   └── urls.py         # API routes
│   ├── backend/            # Project settings
│   │   ├── settings.py     # Django settings
│   │   └── urls.py         # Main URL config
│   ├── manage.py           # Django management script
│   └── requirements.txt    # Python dependencies
│
└── frontend/               # React frontend
    ├── src/
    │   ├── components/     # Reusable components
    │   ├── pages/          # Page components
    │   ├── services/       # API service layer
    │   ├── App.jsx         # Main App component
    │   └── main.jsx        # Entry point
    ├── package.json        # Node dependencies
    └── vite.config.js      # Vite configuration
```

## 🔧 Development

### Running Both Servers

You need to run both the Django backend and React frontend simultaneously:

**Terminal 1 (Backend):**
```bash
cd backend
python manage.py runserver
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

The build output will be in the `frontend/dist` directory.

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment!

## 📝 License

This project is open source and available under the MIT License.

