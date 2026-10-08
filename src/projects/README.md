# Project images

Drop screenshots into the folder that matches a project's `slug` (see `server/seedData.js`),
for example `src/projects/borsa/1-dashboard.png`.

- Supported: png, jpg, jpeg, webp, gif, svg, avif
- Images show in filename order, so prefix with 1-, 2-, 3- ...
- The caption is the filename without the number prefix and extension:
  `2-loan-approval-screen.png` -> "Loan approval screen"
- The first image becomes the card thumbnail.
- Projects without images simply don't get a Gallery button.

## Demo videos

Two options (both show as the first slide in the pop-up, with a play button on the card):

1. **YouTube / Vimeo / Loom link** (recommended, nothing heavy to deploy): add
   `video: "https://youtu.be/XXXXXXXXXXX"` to the project in `server/seedData.js`.
   Use an *Unlisted* YouTube video if you don't want it public on your channel.
2. **Your own file**: drop an `.mp4` or `.webm` into the project's folder, for example
   `src/projects/borsa/demo.mp4`. Keep it small (under ~20 MB; compress with HandBrake),
   because it is deployed together with the site.
