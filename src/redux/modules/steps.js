const NEXT_STEP = 'NEXT_STEP';
const PREV_STEP = 'PREV_STEP';
const SET_STEP = 'SET_STEP';

const initialState = {
  now: 1,
  steps: 5
};

export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case NEXT_STEP:
      return {...state, now: state.now + 1};

    case PREV_STEP:
      return {...state, now: state.now - 1};

    case SET_STEP:
      return {...state, now: action.payload};


    default: return {...state};
  }
}

export function nextStep(){
  return {
    type: NEXT_STEP
  }
}

export function setStep(step){
  return {
    type: SET_STEP,
    payload: step
  }
}

