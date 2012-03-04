class BlockCell < Cell::Rails

  def message
    @message = Message.all
    render
  end

end
