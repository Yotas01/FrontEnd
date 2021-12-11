import { PerformanceIndicator } from "src/model/PerformanceIndicator"

export const PERFORMANCE_INDICATORS: PerformanceIndicator[] = [
    {
        rae:1,
        assessmentTool:1,
        description: 'Describe the main functions of the OS',
        percentage: 30,
        exemplary: 15,
        competent: 5,
        below: 9
    },
    {
        rae:1,
        assessmentTool:1,
        description: 'Describe different strategies associated of each function',
        percentage: 40,
        exemplary: 19,
        competent: 4,
        below: 6
    },
    {
        rae:1,
        assessmentTool:1,
        description: 'Explain the design alternatives',
        percentage: 30,
        exemplary: 16,
        competent: 9,
        below: 4
    },
    {
        rae:2,
        assessmentTool:1,
        description:'For a given OS function, point out the advantages and disadvantages of different implementation strategies (policies)',
        percentage:100,
        exemplary:9,
        competent:15,
        below:5
    },
    {
        rae:2,
        assessmentTool:2,
        description:'Apply existing algorithms to compare different implementation strategies',
        percentage:100,
        exemplary:10,
        competent:15,
        below:4
    },
    {
        rae:3,
        assessmentTool:1,
        description:'Explain the problems that the execution of concurrent programs brings',
        percentage:50,
        exemplary:10,
        competent:10,
        below:9
    },
    {
        rae:3,
        assessmentTool:1,
        description:'Applies concurrency control (CC) mechanisms to solve simple problems',
        percentage:50,
        exemplary:4,
        competent:15,
        below:10
    },
    {
        rae:4,
        assessmentTool:1,
        description:'Use system calls correctly',
        percentage:20,
        exemplary:9,
        competent:18,
        below:2
    },
    {
        rae:4,
        assessmentTool:1,
        description:'Applies concurrency control (CC) mechanisms to solve simple problems',
        percentage:80,
        exemplary:10,
        competent:15,
        below:4
    },
    {
        rae:5,
        assessmentTool:1,
        description:'Describes the process of formulating, testing and supporting hypotheses related to the performance of concurrent programs',
        percentage:20,
        exemplary:10,
        competent:10,
        below:9
    },
    {
        rae:5,
        assessmentTool:1,
        description:'Compare the performance of concurrent programs under varying load conditions. To make the comparison, it uses concepts seen in the class, graphical and statistical tools.',
        percentage:80,
        exemplary:5,
        competent:20,
        below:4
    },
    {
        rae:6,
        assessmentTool:1,
        description:'Identify the tools provided by the operating system to measure the use of different resources.',
        percentage:50,
        exemplary:12,
        competent:12,
        below:5
    },
    {
        rae:6,
        assessmentTool:1,
        description:'Learn about the metrics most used to measure program and system performance.',
        percentage:50,
        exemplary:10,
        competent:12,
        below:7
    }
]