import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LayoutPage from './components/layoutPage';
import About from './components/about/aboutPage';
import HomePage from './components/home/homePage';
import CoursesPage from './components/course/coursesPage'
import ManageCourse from './components/course/manageCourse';

export default (
    <Route path="/" component={LayoutPage}>
        <IndexRoute component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course" component={ManageCourse} />
        <Route path="/course/:id" component={ManageCourse} />
        <Route path="/about" component={About} />
    </Route>
);