class WelcomeController < ApplicationController

  before_action :login_required, only: [:index]
  # wechat_api
  def index
    # @projects = current_user.projects
    # redirect_to posts_url
  end

  def signin
    @user = User.new
  end

  def signup
    @user = User.new
  end
end
