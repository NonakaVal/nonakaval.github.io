# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll-theme-chirpy", "~> 7.3"

# Fix sass native build issues on GitHub Actions
gem "sass-embedded", "1.77.8"

# Ruby 3.4+: erb is no longer a default gem loaded outside Bundler
gem "erb"

gem "html-proofer", "~> 5.0", group: :test

platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", platforms: :windows