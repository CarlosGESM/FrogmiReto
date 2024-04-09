require "test_helper"

class FeaturesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @feature = features(:one)
  end

  test "should get index" do
    get features_url, as: :json
    assert_response :success
  end

  test "should create feature" do
    assert_difference("Feature.count") do
      post features_url, params: { feature: { geometry_coordinates0: @feature.geometry_coordinates0, geometry_coordinates1: @feature.geometry_coordinates1, id: @feature.id, properties.magType: @feature.properties.magType, properties.tsunami: @feature.properties.tsunami, properties_mag: @feature.properties_mag, properties_place: @feature.properties_place, properties_time: @feature.properties_time, properties_title: @feature.properties_title, properties_url: @feature.properties_url } }, as: :json
    end

    assert_response :created
  end

  test "should show feature" do
    get feature_url(@feature), as: :json
    assert_response :success
  end

  test "should update feature" do
    patch feature_url(@feature), params: { feature: { geometry_coordinates0: @feature.geometry_coordinates0, geometry_coordinates1: @feature.geometry_coordinates1, id: @feature.id, properties.magType: @feature.properties.magType, properties.tsunami: @feature.properties.tsunami, properties_mag: @feature.properties_mag, properties_place: @feature.properties_place, properties_time: @feature.properties_time, properties_title: @feature.properties_title, properties_url: @feature.properties_url } }, as: :json
    assert_response :success
  end

  test "should destroy feature" do
    assert_difference("Feature.count", -1) do
      delete feature_url(@feature), as: :json
    end

    assert_response :no_content
  end
end
