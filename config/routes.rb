Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :songs
    resources :taggings, only: [:create, :destroy, :index]
    resources :users, only: [:index, :show, :edit, :destroy]
    resources :follows, only: [:create, :destroy, :index]
    resources :tags, only: [:create, :destroy, :index]
    resources :playlists, only: [:create, :show, :edit, :destroy]

  end
end
