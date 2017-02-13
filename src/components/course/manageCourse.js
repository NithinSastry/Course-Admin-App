import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from './../../actions/courseActions';
import CourseForm from "./courseForm";

class ManangeCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {
                title: '',
                category: '',
                length: ''
            }
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({
            course: course
        });
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                />
        );
    }
}

ManangeCoursePage.prototypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManangeCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseDetails(courses, id) {
    const course = courses.filter(course => { return course.id == id });
    return (course.length > 0) ? course[0] : null
}

function mapStateToProps(state, ownProps) {
    const id = ownProps.params.id;
    let course = { id: '', watchHref: '', title: '', authorId: '', lenght: '', category: '' }

    if (id && state.courses.length > 0) {
        course = getCourseDetails(state.courses, id)
    }

    const formattedAuthorResponse = state.authors.map((author) => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    })
    return {
        course: course,
        authors: formattedAuthorResponse
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManangeCoursePage);