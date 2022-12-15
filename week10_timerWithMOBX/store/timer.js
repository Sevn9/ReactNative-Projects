import { makeAutoObservable } from "mobx";

class Timer {
  secondsPassed = 0;
  timerID;
  // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
  constructor() {
    makeAutoObservable(this);
  }

  startTimer() {
    console.log(`timer started`);
    this.timerID = setInterval(() => {
      this.secondsPassed += 1;
    }, 1000);
  }

  stopTimer() {
    console.log(`timer stoped`);
    clearInterval(this.timerID);
  }

  clearTimer() {
    console.log(`timer cleared`);
    this.secondsPassed = 0;
  }
}

export default new Timer();
