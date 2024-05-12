# block-party
Blocks celebrities on instagram.

## How to use.
1. Log into your instagram using a browser.
2. Open the browsers devtools, and go to Network tab.
3. Search/filter the request for "graphql" or "https://www.instagram.com/api/graphql"
4. Find the X-Csrftoken header in the Request tab. Should be inbetween X-Asbd-Id and X-Fb-Friendly-Name
5. Copy the Csrftoken into bp-block-them-all.js E.g. "const xCsrftoke = 'your-token';"
6. Now copy the content of the updated bp-block-them-all.js script into your browser console.
7. Your done.

The script will report it's status in the devtools console. It waits for longer periods of time between block on purpose to trick IG bot detection.
I recomed opening the browser in it own window with no other tabs, just leave it runing in the background while doing other work.

It's crude, but it's a start.
