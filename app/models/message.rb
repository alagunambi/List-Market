class Message < ActiveRecord::Base
  validates_uniqueness_of :body

  acts_as_paranoid

  acts_as_taggable
  acts_as_taggable_on :origin
end
