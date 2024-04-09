class CreateFeatures < ActiveRecord::Migration[7.1]
  def change
    create_table :features, id: false do |t|
      t.string :id, primary_key: true
      t.decimal :properties_mag
      t.string :properties_place
      t.string :properties_time
      t.string :properties_url
      t.integer :properties_tsunami
      t.string :properties_magType
      t.string :properties_title
      t.decimal :geometry_coordinates0
      t.decimal :geometry_coordinates1

      t.timestamps
    end
  end
end
