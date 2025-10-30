export * as Client from './db'
export * as Blog from "./blogs"
export * as Job from './jobs'
export * as Project from './projects'
export * as Skill from './skills'
export * as Users from './users'
export * as Comment from './comments'
export * as Testimonial from './testimonials'

export const query_github= `
  {
    user(login: "roo7690") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
      pullRequests(first: 100, states: MERGED) {
        totalCount
      }
    }
  }
`