const AGREE = 'AGREE';
const DISAGREE = 'DISAGREE';
const CALCULATE = 'CALCULATE';

const initialState = {
  agree: false,
  showRight: false,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {

    case AGREE:
      return {...state, agree: true};

    case CALCULATE:
      if(state.agree){
        return {...state, showRight: true}
      } else {
        return {...state};
      }

    case DISAGREE:
      return {...state, agree: false, showRight: false};

    default:
      return {...state};
  }
}

export function agree() {
  return {
    type: AGREE
  }
}

export function disagree(){
  return {
    type: DISAGREE
  }
}

export function calculate() {
  return {
    type: CALCULATE
  }
}
