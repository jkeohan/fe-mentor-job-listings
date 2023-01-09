import type { Job, JobTransformed } from '../types/JobListing';

export function transformJobListing(data: Job[]): JobTransformed[] {
  console.log({ data });
  return data.map((job: Job) => {
    const { position, role, languages, tools, featured } = job;
    return {
      ...job,
      isNew: job.new,
      isFeatured: featured,
      tags: [position, role, ...languages, ...tools]
    };
  });
}
