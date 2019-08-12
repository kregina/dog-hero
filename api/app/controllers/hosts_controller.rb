class HostsController < ApplicationController

  #GET /api/v1/hosts
  def index
    @hosts = Host.all
    render json: @hosts
  end
end
