require 'open-uri'
require 'json'

namespace :dataEarthquake do
  desc "Obtener data sismológica"
  task fetch: :environment do
    url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
    URI.open(url) do |response|
      data = JSON.parse(response.read)

      data['features'].each do |feature_data|
        feature = Feature.find_or_initialize_by(id: feature_data['id'])
        feature.assign_attributes(
          properties_mag: feature_data.dig('properties', 'mag'),
          properties_place: feature_data.dig('properties', 'place'),
          properties_time: feature_data.dig('properties', 'time'),
          properties_url: feature_data.dig('properties', 'url'),
          properties_tsunami: feature_data.dig('properties', 'tsunami'),
          properties_magType: feature_data.dig('properties', 'magType'),
          properties_title: feature_data.dig('properties', 'title'),
          geometry_coordinates0: feature_data.dig('geometry', 'coordinates', 0),
          geometry_coordinates1: feature_data.dig('geometry', 'coordinates', 1)
        )
      end
    end
    puts "#{Feature.count} registros obtenidos y guardados en BD"
  end
end
