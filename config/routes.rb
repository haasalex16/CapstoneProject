Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]
  get "search", to: "static_pages#search"

  namespace :api, defaults: {format: :json} do
    resources :songs
    resources :taggings, only: [:create, :destroy, :index]
    resources :users, only: [:index, :show, :update, :destroy]
    resources :follows, only: [:create, :destroy, :index]
    resources :tags, only: [:create, :destroy, :index]
    resources :playlists, only: [:create, :show, :update, :index, :destroy]
    resources :playlist_songs, only: [:create]

    get "explore", to: "songs#explore"

  end
end
