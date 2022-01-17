import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {
    let divElem = document.getElementById("emojis");
    divElem.innerHTML = "";
    const p = document.createElement("p");
    const node = document.createTextNode(
      this.emojis.map((e) => (e += this.banana))
    );
    p.appendChild(node);
    divElem.appendChild(p);
  }
}
