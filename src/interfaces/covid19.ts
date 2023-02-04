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
    item: Array<IgenAgeCaseResponse>
  }
}

export interface IgenAgeCaseResponse {
  confCase: string;
  gubun: string;
  stateDt: string;
}
