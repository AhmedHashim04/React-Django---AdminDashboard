#!/bin/bash

# Startup script for React-Django Admin Dashboard
# This script will start both backend and frontend servers

echo "🚀 Starting React-Django Admin Dashboard..."
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $(jobs -p) 2>/dev/null
    exit
}

trap cleanup SIGINT SIGTERM

# Start Backend
echo "Starting Django backend on http://localhost:8000..."
cd backend
source venv/bin/activate 2>/dev/null || true
python manage.py runserver &
BACKEND_PID=$!

# Wait a bit for backend to start
sleep 3

# Start Frontend
echo "Starting React frontend on http://localhost:5173..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Both servers are running!"
echo ""
echo "Backend:  http://localhost:8000"
echo "Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for both processes
wait
