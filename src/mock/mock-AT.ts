import { AssessmentTool } from "src/model/AssessmentTool";
import * as PI from "./mock-PI";

export const RAE1: AssessmentTool[] = [
    {
        description: "First Exam",
        value: 5,
        totalStudents: 29,
        performanceIndicators: PI.RAE1AT1
    }
]
export const RAE2: AssessmentTool[] = [
    {
        description: "First Exam",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PI.RAE2AT1
    },
    {
        description: "Second Exam",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PI.RAE2AT2
    }
]
export const RAE3: AssessmentTool[] = [
    {
        description: "Second Partial Evaluation",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PI.RAE3AT1
    }
]
export const RAE4: AssessmentTool[] = [
    {
        description: "Final Project",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PI.RAE4AT1
    }
]
export const RAE5: AssessmentTool[] = [
    {
        description: "Final Project",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PI.RAE5AT1
    }
]
export const RAE6: AssessmentTool[] = [
    {
        description: "Practical exercise (workshop) and quizzes",
        value: 20,
        totalStudents: 29,
        performanceIndicators: PI.RAE4AT1
    }
]