import re

with open("src/app/globals.css", "r") as f:
    content = f.read()

# Extract colors block
colors_match = re.search(r'@theme \{\n  /\* Colors \*/\n(.*?)\n\n  /\* Spacing \*/', content, re.DOTALL)
colors_text = colors_match.group(1)

dark_colors = {}
for line in colors_text.split('\n'):
    line = line.strip()
    if line.startswith('--color-'):
        key, val = line.split(':', 1)
        key = key.strip()
        val = val.strip().strip(';')
        dark_colors[key] = val

# Light mode mapping logic
def get_light_color(key, dark_val):
    if key == '--color-primary': return '#000000'
    if key == '--color-background': return '#ffffff'
    if key == '--color-surface': return '#f4f4f5'
    if key == '--color-surface-container-lowest': return '#ffffff'
    if key == '--color-surface-container-low': return '#fafafa'
    if key == '--color-surface-container': return '#f4f4f5'
    if key == '--color-surface-container-high': return '#e4e4e7'
    if key == '--color-surface-container-highest': return '#d4d4d8'
    if key == '--color-on-surface': return '#171717'
    if key == '--color-on-surface-variant': return '#52525b'
    if key == '--color-border-subtle': return 'rgba(0, 0, 0, 0.1)'
    if key == '--color-outline': return '#a1a1aa'
    if key == '--color-status-green': return '#16a34a'
    if key == '--color-status-red': return '#dc2626'
    
    # Just return dark val if not mapped explicitly for now (or a generic fallback)
    return dark_val

theme_vars = []
root_vars = []
dark_vars = []

for key, val in dark_colors.items():
    var_name = key.replace('--color-', '')
    
    # Avoid duplicate --color- in val name
    theme_vars.append(f"  {key}: var(--theme-{var_name});")
    root_vars.append(f"    --theme-{var_name}: {get_light_color(key, val)};")
    dark_vars.append(f"    --theme-{var_name}: {val};")

new_theme_block = "@theme {\n  /* Colors */\n" + "\n".join(theme_vars) + "\n"
base_layer = "\n@layer base {\n  :root {\n" + "\n".join(root_vars) + "\n  }\n\n  .dark {\n" + "\n".join(dark_vars) + "\n  }\n}\n"

new_content = content[:colors_match.start()] + new_theme_block + content[colors_match.end():]
# Insert base layer after theme
theme_end = new_content.find('}\n', new_content.find('@theme')) + 2
new_content = new_content[:theme_end] + base_layer + new_content[theme_end:]

# Add html scroll behavior smooth to body base layer if not exists
if 'scroll-behavior: smooth' not in new_content:
    new_content = new_content.replace('body {', 'html {\n    scroll-behavior: smooth;\n  }\n\n  body {')

with open("src/app/globals.css", "w") as f:
    f.write(new_content)
