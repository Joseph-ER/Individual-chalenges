class View{
  constructor(model, api){
    this.model = model;
    this.api=api;
  }

  displayPeepsFromApi(){
    this.api.loadNotes(peep => {
      this.model.setPeeps(peep);
      this.displayPeeps();
    });
  }

  displayPeeps(){
    document.querySelectorAll('.peep').forEach(element =>{
      element.remove();
    });
    
      const peeps = this.model.getpeeps();
      console.log(peeps);

    peeps.forEach (peep => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep;
      peepEl.className = 'peep';
      this.mainContainerEl.append(peepEl);
    });
  }
}

module.exports = View;