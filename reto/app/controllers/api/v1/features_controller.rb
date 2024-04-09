module Api
  module V1
    class FeaturesController < ApplicationController

      # GET /api/v1/features/
      def index
        @features = Feature.all

        # Filtar por tipo de magnitud si se contiene en parametros

        if params[:filters] && params[:filters][:mag_type]
          @features = @features.where(properties_magType: params[:filters][:mag_type])
        end

        # En caso de entregar parametros page y per_page aqui se asignan
        # y además se valida que per_page sea menor o igual a 1000 si es mayor,
        # se limita a 1000

        per_page = params[:per_page]&.to_i || 10
        per_page = [per_page, 1000].min if per_page.present?

        @features = @features.page(params[:page]).per(per_page)

        render json: {
          data: @features.map { |feature| format_feature(feature) },
          pagination: {
            current_page: @features.current_page,
            total: @features.total_count,
            per_page: per_page
          }
        }
      end

      # GET /api/v1/features/id
      def show
        @feature = Feature.find(params[:id])
        render json: { data: format_feature(@feature) }
      end

      private

      def format_feature(feature)
        {
          id: feature.id,
          type: 'feature',
          attributes: {
            external_id: feature.id,
            magnitude: feature.properties_mag,
            place: feature.properties_place,
            time: feature.properties_time,
            tsunami: feature.properties_tsunami,
            mag_type: feature.properties_magType,
            title: feature.properties_title,
            coordinates: {
              longitude: feature.geometry_coordinates0,
              latitude: feature.geometry_coordinates1
            }
          },
          links: {
            external_url: feature.properties_url
          }
        }
      end
    end
  end
end
