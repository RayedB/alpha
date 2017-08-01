class ListsController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  # GET /lists
  def index
    @lists = current_user.lists
    json_response(@lists)
  end

  # POST /lists
  def create
    @list = current_user.lists.create!(list_params)
    json_response(@list, :created)
  end

  # GET /lists/:id
  def show
    json_response(@list)
  end

  # PUT /lists/:id
  def update
    @list.update(list_params)
    head :no_content
  end

  # DELETE /lists/:id
  def destroy
    @list.destroy
    head :no_content
  end

  private

  def list_params
    # whitelist params
    params.permit(:title)
  end

  def set_todo
    @list = List.find(params[:id])
  end
end
