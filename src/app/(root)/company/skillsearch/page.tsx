import JobSeekerSearch from "./components/job-seeker-search";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Job Seeker Search</h1>
      <JobSeekerSearch />
    </main>
  )
}

