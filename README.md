# Ramachandran G & Monalisa B — Wedding Invitation Website

A cinematic, mobile-responsive Tamil wedding invitation website with:
- Temple sunset hero artwork stored as `theme.jpg` in the repository root
- Animated opening screen, scroll reveals, ornamental effects and responsive layouts
- Tamil wedding wording
- Countdown to 29 November 2026, 7:30 AM IST
- Wedding and reception venue links
- Separate WhatsApp congratulations links for the groom and bride
- Original synthesized instrumental loop included locally in the repository root as `wedding-instrumental.wav`

## Preview locally
Open `index.html` in a browser. For best results, use VS Code Live Server or run a simple local server.

## Publish on GitHub Pages
1. Create/open your GitHub repository.
2. Upload **all files and folders inside this project**, including `assets/`.
3. Commit the files to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
6. Wait for the Pages deployment to finish and open the published URL.

## Change the music
The included WAV is an original synthesized instrumental, not a commercial wedding song. To use a song you own or are licensed to use, place it in the repository root beside `index.html` and update the `src` of the `<audio>` element at the bottom of `index.html`. MP3 is also supported. Browsers require a user gesture before starting audio, so music begins after tapping **Open Invitation** and can be controlled from the top-right button.

## WhatsApp
The buttons open WhatsApp with a pre-filled congratulatory message. The visitor must tap **Send** in WhatsApp; the website does not send messages automatically.

## Details
- Wedding: Sunday, 29 November 2026, 7:30–9:00 AM
- Venue: Sri Subramaniya Swami Thirukkovil, Vallakottai
- Reception: Sunday, 29 November 2026, 7:00 PM onwards
- Venue: Sri Kumaran Mahal, Velachery Main Road, Medavakkam, Chennai – 600 100


## GitHub file layout for music
Keep `wedding-instrumental.wav` in the repository root beside `index.html`, `style.css`, and `script.js`. The HTML uses:
`src="wedding-instrumental.wav"`
No `assets/` folder is required; both `theme.jpg` and `wedding-instrumental.wav` are in the repository root.


## GitHub file layout (no assets folder)
Keep all these files together in the repository root:
- `index.html`
- `style.css`
- `script.js`
- `theme.jpg`
- `wedding-instrumental.wav`
- `README.md`

The CSS hero background uses `url('theme.jpg')` and the audio element uses `src="wedding-instrumental.wav"`.
Upload the image and audio file beside `index.html`. Do not create an `assets` folder.
