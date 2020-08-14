class VotesController < ApplicationController
  def create
    p params[:poll_id]
    @poll = Poll.find_by(id: params[:vote][:poll_id])
    if  @poll.users.include?(current_user) 
      render status: :unprocessable_entity, json: { notice: "You have already voted"}
    else
      @vote = @poll.votes.new(user:current_user)
      if @vote.save
        @option = @poll.options.find_by(id: params[:vote][:option_id])
        
        @option.update(count: @option.count + 1)
      end
        render status: :ok, json:{ notice: "Voted Successfuly"}
    end
  end

  

end
