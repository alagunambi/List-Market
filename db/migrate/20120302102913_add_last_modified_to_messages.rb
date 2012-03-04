class AddLastModifiedToMessages < ActiveRecord::Migration
  def self.up
    add_column :messages, :last_modified, :datetime
  end

  def self.down
    remove_column :messages, :last_modified
  end
end
