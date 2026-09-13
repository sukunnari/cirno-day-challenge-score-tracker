# Cirno day challenge score tracker

I forgot to turn off freestyle for the challenge, so people could just submit scores on other diff. This website fixes that by making those scores invalid and also retrieves the appropriate scores from the correct diff.

## Prerequisites

Install [Git](https://git-scm.com/downloads) and [Nodejs](https://nodejs.org/en/download) (v22 LTS)

### Installation Notes
- **Windows:** The easiest way to run Nodejs on Windows is by downloading the "Windows Installer". Scroll down to see that option. 
- **macOS/Linux:** nvm is recommended.

## Getting started
0. Open the terminal
1. Clone this repo:<br>
`git clone https://github.com/sukunnari/cirno-day-challenge-score-tracker.git`
2. Go to the newly created folder:<br>
`cd cirno-day-challenge-score-tracker`
3. Install the dependencies:<br>
`npm i`
4. Copy the **".env.sample"** file to **".env"**, then follow the instructions to fill in the empty variables
5. Initialise the database table:<br>
`npm run db:migrate`
6. Build the app:<br>
`npm run build`
7. Run the app:<br>
`npm run start`
8. Go to `/manage` to add the room. Technically you can add multiple rooms, but this app will only display the room as specified in .env