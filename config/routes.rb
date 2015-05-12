Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session, only: [:create, :new, :destroy]
  resources :songs

  namespace :api, defaults: {format: :json} do
    resources :songs
  end
end
