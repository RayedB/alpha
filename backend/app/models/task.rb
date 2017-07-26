class Task < ApplicationRecord
  # model association
    belongs_to :list

    # validation
    validates_presence_of :title, :urgency, :importance

end
