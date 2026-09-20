# Avni ke liye Birthday Site

## GitHub Pages pe live karne ka tareeka
1. GitHub pe naya repository banao (public), koi bhi naam de do (e.g. `for-avni`).
2. Is folder ki saari files (index.html, memories.html, feelings.html, style.css, script.js, aur `images/` + `audio/` folders) us repo me upload/drag-drop kar do.
3. Repo ke **Settings → Pages** me jao.
4. "Branch" me `main` select karo, folder `/root`, aur Save kar do.
5. 1-2 minute me link ban jayega: `https://<your-username>.github.io/<repo-name>/`

## Files
- `index.html` — pehla page (envelope open + music start)
- `memories.html` — photos wala page
- `feelings.html` — last page (mom photo + the question)
- `style.css`, `script.js` — shared styling & music logic
- `images/` — 4 photos
- `audio/voice.mp3` — tumhari voice recording (video se nikaali gayi)

## Note
Music autoplay tabhi chalta hai jab user index.html pe envelope click kare — uske baad wahi audio background me agle pages tak chalta rehta hai (browser rule hai ki bina click ke sound autoplay nahi hota, isliye pehla click zaroori hai). Har page pe neeche-right corner me ek chhota music button bhi hai, agar kabhi ruk jaye to wahan se resume ho sakta hai.
