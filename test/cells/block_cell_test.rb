require 'test_helper'

class BlockCellTest < Cell::TestCase
  test "message" do
    invoke :message
    assert_select "p"
  end
  

end
