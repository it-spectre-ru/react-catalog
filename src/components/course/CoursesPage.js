import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: null}
    };
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  render() {
    return (
      <div>
        <h1>Курсы</h1>
        <h2>Добавить курс</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Сохранить"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

export default CoursesPage;














