module ApplicationHelper

  # sets current class on current page
  def cp(path)
    "current" if current_page?(path)
  end

end
