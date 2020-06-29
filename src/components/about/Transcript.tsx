import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Theme,
  createStyles,
} from '@material-ui/core/'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableRoot: {
      marginTop: theme.spacing(2),
      maxHeight: 430,
    },
    table: {
      minWidth: 650,
    },
  }),
)

const TranscriptTable: FC = () => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={classes.tableRoot} elevation={4}>
      <Table className={classes.table} aria-label="transcript-table">
        <TableHead>
          <TableRow hover>
            <TableCell>Code</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map(course => (
            <TableRow key={course.key}>
              <TableCell component="th" scope="row">
                {course.code}
              </TableCell>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.grade}</TableCell>
              <TableCell>{course.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default TranscriptTable

const courses = [
  //y1s1
  { key: 0, code: 'TKD 101', name: 'TURKISH LANGUAGE - I', grade: 'C1', date: '2016 (Fall)' },
  {
    key: 1,
    code: 'ATI 101',
    name: 'ATATURK´S PRINCIPLES AND HISTORY OF TURKISH REVOLUTION - I',
    grade: 'B1',
    date: '2016 (Fall)',
  },
  { key: 2, code: 'CENG 101', name: 'ALGORITHMS AND PROGRAMMING', grade: 'A2', date: '2016 (Fall)' },
  { key: 3, code: 'CENG 103', name: 'INTRODUCTION TO COMPUTER ENGINEERING', grade: 'A1', date: '2016 (Fall)' },
  { key: 4, code: 'MAT 113', name: 'GENERAL CALCULUS - I', grade: 'B1', date: '2016 (Fall)' },
  { key: 5, code: 'FIZ 133', name: 'GENERAL PHYSICS - I', grade: 'B2', date: '2016 (Fall)' },
  { key: 6, code: 'ING 101', name: 'ENGLISH - I', grade: 'A1', date: '2016 (Fall)' },

  //y1s2
  { key: 7, code: 'TKD 102', name: 'TURKISH LANGUAGE - II', grade: 'C1', date: '2016 (Spring)' },
  {
    key: 8,
    code: 'ATI 102',
    name: 'ATATURK´S PRINCIPLES AND HISTORY OF TURKISH REVOLUTION - II',
    grade: 'A2',
    date: '2016 (Spring)',
  },
  { key: 9, code: 'CENG 102', name: 'OBJECT-ORIENTED PROGRAMMING', grade: 'B2', date: '2016 (Spring)' },
  { key: 10, code: 'CENG 104', name: 'COMPUTER ENGINEERING SEMINAR', grade: 'A1', date: '2016 (Spring)' },
  { key: 11, code: 'IENG 104', name: 'GENERAL ECONOMICS FOR ENGINEERS', grade: 'A1', date: '2016 (Spring)' },
  { key: 12, code: 'MAT 114', name: 'GENERAL CALCULUS - II', grade: 'B2', date: '2016 (Spring)' },
  { key: 13, code: 'FIZ 134', name: 'GENERAL PHYSICS - II', grade: 'C1', date: '2016 (Spring)' },
  { key: 14, code: 'MAT 340', name: 'DISCRETE MATHEMATICS', grade: 'B2', date: '2016 (Spring)' },
  { key: 15, code: 'ING 102', name: 'ENGLISH - II', grade: 'A1', date: '2016 (Spring)' },
  { key: 16, code: 'ING 112', name: 'ADVANCED ENGLISH - II', grade: 'A1', date: '2016 (Spring)' },

  //y2s1
  { key: 17, code: 'CENG 201', name: 'DATA STRUCTURES', grade: 'B1', date: '2017 (Fall)' },
  { key: 18, code: 'CENG 205', name: 'DIGITAL SYSTEMS', grade: 'B1', date: '2017 (Fall)' },
  { key: 19, code: 'EEEN 381', name: 'ENGINEERING APPLICATIONS WITH MATLAB', grade: 'A1', date: '2017 (Fall)' },
  { key: 20, code: 'MAT 230', name: 'NUMERICAL ANALYSIS', grade: 'B2', date: '2017 (Fall)' },
  { key: 21, code: 'MAT 237', name: 'LINEAR ALGEBRA', grade: 'B1', date: '2017 (Fall)' },
  { key: 22, code: 'YDO 203', name: 'READING & SPEAKING IN FOREIGN LANGUAGE', grade: 'A1', date: '2017 (Fall)' },

  //y2s2
  { key: 23, code: 'CENG 200', name: 'INTERNSHIP TRAINING - I', grade: 'A1', date: '2017 (Spring)' },
  { key: 24, code: 'CENG 202', name: 'PROGRAMMING LANGUAGES', grade: 'A1', date: '2017 (Spring)' },
  { key: 25, code: 'CENG 204', name: 'ALGORITHMS', grade: 'A1', date: '2017 (Spring)' },
  {
    key: 26,
    code: 'EEEN 103',
    name: 'INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING',
    grade: 'A2',
    date: '2017 (Spring)',
  },
  { key: 27, code: 'MAT 357', name: 'PROBABILITY AND STATISTICS', grade: 'A1', date: '2017 (Spring)' },
  { key: 28, code: 'IENG 407', name: 'INVESTMENT ANALYSIS', grade: 'A2', date: '2017 (Spring)' },

  //y3s1
  { key: 28, code: 'CENG 301', name: 'DATABASE MANAGEMENT & MODELING', grade: 'A1', date: '2018 (Fall)' },
  { key: 29, code: 'CENG 303', name: 'COMPUTER ARCHITECTURE', grade: 'A2', date: '2018 (Fall)' },
  { key: 30, code: 'CENG 305', name: 'OPERATING SYSTEMS', grade: 'A1', date: '2018 (Fall)' },
  { key: 31, code: 'CENG 307', name: 'WEB-BASED TECHNOLOGIES', grade: 'A1', date: '2018 (Fall)' },
  { key: 32, code: 'CENG 309', name: 'SIGNAL PROCESSING', grade: 'A1', date: '2018 (Fall)' },
  { key: 33, code: 'YDO 204', name: 'TECHNICAL FOREIGN LANGUAGE - I', grade: 'A1', date: '2018 (Fall)' },

  //y3s2
  { key: 34, code: 'CENG 300', name: 'INTERNSHIP TRAINING - II', grade: 'A1', date: '2018 (Spring)' },
  { key: 35, code: 'CENG 302', name: 'SOFTWARE ENGINEERING', grade: 'A2', date: '2018 (Spring)' },
  { key: 36, code: 'CENG 304', name: 'MICROPROCESSORS & MICROCOMPUTERS', grade: 'A1', date: '2018 (Spring)' },
  { key: 37, code: 'CENG 306', name: 'FORMAL LANGUAGES & AUTOMATA THEORY', grade: 'A1', date: '2018 (Spring)' },
  { key: 38, code: 'IENG 322', name: 'OPERATIONS RESEARCH', grade: 'A1', date: '2018 (Spring)' },
  { key: 39, code: 'IENG 474', name: 'LOGISTICS INFORMATION SYSTEMS', grade: 'A1', date: '2018 (Spring)' },
  { key: 40, code: 'YDO 303', name: 'TECHNICAL FOREIGN LANGUAGE - II', grade: 'A1', date: '2018 (Spring)' },

  //y4s1
  { key: 41, code: 'CENG 403', name: 'DATA COMMUNICATION & COMPUTER NETWORKS', grade: 'A2', date: '2019 (Fall)' },
  { key: 42, code: 'IENG 487', name: 'OCCUPATIONAL HEALTH AND SAFETY - I', grade: 'A2', date: '2019 (Fall)' },
  { key: 43, code: 'CENG 405', name: 'CURRENT TOPICS IN COMPUTER SCIENCE - I', grade: 'A2', date: '2019 (Fall)' },
  { key: 44, code: 'IENG 418', name: 'SERVICE SYSTEMS', grade: 'A2', date: '2019 (Fall)' },
  { key: 45, code: 'PDR 428', name: 'PERSONAL DEVELOPMENT', grade: 'A2', date: '2019 (Fall)' },
  { key: 46, code: 'CENG 401', name: 'BACHELOR OF SCIENCE THESIS – I', grade: 'A1', date: '2019 (Fall)' },

  //y4s2
  { key: 47, code: 'CENG 404', name: 'PROFESSION SEMINAR', grade: 'A1', date: '2019 (Spring)' },
  { key: 48, code: 'IENG 488', name: 'OCCUPATIONAL HEALTH AND SAFETY - II', grade: 'A1', date: '2019 (Spring)' },
  { key: 49, code: 'IENG 456', name: 'ANALYTICAL APPROACH TO DECISION MAKING', grade: 'A2', date: '2019 (Spring)' },
  { key: 50, code: 'YDO 302', name: 'FOREIGN LANGUAGE FOR BUSINESS', grade: 'A2', date: '2019 (Spring)' },
  { key: 51, code: 'CENG 402', name: 'BACHELOR OF SCIENCE THESIS – II', grade: 'A1', date: '2019 (Spring)' },
  { key: 52, code: 'CENG 418', name: 'COMPUTER GRAPHICS', grade: 'A1', date: '2019 (Spring)' },
  { key: 53, code: 'CENG 470', name: 'SOFTWARE QUALITY ASSURANCE', grade: 'A1', date: '2019 (Spring)' },
  { key: 54, code: 'CENG 468', name: 'DATA MINING', grade: 'A1', date: '2019 (Spring)' },
]
