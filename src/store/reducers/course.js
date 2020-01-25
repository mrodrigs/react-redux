const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'Starting with React',
      lessons: [
        { id: 1, title: 'First Lesson' },
        { id: 2, title: 'Second Lesson' }
      ],
    },
    {
      id: 2,
      title: 'Redux',
      lessons: [
        { id: 3, title: 'Third Lesson' },
        { id: 4, title: 'Fourth Lesson' }
      ],
    },
  ]
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return { ...state, activeLesson: action.lesson, activeModule: action.module }
  }
  return state;
}