import React, { FC } from 'react'

import { makeStyles, createStyles } from '@material-ui/core'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@material-ui/lab'
import { Code, BookOutlined, WorkOutline } from '@material-ui/icons'
import TimelineCard from './TimelineCard'
import { ITimelineItem } from '../../types'

const useStyles = makeStyles(() =>
  createStyles({
    timelineContent: {
      textAlign: 'left',
    },
  }),
)

const MyTimeline: FC = () => {
  const classes = useStyles()
  return (
    <Timeline align="alternate">
      {items.length > 0 &&
        items.map(item => {
          const { id, icon: Icon } = item
          return (
            <TimelineItem key={id} classes={{ alignAlternate: classes.timelineContent }}>
              <TimelineSeparator>
                <TimelineDot color="inherit">
                  <Icon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineCard {...item} />
              </TimelineContent>
            </TimelineItem>
          )
        })}
    </Timeline>
  )
}

export default MyTimeline

const items: ITimelineItem[] = [
  {
    id: 1,
    icon: Code,
    title: 'Résumé',
    date: 'June 2020',
    chips: [
      { key: 0, label: 'reactjs' },
      { key: 1, label: 'typescript' },
      { key: 2, label: 'redux' },
      { key: 3, label: 'material-ui' },
      { key: 4, label: 'html' },
      { key: 5, label: 'css' },
    ],
    content: 'The site you are viewing right now is the portfolio website I developed for myself',
  },
  {
    id: 2,
    icon: Code,
    title: 'Online Lawyer Search and Communication Platform (Thesis)',
    date: 'June 2020',
    chips: [
      { key: 0, label: 'reactjs' },
      { key: 1, label: 'redux' },
      { key: 2, label: 'material-ui' },
      { key: 3, label: 'node.js' },
      { key: 4, label: 'mongodb' },
      { key: 5, label: 'socket.io' },
      { key: 6, label: 'jwt' },
    ],
    content:
      'A website platform that aims to facilitate the access of lawyers to people who have a legal problem or who want to get counseling or cooperation on this legal problem. It includes the functionality of becoming a member, logging in, searching for a lawyer, creating an ad, viewing an ad, sharing an ad, friendship feature, realtime messaging and notification system and many more',
    website: 'https://online-lawyer.herokuapp.com/',
  },
  {
    id: 3,
    icon: BookOutlined,
    title: 'Computer Engineering (3.7/4), Pamukkale University',
    date: 'Sep 2016 → Jun 2020',
    content:
      'Algorithm and programming, object oriented programming, data structures, matlab, linear algebra, programming languages, introduction to electrical and electronics engineering, probability and statistics, signal processing, microprocessors and microcomputers, formal languages and automata, operations research, logistics information systems, service systems, data communication and computer networks, parallel computing and software quality assurance... I have attended and successfully passed the important courses I mentioned above.',
  },
  {
    id: 4,
    icon: WorkOutline,
    title: 'Software Intern at AlterNet',
    date: 'Jun 2019 → Sep 2019 (4 months)',
    chips: [
      { key: 0, label: 'reactjs' },
      { key: 1, label: 'redux' },
      { key: 2, label: 'material-ui' },
      { key: 3, label: 'node.js' },
      { key: 4, label: 'express' },
      { key: 5, label: 'mongodb' },
      { key: 6, label: 'socket.io' },
      { key: 7, label: 'html' },
      { key: 8, label: 'css' },
    ],
    content:
      'Contribution to the developed projects, Responsibilities and duties given were fulfilled, Example Project: Real-time note taking service development with React & Redux & Nodejs & MongoDB & WebSocket support',
    website: 'https://atillacantay.herokuapp.com/',
  },
  {
    id: 5,
    icon: BookOutlined,
    title: 'Computer Science (3.94/4), Bialystok University of Technology',
    date: 'Sep 2018 → Feb 2019',
    content:
      'I have been involved in database systems, software engineering, computer graphics, computer architect and web development',
  },
]
