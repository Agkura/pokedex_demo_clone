class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render @pokemon.errors.full_messages
    end
  end

  private

  def pokemon_params
    params.require(:pokemon)
      .permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end
