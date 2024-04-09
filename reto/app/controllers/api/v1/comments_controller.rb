module Api
  module V1
    class CommentsController < ApplicationController

      # GET api/v1/features/feature_id/comments
      def index
        if params[:feature_id]
          feature = Feature.find(params[:feature_id])
          comments = feature.comments.select(:id, :body, :feature_id)
        else
          comments = Comment.all
        end
        render json: comments, status: :ok
      end

      # POST api/v1/features/feature_id/comments
      def create
        @feature = Feature.find_by(id: params[:feature_id])
        @comment = @feature.comments.new(comment_params)

        if @comment.save
          render json: { id: @comment.id, body: @comment.body, feature_id: @comment.feature_id }, status: :created
        else
          render json: { error: @comment.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def comment_params
        params.require(:comment).permit(:body)
      end
    end
  end
end
