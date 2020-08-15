class Api::V1::ResultsController < ApplicationController
  def index
    @polls = Poll.all
  end
end
