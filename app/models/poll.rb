class Poll < ApplicationRecord
  has_many :options, dependent: :destroy
  has_many :votes, dependent: :destroy
  has_many :users, through: :votes
  validates :title , presence: true

  accepts_nested_attributes_for :options, allow_destroy: true

end
