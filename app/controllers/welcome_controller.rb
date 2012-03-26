class WelcomeController < ApplicationController
  layout "welcome"
  def index
    @messages = Message.all
  end

end
