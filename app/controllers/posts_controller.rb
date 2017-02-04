class PostsController < ApplicationController
	layout 'application'

	# http_basic_authenticate_with name: "dhh", password: "secret", except: [:index, :show]

	def index
		@posts = Post.all
		render_json({
			posts: @posts
		})
	end

	def update
		@post = Post.find(params[:id])
		if @post.update(post_params)
			redirect_to @post
		else
			render 'edit'
		end
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy
		redirect_to post_path
	end

	def show
		@post = Post.find_by_id(params[:id])
		render_json({
			post: @post
		})
	end

	def create
		@post = Post.new(post_params)
		@post.user_id = current_user.id
		if @post.save
			redirect_to @post
		else
			render 'new'
		end
	end

	private
  def post_params
    params.require(:post).permit(:title, :text)
  end
end