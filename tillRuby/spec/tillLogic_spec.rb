require 'tillLogic'

RSpec.describe"Rill Logic" do
    it"tests till initialises" do
       till = TillLogic.new()
       expect(till).to be_instance_of(TillLogic)
    end
end