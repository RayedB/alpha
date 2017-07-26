class TasksController < ApplicationController
  before_action :set_list
  before_action :set_list_task, only: [:show, :update, :destroy]

 # GET /todos/:todo_id/tasks
 def index
   json_response(@list.tasks)
 end

 # GET /todos/:todo_id/tasks/:id
 def show
   json_response(@task)
 end

 # POST /todos/:todo_id/tasks
 def create
   @list.tasks.create!(task_params)
   json_response(@list, :created)
 end

 # PUT /todos/:todo_id/tasks/:id
 def update
   @task.update(task_params)
   head :no_content
 end

 # DELETE /todos/:todo_id/tasks/:id
 def destroy
   @task.destroy
   head :no_content
 end

 private

 def task_params
   params.permit(:title, :done, :urgency, :importance, :deadline, :est_time_completion, :time_to_completion, :comments)
 end

 def set_list
   @list = List.find(params[:list_id])
 end

 def set_list_task
   @task = @list.tasks.find_by!(id: params[:id]) if @list
 end
end
