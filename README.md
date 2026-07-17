
# 🚀 **My Blog with Chirpy Starter**

![Imgur](https://i.imgur.com/jqr68a2.png)

This blog runs on **Chirpy Starter**, a minimal and fast Jekyll template.

When installing via [RubyGems](https://rubygems.org/gems/jekyll-theme-chirpy), Jekyll loads only:

* `_data`
* `_layouts`
* `_includes`
* `_sass`
* `assets`

And part of `_config.yml`.

To unlock the full theme (homepage, tabs, plugins), copy these files to your project root:

```plaintext
.
├── _config.yml
├── _plugins
├── _tabs
└── index.html
```

I combined this with a [CD workflow](https://en.wikipedia.org/wiki/Continuous_deployment) for automatic updates and easy deployment.

## 🏃 Run Locally

### Prerequisites

* **Ruby** ≥ 3.0 (developed on Ruby 3.4)
* **Bundler** — install with `gem install bundler`

### Steps

1. **Point Bundler at a user-writable path.** By default Bundler tries to write gems to the system directory (`/usr/lib/ruby/gems/...`), which fails with a permission error. Redirect it to your home directory:

   ```bash
   bundle config set --global path ~/.local/share/gem
   ```

2. **Install dependencies:**

   ```bash
   bundle install
   ```

3. **Start the dev server:**

   ```bash
   bundle exec jekyll serve
   ```

   Then open <http://127.0.0.1:4000/>. The site auto-regenerates on file changes.

> **Tip:** The `bundle config` step is global, so it only needs to be run once per machine.

## 🔗 Resources

* Docs: [Chirpy Wiki](https://github.com/cotes2020/jekyll-theme-chirpy/wiki)
* Theme: [Chirpy Repo](https://github.com/cotes2020/jekyll-theme-chirpy)
* License: [MIT](https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE)

