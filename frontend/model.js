class Model{
  constructor(){
    this.peeps = [];
  }

  getPeeps() {
    return this.peeps;
  }
  addPeep(note) {
    this.peeps.push(note);
  }
  reset() {
    this.peeps = [];
  }

  setPeeps(peeps){
    this.peeps = peeps;
  }
}

module.exports = Model;