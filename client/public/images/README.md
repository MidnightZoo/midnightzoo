# Image Migration

Manus served your astrophotography images from a proxy URL like
`/manus-storage/milkyway_az_b3cfee33.webp`. That endpoint does not exist
outside the Manus environment. Drop the actual image files into THIS
directory with the exact filenames listed below, and they will be served
at `/images/<name>.webp` automatically (Vite copies `client/public/` into
the build root).

## Required files

| Filename                          | What it is                              |
| --------------------------------- | --------------------------------------- |
| `milkyway_az.webp`                | Milky Way over Ironwood Forest NM (AZ)  |
| `andromeda_m31.webp`              | Andromeda Galaxy (M31)                  |
| `cygnus_loop_veil.webp`           | Cygnus Loop / Veil Nebula               |
| `rosette_nebula.webp`             | Rosette Nebula                          |
| `orion_complex_widefield.webp`    | Orion complex (widefield)               |
| `ic1805_heart_nebula.webp`        | Heart Nebula (IC 1805)                  |
| `pleiades_m45.webp`               | Pleiades (M45)                          |
| `m81_m82_bodes_galaxy.webp`       | Bode's & Cigar Galaxies (M81/M82)       |
| `waxing_crescent_moon.webp`       | Waxing crescent moon                    |
| `seestar_m51_whirlpool.webp`      | Whirlpool Galaxy (M51) - Seestar S50    |
| `seestar_m44_beehive.webp`        | Beehive Cluster (M44) - Seestar S50     |

## Where to get the originals

Pull them out of your Manus environment. The original filenames had hash
suffixes (e.g. `milkyway_az_b3cfee33.webp`). Strip the hash before saving
here, or rename to match the table.

## Format notes

- Keep them as `.webp` if Manus already converted them. Tighter file
  size than PNG/JPEG and supported everywhere modern.
- For Cloudflare Pages, anything under ~25MB per file is fine and these
  will be cached at the edge after the first request.
- If you want a CDN tier later, move these to Cloudflare R2 and replace
  the `/images/...` paths in `client/src/lib/assets.ts` with the R2
  public URLs. The site code does not need any other changes.

## Lossless option

If you have ProPhoto RGB or AdobeRGB master files from PixInsight, do a
single export pass at sRGB + ~2000px on the long edge before saving here.
Browsers ignore embedded ICC profiles inconsistently, so sRGB is the
safe target for web display. Reserve your AdobeRGB exports for WHCC.
