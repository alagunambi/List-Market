class Message < ActiveRecord::Base
  acts_as_paranoid

  acts_as_taggable
  acts_as_taggable_on :origin
end
