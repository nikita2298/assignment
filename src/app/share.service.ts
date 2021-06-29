import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  //state: any;
  
  data = [
    {
      state: 'Maharashatra',

      data1: [
        {
          District: 'Nanded',
          Confirmed: 1,
          Active: 1,
          Recovered: 1,
          Deceased: 1,
          Vaccinated: 2,
        },
        {
          District: 'Pune',
          Confirmed: 4,
          Active: 1,
          Recovered: 1,
          Deceased: 1,
          Vaccinated: 2,
        },
        {
          District: 'Latur',
          Confirmed: 3,
          Active: 1,
          Recovered: 1,
          Deceased: 1,
          Vaccinated: 2,
        },
      ],
    },
    {
      state: 'karnatak',

      data1: [
        {
          District: 'Bengluru',
          Confirmed: 2,
          Active: 1,
          Recovered: 1,
          Deceased: 1,
          Vaccinated: 3,
        },
        {
          District: 'Mysuru',
          Confirmed: 2,
          Active: 1,
          Recovered: 1,
          Deceased: 1,
          Vaccinated: 3,
        },
        {
          District: 'Hassan',
          Confirmed: 2,
          Active: 8,
          Recovered: 1,
          Deceased: 1,
          Vaccinated: 3,
        },
      ],
    },
    {
      state: 'Kerala',

      data1: [
        {
          District: 'Kannpur',
          Confirmed: 1,
          Active: 100,
          Recovered: 50,
          Deceased: 17,
          Vaccinated: 4,
        },
        {
          District: 'Idukku',
          Confirmed: 1,
          Active: 1,
          Recovered: 1,
          Deceased: 1,
          Vaccinated: 4,
        },
        {
          District: 'Latur',
          Confirmed: 10,
          Active: 4,
          Recovered: 1,
          Deceased: 1,
          Vaccinated: 4,
        },
      ],
    },
  ];
  stateSum = [];
  getSum = [];
  totalSumc = [];

  constructor() {
    this.getByStateSum();
  }
  //State wise District data
  getBystate(state) {
    console.log(state);
    let matchedData = [];
    this.data.forEach((ele) => {
      if (ele.state == state) {
        console.log(ele.data1);
        matchedData = ele.data1;
      }
    });
    console.log('matchedData', matchedData);
    return matchedData;
  }
  getByStateSum() {
    var arr: any;
    var i;

    console.log(this.data.length);

    var state;
    var active = 0;
    var confirmed = 0;
    var recoverd = 0;
    var deceased = 0;
    this.data.forEach((element) => {
      state = element.state;
      //console.log(element.data1);

      element.data1.forEach((val) => {
        //console.log(val);

        active = active + val.Active;
        confirmed = confirmed + val.Confirmed;
        recoverd = recoverd + val.Recovered;
        deceased = deceased + val.Deceased;
      });
      arr = {
        State: state,
        Active: active,
        Confirmed: confirmed,
        Recovered: recoverd,
        Deceased: deceased,
      };
      var index = 0;

      //console.log(arr);

      this.stateSum.push(arr);
      state = 0;
      active = 0;
      confirmed = 0;
      recoverd = 0;
      deceased = 0;
    });

    console.log(this.stateSum);
    return this.stateSum;
  }
  // perticular State wise sum
  statewiseSum(state1) {
    var arr: any;
    var i;

    var active = 0;
    var confirmed = 0;
    var recoverd = 0;
    var deceased = 0;
    this.data.forEach((element) => {
      console.log(element.data1);
      if (element.state == state1) {
        //console.log(element.data1);
        element.data1.map((val) => {
          active = active + val.Active;
          confirmed = confirmed + val.Confirmed;
          recoverd = recoverd + val.Recovered;
          deceased = deceased + val.Deceased;
        });
        arr = {
          //State: state,
          Active: active,
          Confirmed: confirmed,
          Recovered: recoverd,
          Deceased: deceased,
        };
        var index = 0;

        console.log(arr);
        console.log(this.getSum);
      }
      
    });
    
    this.getSum = [];
    this.getSum.push(arr);
    console.log(this.getSum);
    return this.getSum;
  }

  //Total country sum
  totalSum() {
    var arr: any;
    this.totalSumc = [];
    var active = 0;
    var confirmed = 0;
    var recoverd = 0;
    var deceased = 0;

    const list1 = this.data.map((array1) => {
      return array1.data1;
    });
    //console.log(list1);

    list1.forEach((element) => {
      element.map((val) => {
        //console.log(val);

        confirmed = confirmed + val.Confirmed;
        //console.log(confirmed);

        active = active + val.Active;
        recoverd = recoverd + val.Recovered;
        deceased = deceased + val.Deceased;
      });
      //console.log(confirmed);
    });
    arr = {
      //State: state,
      Active: active,
      Confirmed: confirmed,
      Recovered: recoverd,
      Deceased: deceased,
    };

    var index = 0;

    console.log(arr);
    this.totalSumc.push(arr);
    return this.totalSumc;
  }
}
