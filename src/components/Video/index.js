import React from 'react';

import { connect } from 'react-redux';

// import { Container } from './styles';

function Video({ activeModule, activeLesson }) {
  return (
    <div>
      <strong>Modulo {activeModule.title}</strong>
      <span>Aula {activeLesson.title}</span>
    </div>
  );
}

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
