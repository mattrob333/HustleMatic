# Voice Diary and Task Manager

This is a modern web application that acts as a voice diary and task manager. It extracts data from voice input to create a to-do list with broken down tasks and adds them to a schedule using the Next.js framework.

## Goal

The goal of this app is to be able to store some personal context about personal and work related tasks through voice and have that be sorted based on priority and goals being tracked. A time-blocked schedule is made for the next day with tasks broken down into estimated time blocks around prior commitments on your schedule. Each task can then be selected and have the action items there to help you complete the tasks. Reminders and alerts can be set for you and the AI could generate an .mp4 file to talk to you about your progress and give you reports and daily briefs and guided meditations.

## Inspiration

The following components were used as inspiration to build this app:

- [audiopen.ai](https://audiopen.ai)
- [audio-webui](https://github.com/gitmylo/audio-webui)
- [goblin.tools - magic to-do list](https://goblin.tools)
- [usemotion.com](https://www.usemotion.com)
- [cal.com](https://cal.com)

## Setup

To run this project, install it locally using npm:

```
$ cd ../project
$ npm install
$ npm start
```

## Testing

To run the tests, use the following command:

```
$ npm test
```

## Components

The application is built using the following components:

- VoiceInput
- TaskManager
- Task
- Schedule
- Alert
- Report
- Meditation

## Utilities

The following utility functions are used for processing:

- voiceProcessing
- taskProcessing
- scheduleProcessing
- alertProcessing
- reportProcessing
- meditationProcessing

## Technologies

The project is created with:

- React.js
- TypeScript
- Next.js
- Jest
- React Testing Library

## Styles

The application uses CSS for styling.