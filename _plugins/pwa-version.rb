# frozen_string_literal: true

# Make the deployed service worker script change on every build.
#
# Browsers only install a new service worker when the script bytes change,
# and the theme's `sw.min.js` is a static file from the theme gem, so it was
# never updated on content deploys. As a result the old cache-first service
# worker kept serving stale content and the "new version available"
# notification never appeared.
#
# The worker also imports swconf.js, which contains the cache name.  With the
# theme default (`updateViaCache: 'imports'`), a browser is allowed to reuse a
# cached copy of that imported file.  Then a new worker could activate with an
# old cache name and continue serving the old HTML.  Version the import URL as
# well, so each worker always receives the matching cache configuration.

Jekyll::Hooks.register :site, :post_write do |site|
  sw_path = File.join(site.dest, 'sw.min.js')

  next unless File.exist?(sw_path)

  stamp = Time.now.to_i
  script = File.read(sw_path)
  script.sub!(
    'importScripts("./assets/js/data/swconf.js")',
    "importScripts(\"./assets/js/data/swconf.js?build=#{stamp}\")"
  )

  File.write(sw_path, "#{script}\n/* build #{stamp} */\n")
end
