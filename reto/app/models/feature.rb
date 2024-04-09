class Feature < ApplicationRecord
  validates :properties_title, :properties_url, :properties_place, :properties_magType, :geometry_coordinates0, :geometry_coordinates1, presence: true
  validates :properties_mag, inclusion: { in: -1.0..10.0 }
  validates :geometry_coordinates0, inclusion: { in: -90.0..90.0 }
  validates :geometry_coordinates1, inclusion: { in: -180.0..180.0 }

  has_many :comments, dependent: :destroy
end
