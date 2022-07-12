import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import TaskListComponent from '../components/container/task_list';
import NotFoundPage from '../pages/404/NotFoundPage';
import Login from '../pages/auth/Login';
import About from '../pages/home/About';
import HomePage from '../pages/home/HomePage';
import Profile from '../pages/profile/Porfile';
import TaskDetailPage from '../pages/task/TaskDetailPage';

const Router = () => {
  const logged = false;
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to='/'>| Home |</Link>
          <Link to='about'> About </Link>
          <Link to='tasks'>| Tasks |</Link>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<app />} />
            <Route index element={<HomePage />} />
            <Route path='login' element={<Login />} />
            <Route path='about' element={<About />} />
            <Route path='tasks' element={<TaskListComponent />} />
            <Route path='task/:id' element={<TaskDetailPage />} />
            <Route path='profile' element={<Profile />}>
              {logged ? (
                <Profilepage />
              ) : (
                () => {
                  alert('yo must be logged in. Redirecting to home...');
                }
              )}
            </Route>
            {/* Not Found Page */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Router;
