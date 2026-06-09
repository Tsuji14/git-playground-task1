### Lesson 1 task — let Claude read your repo
Goal: instead of reading a diff yourself, have Claude tell you what changed, then commit a summary.

1. **Check the branch is there.** Run `git branch -a` — you should see `review-me`. It came with your copy.
2. **Open the PR.** Ask Claude: *"Open a pull request for the `review-me` branch."*
3. **Have Claude review it.** Ask: *"Review this PR — look for bugs, edge cases, and anything risky."*
4. **Judge the review.** One bug was planted on purpose. Did Claude catch it? Note what it flagged and whether it found the real problem.
5. **Comment.** Add a one-line comment on the PR saying whether Claude caught the bug.
6. **Submit** the pull request link.
A tiny command-line notes tool, used as the practice repo for Unit 4 (Git). The app is a safe sandbox for doing real Git work with Claude. The task below is something you run here with Claude; follow the steps and submit the link it asks for.

### The app
- `node notes.js add <text>` — add a note
- `node notes.js list` — list all notes
- `node notes.js delete <id>` — delete a note

Layout: `notes.js` is the entry point, `lib/store.js` loads and saves notes (in `notes.json`), and `lib/config.js` holds app settings.

### Set up
1. Make sure you have your own copy of this repo (created from the lesson on the platform).
2. Clone it locally, and run `gh auth login` so Claude can open pull requests through the `gh` CLI.
3. Open Claude Code in the cloned folder.

### Lesson 1 task — let Claude read your repo
Goal: instead of reading a diff yourself, have Claude tell you what changed, then commit a summary.


=======

