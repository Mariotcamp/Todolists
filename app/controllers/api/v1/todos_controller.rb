class Api::V1::TodosController < ApplicationController
  def index
    todos = Todo.all

    render json:{
      todos: todos
    }, status: :ok
  end
end
