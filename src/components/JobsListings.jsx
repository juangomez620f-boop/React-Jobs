import JobListing from "./JobListing"
import { useState, useEffect } from "react"
import Spinner from "./Spinner"

const JobsListings = ({isHome}) => {
   const [jobs, SetJobs] = useState([])
   const [cargando, setCargando] = useState(true)

   useEffect(() => {
    const apiUrl = isHome 
                  ? "/api/jobs?_page=1&_per_page=3"
                  : "/api/jobs"
    const fetchJobs = async () => {
      try {
        const resultado = await fetch(apiUrl)
        const data = await resultado.json()
       SetJobs(isHome ? data.data : data)
      } catch (error) {
        console.log("Error trayendo los datos",error)
      }finally{
        setCargando(false)
      }
    }
    fetchJobs()
   },[])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
       
          { cargando ? 
          ( <Spinner loading={cargando}/>)
          :(
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
            {jobs.map(job => (
               <JobListing key={job.id} job={job}/>
          ))}
            </div>
          )
        }
        
      </div>
    </section>
  )
}

export default JobsListings
