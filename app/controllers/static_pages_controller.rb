class StaticPagesController < ApplicationController
  before_action :require_signed_in!

  def root
  end


  def search
    @search_results = PgSearch
      .multisearch(params[:query])
      .page(params[:page])

      # .includes(:searchable)
    # render json: @search_results
  end

end
