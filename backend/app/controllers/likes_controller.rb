class LikesController < ApplicationController

   def index 
      @likes=Like.all 
      render json: @likes
   end

   def show  
      @like = Like.find(params[:id])
      render json: @like
   end 

   def new 
      @like = Like.new
   end

   def create
      @like = Like.new(like_params)
      @like.save
      #I don't think we have any validation for the likes

      render json: @likes
   end




