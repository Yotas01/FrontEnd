import { AssessmentTool } from "src/model/AssessmentTool";
import { PERFORMANCE_INDICATORS } from "./mock-PI";

export const ASSESSMENT_TOOLS: AssessmentTool[] = [
    {
        rae:1,
        id: 1,
        description: "First Exam",
        value: 5,
        totalStudents: 29,
        performanceIndicators: PERFORMANCE_INDICATORS.filter(data => data.rae==1 && data.assessmentTool==1)
    },
    {
        rae:2,
        id: 1,
        description: "First Exam",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PERFORMANCE_INDICATORS.filter(data => data.rae==2 && data.assessmentTool==1)
    },
    {
        rae:2,
        id:2,
        description: "Second Exam",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PERFORMANCE_INDICATORS.filter(data => data.rae==2 && data.assessmentTool==2)
    },
    {
        rae:3,
        id:1,
        description: "Second Partial Evaluation",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PERFORMANCE_INDICATORS.filter(data => data.rae==3 && data.assessmentTool==1)
    },
    {
        rae:4,
        id:1,
        description: "Final Project",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PERFORMANCE_INDICATORS.filter(data => data.rae==4 && data.assessmentTool==1)
    },
    {
        rae:5,
        id:1,
        description: "Final Project",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PERFORMANCE_INDICATORS.filter(data => data.rae==5 && data.assessmentTool==1)
    },
    {
        rae:6,
        id:1,
        description: "Practical exercise (workshop) and quizzes",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PERFORMANCE_INDICATORS.filter(data => data.rae==6 && data.assessmentTool==1)
    }
]