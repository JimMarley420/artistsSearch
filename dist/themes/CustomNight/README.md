# CustomNight

A customizable Spicetify theme with a beautiful animated night sky background. Users can set their own custom background image and customize accent colors.

<img width="608" height="386" alt="image" src="https://github.com/user-attachments/assets/e237a931-6eb6-4ba9-9c2d-d457a4d6e4f1" />
<img width="252" height="264" alt="image" src="https://github.com/user-attachments/assets/c7e56bfd-e7a9-4c2c-88ee-f260888f8046" />


## Features

- Beautiful animated night sky background (stars, twinkling, clouds, moon)
- Custom background support - set your own image from URL or upload from computer
- Adjustable zoom and position for custom backgrounds
- **Customizable accent colors** - change sidebar, cards, highlights and notification colors
- **Auto-detect colors** - extract dominant colors from your background image
- Tabbed settings panel for easy navigation
- Transparent UI elements
- Animated play button on album cover

## Installation

1. Copy the `CustomNight` folder to your Themes directory:
   - Windows: `%appdata%\spicetify\Themes\`
   - Linux/macOS: `~/.config/spicetify/Themes/`

2. Apply the theme:
   ```bash
   spicetify config current_theme CustomNight
   spicetify apply
   ```

## Customization Panel

Click the gradient button in the navigation bar to open the settings panel.

### Background Tab

- **Enter URL**: Type an image URL and click Apply
- **Upload**: Click "Choose File" to upload an image from your computer
- **Adjust**: Use the slider to zoom in/out, or scroll with your mouse
- **Move**: Click and drag the preview to reposition
- **Reset**: Click Reset to remove custom background and restore night sky

### Accent Colors Tab

- **Color Pickers**: Customize sidebar, cards, elevated background, highlights, and notification colors independently
- **Suggest from Background**: Click to automatically extract the 5 most dominant colors from your current background image and fill the color pickers
- **Reset Colors to Default**: Restore the original blue accent colors

### Recommended Image Sizes

- 1920x1080 (Full HD)
- 2560x1440 (2K)
- Higher resolutions work best

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to:

- **Report bugs**: Open an issue at https://github.com/JimMarley420/spicetify-extension/issues
- **Submit fixes**: Create a pull request
- **Suggest features**: Open a discussion

## Support

If you encounter any issues or have questions:

1. Check existing issues: https://github.com/JimMarley420/spicetify-extension/issues
2. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Your system info (OS, Spotify version, Spicetify version)
   - Screenshots if applicable