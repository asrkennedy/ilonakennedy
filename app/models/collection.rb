class Collection < ActiveRecord::Base
  has_many :works
  attr_accessible :date, :description, :name
end
