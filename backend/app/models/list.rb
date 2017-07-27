class List < ApplicationRecord
  # model association
  has_many :tasks, dependent: :destroy
  belongs_to :user

  # validations
  validates_presence_of :title, :created_by
end
