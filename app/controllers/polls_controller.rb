class PollsController < ApplicationController
  before_action :logged_in_user, only:[ :create, :show, :new]

  def index
    @polls = Poll.all
  end

  def new
    @poll = Poll.new
  end
  
  def create
    p polls_params
    @poll = Poll.new(polls_params)
    
    p @poll, "created poll"
    if @poll.save
      render status: :ok, json:{ notice: "Poll Successfully created ", poll: @poll}
    else
      error_message = @poll.errors.full_messages
      p error_message
      render status: :unprocessable_entity, json:{errors: error_message}
    end
  end

  def show
    p params[:id], "params id"
    @poll = Poll.find_by(id: params[:id])
    @options = @poll.options
    # p @poll, "single poll"
    @count = @poll.users.size
  end

  def destroy
  end

  private
    def polls_params
      params.require(:poll).permit(:title, options_attributes: [:title])
    end

end
