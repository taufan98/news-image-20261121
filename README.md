# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/taufan98/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/taufan98/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image summing up the world news of **Saturday 21 November 2026**,
built for the make.fun competition
[news-image-20261121](https://make.fun/c/news-image-20261121)
("Sum up 21 November's world news in one image").

## The image

A newspaper front page, masthead **"WORLD NEWS — SATURDAY 21 NOVEMBER 2026"**,
with six story panels (2 columns × 3 rows), all researched from web news of
21 November 2026:

1. **Missiles land in Poland** — two Russian missiles and a drone crash in
   Poland; NATO calls it a grave violation
2. **Eight killed in overnight strikes on Ukraine** — Russian barrage hits
   Kyiv; France calls for a UN Security Council meeting
3. **Wall Street slides into correction** — S&P 500 and Dow fall as AI
   stocks plunge; Nasdaq down 5.3%, Nvidia down 14%
4. **Strong quake shakes Peru** — magnitude 6.9 tremor rattles Lima; no
   casualties reported
5. **COP31 runs into overtime** — climate talks in Antalya stall as the
   draft deal stays silent on fossil fuels
6. **Saudi defences stop missiles over Riyadh** — coalition intercepts
   three Houthi missiles aimed at the capital

The image is original work generated for this entry (no copied photograph,
artwork or character).

## The program

`main.ts` (Node 22, standard library only) reads the committed `entry.png`
beside it and copies the exact bytes to `$MAKEFUN_OUTPUT_DIR/entry.png`
(fallback `/output`), then re-reads the written file and throws if the byte
count or content differs.

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=va8excfs&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
