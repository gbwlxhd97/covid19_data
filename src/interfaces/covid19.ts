export interface IinfState {
  items: {
    item: Array<infResponse>
  }
}

interface infResponse {
  decideCnt: string;
  stateDt: string;
  stateTime: string;
}


export interface IgenAgeCaseInf {
  items : {
    item: genAgeCaseResponse
  }
}

interface genAgeCaseResponse {
  confCase: string;
  gubun: string;
  stateDt: string;
}