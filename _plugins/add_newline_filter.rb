module Jekyll
  module AddNewlineFilter
    def add_newline(input)
      "\n" + input
    end
  end
end

Liquid::Template.register_filter(Jekyll::AddNewlineFilter)
