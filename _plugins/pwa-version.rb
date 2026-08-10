# frozen_string_literal: true

# Make the deployed service worker script change on every build.
#
# Browsers only install a new service worker when the script bytes change,
# and the theme's `sw.min.js` is a static file from the theme gem, so it was
# never updated on content deploys. As a result the old cache-first service
# worker kept serving stale content and the "new version available"
# notification never appeared.
#
# Appending a build timestamp comment makes the script differ on every build,
# so the browser detects the update, the notification shows up, and the new
# worker purges the old caches (via the cacheName in swconf.js).

Jekyll::Hooks.register :site, :post_write do |site|
  sw_path = File.join(site.dest, 'sw.min.js')

  next unless File.exist?(sw_path)

  stamp = Time.now.to_i
  File.open(sw_path, 'a') { |file| file.puts "/* build #{stamp} */" }
end
