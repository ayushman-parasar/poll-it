Rails.application.routes.draw do
  
  get 'votes/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # root "polls#index"
  resources :polls
  resources :users
  get "/signup" => "users#new"
  get "/login" => "sessions#new"
  post "/login"=> "sessions#create"
  delete "/logout" => "sessions#destroy"
  resources :votes
  get "/static_pages" => "static_pages#index"
  root "static_pages#index"
  namespace :api do
    namespace :v1 do
      get '/result'=> "results#index"
    end
  end

  
  get '*path', to: 'static_pages#index'
end
