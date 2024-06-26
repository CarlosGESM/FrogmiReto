Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :features, only: [:index, :show] do
        resources :comments, only: [:create, :index]
      end
    end
  end
end
