class SessionsController < ApplicationController
  def create
    
    user = User.find_by(email: params[:session][:email].downcase)
    p user, "user ins sessions"
    if user && user.authenticate(params[:session][:password])
      log_in(user)
      render status: :ok, json: { notice: "User logged in Successfully"}
      
    else
      # flash.now[:danger] = "Invalid email/password combination"
      render status: :unprocessable_entity, json:{ errors: ['Invalid email/password combination']}
    end
  end

  def destroy
    log_out if logged_in?
    # redirect_to root_path
    p current_user, "curent user"
    if current_user == nil
      render status: :ok, json: { notice: "Logged out "}
  
    else
      render status: :unprocessable_entity, json: { error: "Logged out unsuccessfull "}
    end
  end

  def index
    if logged_in?
      render json: {currentUser: current_user}
    else
      render json: {error: "You need to sign in"}
    end
  end


end
