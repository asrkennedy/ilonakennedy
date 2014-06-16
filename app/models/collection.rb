class Collection < ActiveRecord::Base
  has_many :works, order: :position
  attr_accessible :date, :description, :name
end
