# Title: Asset path tag for Jekyll
# Author: Sam Rayner http://samrayner.com
# Description: Output a relative URL for assets based on the post or page
#
# Syntax {% upload_path [filename] %}
#
# Examples:
# {% upload_path kitten.png %} on post 2013-01-01-post-title
# {% upload_path pirate.mov %} on page page-title
#
# Output:
# /assets/posts/post-title/kitten.png
# /assets/page-title/pirate.mov
#
# Looping example using a variable for the pathname:
#
# File _data/image.csv contains:
#   file
#   image_one.png
#   image_two.png
#
# {% for image in site.data.images %}{% upload_path {{ image.file }} %}{% endfor %} on post 2015-03-21-post-title
#
# Output:
# /assets/posts/post-title/image_one.png
# /assets/posts/post-title/image_two.png
#

module Jekyll
  class UploadPathTag < Liquid::Tag
    @markup = nil

    def initialize(tag_name, markup, tokens)
      #strip leading and trailing spaces
      @markup = markup.strip
      super
    end

    def render(context)
      if @markup.empty?
        return "Error processing input, expected syntax: {% upload_path [filename] %}"
      end

      #render the markup
      rawFilename = Liquid::Template.parse(@markup).render context

      #strip leading and trailing quotes
      filename = rawFilename.gsub(/^("|')|("|')$/, '')

      page = context.environments.first["page"]
      path = page["url"]

      #strip filename
      path = File.dirname(path) if path =~ /\.\w+$/

      #fix double slashes
      "#{context.registers[:site].config['cdn_url']}" + "/#{context.registers[:site].config['cdn_baseurl']}/#{path}/#{filename}".gsub(/\/{2,}/, '/').strip
    end
  end
end

Liquid::Template.register_tag('upload_path', Jekyll::UploadPathTag)
