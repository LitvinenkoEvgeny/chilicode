const NEXT_STEP = 'NEXT_STEP';
const PREV_STEP = 'PREV_STEP';

const initialState = {
  now: 'agree',
  steps: ['agree', 'common', 'place', 'data', 'work']
};

export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case NEXT_STEP:
      const nowIndex = state.steps.indexOf(state.now);
      let nextIndex = nowIndex + 1;

      if(nextIndex === state.steps.length){
        nextIndex = state.steps.length;
      }

      return {...state, now: state.steps[nextIndex]};


    default: return {...state};
  }
}

export function nextStep(){
  return {
    type: NEXT_STEP
  }
}

