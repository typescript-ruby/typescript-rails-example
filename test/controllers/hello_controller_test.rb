require 'test_helper'

class HelloControllerTest < ActionController::TestCase
  test "the truth" do
    get :index
    assert { response.status == 200 }
  end
end
