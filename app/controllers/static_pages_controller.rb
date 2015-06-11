class StaticPagesController < ApplicationController
  # before_action :require_signed_in!, only: [:root, :search]

  def root
  end

  def about
  end


  def search
    @search_results = PgSearch
      .multisearch(params[:query])
      .page(params[:page])
  end

end
