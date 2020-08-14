class UsersController < ApplicationController
  def new
  end


  def create
    @user = User.new(user_params)
    if @user.save
      render status: :ok, json:{notice: "User Created Successfully"}
    else
      error_message = @user.errors.full_messages
      render status: :unprocessable_entity, json: {errors: error_message}
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :remember_me)
    end
end

